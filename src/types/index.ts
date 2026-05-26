export type CaseStatus = 'active' | 'submitted' | 'approved' | 'denied' | 'rfe_received'
export type CaseType   = 'family' | 'employment' | 'investor' | 'student'

export const CASE_STAGES = [
  'Intake', 'Petition Preparation', 'Document Collection', 'Attorney Review',
  'Form Preparation', 'USCIS Filing', 'USCIS Review', 'NVC Processing',
  'Embassy Interview', 'Biometrics', 'RFE Response', 'Decision Pending',
  'Approved', 'Denied',
] as const

export const CASE_TYPE_COLORS: Record<string, string> = {
  family:     'bg-blue-100 text-blue-800',
  employment: 'bg-green-100 text-green-800',
  investor:   'bg-purple-100 text-purple-800',
  student:    'bg-orange-100 text-orange-800',
}

export const CASE_STATUS_COLORS: Record<string, string> = {
  active:       'bg-green-100 text-green-800',
  submitted:    'bg-blue-100 text-blue-800',
  approved:     'bg-emerald-100 text-emerald-800',
  denied:       'bg-red-100 text-red-800',
  rfe_received: 'bg-yellow-100 text-yellow-800',
}

export const CASE_TYPE_ICONS: Record<string, string> = {
  family:     '👨‍👩‍👧',
  employment: '💼',
  investor:   '💰',
  student:    '🎓',
}

export const DOCUMENT_TYPE_LABELS: Record<string, string> = {
  passport:             'Passport',
  birth_certificate:    'Birth Certificate',
  marriage_certificate: 'Marriage Certificate',
  tax_return:           'Tax Return',
  bank_statement:       'Bank Statement',
  employment_letter:    'Employment Letter',
  degree_certificate:   'Degree Certificate',
  i130:                 'Form I-130',
  i485:                 'Form I-485',
  i140:                 'Form I-140',
  i129:                 'Form I-129',
  i864:                 'Form I-864',
  i693:                 'Form I-693',
  lca:                  'Labor Condition Application',
  photo:                'Photo',
  other:                'Other Document',
}

export const VERIFICATION_STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  pending:  { label: 'Pending Review', color: 'text-amber-700',  bg: 'bg-amber-50',   border: 'border-amber-200' },
  verified: { label: 'Verified',       color: 'text-green-700',  bg: 'bg-green-50',   border: 'border-green-200' },
  flagged:  { label: 'Flagged',        color: 'text-red-700',    bg: 'bg-red-50',     border: 'border-red-200'   },
  expired:  { label: 'Expired',        color: 'text-slate-600',  bg: 'bg-slate-100',  border: 'border-slate-200' },
}

export const DEADLINE_TYPE_COLORS: Record<string, string> = {
  filing:      'text-blue-600',
  biometrics:  'text-purple-600',
  interview:   'text-green-600',
  rfe_response:'text-red-600',
  visa_expiry: 'text-orange-600',
  other:       'text-slate-600',
}

export const MAX_FILE_SIZE_MB = 10

export interface ChatMessage {
  role:    'user' | 'assistant'
  content: string
}
