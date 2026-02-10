
-- Block all INSERT on user_roles (only via SQL/service role)
CREATE POLICY "No public insert on user_roles"
ON public.user_roles
FOR INSERT
WITH CHECK (false);

-- Block all UPDATE on user_roles
CREATE POLICY "No public update on user_roles"
ON public.user_roles
FOR UPDATE
USING (false);

-- Block all DELETE on user_roles
CREATE POLICY "No public delete on user_roles"
ON public.user_roles
FOR DELETE
USING (false);
