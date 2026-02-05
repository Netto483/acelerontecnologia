 import { Star, GraduationCap, MapPin, Clock, CheckSquare } from "lucide-react";
 
 const StatsBarSection = () => {
   const stats = [
     {
       icon: Star,
       label: "Satisfação:",
       value: "98%",
     },
     {
       icon: GraduationCap,
       label: "Projetos Entregues:",
       value: "+50",
     },
     {
       icon: MapPin,
       label: "Atendimento:",
       value: "Todo Brasil",
     },
     {
       icon: Clock,
       label: "Tempo Médio:",
       value: "30 dias",
     },
     {
       icon: CheckSquare,
       label: "Suporte:",
       value: "Contínuo",
     },
   ];
 
   return (
     <section className="h-[98px] bg-[#0f172a] flex items-center">
       <div className="max-w-7xl mx-auto w-full px-6">
         <div className="flex items-center justify-between gap-8">
           {stats.map((stat, index) => (
             <div key={index} className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-lg bg-[#1e293b] flex items-center justify-center">
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