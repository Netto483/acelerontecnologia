
-- Block all UPDATE operations on leads
CREATE POLICY "No one can update leads"
ON public.leads
FOR UPDATE
USING (false);

-- Block all DELETE operations on leads
CREATE POLICY "No one can delete leads"
ON public.leads
FOR DELETE
USING (false);
