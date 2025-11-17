'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


export function MealFilter({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-foreground">View:</label>
      <Select value={value} onValueChange={(v) => onChange(v)}>
        <SelectTrigger className="w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Lunch & Dinner</SelectItem>
          <SelectItem value="lunch">Lunch Only</SelectItem>
          <SelectItem value="dinner">Dinner Only</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
