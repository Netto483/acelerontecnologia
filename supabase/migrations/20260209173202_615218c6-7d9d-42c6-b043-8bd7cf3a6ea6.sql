
-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  nome TEXT NOT NULL,
  nome_empresa TEXT NOT NULL,
  ramo_empresarial TEXT NOT NULL,
  mensagem TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public lead capture form)
CREATE POLICY "Anyone can submit a lead"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- No select/update/delete for anonymous users
CREATE POLICY "No public read access"
ON public.leads
FOR SELECT
USING (false);
