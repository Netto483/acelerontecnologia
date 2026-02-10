
-- Drop the old restrictive SELECT policy
DROP POLICY IF EXISTS "No public read access" ON public.leads;

-- Allow authenticated users to read leads
CREATE POLICY "Authenticated users can read leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);
