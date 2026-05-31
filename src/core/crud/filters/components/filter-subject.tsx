import type { TField } from "@/core/lib/jsonSchemaToFields"
import { IconMap } from ".."

export function FilterSubject({ field }: { field: TField }) {
  const Icon = IconMap[field.type]
  return (
    <span className="flex items-center gap-1 px-2 font-medium whitespace-nowrap select-none">
      <Icon className="size-4 stroke-[2.25px]" />
      <span>{field.label ?? field.name}</span>
    </span>
  )
}
