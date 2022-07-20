import { Student } from '~/generated/schema'

export type MockStudent = Pick<Student, 'id' | 'name'>
