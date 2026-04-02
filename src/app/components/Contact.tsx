"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi à connecter plus tard (EmailJS, API, etc.)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ background: "#111827" }} className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white">Contact</h2>
          <div className="mx-auto mt-2" style={{ width: "60px", height: "4px", background: "#0dcaf0", borderRadius: "2px" }}></div>
          <p className="text-secondary mt-3">N'hésitez pas à me contacter pour tout projet ou collaboration</p>
        </div>
        <div className="row g-5 justify-content-center">
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              {[
                { icon: "📍", label: "Localisation", value: "Madagascar" },
                { icon: "📧", label: "Email", value: "nante@example.com" },
                { icon: "💼", label: "Disponibilité", value: "Ouvert aux opportunités" },
              ].map((item) => (
                <div className="d-flex align-items-center gap-3" key={item.label}>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{ width: "50px", height: "50px", background: "#0dcaf022", fontSize: "1.3rem" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-info small mb-0 fw-semibold">{item.label}</p>
                    <p className="text-white mb-0">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            {sent ? (
              <div className="alert alert-info text-center py-4">
                <strong>Message envoyé !</strong> Je vous répondrai dans les plus brefs délais.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="form-control form-control-lg"
                    style={{ background: "#1f2937", border: "1px solid #374151", color: "#fff" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                    className="form-control form-control-lg"
                    style={{ background: "#1f2937", border: "1px solid #374151", color: "#fff" }}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    required
                    rows={5}
                    className="form-control form-control-lg"
                    style={{ background: "#1f2937", border: "1px solid #374151", color: "#fff", resize: "none" }}
                  />
                </div>
                <button type="submit" className="btn btn-info btn-lg w-100">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
