-- ============================================================
-- LEADS (formulario de contacto)
-- ============================================================
create table if not exists public.leads (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  name        text        not null,
  phone       text,
  subject     text,
  message     text
);

alter table public.leads enable row level security;

create policy "Admin can read leads"
  on public.leads
  for select
  using ( auth.role() = 'authenticated' );

-- ============================================================
-- NEWSLETTER
-- ============================================================
create table if not exists public.newsletter_subscribers (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  email       text        not null    unique,
  confirmed   boolean     not null    default false
);

alter table public.newsletter_subscribers enable row level security;

create policy "Admin can read subscribers"
  on public.newsletter_subscribers
  for select
  using ( auth.role() = 'authenticated' );

-- ============================================================
-- ÍNDICES
-- ============================================================
create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

create index if not exists newsletter_email_idx
  on public.newsletter_subscribers (email);
