import { ContactForm } from "@/components/contact-form"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 bg-card md:ml-64 md:px-8 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h3>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          I'm always open to new opportunities and collaborations. Whether you have a project in mind, need technical
          consultation, or just want to connect, feel free to reach out. I'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
