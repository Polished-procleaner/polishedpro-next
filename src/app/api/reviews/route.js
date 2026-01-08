import { NextResponse } from "next/server";

export async function GET() {
  const ACCOUNT_ID = "116640124873598835239";
  const LOCATION_ID = "1370356435412908471";

  try {
    // PASO 1: Obtener un access_token nuevo
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        grant_type: "refresh_token",
      }),
      next: { revalidate: 3600 },
    });

    const tokenData = await tokenResponse.json();

    // Si Google devuelve un error en la autenticación, lo veremos aquí
    if (tokenData.error) {
      console.error("Error de Google Auth:", tokenData);
      return NextResponse.json(
        { error: tokenData.error_description },
        { status: 401 }
      );
    }

    const accessToken = tokenData.access_token;

    // PASO 2: Obtener TODAS las reseñas (paginación)
    let allReviews = [];
    let nextPageToken;
    let firstPageData = null;

    do {
      const url = new URL(
        `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`
      );

      if (nextPageToken) {
        url.searchParams.set("pageToken", nextPageToken);
      }

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      if (!firstPageData) {
        firstPageData = data; // guardamos metadata
      }

      allReviews.push(...(data.reviews || []));
      nextPageToken = data.nextPageToken;
    } while (nextPageToken);

    // RESPUESTA FINAL
    return NextResponse.json({
      totalReviewCount: firstPageData?.totalReviewCount ?? allReviews.length,
      averageRating: firstPageData?.averageRating,
      reviews: allReviews,
    });
  } catch (error) {
    // Esto imprimirá el error real en la consola de VS Code / Terminal
    console.error("DETALLE DEL ERROR:", error);
    return NextResponse.json(
      { error: "fetch failed", message: error.message },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { GoogleAuth } from "google-auth-library";

// export async function GET() {
//   // Estos IDs son los de tu negocio que ya tenemos identificados
//   const ACCOUNT_ID = "116640124873598835239";
//   const LOCATION_ID = "1370356435412908471";

//   try {
//     // 1. Configuración de la autenticación con la Service Account
//     const auth = new GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//         // El replace es vital para que las llaves privadas funcionen en entornos como Vercel o Docker
//         private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       },
//       // Usamos el scope de 'business.manage' que cubre las APIs de My Business
//       scopes: ["https://www.googleapis.com/auth/business.manage"],
//     });

//     // 2. Creamos el cliente autenticado
//     const client = await auth.getClient();

//     // 3. Definimos la URL de las reseñas (usando la v4 que es la estable para reviews)
//     const reviewsUrl = `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`;

//     // 4. Realizamos la petición a Google
//     const response = await client.request({
//       url: reviewsUrl,
//       method: "GET",
//     });

//     // 5. Retornamos los datos al frontend
//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.error(
//       "Error detallado de Google API:",
//       error.response?.data || error.message
//     );

//     // Si hay un error de permisos o API desactivada, lo capturamos aquí
//     return NextResponse.json(
//       {
//         error: "Error al obtener reseñas",
//         details: error.response?.data?.error?.message || error.message,
//       },
//       { status: error.response?.status || 500 }
//     );
//   }
// }
