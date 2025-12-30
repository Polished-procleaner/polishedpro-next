import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ContactForm() {
  return (
    <div className="w-full flex flex-col gap-8 ">
      <div className="flex flex-col gap-4">
        <Input placeholder="Name" className={"bg-white rounded-lg"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Email" className={"bg-white rounded-lg"} />
          <Input
            placeholder="Phone"
            type={"number"}
            className={"bg-white rounded-lg"}
          />
        </div>
        <select
          id="service"
          name="service"
          //value={formData.service}
          //onChange={handleInputChange}
          className="custom-select text-base sm:text-sm w-full px-4 py-2 rounded-lg border-2 border-gray-200 bg-white focus:bg-white focus:outline-none focus:border-ring transition cursor-pointer"
        >
          <option value="">Select a service category</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="specialized">Specialized Floor Cleaning</option>
        </select>
      </div>
      <Button variant={"theme"}>Send Message</Button>
    </div>
  );
}
