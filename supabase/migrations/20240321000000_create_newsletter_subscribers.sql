-- Create newsletter_subscribers table
create table if not exists public.newsletter_subscribers (
    id uuid default gen_random_uuid() primary key,
    email text unique not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create index on email for faster lookups
create index if not exists newsletter_subscribers_email_idx on public.newsletter_subscribers (email);

-- Enable Row Level Security (RLS)
alter table public.newsletter_subscribers enable row level security;

-- Create policy to allow inserts from authenticated users and anonymous users
create policy "Allow public inserts" on public.newsletter_subscribers
    for insert
    to public
    with check (true);

-- Create policy to allow users to read their own subscriptions
create policy "Allow users to read their own subscriptions" on public.newsletter_subscribers
    for select
    to public
    using (true);

-- Create function to automatically update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Create trigger to automatically update updated_at timestamp
create trigger set_updated_at
    before update on public.newsletter_subscribers
    for each row
    execute function public.handle_updated_at(); 