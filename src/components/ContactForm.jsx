import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/facebookPixel";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear la fecha en formato legible
    const now = new Date();
    const date = now.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Agregar la fecha al payload
    const dataToSend = {
      ...formData,
      date: date,
    };

    const response = await fetch(
      "https://hook.us1.make.com/1wsap6a9eiocgulf7rlij660a8ah1kis",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    );

    if (response.ok) {
      trackEvent("lead", {
        content_name: "Contact Form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      window.dataLayer.push({
        event: "page_view",
        page_path: "/gracias",
        page_title: "Thank You - Form Submitted",
      });

      router.push("/thanks");

      return;
    }

    setSubmitStatus("error");
    return;
  };

  return (
    <form className="w-full flex flex-col gap-8 " onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          name="name"
          placeholder="Name"
          className={"bg-white rounded-lg"}
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="email"
            name="email"
            placeholder="Email"
            className={"bg-white rounded-lg"}
            required
            value={formData.email}
            onChange={handleInputChange}
            type="email"
          />
          <Input
            id="phone"
            name="phone"
            placeholder="Phone"
            type={"number"}
            className={"bg-white rounded-lg"}
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleInputChange}
          className="custom-select text-base sm:text-sm w-full px-4 py-2 rounded-lg border-2 border-gray-200 bg-white focus:bg-white focus:outline-none focus:border-ring transition cursor-pointer"
        >
          <option value="">Select a service category</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="specialized">Specialized Floor Cleaning</option>
        </select>
      </div>
      <Button variant={"theme"} type="submit" disabled={isSubmitting}>
        Send Message{" "}
        {isSubmitting && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
      </Button>
      {/* {submitStatus === "success" && (
        <p className="text-green-500">Form submitted successfully!</p>
      )} */}
      {submitStatus === "error" && (
        <p className="text-red-500">
          An error occurred while submitting the form. Try again later.
        </p>
      )}
    </form>
  );
}
