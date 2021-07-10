import { Investigation } from "../../investigations/shared/investigation.model"

export class ScheduledInvestigation {
  id?: number
  description?: string
  investigation?: Investigation
  startTime: Date
  endTime: Date
  doctor?: any
  timeZoneOffsetMinutes?: number
}

