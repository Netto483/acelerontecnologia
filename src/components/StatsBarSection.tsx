 import { Shield, CalendarCheck, Clock, Headphones, DollarSign } from "lucide-react";
 import statsBackground from "@/assets/stats-background.png";
 
 const StatsBarSection = () => {
   const stats = [
     {
       icon: Shield,
       label: "Garantia:",
       value: "30 dias",
     },
     {
       icon: CalendarCheck,
       label: "Acompanhamento de entrega:",
       value: "Semanal",
     },
     {
       icon: Clock,
       label: "Tempo de entrega:",
       value: "1 semana - 3 meses",
     },
     {
       icon: Headphones,
       label: "Suporte para dúvidas:",
       value: "24/7",
     },
     {
       icon: DollarSign,
       label: "Preços:",
       value: "a partir de R$1500,00",
     },
   ];
 
   return (
     <section className="h-[98px] relative flex items-center overflow-hidden">
       {/* Background image */}
       <div 
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url(${statsBackground})` }}
       />
       {/* Dark overlay */}
       <div className="absolute inset-0 bg-black/50" />
       
       <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
         <div className="flex items-center justify-between gap-8">
           {stats.map((stat, index) => (
             <div key={index} className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                 <stat.icon className="w-5 h-5 text-white" />
               </div>
               <div className="flex flex-col">
                 <span className="text-gray-400 text-sm">{stat.label}</span>
                 <span className="text-white font-semibold">{stat.value}</span>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default StatsBarSection;