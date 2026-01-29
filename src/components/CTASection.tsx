import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter menos de 255 caracteres"),
  phone: z.string().trim().max(20, "Telefone deve ter menos de 20 caracteres").optional(),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem deve ter menos de 1000 caracteres"),
});

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section 
      id="contato"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-12 md:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Entre em <span className="text-primary">contato</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
                Preencha o formulário abaixo e nossa equipe entrará em contato para 
                discutir como podemos ajudar seu negócio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input
                    name="name"
                    placeholder="Seu nome *"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                  />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <Input
                  name="phone"
                  placeholder="Seu telefone (opcional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
              </div>
              
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Sua mensagem *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                />
                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit"
                  variant="hero" 
                  className="group min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
