import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import useScrollReveal from "@/hooks/useScrollReveal";
import { z } from "zod";

const leadSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Nome deve ter pelo menos 2 caracteres.")
    .max(100, "Nome deve ter no máximo 100 caracteres.")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Nome contém caracteres inválidos."),
  nomeEmpresa: z
    .string()
    .trim()
    .min(2, "Nome da empresa deve ter pelo menos 2 caracteres.")
    .max(150, "Nome da empresa deve ter no máximo 150 caracteres."),
  ramoEmpresarial: z
    .string()
    .trim()
    .min(2, "Ramo empresarial deve ter pelo menos 2 caracteres.")
    .max(100, "Ramo empresarial deve ter no máximo 100 caracteres."),
  mensagem: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres.")
    .max(2000, "Mensagem deve ter no máximo 2000 caracteres."),
});

const RATE_LIMIT_MS = 30_000; // 30 seconds between submissions

const ContactFormSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const lastSubmitRef = useRef<number>(0);
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
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitRef.current < RATE_LIMIT_MS) {
      toast({
        title: "Aguarde um momento",
        description: "Você já enviou uma mensagem recentemente. Tente novamente em alguns segundos.",
        variant: "destructive",
      });
      return;
    }

    // Validate with Zod
    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    lastSubmitRef.current = now;

    const validated = result.data;

    const { error } = await supabase.from("leads").insert({
      nome: validated.nome,
      nome_empresa: validated.nomeEmpresa,
      ramo_empresarial: validated.ramoEmpresarial,
      mensagem: validated.mensagem,
    });

    if (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } else {
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
    }

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
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
              maxLength={100}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
            />
            {errors.nome && <p className="text-red-400 text-sm">{errors.nome}</p>}
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
              maxLength={150}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
            />
            {errors.nomeEmpresa && <p className="text-red-400 text-sm">{errors.nomeEmpresa}</p>}
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
              maxLength={100}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
            />
            {errors.ramoEmpresarial && <p className="text-red-400 text-sm">{errors.ramoEmpresarial}</p>}
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
              maxLength={2000}
              required
              rows={5}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary resize-none"
            />
            {errors.mensagem && <p className="text-red-400 text-sm">{errors.mensagem}</p>}
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
