import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import useScrollReveal from "@/hooks/useScrollReveal";

const ContactFormSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    nomeEmpresa: "",
    ramoEmpresarial: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      nome: "",
      nomeEmpresa: "",
      ramoEmpresarial: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contato"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-4 md:px-8 bg-[#171417] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl text-center text-white mb-4">
          <span className="font-light">Entre em</span>{" "}
          <span className="font-bold">contato</span>
        </h2>

        {/* Subtitle */}
        <p className="font-subtitle text-lg md:text-xl text-white/70 text-center mb-12">
          Conte-nos sobre seu projeto e como podemos ajudar
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nome" className="font-subtitle text-white">
              Nome
            </Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nomeEmpresa" className="font-subtitle text-white">
              Nome da Empresa
            </Label>
            <Input
              id="nomeEmpresa"
              name="nomeEmpresa"
              type="text"
              placeholder="Nome da sua empresa"
              value={formData.nomeEmpresa}
              onChange={handleChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ramoEmpresarial" className="font-subtitle text-white">
              Ramo Empresarial
            </Label>
            <Input
              id="ramoEmpresarial"
              name="ramoEmpresarial"
              type="text"
              placeholder="Ex: Tecnologia, Varejo, Indústria..."
              value={formData.ramoEmpresarial}
              onChange={handleChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem" className="font-subtitle text-white">
              Conte sua dor
            </Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              placeholder="Descreva os desafios que sua empresa enfrenta e como podemos ajudar..."
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={5}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            className="w-full bg-[#DB1B27] hover:bg-[#DB1B27]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
