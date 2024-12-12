import s from "./layout.module.css";
import ProgramTitle from "./_components/Title/ProgramTitle";

export default async function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={s.programsContainer}>
      <ProgramTitle />
      {children}
    </main>
  );
}
