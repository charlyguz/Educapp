export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  JWT: any;
};

export type Admin = Node & User & {
  __typename?: 'Admin';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  role: Role;
  updatedAt: Scalars['Date'];
};

export type AllUserKind = Admin | Parent | Student | Teacher | Tutor;

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
  user: AllUserKind;
};

export type Class = Node & {
  __typename?: 'Class';
  classId: Scalars['String'];
  courses?: Maybe<Array<Course>>;
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  name: Scalars['String'];
  students?: Maybe<Array<Student>>;
  teacher: Teacher;
  updatedAt: Scalars['Date'];
};

export type Course = Node & {
  __typename?: 'Course';
  class?: Maybe<Class>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<CourseGrade>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  level?: Maybe<CourseLevel>;
  name: Scalars['String'];
  progress?: Maybe<Array<Maybe<CourseInProgress>>>;
  published?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<Array<Section>>;
  subject?: Maybe<Subject>;
  tags?: Maybe<Array<Tag>>;
  totalLearners: Scalars['Int'];
  updatedAt: Scalars['Date'];
};

export type CourseGrade = Node & {
  __typename?: 'CourseGrade';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type CourseInProgress = Node & {
  __typename?: 'CourseInProgress';
  course?: Maybe<Course>;
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  isCompleted?: Maybe<Scalars['Boolean']>;
  lessonsInProgress?: Maybe<Array<Maybe<LessonInProgress>>>;
  student?: Maybe<Student>;
  updatedAt: Scalars['Date'];
};

export enum CourseLevel {
  Advanced = 'ADVANCED',
  Basic = 'BASIC',
  Intermediate = 'INTERMEDIATE'
}

export type CreateCourseInput = {
  classId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  gradeId?: InputMaybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  level?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  subjectId: Scalars['String'];
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateLessonInput = {
  content: Scalars['String'];
  name: Scalars['String'];
  sectionId: Scalars['String'];
};

export type CreateSectionInput = {
  courseId: Scalars['String'];
  name: Scalars['String'];
};

export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type HoursInDay = {
  __typename?: 'HoursInDay';
  day: DayOfWeek;
  hours: Array<Scalars['Int']>;
};

export type Lesson = Node & {
  __typename?: 'Lesson';
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  name: Scalars['String'];
  progress?: Maybe<Array<Maybe<LessonInProgress>>>;
  section?: Maybe<Section>;
  updatedAt: Scalars['Date'];
  videoUrl?: Maybe<Scalars['String']>;
};

export type LessonInProgress = Node & {
  __typename?: 'LessonInProgress';
  courseProgress?: Maybe<CourseInProgress>;
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  isCompleted?: Maybe<Scalars['Boolean']>;
  lesson?: Maybe<Lesson>;
  updatedAt: Scalars['Date'];
};

export type LiveSession = Node & {
  __typename?: 'LiveSession';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  scheduledAt: Scalars['Date'];
  sessionId: Scalars['String'];
  student?: Maybe<Student>;
  tutor?: Maybe<Tutor>;
  updatedAt: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addStudentToClass?: Maybe<Scalars['Boolean']>;
  completeLesson?: Maybe<Scalars['Boolean']>;
  createCourse: Course;
  createLesson: Lesson;
  createSection: Section;
  createStudent?: Maybe<Student>;
  joinCourse: CourseInProgress;
  refreshToken: Token;
  scheduleSession: LiveSession;
  signin: Auth;
  signup: Auth;
};


export type MutationAddStudentToClassArgs = {
  classId: Scalars['String'];
  studentId: Scalars['String'];
};


export type MutationCompleteLessonArgs = {
  lessonId: Scalars['String'];
};


export type MutationCreateCourseArgs = {
  data: CreateCourseInput;
};


export type MutationCreateLessonArgs = {
  data: CreateLessonInput;
};


export type MutationCreateSectionArgs = {
  data: CreateSectionInput;
};


export type MutationCreateStudentArgs = {
  data: StudentSignupInput;
};


export type MutationJoinCourseArgs = {
  courseId: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT'];
};


export type MutationScheduleSessionArgs = {
  date: Scalars['Date'];
  studentId: Scalars['String'];
};


export type MutationSigninArgs = {
  data?: InputMaybe<SigninInput>;
};


export type MutationSignupArgs = {
  data?: InputMaybe<SignupInput>;
};

export type Node = {
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type Parent = Node & User & {
  __typename?: 'Parent';
  children?: Maybe<Array<Student>>;
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  monthlyIncome?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role: Role;
  updatedAt: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  allCourses?: Maybe<Array<Course>>;
  courseInfo: Course;
  myChildren?: Maybe<Array<Student>>;
  myClasses?: Maybe<Array<Class>>;
  myCourses?: Maybe<Array<Course>>;
};


export type QueryCourseInfoArgs = {
  courseId: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Parent = 'PARENT',
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  Tutor = 'TUTOR'
}

export type Section = Node & {
  __typename?: 'Section';
  course: Course;
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  lessons?: Maybe<Array<Lesson>>;
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type SigninInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type Student = Node & {
  __typename?: 'Student';
  birthDate?: Maybe<Scalars['Date']>;
  classes?: Maybe<Array<Class>>;
  coursesInProgress?: Maybe<Array<CourseInProgress>>;
  createdAt: Scalars['Date'];
  grade?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interests?: Maybe<Array<Maybe<Scalars['String']>>>;
  liveSessions?: Maybe<Array<LiveSession>>;
  name: Scalars['String'];
  nickname: Scalars['String'];
  parent: Parent;
  role: Role;
  sex?: Maybe<Sex>;
  tutors?: Maybe<Array<Tutor>>;
  updatedAt: Scalars['Date'];
};

export type StudentSignupInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type Subject = Node & {
  __typename?: 'Subject';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type Teacher = Node & User & {
  __typename?: 'Teacher';
  classes?: Maybe<Array<Maybe<Class>>>;
  courses?: Maybe<Array<Maybe<Course>>>;
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['String'];
  ine?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  license?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role: Role;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt: Scalars['Date'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
};

export type Tutor = Node & User & {
  __typename?: 'Tutor';
  availableHours?: Maybe<Array<HoursInDay>>;
  collegeName?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['String'];
  ine?: Maybe<Scalars['String']>;
  kardex?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  liveSessions?: Maybe<Array<LiveSession>>;
  name: Scalars['String'];
  role: Role;
  students?: Maybe<Array<Student>>;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt: Scalars['Date'];
};

export type User = {
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  role: Role;
  updatedAt: Scalars['Date'];
};

export type UserKind = Parent | Teacher | Tutor;
