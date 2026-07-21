export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
      <div className="space-y-6 text-lg text-neutral-700">
        <p>
          We would love to hear from you. Whether you have a question about our
          courses, pricing, or anything else, our team is ready to help.
        </p>
        <div className="space-y-2">
          <p><strong>Email:</strong> info@musicacademy.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Address:</strong> 123 Music Street, Suite 100, Los Angeles, CA 90001</p>
        </div>
        <div className="space-y-2">
          <p><strong>Office Hours:</strong></p>
          <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
          <p>Saturday: 10:00 AM – 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
