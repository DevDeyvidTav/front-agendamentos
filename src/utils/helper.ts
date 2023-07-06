import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface FormaterDateProps {
  date: Date;
  hours: number;
}

export function FormaterDate({ date, hours }: FormaterDateProps) {
  const dateWithHours = new Date(date);
  dateWithHours.setHours(hours);
  const IsoDate = dateWithHours.toISOString();

  return IsoDate;
}