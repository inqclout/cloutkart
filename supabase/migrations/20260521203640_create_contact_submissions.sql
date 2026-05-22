/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `company_name` (text)
      - `email` (text, not null)
      - `website` (text)
      - `budget_range` (text)
      - `message` (text, not null)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `contact_submissions` table
    - Allow anonymous users to INSERT (public form)
    - No read access for anonymous users (only service role can read)

  3. Notes
    - This table stores all contact form submissions from the CloutKart website
    - Submissions go to shivam@clout-kart.com via edge function
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL DEFAULT '',
  company_name text DEFAULT '',
  email text NOT NULL DEFAULT '',
  website text DEFAULT '',
  budget_range text DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    full_name <> '' AND
    email <> '' AND
    message <> ''
  );
