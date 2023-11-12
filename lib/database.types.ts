export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      calendar_events: {
        Row: {
          attendees: string | null

          colour: string | null

          conferencedata: string | null
          conferenceid: string | null
          created: string | null
          creator_email: string | null
          creator_self: boolean | null
          description: string | null
          end_datetime: string | null
          end_timezone: string | null
          etag: string | null
          eventtype: string | null
          hangoutlink: string | null
          htmllink: string | null
          icaluid: string | null
          id: string
          kind: string | null
          organizer_email: string | null
          organizer_self: boolean | null
          sequence: number | null
          start_datetime: string | null
          start_timezone: string | null
          status: string | null
          summary: string | null
          updated: string | null
          usedefault: boolean | null
        }
        Insert: {
          attendees?: string | null

          colour?: string | null

          conferencedata?: string | null
          conferenceid?: string | null
          created?: string | null
          creator_email?: string | null
          creator_self?: boolean | null
          description?: string | null
          end_datetime?: string | null
          end_timezone?: string | null
          etag?: string | null
          eventtype?: string | null
          hangoutlink?: string | null
          htmllink?: string | null
          icaluid?: string | null
          id: string
          kind?: string | null
          organizer_email?: string | null
          organizer_self?: boolean | null
          sequence?: number | null
          start_datetime?: string | null
          start_timezone?: string | null
          status?: string | null
          summary?: string | null
          updated?: string | null
          usedefault?: boolean | null
        }
        Update: {
          attendees?: string | null

          colour?: string | null

          conferencedata?: string | null
          conferenceid?: string | null
          created?: string | null
          creator_email?: string | null
          creator_self?: boolean | null
          description?: string | null
          end_datetime?: string | null
          end_timezone?: string | null
          etag?: string | null
          eventtype?: string | null
          hangoutlink?: string | null
          htmllink?: string | null
          icaluid?: string | null
          id?: string
          kind?: string | null
          organizer_email?: string | null
          organizer_self?: boolean | null
          sequence?: number | null
          start_datetime?: string | null
          start_timezone?: string | null
          status?: string | null
          summary?: string | null
          updated?: string | null
          usedefault?: boolean | null
        }
        Relationships: []
      }

      messages: {
        Row: {
          created_at: string
          id: number
          is_from_user: boolean | null
          message: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_from_user?: boolean | null
          message?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_from_user?: boolean | null
          message?: string | null
        }
        Relationships: []
      }

    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
