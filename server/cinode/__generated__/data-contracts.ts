/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AbscencePeriodDayModel {
  calendarDay?: CalendarDayModel | null;
}

export interface AbsenceAddEditModel {
  /** @format date-time */
  start: string;
  /** @format date-time */
  end?: string | null;
  /** @format float */
  extentPercentage: number;
  /** @format int32 */
  absenceTypeId: number;
}

export interface AbsencePeriodDtoModel {
  /** @format int32 */
  id?: number;
  absenceType?: AbsenceTypeDto | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format int32 */
  extentPercentage?: number;
  /** @format int32 */
  companyUserId?: number;
  companyUserSeoId?: string | null;
  /** @format int32 */
  companyId?: number;
  companySeoId?: string | null;
  links?: Link[] | null;
}

export interface AbsencePeriodModel {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  companyUserId?: number;
  /** @format int32 */
  absenceTypeId?: number;
  absenceTypeName?: string | null;
  /** @format int32 */
  id?: number;
  days?: AbscencePeriodDayModel[] | null;
  /** @format int32 */
  extentPercentage?: number;
}

export interface AbsenceTypeDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface AbsenceTypeModel {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

/**
 *
 *
 * NoAccess = 0
 *
 * Anonymous = 50
 *
 * Read = 100
 *
 * Subcontractor = 110
 *
 * Candidate = 115
 *
 * RestrictedCompanyUser = 150
 *
 * CompanyApiUser = 180
 *
 * CompanyUser = 200
 *
 * PartnerManager = 240
 *
 * CompanyRecruiter = 250
 *
 * TeamManager = 270
 *
 * CompanyManager = 300
 *
 * CompanyAdmin = 400
 *
 * Owner = 500
 * @format int32
 */
export enum AccessLevel {
  NoAccess = 0,
  Anonymous = 50,
  Read = 100,
  Subcontractor = 110,
  Candidate = 115,
  RestrictedCompanyUser = 150,
  CompanyApiUser = 180,
  CompanyUser = 200,
  PartnerManager = 240,
  CompanyRecruiter = 250,
  TeamManager = 270,
  CompanyManager = 300,
  CompanyAdmin = 400,
  Owner = 500,
}

/**
 *
 *
 * All = 1
 *
 * Created = 2
 *
 * Updated = 3
 *
 * Borttagen = 4
 * @format int32
 */
export enum ActionType {
  All = 1,
  Created = 2,
  Updated = 3,
  Deleted = 4,
}

export interface AddCompanySubcontractorGroupMemberModel {
  /** @format int32 */
  companyUserSubcontractorId: number;
}

export interface AddressInfoBlockViewModel {
  displayName?: string | null;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string | null;
}

/**
 *
 *
 * Övrig = 0
 *
 * Besöksadress = 1
 *
 * Faktureringsadress = 2
 *
 * Placeringsort = 3
 * @format int32
 */
export enum AddressType {
  Undefined = 0,
  StreetAddress = 1,
  InvoiceAddress = 2,
  LocationAddress = 3,
}

/**
 *
 *
 * File = 0
 *
 * Uri = 1
 * @format int32
 */
export enum AttachmentType {
  File = 0,
  Uri = 1,
}

export interface AvailabilityFilterModel {
  /** @format int32 */
  companyUserId?: number | null;
  /** @format date-time */
  startDate: string;
  /** @format date-time */
  endDate: string;
}

export interface AvailabilityModel {
  /** @format int32 */
  companyUserId?: number;
  /** @format double */
  availability?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface CalendarDayModel {
  /** @format date-time */
  date?: string;
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
  /** @format int32 */
  day?: number;
  /** @format int32 */
  weekday?: number;
  /** @format int32 */
  week?: number;
  /** @format int32 */
  quarter?: number;
  /** @format int32 */
  dayOfYear?: number;
}

export interface ClassicCompanyUserResumeModel {
  /** @format int32 */
  imageId?: number | null;
  /** @format int32 */
  parentProfileId?: number;
  /** @format int32 */
  profileTranslationId?: number;
  /** @format int32 */
  parentCompanyUserResumeId?: number | null;
  resume?: ResumeModel | null;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  created?: CreatedModel | null;
  updated?: UpdatedModel | null;
  title?: string | null;
  description?: string | null;
  slug?: string | null;
  language?: CompanyResumeTemplateLanguageModel | null;
  template?: CompanyResumeTemplateBaseModel | null;
  isPublic?: boolean;
  links?: Link[] | null;
}

export interface CommitmentBlockItemModel {
  url?: string | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface CommitmentBlockModel {
  data?: CommitmentBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface CompanyAddressModel {
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  id?: number | null;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string | null;
  /**
   * Undefined = 0,
   * StreetAddress = 1 (VisitingAddress)
   * InvoiceAddress = 2,
   * LocationAddress = 3 (Used to connect an Employee to an office registered in Cinode)
   */
  addressType?: AddressType;
  comments?: string | null;
  links?: Link[] | null;
}

export interface CompanyBaseModel {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  seoId?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyCandidateAddInviteModel {
  email?: string | null;
  message?: string | null;
}

export interface CompanyCandidateAddModel {
  firstName: string;
  lastName: string;
  gender?: UserGender;
  /** @format int32 */
  birthYear?: number | null;
  title?: string | null;
  description?: string | null;
  email?: string | null;
  phone?: string | null;
  linkedInUrl?: string | null;
  /** @format int32 */
  rating?: number | null;
  state: CompanyCandidateState;
  /** @format date-time */
  availableFromDate?: string | null;
  /** @format int32 */
  periodOfNoticeDays?: number | null;
  /** @format int32 */
  salaryRequirement?: number | null;
  isMobile?: boolean;
  /** @format int32 */
  recruitmentManagerId?: number | null;
  /** @format int32 */
  pipelineId?: number | null;
  /** @format int32 */
  pipelineStageId?: number | null;
  /** @format int32 */
  teamId?: number | null;
  /** @format int32 */
  companyAddressId?: number | null;
  /** @format int32 */
  recruitmentSourceId?: number | null;
  currentEmployer?: string | null;
  campaignCode?: string | null;
  /** @format int32 */
  currencyId?: number | null;
  /** @format int32 */
  offeredSalary?: number | null;
  notifyRecruitmentManager?: boolean;
}

export interface CompanyCandidateAttachmentModel {
  /** @format uuid */
  id?: string;
  attachmentType?: AttachmentType;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  companyCandidateId?: number;
  title?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyCandidateBaseModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  seoId?: string | null;
  /** @deprecated */
  firstname?: string | null;
  firstName?: string | null;
  /** @deprecated */
  lastname?: string | null;
  lastName?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastTouchDateTime?: string | null;
  /** @format date-time */
  updatedDateTime?: string | null;
  links?: Link[] | null;
}

export interface CompanyCandidateEventBaseModel {
  /** @format int32 */
  companyCandidateId?: number;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyCandidateEventMeetingModel {
  /** @format int32 */
  companyCandidateId?: number;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  location?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyCandidateEventModel {
  /** @format int32 */
  companyCandidateId?: number;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyCandidateEventNoteModel {
  /** @format int32 */
  companyCandidateId?: number;
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyCandidateEventTaskModel {
  /** @format int32 */
  companyCandidateId?: number;
  /**
   * NotSpecified = 0
   * Phone = 1
   * Email = 2
   */
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyCandidateExtendedModel {
  /** @format int32 */
  rating?: number | null;
  /** @format date-time */
  availableFromDate?: string | null;
  /** @format int32 */
  periodOfNoticeDays?: number | null;
  /** @format int32 */
  salaryRequirement?: number | null;
  /** @format int32 */
  offeredSalary?: number | null;
  state?: CompanyCandidateState | null;
  /** @format int32 */
  currencyId?: number | null;
  isMobile?: boolean;
  /** @format int32 */
  pipelineId?: number | null;
  /** @format int32 */
  pipelineStageId?: number | null;
  /** @format int32 */
  recruitmentManagerId?: number | null;
  campaignCode?: string | null;
  /**
   * Other = 0,
   * Male = 1,
   * Female = 2
   */
  gender?: UserGender;
  /** @format int32 */
  birthYear?: number | null;
  title?: string | null;
  description?: string | null;
  email?: string | null;
  linkedInUrl?: string | null;
  phone?: string | null;
  attachments?: CompanyCandidateAttachmentModel[] | null;
  recruitmentManager?: CompanyUserBaseModel | null;
  currentEmployer?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  seoId?: string | null;
  /** @deprecated */
  firstname?: string | null;
  firstName?: string | null;
  /** @deprecated */
  lastname?: string | null;
  lastName?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastTouchDateTime?: string | null;
  /** @format date-time */
  updatedDateTime?: string | null;
  links?: Link[] | null;
}

export interface CompanyCandidateFileAttachmentListModel {
  /** @format int32 */
  companyCandidateId?: number;
  /** @format int32 */
  companyId?: number;
  attachments?: CompanyCandidateFileAttachmentModel[] | null;
  links?: Link[] | null;
}

export interface CompanyCandidateFileAttachmentModel {
  fileName?: string | null;
  extension?: string | null;
  /** @format uuid */
  id?: string;
  attachmentType?: AttachmentType;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  companyCandidateId?: number;
  title?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyCandidatePipelineModel {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  stages?: CompanyCandidatePipelineStageModel[] | null;
}

export interface CompanyCandidatePipelineStageModel {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  /** @format int32 */
  order?: number;
  /** @format int32 */
  probability?: number | null;
}

/**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Status = 3
 *
 * Email = 4
 *
 * UpdatedDateTime = 5
 * @format int32
 */
export enum CompanyCandidateQuerySort {
  CreatedDateTime = 0,
  FirstName = 1,
  LastName = 2,
  Status = 3,
  Email = 4,
  UpdatedDateTime = 5,
}

export interface CompanyCandidateQuerySortPageAndSortByModel {
  sortBy?: CompanyCandidateQuerySort;
  /**
   * Ascending = 0 (Default)
   * Descending = 1
   */
  sortOrder?: SortOrder;
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 15
   */
  itemsPerPage?: number;
}

export interface CompanyCandidateSkillAddModel {
  name?: string | null;
  /** @format int32 */
  companyCandidateId?: number;
  /** @format int32 */
  keywordSynonymId?: number | null;
  /** @format int32 */
  languageId?: number | null;
}

export interface CompanyCandidateSkillModel {
  /** @format int32 */
  companyCandidateId?: number;
  /** @format int32 */
  keywordId?: number;
  keyword?: KeywordModel | null;
  /** @format int32 */
  keywordSynonymId?: number;
  keywordSynonym?: KeywordSynonymModel | null;
}

/**
 *
 *
 * Öppen = 0
 *
 * Vunnen = 10
 *
 * Pausad = 20
 *
 * Avböjd av kandidat = 30
 *
 * Avböjd av oss = 40
 * @format int32
 */
export enum CompanyCandidateState {
  Open = 0,
  Won = 10,
  Paused = 20,
  Lost = 30,
  Rejected = 40,
}

export interface CompanyCandidateUriAttachmentAddModel {
  uri?: string | null;
  title?: string | null;
  description?: string | null;
}

export interface CompanyCandidateUriAttachmentModel {
  uri?: string | null;
  /** @format uuid */
  id?: string;
  attachmentType?: AttachmentType;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  companyCandidateId?: number;
  title?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyCapabilitiesModel {
  enabledModules?: CompanyEnabledModuleModel[] | null;
}

export interface CompanyCustomerAddModel {
  /** @deprecated */
  status?: boolean;
  name: string;
  description?: string | null;
  corporateIdentityNumber?: string | null;
  vatNumber?: string | null;
  identification?: string | null;
  email?: string | null;
  homepage?: string | null;
  phone?: string | null;
  fax?: string | null;
  intermediator?: boolean;
  size?: CompanySize | null;
  /** @format int32 */
  countryId?: number | null;
  /** @format int64 */
  turnOver?: number | null;
  /** @format int32 */
  turnOverCurrencyId?: number | null;
}

export interface CompanyCustomerAddressAddEditModel {
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
  city?: string | null;
  email?: string | null;
  comments?: string | null;
  country?: string | null;
  addressType?: AddressType;
}

export interface CompanyCustomerAddressModel {
  /** @format int32 */
  companyCustomerId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  id?: number | null;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string | null;
  /**
   * Undefined = 0,
   * StreetAddress = 1 (VisitingAddress)
   * InvoiceAddress = 2,
   * LocationAddress = 3 (Used to connect an Employee to an office registered in Cinode)
   */
  addressType?: AddressType;
  comments?: string | null;
  links?: Link[] | null;
}

export interface CompanyCustomerAttachmentModel {
  /** @format int32 */
  customerId?: number;
  attachmentType?: AttachmentType;
  /** @format int32 */
  companyId?: number | null;
  /** @format uuid */
  id?: string | null;
  title?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyCustomerBaseModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  name?: string | null;
  description?: string | null;
  identification?: string | null;
  seoId?: string | null;
  /** @deprecated */
  status?: Status;
  links?: Link[] | null;
}

export interface CompanyCustomerContactAddEditModel {
  firstName: string;
  lastName: string;
  email?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  title?: string | null;
  comments?: string | null;
}

export interface CompanyCustomerContactBaseModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  slug?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  links?: Link[] | null;
}

export interface CompanyCustomerContactModel {
  title?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  comments?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  tags?: CompanyTagModel[] | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  slug?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  links?: Link[] | null;
}

/**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Email = 3
 *
 * UpdatedDateTime = 4
 *
 * CustomerId = 5
 * @format int32
 */
export enum CompanyCustomerContactQuerySort {
  CreatedDateTime = 0,
  FirstName = 1,
  LastName = 2,
  Email = 3,
  UpdatedDateTime = 4,
  CustomerId = 5,
}

export interface CompanyCustomerContactQuerySortPageAndSortByModel {
  sortBy?: CompanyCustomerContactQuerySort;
  /**
   * Ascending = 0 (Default)
   * Descending = 1
   */
  sortOrder?: SortOrder;
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 15
   */
  itemsPerPage?: number;
}

export interface CompanyCustomerDeleteModel {
  customerVerificationName?: string | null;
}

export interface CompanyCustomerEditModel {
  /** @deprecated */
  status?: boolean;
  name: string;
  description?: string | null;
  corporateIdentityNumber?: string | null;
  vatNumber?: string | null;
  identification?: string | null;
  email?: string | null;
  homepage?: string | null;
  phone?: string | null;
  fax?: string | null;
  intermediator?: boolean;
  size?: CompanySize | null;
}

export interface CompanyCustomerExtendedModel {
  email?: string | null;
  tags?: CompanyTagBaseModel[] | null;
  managers?: CompanyCustomerManagerModel[] | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  name?: string | null;
  description?: string | null;
  identification?: string | null;
  seoId?: string | null;
  /** @deprecated */
  status?: Status;
  links?: Link[] | null;
}

export interface CompanyCustomerManagerModel {
  /** @format int32 */
  companyCustomerManagerId?: number | null;
  /** @format int32 */
  customerId?: number | null;
  customer?: CompanyCustomerBaseModel | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  links?: Link[] | null;
}

export interface CompanyCustomerManagersAddEditModel {
  companyUserIds?: number[] | null;
}

export interface CompanyCustomerModel {
  phone?: string | null;
  fax?: string | null;
  homepage?: string | null;
  corporateIdentityNumber?: string | null;
  vatNumber?: string | null;
  contacts?: CompanyCustomerContactBaseModel[] | null;
  addresses?: CompanyCustomerAddressModel[] | null;
  projects?: ProjectBaseModel[] | null;
  intermediator?: boolean | null;
  attachments?: CompanyCustomerAttachmentModel[] | null;
  size?: CompanySize | null;
  /** @format int32 */
  countryId?: number | null;
  country?: CountryModel | null;
  /** @format int64 */
  turnOver?: number | null;
  /** @format int32 */
  turnOverCurrencyId?: number | null;
  turnOverCurrency?: CurrencyModel | null;
  email?: string | null;
  tags?: CompanyTagBaseModel[] | null;
  managers?: CompanyCustomerManagerModel[] | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  name?: string | null;
  description?: string | null;
  identification?: string | null;
  seoId?: string | null;
  /** @deprecated */
  status?: Status;
  links?: Link[] | null;
}

/**
 *
 *
 * CreatedDateTime = 0
 *
 * Name = 1
 *
 * Description = 2
 *
 * Identification = 3
 *
 * SeoId = 4
 *
 * Status = 5
 *
 * Phone = 6
 *
 * Email = 7
 *
 * Fax = 8
 *
 * Homepage = 9
 *
 * CorporateIdentityNumber = 10
 *
 * VATNumber = 11
 *
 * Intermediator = 12
 *
 * UpdatedDateTime = 13
 *
 * LastTouchDateTime = 14
 * @format int32
 */
export enum CompanyCustomerQuerySort {
  CreatedDateTime = 0,
  Name = 1,
  Description = 2,
  Identification = 3,
  SeoId = 4,
  Status = 5,
  Phone = 6,
  Email = 7,
  Fax = 8,
  Homepage = 9,
  CorporateIdentityNumber = 10,
  VATNumber = 11,
  Intermediator = 12,
  UpdatedDateTime = 13,
  LastTouchDateTime = 14,
}

export interface CompanyCustomerQuerySortPageAndSortByModel {
  sortBy?: CompanyCustomerQuerySort;
  /**
   * Ascending = 0 (Default)
   * Descending = 1
   */
  sortOrder?: SortOrder;
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 15
   */
  itemsPerPage?: number;
}

export interface CompanyEnabledModuleModel {
  moduleId?: ModuleType;
}

export interface CompanyImageModel {
  /** @format int32 */
  id?: number;
  /** @format uuid */
  imageFileName?: string;
  extension?: string | null;
  /** @format int32 */
  companyId?: number;
  /** @format date-time */
  created?: string;
  assignedToCompanyUser?: CompanyUserBaseModel | null;
  uploadedByCompanyUser?: CompanyUserBaseModel | null;
  links?: Link[] | null;
}

export interface CompanyModel {
  /** External identifier */
  corporateIdentityNumber?: string | null;
  vatNumber?: string | null;
  /** @format int32 */
  registrationYear?: number | null;
  isTaxRegistered?: boolean | null;
  addresses?: CompanyAddressModel[] | null;
  tags?: CompanyTagBaseModel[] | null;
  /** @format int32 */
  countryId?: number | null;
  defaultCurrency?: CurrencyModel | null;
  currencies?: CurrencyModel[] | null;
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  seoId?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyProfileFilterModel {
  /**
   * If set to true, the results will include only Profiles created within the last X days
   * @format int32
   */
  createdOffsetDays?: number | null;
  /**
   * If set to true, the results will include only Profiles updated within the last X days
   * @format int32
   */
  updatedOffsetDays?: number | null;
  pageAndSortBy?: CompanyProfileSortPageAndSortByModel | null;
}

/**
 * 0 - Id (Default),
 * 1 - CompanyUserId,
 * 2 - CreatedDateTime,
 * 3 - UpdatedDateTime
 * @format int32
 */
export enum CompanyProfileSort {
  Id = 0,
  CompanyUserId = 1,
  CreatedWhen = 2,
  UpdatedWhen = 3,
}

export interface CompanyProfileSortPageAndSortByModel {
  /**
   * 0 - Id (Default),
   * 1 - CompanyUserId,
   * 2 - CreatedDateTime,
   * 3 - UpdatedDateTime
   */
  sortBy?: CompanyProfileSort;
  /**
   * Ascending = 0 (Default)
   * Descending = 1
   */
  sortOrder?: SortOrder;
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 15
   */
  itemsPerPage?: number;
}

export interface CompanyProfilesModel {
  /** @format int32 */
  totalItems?: number;
  profiles?: CompanyUserProfileBaseModel[] | null;
}

export interface CompanyRecruitmentManagerModel {
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  links?: Link[] | null;
}

export interface CompanyResumeTemplateBaseModel {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface CompanyResumeTemplateLanguageModel {
  /** @format int32 */
  languageId?: number;
  name?: string | null;
  culture?: string | null;
  lang?: string | null;
  country?: string | null;
}

/**
 *
 *
 * Egenföretagare = 0
 *
 * 2-10 = 1
 *
 * 11-50 = 2
 *
 * 51-200 = 3
 *
 * 201-500 = 4
 *
 * 501-1 000 = 5
 *
 * 1 001-5 000 = 6
 *
 * 5 001-10 000 = 7
 *
 * 10 001+ = 8
 * @format int32
 */
export enum CompanySize {
  A = 0,
  B = 1,
  C = 2,
  D = 3,
  E = 4,
  F = 5,
  G = 6,
  H = 7,
  I = 8,
}

export interface CompanySubcontractorGroupBaseModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  name?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanySubcontractorGroupModel {
  companyUserManager?: CompanyUserBaseModel | null;
  members?: CompanyUserBaseModel[] | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  name?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyTagBaseModel {
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  id?: number | null;
  seoId?: string | null;
  name?: string | null;
}

export interface CompanyTagModel {
  tagType?: CompanyTagTypeModel | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  id?: number | null;
  seoId?: string | null;
  name?: string | null;
}

export interface CompanyTagTypeModel {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
}

export interface CompanyUserAddModel {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  gender: UserGender;
  status?: CompanyUserStatus;
  /** @format int32 */
  teamId?: number | null;
  title?: string | null;
  /** @format int32 */
  languageId?: number | null;
  employmentNumber?: string | null;
  /** @format date-time */
  employmentStartDate?: string | null;
  addProfile?: boolean;
  /** @format int32 */
  locationId?: number | null;
  /** @format int32 */
  defaultCurrencyId?: number | null;
  /** @format int32 */
  displayCurrencyId?: number | null;
  mustChangePassword?: boolean;
}

export interface CompanyUserBaseModel {
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  links?: Link[] | null;
}

export interface CompanyUserEditModel {
  status?: CompanyUserStatus;
  /** @format date-time */
  employmentStartDate?: string | null;
  /** @format date-time */
  employmentEndDate?: string | null;
  employmentNumber?: string | null;
  /** @format int32 */
  invoicingGoal?: number | null;
  /** @format int32 */
  mobility?: number | null;
  /** @format int32 */
  availabilityPercent?: number | null;
  /** @format date-time */
  availableFromDate?: string | null;
  title?: string | null;
  email?: string | null;
  taxTable?: string | null;
  /** @format int32 */
  baseSalary?: number | null;
  /** @format int32 */
  provision?: number | null;
  /** @format int32 */
  hourlyTargetRate?: number | null;
  /** @format int32 */
  selfCost?: number | null;
  /** @format int32 */
  locationId?: number | null;
  /** @format int32 */
  defaultCurrencyId?: number | null;
  /** @format int32 */
  displayCurrencyId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format date-time */
  dateOfBirth?: string | null;
  gender?: UserGender;
  /** @format int32 */
  companyCalendarId?: number | null;
  timezoneId?: string | null;
  phone?: string | null;
}

export interface CompanyUserEventBaseModel {
  /** @format int32 */
  companyUserId?: number | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyUserEventMeetingAddEditModel {
  /** @format int32 */
  companyUserId?: number;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  /**
   * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface CompanyUserEventMeetingModel {
  /** @format int32 */
  companyUserId?: number | null;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  location?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyUserEventModel {
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyUserEventNoteAddEditModel {
  /** @format int32 */
  companyUserId?: number;
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /**
   * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface CompanyUserEventNoteModel {
  /** @format int32 */
  companyUserId?: number | null;
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyUserEventTaskAddEditModel {
  /** @format int32 */
  companyUserId?: number;
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /**
   * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface CompanyUserEventTaskModel {
  /** @format int32 */
  companyUserId?: number | null;
  /**
   * NotSpecified = 0
   * Phone = 1
   * Email = 2
   */
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CompanyUserExtendedModel {
  /**
   * Disconnected = 0,
   * PreActive = 2,
   * Active = 3,
   */
  status?: CompanyUserStatus | null;
  title?: string | null;
  companyUserEmail?: string | null;
  /** @format date-time */
  createdDateTime?: string | null;
  /** @format date-time */
  updatedDateTime?: string | null;
  companyAddress?: CompanyAddressModel | null;
  homeAddress?: LocationModel | null;
  image?: CompanyUserImageModel | null;
  desiredAssignment?: string | null;
  internalIdentifier?: string | null;
  twitter?: string | null;
  linkedIn?: string | null;
  homepage?: string | null;
  blog?: string | null;
  gitHub?: string | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  links?: Link[] | null;
}

export interface CompanyUserFullModel {
  /** @format int32 */
  invoicingGoal?: number | null;
  taxTable?: string | null;
  /** @format int32 */
  baseSalary?: number | null;
  /** @format int32 */
  provision?: number | null;
  /** @format int32 */
  hourlyTargetRate?: number | null;
  /** @format int32 */
  selfCost?: number | null;
  /** @format date-time */
  employmentStartDate?: string | null;
  /** @format date-time */
  employmentEndDate?: string | null;
  employmentNumber?: string | null;
  /** @format int32 */
  availabilityPercent?: number | null;
  /** @format date-time */
  availableFromDate?: string | null;
  /** @format int32 */
  mobility?: number | null;
  locationName?: string | null;
  resumes?: CompanyUserResumeBaseModel[] | null;
  roles?: RoleModel[] | null;
  teamManagers?: TeamManagerModel[] | null;
  teamMembers?: TeamMemberModel[] | null;
  customerManagers?: CompanyCustomerManagerModel[] | null;
  periods?: AbsencePeriodModel[] | null;
  defaultCurrency?: CurrencyModel | null;
  phone?: string | null;
  /** @format date-time */
  dateOfBirth?: string | null;
  tags?: CompanyTagModel[] | null;
  /**
   * Disconnected = 0,
   * PreActive = 2,
   * Active = 3,
   */
  status?: CompanyUserStatus | null;
  title?: string | null;
  companyUserEmail?: string | null;
  /** @format date-time */
  createdDateTime?: string | null;
  /** @format date-time */
  updatedDateTime?: string | null;
  companyAddress?: CompanyAddressModel | null;
  homeAddress?: LocationModel | null;
  image?: CompanyUserImageModel | null;
  desiredAssignment?: string | null;
  internalIdentifier?: string | null;
  twitter?: string | null;
  linkedIn?: string | null;
  homepage?: string | null;
  blog?: string | null;
  gitHub?: string | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  links?: Link[] | null;
}

export interface CompanyUserImageModel {
  /** @format int32 */
  imageId?: number;
  /** @format int32 */
  companyId?: number;
  url?: string | null;
  largeImageUrl?: string | null;
  /** @format date-time */
  uploadedWhen?: string;
  links?: Link[] | null;
}

export interface CompanyUserInfoBlockViewModel {
  address?: AddressInfoBlockViewModel | null;
  email?: string | null;
  title?: string | null;
}

export interface CompanyUserModel {
  /** @format date-time */
  employmentStartDate?: string | null;
  /** @format date-time */
  employmentEndDate?: string | null;
  employmentNumber?: string | null;
  /** @format int32 */
  availabilityPercent?: number | null;
  /** @format date-time */
  availableFromDate?: string | null;
  /** @format int32 */
  mobility?: number | null;
  locationName?: string | null;
  resumes?: CompanyUserResumeBaseModel[] | null;
  roles?: RoleModel[] | null;
  teamManagers?: TeamManagerModel[] | null;
  teamMembers?: TeamMemberModel[] | null;
  customerManagers?: CompanyCustomerManagerModel[] | null;
  periods?: AbsencePeriodModel[] | null;
  defaultCurrency?: CurrencyModel | null;
  phone?: string | null;
  /** @format date-time */
  dateOfBirth?: string | null;
  tags?: CompanyTagModel[] | null;
  /**
   * Disconnected = 0,
   * PreActive = 2,
   * Active = 3,
   */
  status?: CompanyUserStatus | null;
  title?: string | null;
  companyUserEmail?: string | null;
  /** @format date-time */
  createdDateTime?: string | null;
  /** @format date-time */
  updatedDateTime?: string | null;
  companyAddress?: CompanyAddressModel | null;
  homeAddress?: LocationModel | null;
  image?: CompanyUserImageModel | null;
  desiredAssignment?: string | null;
  internalIdentifier?: string | null;
  twitter?: string | null;
  linkedIn?: string | null;
  homepage?: string | null;
  blog?: string | null;
  gitHub?: string | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  links?: Link[] | null;
}

export interface CompanyUserPermissionsEditModel {
  permissions?: AccessLevel[] | null;
}

export interface CompanyUserProfileAddEditModel {
  /** @format int32 */
  languageId?: number | null;
}

export interface CompanyUserProfileBaseModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format date-time */
  createdWhen?: string | null;
  /** @format date-time */
  updatedWhen?: string | null;
  /** @format date-time */
  publishedWhen?: string | null;
  presentation?: CompanyUserProfilePresentationModel | null;
  /** @format int32 */
  profileTranslationId?: number;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
  translations?: CompanyUserProfileTranslationModel[] | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileCommitmentAddEditModel {
  title: string;
  description?: string | null;
  isCurrent?: boolean | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  url?: string | null;
}

export interface CompanyUserProfileCommitmentModel {
  /** @format int32 */
  profileId?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  translations?: CompanyUserProfileCommitmentTranslationModel[] | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileCommitmentTranslationModel {
  /** @format int32 */
  profileCommitmentId?: number | null;
  title?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileEducationAddEditModel {
  schoolName: string;
  programName: string;
  degree?: string | null;
  description?: string | null;
  location?: LocationModel | null;
  isCurrent?: boolean | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  url?: string | null;
}

export interface CompanyUserProfileEducationModel {
  /** @format int32 */
  profileId?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  locationId?: number | null;
  translations?: CompanyUserProfileEducationTranslationModel[] | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileEducationTranslationModel {
  /** @format int32 */
  profileEducationId?: number | null;
  schoolName?: string | null;
  programName?: string | null;
  degree?: string | null;
  description?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileEmployerAddEditModel {
  name: string;
  title?: string | null;
  description?: string | null;
  isCurrent?: boolean | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  url?: string | null;
}

export interface CompanyUserProfileEmployerModel {
  /** @format int32 */
  profileId?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  isCurrent?: boolean;
  translations?: CompanyUserProfileEmployerTranslationModel[] | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileEmployerTranslationModel {
  /** @format int32 */
  profileEmployerId?: number | null;
  name?: string | null;
  title?: string | null;
  description?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileExtSkillAddEditModel {
  title: string;
}

export interface CompanyUserProfileExtSkillModel {
  /** @format int32 */
  profileId?: number | null;
  translations?: CompanyUserProfileExtSkillTranslationModel[] | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileExtSkillTranslationModel {
  /** @format int32 */
  profileExtSkillId?: number | null;
  title?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileFullModel {
  employers?: CompanyUserProfileEmployerModel[] | null;
  workExperience?: CompanyUserProfileWorkExperienceModel[] | null;
  education?: CompanyUserProfileEducationModel[] | null;
  training?: CompanyUserProfileTrainingModel[] | null;
  references?: CompanyUserProfileReferenceModel[] | null;
  skills?: CompanyUserProfileSkillModel[] | null;
  extSkills?: CompanyUserProfileExtSkillModel[] | null;
  commitments?: CompanyUserProfileCommitmentModel[] | null;
  languages?: CompanyUserProfileLanguageModel[] | null;
  /** @format uuid */
  userId?: string | null;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format date-time */
  createdWhen?: string | null;
  /** @format date-time */
  updatedWhen?: string | null;
  /** @format date-time */
  publishedWhen?: string | null;
  presentation?: CompanyUserProfilePresentationModel | null;
  /** @format int32 */
  profileTranslationId?: number;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
  translations?: CompanyUserProfileTranslationModel[] | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileLanguageAddEditModel {
  /** @format int32 */
  languageId: number;
  level?: LanguageLevel;
}

export interface CompanyUserProfileLanguageBranchModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  languageId?: number | null;
  language?: ProfileLanguageModel | null;
  enabled?: boolean;
}

export interface CompanyUserProfileLanguageModel {
  /** @format int32 */
  profileId?: number | null;
  language?: ProfileLanguageModel | null;
  /** @format int32 */
  level?: number | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfilePresentationEditModel {
  title?: string | null;
  description?: string | null;
  personalDescription?: string | null;
}

export interface CompanyUserProfilePresentationModel {
  translations?: CompanyUserProfilePresentationTranslationModel[] | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfilePresentationTranslationModel {
  title?: string | null;
  description?: string | null;
  personalDescription?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileReferenceAddEditModel {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  telephone?: string | null;
  company?: string | null;
  position?: string | null;
  text?: string | null;
  /** @format int32 */
  profileWorkExperienceId?: number | null;
}

export interface CompanyUserProfileReferenceModel {
  /** @format int32 */
  profileId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  telephone?: string | null;
  /** @format int32 */
  profileWorkExperienceId?: number | null;
  translations?: CompanyUserProfileReferenceTranslationModel[] | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileReferenceTranslationModel {
  /** @format int32 */
  profileReferenceId?: number | null;
  company?: string | null;
  position?: string | null;
  text?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileSkillAddModel {
  /** @format int32 */
  keywordSynonymId?: number | null;
  name?: string | null;
  /** @format int32 */
  level?: number | null;
}

export interface CompanyUserProfileSkillEditModel {
  /** @format int32 */
  keywordSynonymId?: number | null;
  /** @format int32 */
  level?: number;
}

export interface CompanyUserProfileSkillHistoryModel {
  /** @format int32 */
  id?: number | null;
  /** @format date-time */
  changeDateTime?: string | null;
  /** @format int32 */
  level?: number | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  keywordId?: number | null;
  favourite?: boolean;
}

export interface CompanyUserProfileSkillModel {
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  level?: number | null;
  /** @format int32 */
  levelGoal?: number | null;
  /** @format date-time */
  levelGoalDeadline?: string | null;
  keyword?: KeywordModel | null;
  changeHistory?: CompanyUserProfileSkillHistoryModel[] | null;
  translations?: CompanyUserProfileSkillTranslationModel[] | null;
  favourite?: boolean;
  /** @format int32 */
  numberOfDaysWorkExperience?: number;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  id?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileSkillTranslationModel {
  /** @format int32 */
  keywordId?: number | null;
  /** @format int32 */
  keywordSynonymId?: number | null;
  keywordSynonym?: KeywordSynonymModel | null;
  keyword?: KeywordModel | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileTrainingAddEditModel {
  title?: string | null;
  /** @format int32 */
  year?: number;
  issuer?: string | null;
  supplier?: string | null;
  code?: string | null;
  description?: string | null;
  trainingType?: TrainingType;
  url?: string | null;
  /** @format date-time */
  expireDate?: string | null;
}

export interface CompanyUserProfileTrainingModel {
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  id?: number | null;
  trainingType?: TrainingType | null;
  /** @format int32 */
  year?: number | null;
  code?: string | null;
  translations?: CompanyUserProfileTrainingTranslationModel[] | null;
  /** @format date-time */
  expireDate?: string | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileTrainingTranslationModel {
  /** @format int32 */
  profileTrainingId?: number;
  title?: string | null;
  description?: string | null;
  issuer?: string | null;
  supplier?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProfileTranslationModel {
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  languageBranchId?: number | null;
  languageBranch?: CompanyUserProfileLanguageBranchModel | null;
}

export interface CompanyUserProfileWorkExperienceAddEditModel {
  title: string;
  description: string;
  employer: string;
  /** @format date-time */
  startDate: string;
  /** @format date-time */
  endDate?: string | null;
  isCurrent?: boolean | null;
  location?: LocationModel | null;
  url?: string | null;
  skills?: CompanyUserProfileWorkExperienceSkillAddModel[] | null;
}

export interface CompanyUserProfileWorkExperienceModel {
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  id?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  isCurrent?: boolean | null;
  translations?: CompanyUserProfileWorkExperienceTranslationModel[] | null;
  /** @format int32 */
  locationId?: number | null;
  skills?: CompanyUserProfileSkillModel[] | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  url?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserProfileWorkExperienceSkillAddModel {
  /** @format int32 */
  keywordSynonymId: number;
  name: string;
}

export interface CompanyUserProfileWorkExperienceTranslationModel {
  /** @format int32 */
  profileWorkExperienceId?: number | null;
  employer?: string | null;
  title?: string | null;
  description?: string | null;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  profileTranslation?: CompanyUserProfileTranslationModel | null;
}

export interface CompanyUserProjectAssignmentModel {
  assigned?: ProjectAssignmentBaseModel[] | null;
  prospect?: ProjectAssignmentBaseModel[] | null;
}

/**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Email = 3
 *
 * UpdatedDateTime = 4
 * @format int32
 */
export enum CompanyUserQuerySort {
  CreatedDateTime = 0,
  FirstName = 1,
  LastName = 2,
  Email = 3,
  UpdatedDateTime = 4,
}

export interface CompanyUserQuerySortPageAndSortByModel {
  sortBy?: CompanyUserQuerySort;
  /**
   * Ascending = 0 (Default)
   * Descending = 1
   */
  sortOrder?: SortOrder;
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 15
   */
  itemsPerPage?: number;
}

export interface CompanyUserResumeBaseModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  created?: CreatedModel | null;
  updated?: UpdatedModel | null;
  title?: string | null;
  description?: string | null;
  slug?: string | null;
  language?: CompanyResumeTemplateLanguageModel | null;
  template?: CompanyResumeTemplateBaseModel | null;
  isPublic?: boolean;
  links?: Link[] | null;
}

export interface CompanyUserSearchSkillModel {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  companyUserId?: number | null;
  /** @deprecated */
  firstname?: string | null;
  firstName?: string | null;
  /** @deprecated */
  lastname?: string | null;
  lastName?: string | null;
  title?: string | null;
  seoId?: string | null;
  /** @format int32 */
  addressId?: number | null;
  addressDisplayName?: string | null;
  teams?: TeamBaseModel[] | null;
  skills?: SkillResultModel[] | null;
  status?: CompanyUserStatus | null;
  /** @format int32 */
  companyCandidateId?: number | null;
  groups?: CompanySubcontractorGroupBaseModel[] | null;
  companyUserType?: CompanyUserType;
}

export interface CompanyUserSkillModel {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  companyUserId?: number;
  /** @format int32 */
  numberOfDaysWorkExperience?: number;
  /** @format int32 */
  profileId?: number | null;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  level?: number | null;
  /** @format int32 */
  levelGoal?: number | null;
  /** @format date-time */
  levelGoalDeadline?: string | null;
  keyword?: KeywordModel | null;
  favourite?: boolean;
  links?: Link[] | null;
}

/**
 *
 *
 * Frånkopplad = 0
 *
 * Kommande = 2
 *
 * Aktiv = 3
 * @format int32
 */
export enum CompanyUserStatus {
  Disconnected = 0,
  PreActive = 2,
  Active = 3,
}

export interface CompanyUserSubcontractorAddEditModel {
  firstName: string;
  lastName: string;
  email: string;
  title?: string | null;
  password: string;
  passwordConfirm: string;
  gender: UserGender;
  /** @format int32 */
  profileLanguageId?: number | null;
  createProfile?: boolean;
  /** @format int32 */
  tariff?: number | null;
  phone?: string | null;
  /** @format int32 */
  currencyId?: number | null;
  /** @format int32 */
  languageId: number;
  /** @format int32 */
  companyCalendarId?: number | null;
  /** @format int32 */
  companyAddressId?: number | null;
  companyName?: string | null;
  companyIdentifier?: string | null;
  internalIdentifier?: string | null;
  linkedIn?: string | null;
  /** @format int32 */
  rating?: number | null;
}

export interface CompanyUserSubcontractorAttachmentModel {
  /** @format int32 */
  companyUserId?: number;
  attachmentType?: AttachmentType;
  /** @format int32 */
  companyId?: number | null;
  /** @format uuid */
  id?: string | null;
  title?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserSubcontractorBaseModel {
  /**
   * Disconnected = 0
   * Active = 1
   */
  status?: CompanyUserSubcontractorStatus | null;
  /** @format int32 */
  rating?: number | null;
  email?: string | null;
  companyName?: string | null;
  companyIdentifier?: string | null;
  companyAddress?: CompanyAddressModel | null;
  homeAddress?: LocationModel | null;
  image?: CompanyUserImageModel | null;
  desiredAssignment?: string | null;
  internalIdentifier?: string | null;
  twitter?: string | null;
  linkedIn?: string | null;
  homepage?: string | null;
  blog?: string | null;
  gitHub?: string | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  links?: Link[] | null;
}

export interface CompanyUserSubcontractorFileAttachmentListModel {
  /** @format int32 */
  companyUserId?: number;
  /** @format int32 */
  companyId?: number;
  attachments?: CompanyUserSubcontractorFileAttachmentModel[] | null;
  links?: Link[] | null;
}

export interface CompanyUserSubcontractorFileAttachmentModel {
  fileName?: string | null;
  extension?: string | null;
  /** @format int32 */
  companyUserId?: number;
  attachmentType?: AttachmentType;
  /** @format int32 */
  companyId?: number | null;
  /** @format uuid */
  id?: string | null;
  title?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface CompanyUserSubcontractorModel {
  resumes?: CompanyUserResumeBaseModel[] | null;
  defaultCurrency?: CurrencyModel | null;
  /** @format int32 */
  tariff?: number | null;
  /** @format date-time */
  createdDateTime?: string;
  groups?: CompanySubcontractorGroupBaseModel[] | null;
  phone?: string | null;
  tags?: CompanyTagBaseModel[] | null;
  attachments?: CompanyUserSubcontractorAttachmentModel[] | null;
  /**
   * Disconnected = 0
   * Active = 1
   */
  status?: CompanyUserSubcontractorStatus | null;
  /** @format int32 */
  rating?: number | null;
  email?: string | null;
  companyName?: string | null;
  companyIdentifier?: string | null;
  companyAddress?: CompanyAddressModel | null;
  homeAddress?: LocationModel | null;
  image?: CompanyUserImageModel | null;
  desiredAssignment?: string | null;
  internalIdentifier?: string | null;
  twitter?: string | null;
  linkedIn?: string | null;
  homepage?: string | null;
  blog?: string | null;
  gitHub?: string | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /**
   * Employee = 0,
   * Candidate = 10,
   * Subcontractor = 20
   */
  companyUserType?: CompanyUserType | null;
  /**
   * @deprecated
   * @format int32
   */
  id?: number | null;
  links?: Link[] | null;
}

/**
 *
 *
 * Frånkopplad = 0
 *
 * Aktiv = 1
 * @format int32
 */
export enum CompanyUserSubcontractorStatus {
  Disconnected = 0,
  Active = 1,
}

/**
 *
 *
 * Medarbetare = 0
 *
 * Kandidat = 10
 *
 * Underkonsult = 20
 *
 * Api = 30
 *
 * Bot = 40
 * @format int32
 */
export enum CompanyUserType {
  Employee = 0,
  Candidate = 10,
  Subcontractor = 20,
  Api = 30,
  Bot = 40,
}

/**
 *
 *
 * Timpris = 0
 *
 * Fastpris = 1
 * @format int32
 */
export enum ContractType {
  Hourly = 0,
  Fixed = 1,
}

export interface ConvertCompanyUserToAadAccountModel {
  /** @format uuid */
  objectIdentifier: string;
}

export interface CountryModel {
  /** @format int32 */
  countryId?: number;
  code?: string | null;
  name?: string | null;
}

export interface CreatedModel {
  /** @format int32 */
  companyUserId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format date-time */
  time?: string | null;
}

export interface CurrencyModel {
  /** @format int32 */
  id?: number;
  currencyCode?: string | null;
  description?: string | null;
}

export interface CustomerEventBaseModel {
  /** @format int32 */
  customerId?: number | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CustomerEventMeetingAddEditModel {
  /** @format int32 */
  customerContactId?: number | null;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  /**
   * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface CustomerEventMeetingModel {
  /** @format int32 */
  customerContactId?: number | null;
  /** @format int32 */
  customerId?: number | null;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  location?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CustomerEventModel {
  /** @format int32 */
  customerId?: number | null;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CustomerEventNoteAddEditModel {
  /** @format int32 */
  customerContactId?: number | null;
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /**
   * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface CustomerEventNoteModel {
  /** @format int32 */
  customerContactId?: number | null;
  /** @format int32 */
  customerId?: number | null;
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface CustomerEventTaskAddEditModel {
  /** @format int32 */
  customerContactId?: number | null;
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /**
   * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface CustomerEventTaskModel {
  /** @format int32 */
  customerContactId?: number | null;
  /** @format int32 */
  customerId?: number | null;
  /**
   * NotSpecified = 0
   * Phone = 1
   * Email = 2
   */
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface DynamicCompanyUserResumeModel {
  /** @format int32 */
  imageId?: number | null;
  /** @format int32 */
  parentProfileId?: number;
  /** @format int32 */
  profileTranslationId?: number;
  /** @format int32 */
  parentCompanyUserResumeId?: number | null;
  resume?: DynamicTemplateViewModel | null;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  created?: CreatedModel | null;
  updated?: UpdatedModel | null;
  title?: string | null;
  description?: string | null;
  slug?: string | null;
  language?: CompanyResumeTemplateLanguageModel | null;
  template?: CompanyResumeTemplateBaseModel | null;
  isPublic?: boolean;
  links?: Link[] | null;
}

export interface DynamicTemplateViewModel {
  blocks?: IDynamicBlockViewModel[] | null;
  logotype?: ITemplateLogotype | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  resumeTemplateId?: number;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  companyUserId?: number;
  slug?: string | null;
  title: string;
  description?: string | null;
  /** @format int32 */
  logotypeId?: number | null;
  wordEnabled?: boolean;
  profileImageSize?: ImageSize;
  allowNoProfileImage?: boolean;
  hideProfileImageInEdit?: boolean;
  companyLogotypeImageSize?: ImageSize;
  pdfEngineType?: PdfEngineType;
  wordEngineType?: WordEngineType;
  pdfOrientation?: PdfOrientation;
  /** @format int32 */
  pdfMarginTop?: number;
  /** @format int32 */
  pdfMarginRight?: number;
  /** @format int32 */
  pdfMarginBottom?: number;
  /** @format int32 */
  pdfMarginLeft?: number;
  customFooterForWkhtml?: boolean;
  pdfFooter?: boolean;
  showPreviewToggle?: boolean;
  /** @format int32 */
  contactInfoId?: number | null;
  contactInfo?: IContactInfoViewModel | null;
  userInfo?: ITemplateUserInfo | null;
  companyUserInfo?: CompanyUserInfoBlockViewModel | null;
  profileImage?: ITemplateImage | null;
  company?: ITemplateCompany | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  /** @format int32 */
  languageBranchId?: number | null;
  isPublic?: boolean;
  locked?: boolean;
  currentLanguage?: string | null;
  styleAssets?: ITemplateStyleAssetViewModel[] | null;
  customerManagedStyleAsset?: ITemplateStyleAssetViewModel | null;
  sharedStyleAssets?: ITemplateSharedAssetViewModel[] | null;
  sharedScriptAssets?: ITemplateSharedAssetViewModel[] | null;
  sharedFontAssets?: ITemplateSharedAssetViewModel[] | null;
  primaryStyleAssets?: {
    None?: ITemplateSharedAssetViewModel[];
    Primary?: ITemplateSharedAssetViewModel[];
    Classic?: ITemplateSharedAssetViewModel[];
    Dynamic?: ITemplateSharedAssetViewModel[];
    PageFlow?: ITemplateSharedAssetViewModel[];
    CinodePremium3PageFlow?: ITemplateSharedAssetViewModel[];
    CinodePremium2PageFlow?: ITemplateSharedAssetViewModel[];
    BlockWorkExperience?: ITemplateSharedAssetViewModel[];
    BlockSkillsByLevel?: ITemplateSharedAssetViewModel[];
    TemplateType?: ITemplateSharedAssetViewModel[];
  } | null;
  primaryScriptAssets?: {
    None?: ITemplateSharedAssetViewModel[];
    Primary?: ITemplateSharedAssetViewModel[];
    Classic?: ITemplateSharedAssetViewModel[];
    Dynamic?: ITemplateSharedAssetViewModel[];
    PageFlow?: ITemplateSharedAssetViewModel[];
    CinodePremium3PageFlow?: ITemplateSharedAssetViewModel[];
    CinodePremium2PageFlow?: ITemplateSharedAssetViewModel[];
    BlockWorkExperience?: ITemplateSharedAssetViewModel[];
    BlockSkillsByLevel?: ITemplateSharedAssetViewModel[];
    TemplateType?: ITemplateSharedAssetViewModel[];
  } | null;
  templateAssetTypes?: TemplateAssetType[] | null;
}

export interface EducationBlockItemModel {
  url?: string | null;
  schoolName?: string | null;
  programName?: string | null;
  degree?: string | null;
  description?: string | null;
  location?: LocationBlockModel | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface EducationBlockModel {
  hideInEdit?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideText?: boolean;
  data?: EducationBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface EmployerBlockItemModel {
  title?: string | null;
  name?: string | null;
  description?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface EmployerBlockModel {
  hideInEdit?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideText?: boolean;
  data?: EmployerBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface ErrorModel {
  /** CorrelationId */
  correlationId?: string | null;
  /** Severity of error */
  status?: string | null;
  /** Error description in plain text */
  description?: string | null;
  /**
   * Cinode specific error code
   * @format int32
   */
  code?: number | null;
  /** Url to help page containing more information */
  moreInfo?: string | null;
}

export interface EventCommentModel {
  /** @format int32 */
  id?: number | null;
  /** @format uuid */
  eventId?: string | null;
  text?: string | null;
  /** @format int32 */
  companyUserId?: number;
  companyUserName?: string | null;
  /** @format date-time */
  created?: string;
}

export interface EventMeetingAddEditModel {
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  /**
   * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface EventNoteAddEditModel {
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /**
   * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

/**
 *
 *
 * Ej angiven = 0
 *
 * Telefonsamtal = 1
 *
 * E-mail = 2
 * @format int32
 */
export enum EventNoteType {
  NotSpecified = 0,
  Phone = 1,
  Email = 2,
}

/**
 *
 *
 * Inte påbörjad = 0
 *
 * Påbörjad = 1
 *
 * Färdig = 2
 *
 * Uppskjuten = 3
 *
 * Väntar = 4
 * @format int32
 */
export enum EventStatusValue {
  NotStarted = 0,
  InProgress = 1,
  Completed = 2,
  Deferred = 3,
  WaitingForSomeoneElse = 4,
}

export interface EventTaskAddEditModel {
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /**
   * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

/**
 *
 *
 * Ej angiven = 0
 *
 * Telefonsamtal = 1
 *
 * E-mail = 2
 * @format int32
 */
export enum EventTaskType {
  NotSpecified = 0,
  Phone = 1,
  Email = 2,
}

/**
 *
 *
 * Möte = 0
 *
 * Notering = 1
 *
 * Uppgift = 2
 *
 * Samtal = 3
 * @format int32
 */
export enum EventType {
  Meeting = 0,
  Note = 1,
  Task = 2,
  Call = 3,
}

/**
 *
 *
 * Publik = 0
 *
 * Privat = 1
 * @format int32
 */
export enum EventVisibility {
  Public = 0,
  Private = 1,
}

/**
 *
 *
 * Procent = 0
 *
 * Timmar = 1
 * @format int32
 */
export enum ExtentType {
  Percent = 0,
  Hours = 1,
}

export interface ExtraSkillBlockModel {
  data?: ExtraSkillItemBlockModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface ExtraSkillItemBlockModel {
  title?: string | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface FilterModel {
  name?: string | null;
  values?: number[] | null;
}

export interface HighlightedWorkExperienceBlockItemModel {
  title?: string | null;
  description?: string | null;
  employer?: string | null;
  location?: LocationBlockModel | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string | null;
  url?: string | null;
  logotype?: ImageBlockModel | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface HighlightedWorkExperienceBlockModel {
  /** @format int32 */
  numberOfItemsInList?: number;
  /** @format int32 */
  titleLength?: number;
  /** @format int32 */
  descriptionLength?: number;
  /** @format int32 */
  employerLength?: number;
  hideInEdit?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideText?: boolean;
  data?: HighlightedWorkExperienceBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface ICompanyAddressViewModel {
  /** @format int32 */
  addressId?: number;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
  city?: string | null;
  country?: string | null;
  addressType?: AddressType;
}

export interface ICompanyCandidatePatchDocument {
  /** @format int32 */
  pipelineId?: number | null;
  /** @format int32 */
  pipelineStageId?: number | null;
  /** @format int32 */
  recruitmentManagerId?: number | null;
  state?: CompanyCandidateState | null;
  /** @format date-time */
  availableFromDate?: string | null;
  campaignCode?: string | null;
}

export interface ICompanyUserEmployeePatchDocument {
  status?: CompanyUserStatus;
  /** @format date-time */
  employmentStartDate?: string | null;
  /** @format date-time */
  employmentEndDate?: string | null;
  employmentNumber?: string | null;
  /** @format int32 */
  invoicingGoal?: number | null;
  /** @format int32 */
  mobility?: number | null;
  /** @format int32 */
  availabilityPercent?: number | null;
  /** @format date-time */
  availableFromDate?: string | null;
  title?: string | null;
  email?: string | null;
  taxTable?: string | null;
  /** @format int32 */
  baseSalary?: number | null;
  /** @format int32 */
  provision?: number | null;
  /** @format int32 */
  hourlyTargetRate?: number | null;
  /** @format int32 */
  selfCost?: number | null;
  /** @format int32 */
  locationId?: number | null;
  /** @format int32 */
  defaultCurrencyId?: number | null;
  /** @format int32 */
  displayCurrencyId?: number | null;
  firstname?: string | null;
  lastname?: string | null;
  /** @format date-time */
  dateOfBirth?: string | null;
  gender?: UserGender;
  /** @format int32 */
  companyCalendarId?: number | null;
  timezoneId?: string | null;
  phone?: string | null;
  desiredAssignment?: string | null;
  internalIdentifier?: string | null;
  twitter?: string | null;
  linkedIn?: string | null;
  homepage?: string | null;
  blog?: string | null;
  gitHub?: string | null;
}

export interface IContactInfoViewModel {
  /** @format int32 */
  contactInfoId?: number;
  displayName?: string | null;
  url?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: ICompanyAddressViewModel | null;
}

export interface IDynamicBlockViewModel {
  viewComponentName?: string | null;
  templateAssetTypes?: TemplateAssetType[] | null;
  /** @format int32 */
  companyUserResumeId?: number;
  /** @format int32 */
  companyUserId?: number;
  isEditable?: boolean;
  partialEditViewPath?: string | null;
  friendlyBlockName?: string | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface ITemplateCompany {
  /** @format int32 */
  companyId?: number;
  name?: string | null;
  seoId?: string | null;
  description?: string | null;
  corporateIdentityNumber?: string | null;
  /** @format int32 */
  registrationYear?: number;
  isTaxRegistered?: boolean;
  isUsingFreemiumResumes?: boolean;
}

export interface ITemplateImage {
  /** @format int32 */
  companyUserResumeId?: number;
  /** @format int32 */
  companyUserId?: number;
  /** @format int32 */
  imageId?: number;
  imageUrl?: string | null;
  imageOriginalUrl?: string | null;
  allowNoProfileImage?: boolean;
  showImage?: boolean;
  imageSize?: ImageSize;
  useDefaultImage?: boolean;
  /** @format uuid */
  imageFileName?: string;
  extension?: string | null;
}

export interface ITemplateLogotype {
  imageUrl?: string | null;
  imageOriginalUrl?: string | null;
  imageSize?: ImageSize;
  /** @format uuid */
  imageFileName?: string;
  extension?: string | null;
}

export interface ITemplateSharedAssetViewModel {
  description?: string | null;
  /** @format int32 */
  order?: number;
  fileName?: string | null;
  version?: string | null;
}

export interface ITemplateStyleAssetViewModel {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  resumeTemplateId?: number;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  order?: number;
  fileName?: string | null;
  version?: string | null;
}

export interface ITemplateUserInfo {
  firstname?: string | null;
  lastname?: string | null;
  fullname?: string | null;
  phone?: string | null;
  /** @format date-time */
  dateOfBirth?: string | null;
  email?: string | null;
  twitterUserName?: string | null;
  linkedInUserName?: string | null;
  homepageUrl?: string | null;
  bloggUrl?: string | null;
  gitHubUserName?: string | null;
  location?: string | null;
  country?: string | null;
  internalIdentifier?: string | null;
}

export interface ImageBlockModel {
  /** @format int32 */
  imageId?: number | null;
  /** @format int32 */
  companyImageId?: number | null;
  imageOriginalUrl?: string | null;
  /** @format uuid */
  imageFileName?: string;
  extension?: string | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

/**
 *
 *
 * Original = 0
 *
 * H40W40 = 1
 *
 * H100W100 = 2
 *
 * H200W200 = 3
 *
 * H300W300 = 4
 *
 * W100 = 5
 *
 * H60 = 6
 *
 * H100 = 7
 *
 * H40 = 8
 *
 * W340 = 9
 *
 * W1800 = 10
 *
 * H750W1800 = 11
 *
 * H250 = 12
 *
 * H400W400 = 13
 *
 * W150 = 14
 *
 * W1200 = 15
 * @format int32
 */
export enum ImageSize {
  Original = 0,
  H40W40 = 1,
  H100W100 = 2,
  H200W200 = 3,
  H300W300 = 4,
  W100 = 5,
  H60 = 6,
  H100 = 7,
  H40 = 8,
  W340 = 9,
  W1800 = 10,
  H750W1800 = 11,
  H250 = 12,
  H400W400 = 13,
  W150 = 14,
  W1200 = 15,
}

export interface ImportProfileAsyncOperation {
  profile?: CompanyUserProfileBaseModel | null;
  /** @format int32 */
  operationId?: number;
  status?: LongRunningStatus;
  errors?: string[] | null;
}

/** Array of patch operations to perform */
export type JsonPatchDocument = Operation[];

export interface KeywordModel {
  /** @format int32 */
  id?: number | null;
  /**
   * Uncategorized = 0,
   * Industries = 1
   * Roles = 2
   * Tools = 3
   * Techniques = 4
   * MethodsProcesses = 5
   * Platforms = 6
   * Products = 7
   * Certifications = 10
   * Materials = 11
   * SpecificationsRegulations = 12
   * Hardware = 13
   * OperationalAreaAndFunction = 14
   * Construction = 15
   * ReportsInvestigations = 16
   * SpecialitiesMedicine = 17
   * StandardsRegulations = 18
   * Accreditation = 19
   */
  type?: KeywordType;
  /** @format int32 */
  masterSynonymId?: number | null;
  masterSynonym?: string | null;
  synonyms?: string[] | null;
  universal?: boolean;
  verified?: boolean;
}

export interface KeywordSynonymModel {
  /** @format int32 */
  keywordId?: number | null;
  /** @format int32 */
  id?: number | null;
  keyword?: KeywordModel | null;
  name?: string | null;
  seoId?: string | null;
  description?: string | null;
  /** @format int32 */
  languageId?: number | null;
}

/**
 *
 *
 * Okategoriserad = 0
 *
 * Branscher = 1
 *
 * Roller = 2
 *
 * Verktyg = 3
 *
 * Tekniker = 4
 *
 * Metoder och processer = 5
 *
 * Plattformar = 6
 *
 * Produkter och tjänster = 7
 *
 * Certifieringar = 10
 *
 * Material = 11
 *
 * Specifikationer och förordningar = 12
 *
 * Hårdvara = 13
 *
 * Verksamhet och funktion = 14
 *
 * Byggnationer = 15
 *
 * Rapporter och utredningar = 16
 *
 * Specialiteter - Medicin = 17
 *
 * Standarder och regelverk = 18
 *
 * Behörigheter = 19
 *
 * Mjuka färdigheter = 20
 *
 * CustomName = 100
 * @format int32
 */
export enum KeywordType {
  Uncategorized = 0,
  Industries = 1,
  Roles = 2,
  Tools = 3,
  Techniques = 4,
  MethodsProcesses = 5,
  Platforms = 6,
  Products = 7,
  Certifications = 10,
  Materials = 11,
  SpecificationsRegulations = 12,
  Hardware = 13,
  OperationalAreaAndFunction = 14,
  Construction = 15,
  ReportsInvestigations = 16,
  SpecialitiesMedicine = 17,
  StandardsRegulations = 18,
  Accreditation = 19,
  SoftSkills = 20,
  CustomName = 100,
}

export interface LanguageBlockModel {
  data?: LanguageItemBlockModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface LanguageItemBlockModel {
  culture?: string | null;
  lang?: string | null;
  country?: string | null;
  name?: string | null;
  /** @format int32 */
  level?: number;
  /** @format int32 */
  languageId?: number | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

/**
 *
 *
 * Enstaka ord och fraser = 0
 *
 * Grundläggande kunskaper = 1
 *
 * Goda kunskaper = 2
 *
 * Flytande = 3
 *
 * Modersmål = 4
 * @format int32
 */
export enum LanguageLevel {
  Level0 = 0,
  Level1 = 1,
  Level2 = 2,
  Level3 = 3,
  Level4 = 4,
}

export interface Link {
  href?: string | null;
  rel?: string | null;
  methods?: string[] | null;
}

export interface LocationBlockModel {
  /** @format int32 */
  locationId?: number;
  googleId?: string | null;
  name?: string | null;
  street?: string | null;
  streetNumber?: string | null;
  zipCode?: string | null;
  city?: string | null;
  country?: string | null;
  countryCode?: string | null;
  formattedAddress?: string | null;
  phoneNumber?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  webSiteUrl?: string | null;
  displayName?: string | null;
}

export interface LocationModel {
  /** @format int32 */
  locationId?: number;
  name?: string | null;
  street?: string | null;
  streetNumber?: string | null;
  zipCode?: string | null;
  city?: string | null;
  country?: string | null;
  countryCode?: string | null;
  formattedAddress?: string | null;
  phoneNumber?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  webSiteUrl?: string | null;
  displayName?: string | null;
}

/**
 *
 *
 * InProgress = 0
 *
 * Completed = 1
 *
 * Failed = 2
 * @format int32
 */
export enum LongRunningStatus {
  InProgress = 0,
  Completed = 1,
  Failed = 2,
}

export interface MentionTextModel {
  value?: string | null;
}

/**
 *
 *
 * CompanyUserResume = 1
 *
 * Customers = 2
 *
 * Assignments = 3
 *
 * Partners = 4
 *
 * Offers = 5
 *
 * Reports = 6
 *
 * Recruitment = 8
 *
 * Absence = 9
 *
 * Api = 10
 *
 * ReferenceText = 11
 *
 * ProfileCompleteness = 12
 *
 * CalendarSync = 13
 *
 * AllowWidgetModification = 14
 *
 * ConfiguredFilters = 19
 *
 * SkillSets = 20
 *
 * ProfileUpdateReminders = 21
 *
 * OverdueProjectReminders = 22
 *
 * EmailSync = 23
 *
 * ApplicationRegistration = 30
 *
 * ApplicationDirectory = 31
 *
 * NextGenResume = 40
 *
 * HideLinkToMvcProfilePageInSidebarAndRemoveEditAndCopyCVInoldViewAndTheBetaChips = 41
 *
 * ImportCv = 42
 *
 * AI = 43
 *
 * ExternalAccounts = 50
 *
 * ConvertAccount = 51
 *
 * UserProvisioning = 52
 *
 * Webhooks = 60
 *
 * GrowthPlan = 70
 *
 * Intercom = 600
 * @format int32
 */
export enum ModuleType {
  CompanyUserResume = 1,
  Customers = 2,
  Assignments = 3,
  Partners = 4,
  Offers = 5,
  Reports = 6,
  Recruitment = 8,
  Absence = 9,
  Api = 10,
  ReferenceText = 11,
  ProfileCompleteness = 12,
  CalendarSync = 13,
  AllowWidgetModification = 14,
  ConfiguredFilters = 19,
  SkillSets = 20,
  ProfileUpdateReminders = 21,
  OverdueProjectReminders = 22,
  EmailSync = 23,
  ApplicationRegistration = 30,
  ApplicationDirectory = 31,
  NextGenResume = 40,
  HideLinkToMvcProfilePageInSidebarAndRemoveEditAndCopyCVInoldViewAndTheBetaChips = 41,
  ImportCv = 42,
  AI = 43,
  ExternalAccounts = 50,
  ConvertAccount = 51,
  UserProvisioning = 52,
  Webhooks = 60,
  GrowthPlan = 70,
  Intercom = 600,
}

export interface Operation {
  op?: string;
  value?: object | null;
  path?: string;
}

export interface PartnerBaseModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  name?: string | null;
  description?: string | null;
  partnerConnection?: PartnerConnectionBaseModel | null;
  companyUserManager?: CompanyUserBaseModel | null;
  hasTrusts?: boolean;
  isEnabled?: boolean;
}

export interface PartnerConnectionBaseModel {
  /** @format int32 */
  companyId?: number;
  company?: CompanyBaseModel | null;
  /** @format int32 */
  partnerId?: number;
  /** @format int32 */
  connectedPartnerConnectionId?: number | null;
  /** @format int32 */
  partnerCompanyId?: number;
  partnerCompany?: CompanyBaseModel | null;
  grantedTrusts?: PartnerConnectionTrustType[] | null;
  receivedTrusts?: PartnerConnectionTrustType[] | null;
}

/**
 *
 *
 * Anonymiserat = 10
 *
 * Transparent = 20
 *
 * Avisera = 30
 *
 * Boka = 40
 *
 * Matcha = 50
 *
 * Tillgänglighet = 60
 * @format int32
 */
export enum PartnerConnectionTrustType {
  UserViewAnonymous = 10,
  UserViewTransparent = 20,
  UserAssignRequest = 30,
  UserAssignBook = 40,
  UserSkillMatch = 50,
  UserAvailability = 60,
}

export interface PartnerRecipientBaseModel {
  /** @format int32 */
  partnerId?: number;
  requestedCompanyUserAnonymousHash?: string | null;
  /** @format int32 */
  requestedCompanyUserId?: number | null;
}

export interface PartnersFilterModel {
  query?: string | null;
  onlyIncludeConnectedPartners?: boolean;
}

export interface PartnersOverviewModel {
  partners?: PartnerBaseModel[] | null;
  /** @format int32 */
  totalItems?: number;
  filter?: PartnersFilterModel | null;
}

/**
 *
 *
 * WkHtmlToPdf = 0
 *
 * Puppeteer = 2
 * @format int32
 */
export enum PdfEngineType {
  WkHtmlToPdf = 0,
  Puppeteer = 2,
}

/**
 *
 *
 * Portrait = 0
 *
 * Landscape = 1
 * @format int32
 */
export enum PdfOrientation {
  Portrait = 0,
  Landscape = 1,
}

export interface PresentationBlockModel {
  /** @format date-time */
  discarded?: string | null;
  title?: string | null;
  description?: string | null;
  personalDescription?: string | null;
  /** @deprecated */
  personalDescriptionHeading?: string | null;
  subHeading?: string | null;
  useAdvancedFormatting?: boolean;
  editorSettings?: string | null;
  hideSubHeading?: boolean;
  /** @format int32 */
  personalPresentationLength?: number;
  showPersonalPresentation?: boolean;
  /** @format int32 */
  titleLength?: number;
  /** @format int32 */
  descriptionLength?: number;
  /** @format int32 */
  employerLength?: number;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface ProfileLanguageModel {
  /** @format int32 */
  languageId?: number | null;
  name?: string | null;
  culture?: string | null;
  lang?: string | null;
  country?: string | null;
}

export interface ProjectAddEditModel {
  title: string;
  /** @format int32 */
  customerId: number;
  description?: string | null;
  identifier?: string | null;
  customerIdentifier?: string | null;
  /** @format int32 */
  intermediatorId?: number | null;
  /** @format date-time */
  estimatedCloseDate?: string | null;
  /** @format int32 */
  estimatedValue?: number | null;
  /** @format int32 */
  contractValue?: number | null;
  /** @format int32 */
  probability?: number | null;
  /** @format int32 */
  pipelineId?: number | null;
  /** @format int32 */
  pipelineStageId?: number | null;
  /** @format int32 */
  currencyId?: number | null;
  projectState?: ProjectState;
  location?: LocationModel | null;
  /** @format int32 */
  teamId?: number | null;
  /** @format int32 */
  stateReasonId?: number | null;
  /** @default 5 */
  priority?: ProjectPriority;
  /** List of sales managers employee ids */
  salesManagerIds?: number[] | null;
  /** List of project managers employee ids */
  projectManagerIds?: number[] | null;
}

export interface ProjectAssignmentAddModel {
  title: string;
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  rate?: number | null;
  /** @format int32 */
  extent?: number | null;
  /** @format date-time */
  oralAgreementToDate?: string | null;
  /** @format date-time */
  optionToDate?: string | null;
  contractType?: ContractType;
  extentType?: ExtentType;
  /** @format int32 */
  currencyId?: number | null;
}

/**
 *
 *
 * Ej bokad = 0
 *
 * Preliminär = 1
 *
 * Tillsatt = 2
 * @format int32
 */
export enum ProjectAssignmentAllocationStatus {
  NotBooked = 0,
  Preliminary = 1,
  Assigned = 2,
}

export interface ProjectAssignmentAnnounceModel {
  title: string;
  description?: string | null;
  /** @format date-time */
  deadline: string;
  /** @format double */
  price?: number | null;
  isPriceNegotiable?: boolean;
  /** @format int32 */
  currencyId?: number | null;
  /** @format int32 */
  managerCompanyUserId: number;
  attachmentIds?: string[] | null;
  partnerRecipients?: PartnerRecipientBaseModel[] | null;
  subcontractorIds?: number[] | null;
  announceToPartnerNetwork?: boolean | null;
  announceToMarket?: boolean | null;
  isRemote?: boolean;
  isEndCustomerAssignment?: boolean | null;
  /** Set to true if you actually want to publish the announcement to your recipients, if you are developing/testing the endpoint it should be false, then no persist will take place. */
  publishForReal?: boolean;
}

export interface ProjectAssignmentAnnouncementBaseModel {
  /** @format int32 */
  requestId?: number;
  title?: string | null;
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  projectAssignmentId?: number;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  deadline?: string;
  /** @format double */
  price?: number | null;
  contractType?: ContractType;
  description?: string | null;
  descriptionHtml?: string | null;
  currencyCode?: string | null;
  /** @format int32 */
  currencyId?: number | null;
  status?: ProjectAssignmentRequestStatus;
  statusText?: string | null;
  isAnnouncedToPartnerNetwork?: boolean | null;
  isPriceNegotiable?: boolean;
  isRemote?: boolean | null;
  isAnnouncedToMarket?: boolean | null;
  isEndCustomerAssignment?: boolean | null;
}

export interface ProjectAssignmentBaseModel {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number;
  project?: ProjectBaseModel | null;
  customer?: CompanyCustomerBaseModel | null;
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  extentType?: ExtentType;
  /** @format int32 */
  extent?: number | null;
  links?: Link[] | null;
}

export interface ProjectAssignmentEditModel {
  /** @format int32 */
  projectAssignmentId: number;
  title: string;
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  rate?: number | null;
  /** @format int32 */
  extent?: number | null;
  /** @format date-time */
  oralAgreementToDate?: string | null;
  /** @format date-time */
  optionToDate?: string | null;
  contractType?: ContractType;
  extentType?: ExtentType;
  /** @format int32 */
  currencyId?: number | null;
}

/**
 *
 *
 * Procent = 0
 *
 * Timmar = 1
 * @format int32
 */
export enum ProjectAssignmentExtentType {
  Percent = 0,
  Hours = 1,
}

export interface ProjectAssignmentFilterModel {
  /** Pipeline Ids can be retrieved from the Project Pipelines endpoint */
  pipelines?: number[] | null;
  /**
   * 0 - Employee
   * 1 - Partner consultant
   * 2- Subcontractor
   */
  projectAssignmentMemberTypes?: ProjectAssignmentMemberType[] | null;
  /**
   * 1 - Upcoming
   * 2 - Ongoing
   */
  projectAssignmentStatuses?: ProjectAssignmentStatus[] | null;
  /** Team Id of Employee assigned to Role */
  teams?: number[] | null;
  /**
   * 0 - Open
   * 30 - Won
   * 40 - Lost
   * 50 - Abandoned
   * 60 - Suspended
   */
  projectStates?: ProjectState[] | null;
  projectAssignmentAllocationStatuses?: ProjectAssignmentAllocationStatus[] | null;
}

/**
 *
 *
 * None = 0
 *
 * Preliminär = 1
 *
 * Tillsatt = 2
 *
 * Offererad = 3
 * @format int32
 */
export enum ProjectAssignmentMemberAllocationStatus {
  None = 0,
  Preliminary = 1,
  Assigned = 2,
  Offered = 3,
}

export interface ProjectAssignmentMemberEmployeeAddModel {
  /** @format int32 */
  teamId?: number | null;
  /** @format int32 */
  companyUserId: number;
  status: ProjectAssignmentAllocationStatus;
}

export interface ProjectAssignmentMemberEmployeeEditModel {
  /** @format int32 */
  teamId?: number | null;
  /** @format int32 */
  id: number;
  state: ProjectAssignmentMemberState;
  /** @format int32 */
  companyUserId: number;
  status: ProjectAssignmentAllocationStatus;
}

export interface ProjectAssignmentMemberModel {
  /** @format int32 */
  companyUserId?: number | null;
  /** @format int32 */
  companyId?: number | null;
  /** @format int32 */
  id?: number | null;
  seoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  companyUserType?: CompanyUserType | null;
  /** Obsolete */
  status?: CompanyUserStatus | null;
  /** @format int32 */
  projectAssignmentMemberId?: number;
  projectAssignmentMemberState?: ProjectAssignmentMemberState | null;
  links?: Link[] | null;
}

/**
 *
 *
 * Tillagd = 0
 *
 * Offererad = 10
 *
 * Avböjd av kund = 20
 *
 * Avböjd av oss = 30
 *
 * Pausad = 40
 * @format int32
 */
export enum ProjectAssignmentMemberState {
  Allocated = 0,
  Offered = 10,
  Rejected = 20,
  Revoked = 30,
  Deferred = 40,
}

export interface ProjectAssignmentMemberSubcontractorAddModel {
  /** @format int32 */
  groupId?: number | null;
  /** @format int32 */
  currencyId?: number | null;
  /** @format double */
  tariff?: number | null;
  /** @format int32 */
  companyUserId: number;
  status: ProjectAssignmentAllocationStatus;
}

export interface ProjectAssignmentMemberSubcontractorEditModel {
  /** @format int32 */
  groupId?: number | null;
  /** @format int32 */
  currencyId?: number | null;
  /** @format double */
  tariff?: number | null;
  /** @format int32 */
  id: number;
  state: ProjectAssignmentMemberState;
  /** @format int32 */
  companyUserId: number;
  status: ProjectAssignmentAllocationStatus;
}

/**
 *
 *
 * Unspecified = 0
 *
 * Medarbetare = 1
 *
 * Partnerkonsult = 2
 *
 * Underkonsult = 3
 * @format int32
 */
export enum ProjectAssignmentMemberType {
  Unspecified = 0,
  CompanyUser = 1,
  PartnerCompanyUser = 2,
  CompanyUserSubcontractor = 3,
}

export interface ProjectAssignmentModel {
  company?: CompanyBaseModel | null;
  assigned?: ProjectAssignmentMemberModel | null;
  prospects?: ProjectAssignmentMemberModel[] | null;
  seoId?: string | null;
  skills?: ProjectAssignmentSkillBaseModel[] | null;
  /** @format int32 */
  projectAssignmentMemberId?: number | null;
  /** @format int32 */
  rate?: number | null;
  /** @format date-time */
  oralAgreementToDate?: string | null;
  /** @format date-time */
  optionToDate?: string | null;
  contractType?: ContractType;
  isAssigned?: boolean;
  currency?: CurrencyModel | null;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number;
  project?: ProjectBaseModel | null;
  customer?: CompanyCustomerBaseModel | null;
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  extentType?: ExtentType;
  /** @format int32 */
  extent?: number | null;
  links?: Link[] | null;
}

/**
 *
 *
 * Öppen = 0
 *
 * Återkallad = 10
 *
 * Stängd = 20
 * @format int32
 */
export enum ProjectAssignmentRequestStatus {
  Open = 0,
  Revoked = 10,
  Closed = 20,
}

export interface ProjectAssignmentSkillAddModel {
  name: string;
  /** @format int32 */
  keywordSynonymId?: number | null;
  /** @format int32 */
  level?: number | null;
  isMandatory?: boolean | null;
}

export interface ProjectAssignmentSkillBaseModel {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  projectAssignmentId?: number;
  /** @format int32 */
  keywordId?: number;
  /** @format int32 */
  level?: number;
  keyword?: KeywordModel | null;
  links?: Link[] | null;
}

export interface ProjectAssignmentSkillEditModel {
  name?: string | null;
  /** @format int32 */
  level?: number | null;
  isMandatory?: boolean | null;
}

export interface ProjectAssignmentSkillModel {
  projectAssignment?: ProjectAssignmentBaseModel | null;
  project?: ProjectBaseModel | null;
  company?: CompanyBaseModel | null;
  customer?: CompanyCustomerBaseModel | null;
  /** @format int32 */
  keywordSynonymId?: number;
  keywordSynonym?: KeywordSynonymModel | null;
  isMandatory?: boolean;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  projectAssignmentId?: number;
  /** @format int32 */
  keywordId?: number;
  /** @format int32 */
  level?: number;
  keyword?: KeywordModel | null;
  links?: Link[] | null;
}

/**
 *
 *
 * Inga datum valda = 0
 *
 * Kommande = 1
 *
 * Pågående = 2
 *
 * Avslutat = 3
 * @format int32
 */
export enum ProjectAssignmentStatus {
  Unspecified = 0,
  Coming = 1,
  Ongoing = 2,
  Ended = 3,
}

export interface ProjectAssignmentWithStatusModel {
  /** @format int32 */
  pipelineId?: number | null;
  projectPipelineStageTitle?: string | null;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number;
  /**
   * 0 - Open
   * 30 - Won
   * 40 - Lost
   * 50 - Abandoned
   * 60 - Suspended
   */
  projectState?: ProjectState;
  /** @format int32 */
  probability?: number;
  /**
   * Unspecified = 0,
   * Coming = 1,
   * Ongoing = 2,
   * Ended = 3
   * @format int32
   */
  projectAssignmentId?: number;
  /**
   * None = 0,
   * Preliminary = 1,
   * Assigned = 2,
   */
  projectAssignmentAllocationStatus?: ProjectAssignmentMemberAllocationStatus;
  /**
   * Unspecified = 0,
   * Employee = 1,
   * Partner Consultant = 2,
   * Subcontractor = 3
   */
  projectAssignmentMemberType?: ProjectAssignmentMemberType;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format date-time */
  optionToDate?: string | null;
  /** @format date-time */
  oralAgreementToDate?: string | null;
  /** @format int32 */
  projectAssignmentExtent?: number;
  /**
   * Percent = 0,
   * Hours = 1,
   */
  projectAssignmentExtentType?: ProjectAssignmentExtentType;
  /** @format int32 */
  rate?: number | null;
  /** @format date-time */
  estimatedCloseDate?: string | null;
  assigned?: ProjectAssignmentMemberModel | null;
}

export interface ProjectAttachmentModel {
  /** @format int32 */
  projectId?: number;
  attachmentType?: AttachmentType;
  /** @format int32 */
  companyId?: number | null;
  /** @format uuid */
  id?: string | null;
  title?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface ProjectBaseModel {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  identifier?: string | null;
  customerIdentifier?: string | null;
  links?: Link[] | null;
}

export interface ProjectEventBaseModel {
  /** @format int32 */
  projectId?: number | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface ProjectEventMeetingAddEditModel {
  /** @format int32 */
  customerId?: number;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  /**
   * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface ProjectEventMeetingModel {
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number | null;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  location?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface ProjectEventModel {
  /** @format int32 */
  projectId?: number | null;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface ProjectEventNoteAddEditModel {
  /** @format int32 */
  customerId?: number;
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /**
   * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface ProjectEventNoteModel {
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number | null;
  noteType?: EventNoteType | null;
  /** @format date-time */
  noteDate?: string | null;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface ProjectEventTaskAddEditModel {
  /** @format int32 */
  customerId?: number;
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /**
   * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
   * If empty, the timezone of the executing user (API account) will be used.
   */
  timezoneId?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  type?: EventType;
  title: string;
  description?: string | null;
  visibility?: EventVisibility;
}

export interface ProjectEventTaskModel {
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  projectId?: number | null;
  /**
   * NotSpecified = 0
   * Phone = 1
   * Email = 2
   */
  taskType?: EventTaskType | null;
  hasTime?: boolean | null;
  /** @format date-time */
  dueDateTime?: string | null;
  /** @format int32 */
  assignedToCompanyUserId?: number | null;
  status?: EventStatusValue;
  /** @format int32 */
  createdByCompanyUserId?: number;
  /** @format int32 */
  updatedByCompanyUserId?: number | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string | null;
  visibility?: EventVisibility;
  comments?: EventCommentModel[] | null;
  /**
   * Meeting = 0
   * Note = 1
   * Task = 2
   */
  type?: EventType;
  /** @format uuid */
  id?: string | null;
  /** @format int32 */
  companyId?: number | null;
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  eventDate?: string;
  links?: Link[] | null;
}

export interface ProjectModel {
  company?: CompanyBaseModel | null;
  customer?: CompanyCustomerBaseModel | null;
  seoId?: string | null;
  /** @format int32 */
  locationId?: number | null;
  googleId?: string | null;
  /** @format int32 */
  probability?: number | null;
  /** @format int32 */
  estimatedValue?: number | null;
  /** @format int32 */
  contractValue?: number | null;
  /** @format date-time */
  estimatedCloseDate?: string | null;
  managers?: CompanyUserBaseModel[] | null;
  /** @deprecated */
  salesManager?: CompanyUserBaseModel | null;
  salesManagers?: CompanyUserBaseModel[] | null;
  intermediator?: CompanyCustomerBaseModel | null;
  events?: ProjectEventBaseModel[] | null;
  customerContacts?: CompanyCustomerContactBaseModel[] | null;
  intermediatorContacts?: CompanyCustomerContactBaseModel[] | null;
  assignments?: ProjectAssignmentBaseModel[] | null;
  attachments?: ProjectAttachmentModel[] | null;
  tags?: CompanyTagBaseModel[] | null;
  /** @format int32 */
  pipelineId?: number | null;
  /** @format int32 */
  currentStageId?: number | null;
  currency?: CurrencyModel | null;
  projectReferences?: ProjectReferenceModel[] | null;
  /**
   * 0 = Open
   * 30 = Won
   * 40 = Lost
   * 50 = Abandoned
   * 60 = Suspended
   */
  currentState?: ProjectState;
  stateHistory?: ProjectStateHistoryModel[] | null;
  createdBy?: CompanyUserBaseModel | null;
  updatedBy?: CompanyUserBaseModel | null;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  updatedDateTime?: string | null;
  /** @format int32 */
  teamId?: number | null;
  /** @format int32 */
  stateReasonId?: number | null;
  /** List of sales managers employee ids */
  salesManagerIds?: number[] | null;
  /** List of project managers employee ids */
  projectManagerIds?: number[] | null;
  priority?: ProjectPriority;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  identifier?: string | null;
  customerIdentifier?: string | null;
  links?: Link[] | null;
}

export interface ProjectPipelineModel {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  stages?: ProjectPipelineStageModel[] | null;
}

export interface ProjectPipelineStageModel {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  /** @format int32 */
  order?: number;
  /** @format int32 */
  probability?: number | null;
}

/**
 *
 *
 * Låg = 3
 *
 * Medel = 5
 *
 * Hög = 8
 * @format int32
 */
export enum ProjectPriority {
  Low = 3,
  Medium = 5,
  High = 8,
}

/**
 *
 *
 * CreatedDateTime = 0
 *
 * Title = 1
 *
 * Identifier = 2
 *
 * CustomerIdentifier = 3
 *
 * SeoId = 4
 *
 * UpdatedDateTime = 5
 *
 * LastTouchDateTime = 6
 * @format int32
 */
export enum ProjectQuerySort {
  CreatedDateTime = 0,
  Title = 1,
  Identifier = 2,
  CustomerIdentifier = 3,
  SeoId = 4,
  UpdatedDateTime = 5,
  LastTouchDateTime = 6,
}

export interface ProjectQuerySortPageAndSortByModel {
  sortBy?: ProjectQuerySort;
  /**
   * Ascending = 0 (Default)
   * Descending = 1
   */
  sortOrder?: SortOrder;
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 15
   */
  itemsPerPage?: number;
}

export interface ProjectReferenceModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  projectId?: number;
  title?: string | null;
  text?: string | null;
  language?: string | null;
  links?: Link[] | null;
}

/**
 *
 *
 * Öppen = 0
 *
 * Vunnen = 30
 *
 * Förlorad = 40
 *
 * Avböjd = 50
 *
 * Uppskjuten = 60
 * @format int32
 */
export enum ProjectState {
  Open = 0,
  Won = 30,
  Lost = 40,
  Abandoned = 50,
  Suspended = 60,
}

export interface ProjectStateHistoryModel {
  state?: ProjectState;
  /** @format date-time */
  updated?: string;
  reason?: ProjectStateReasonModel | null;
}

export interface ProjectStateReasonModel {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
}

export interface RecruitmentSourceModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number;
  name?: string | null;
}

export interface ReferenceBlockItemModel {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  telephone?: string | null;
  company?: string | null;
  position?: string | null;
  text?: string | null;
  workExperience?: string | null;
  /** @format int32 */
  workExperienceId?: number | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface ReferenceBlockModel {
  hideDescription?: boolean;
  hideInEdit?: boolean;
  data?: ReferenceBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface ResumeModel {
  presentation?: PresentationBlockModel | null;
  highlightedWorkExperience?: HighlightedWorkExperienceBlockModel | null;
  skillsByCategory?: SkillByCategoryBlockModel | null;
  topSkills?: TopSkillBlockModel | null;
  workExperience?: WorkExperienceBlockModel | null;
  skills?: SkillModelModel | null;
  employer?: EmployerBlockModel | null;
  training?: TrainingBlockModel | null;
  education?: EducationBlockModel | null;
  language?: LanguageBlockModel | null;
  commitment?: CommitmentBlockModel | null;
  extraSkills?: ExtraSkillBlockModel | null;
  reference?: ReferenceBlockModel | null;
  text?: TextBlockModel | null;
  /** @format int32 */
  id?: number;
}

export interface RoleModel {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  description?: string | null;
  level?: AccessLevel | null;
}

export interface SearchCompanyCandidateQueryModel {
  term?: string | null;
  /** @format int32 */
  rating?: number | null;
  states?: CompanyCandidateState[] | null;
  /** @format int32 */
  pipeline?: number | null;
  noRecruiter?: boolean;
  recruiters?: number[] | null;
  teams?: number[] | null;
  sources?: number[] | null;
  pageAndSortBy?: CompanyCandidateQuerySortPageAndSortByModel | null;
}

export interface SearchCompanyCandidateResultModel {
  pagedAndSortedBy?: CompanyCandidateQuerySortPageAndSortByModel | null;
  result?: CompanyCandidateBaseModel[] | null;
  /** @format int32 */
  hits?: number;
  /** @format int32 */
  totalItems?: number;
}

export interface SearchCompanyCustomerContactQueryModel {
  term?: string | null;
  managers?: number[] | null;
  customers?: number[] | null;
  tags?: number[] | null;
  pageAndSortBy?: CompanyCustomerContactQuerySortPageAndSortByModel | null;
}

export interface SearchCompanyCustomerContactResultModel {
  pagedAndSortedBy?: CompanyCustomerContactQuerySortPageAndSortByModel | null;
  result?: CompanyCustomerContactModel[] | null;
  /** @format int32 */
  hits?: number;
  /** @format int32 */
  totalItems?: number;
}

export interface SearchCompanyCustomerQueryModel {
  name?: string | null;
  nameOperator?: StringComparisonOperator;
  identification?: string | null;
  identificationOperator?: StringComparisonOperator;
  corporateIdentityNumber?: string | null;
  corporateIdentityNumberOperator?: StringComparisonOperator;
  pageAndSortBy?: CompanyCustomerQuerySortPageAndSortByModel | null;
}

export interface SearchCompanyCustomerResultModel {
  pagedAndSortedBy?: CompanyCustomerQuerySortPageAndSortByModel | null;
  result?: CompanyCustomerBaseModel[] | null;
  /** @format int32 */
  hits?: number;
  /** @format int32 */
  totalItems?: number;
}

export interface SearchCompanyUserQueryModel {
  term?: string | null;
  pageAndSortBy?: CompanyUserQuerySortPageAndSortByModel | null;
}

export interface SearchCompanyUserResultModel {
  pagedAndSortedBy?: CompanyUserQuerySortPageAndSortByModel | null;
  result?: CompanyUserBaseModel[] | null;
  /** @format int32 */
  hits?: number;
  /** @format int32 */
  totalItems?: number;
}

export interface SearchProjectQueryModel {
  title?: string | null;
  identification?: string | null;
  customerIdentifier?: string | null;
  corporateIdentityNumber?: string | null;
  /** @format int32 */
  customerId?: number | null;
  pageAndSortBy?: ProjectQuerySortPageAndSortByModel | null;
  /** Your Project Pipelines can be retrieved from the GET ProjectPipelines endpoint */
  pipelines?: number[] | null;
  salesManagers?: number[] | null;
  customers?: number[] | null;
  intermediators?: number[] | null;
  /**
   * Open = 0,
   * Won = 30,
   * Lost = 40,
   * Abandoned = 50,
   * Suspended = 60
   */
  projectStates?: ProjectState[] | null;
}

export interface SearchProjectsResultModel {
  pagedAndSortedBy?: ProjectQuerySortPageAndSortByModel | null;
  result?: ProjectBaseModel[] | null;
  /** @format int32 */
  hits?: number;
  /** @format int32 */
  totalItems?: number;
}

export interface SearchSkillModel {
  /** @format int32 */
  keywordId?: number | null;
  /** @format int32 */
  min?: number | null;
  /** @format int32 */
  max?: number | null;
}

export interface SearchSkillQueryModel {
  skills?: SearchSkillModel[] | null;
  filters?: FilterModel[] | null;
}

export interface SearchSkillResultModel {
  query?: SearchSkillQueryModel | null;
  hits?: CompanyUserSearchSkillModel[] | null;
}

export interface SkillBlockItemModel {
  name?: string | null;
  /** @format int32 */
  level?: number;
  /** @format int32 */
  keywordTypeId?: number | null;
  keywordTypeName?: string | null;
  /** @format int32 */
  numberOfDaysWorkExperience?: number | null;
  /** @format date-time */
  lastWorkExperienceDate?: string | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface SkillByCategoryBlockItemModel {
  /** @format int32 */
  keywordTypeId?: number | null;
  name?: string | null;
  description?: string | null;
  skills?: SkillBlockItemModel[] | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface SkillByCategoryBlockModel {
  data?: SkillByCategoryBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface SkillModelModel {
  hideInEdit?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideText?: boolean;
  data?: SkillBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface SkillResultModel {
  /** @format int32 */
  keywordId?: number | null;
  /** @format int32 */
  keywordSynonymId?: number | null;
  keywordSynonymName?: string | null;
  /** @format int32 */
  masterSynonymId?: number | null;
  masterSynonymName?: string | null;
  /** @format int32 */
  level?: number | null;
}

export interface SkillSearchQueryTermModel {
  term: string;
  /** @format int32 */
  min?: number | null;
  /** @format int32 */
  max?: number | null;
  /** @format int32 */
  limit?: number | null;
}

/**
 * 0 - Ascending,
 * 1 - Descending
 * @format int32
 */
export enum SortOrder {
  Ascending = 0,
  Descending = 1,
}

/**
 *
 *
 * Inaktiv = 0
 *
 * Aktiv = 1
 * @format int32
 */
export enum Status {
  Inactive = 0,
  Active = 1,
}

/**
 *
 *
 * Contains = 0
 *
 * StartsWith = 1
 *
 * EndsWith = 2
 *
 * Equals = 3
 * @format int32
 */
export enum StringComparisonOperator {
  Contains = 0,
  StartsWith = 1,
  EndsWith = 2,
  Equals = 3,
}

export interface TeamAddEditModel {
  name?: string | null;
  description?: string | null;
  internalIdentification?: string | null;
  corporateIdentityNumber?: string | null;
  costCenter?: string | null;
  /** @format int32 */
  parentTeamId?: number | null;
  /** @format int32 */
  locationId?: number | null;
}

export interface TeamBaseModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number | null;
  name?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

export interface TeamManagerEditModel {
  /** @format int32 */
  teamId?: number;
  /** @format int32 */
  companyUserId?: number;
}

export interface TeamManagerModel {
  /** @format int32 */
  teamId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  companyUser?: CompanyUserBaseModel | null;
  team?: TeamBaseModel | null;
}

export interface TeamMemberAddModel {
  /** @format int32 */
  companyUserId?: number;
  /** @format int32 */
  availabilityPercent?: number | null;
}

export interface TeamMemberEditModel {
  /** @format int32 */
  availabilityPercent?: number | null;
}

export interface TeamMemberModel {
  /** @format int32 */
  teamId?: number | null;
  /** @format int32 */
  companyUserId?: number | null;
  companyUser?: CompanyUserBaseModel | null;
  team?: TeamBaseModel | null;
  /** @format int32 */
  availabilityPercent?: number | null;
  links?: Link[] | null;
}

export interface TeamMemberMoveModel {
  /** @format int32 */
  toTeamId: number;
}

export interface TeamModel {
  internalIdentification?: string | null;
  corporateIdentityNumber?: string | null;
  costCenter?: string | null;
  location?: string | null;
  /** @format int32 */
  parentTeamId?: number | null;
  /** @format date-time */
  created?: string | null;
  /** @format date-time */
  updated?: string | null;
  /** @format int32 */
  locationId?: number | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  companyId?: number | null;
  name?: string | null;
  description?: string | null;
  links?: Link[] | null;
}

/**
 *
 *
 * None = 0
 *
 * Primary = 1
 *
 * Classic = 2
 *
 * Dynamic = 3
 *
 * PageFlow = 4
 *
 * CinodePremium3PageFlow = 6
 *
 * CinodePremium2PageFlow = 7
 *
 * BlockWorkExperience = 50
 *
 * BlockSkillsByLevel = 51
 *
 * TemplateType = 100
 * @format int32
 */
export enum TemplateAssetType {
  None = 0,
  Primary = 1,
  Classic = 2,
  Dynamic = 3,
  PageFlow = 4,
  CinodePremium3PageFlow = 6,
  CinodePremium2PageFlow = 7,
  BlockWorkExperience = 50,
  BlockSkillsByLevel = 51,
  TemplateType = 100,
}

export interface TextBlockModel {
  description?: string | null;
  text?: string | null;
  hideInEdit?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideText?: boolean;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface TopSkillBlockItemModel {
  name?: string | null;
  /** @format int32 */
  level?: number | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface TopSkillBlockModel {
  useLevel?: boolean;
  /** @format int32 */
  minValue?: number;
  /** @format int32 */
  maxValue?: number;
  /** @format int32 */
  numberOfItemsInList?: number;
  data?: TopSkillBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface TrainingBlockModel {
  hideInEdit?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideText?: boolean;
  data?: TrainingItemBlockModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}

export interface TrainingItemBlockModel {
  trainingType?: TrainingType;
  url?: string | null;
  title?: string | null;
  description?: string | null;
  issuer?: string | null;
  /** @format int32 */
  year?: number;
  supplier?: string | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

/**
 *
 *
 * Kurs = 0
 *
 * Certifiering = 1
 * @format int32
 */
export enum TrainingType {
  Course = 0,
  Certification = 1,
}

export interface UpdatedModel {
  /** @format int32 */
  companyUserId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format date-time */
  time?: string | null;
}

/**
 *
 *
 * Ej angiven = 0
 *
 * Man = 1
 *
 * Kvinna = 2
 * @format int32
 */
export enum UserGender {
  Other = 0,
  Male = 1,
  Female = 2,
}

export interface ValidationModel {
  /** Collection of validation errors */
  errors?: Record<string, string[] | null>;
}

export interface WebhookAddModel {
  /** @format int32 */
  companyId?: number | null;
  isActive?: boolean;
  endpointUrl?: string | null;
  configurations?: WebhookConfigurationAddModel[] | null;
  credentials?: WebhookCredentialsAddModel[] | null;
}

export interface WebhookConfigurationAddModel {
  entityType?: WebhookEntityType;
  actionType?: ActionType;
}

export interface WebhookConfigurationModel {
  entityType?: WebhookEntityType;
  actionType?: ActionType;
}

export interface WebhookCredentialsAddModel {
  headerValue?: string | null;
  isBasicAuthentication?: boolean | null;
  headerName?: string | null;
}

export interface WebhookCredentialsModel {
  isBasicAuthentication?: boolean | null;
  headerName?: string | null;
}

/**
 *
 *
 * All = 1
 *
 * CompanyCandidate = 2
 *
 * CompanyEmployee = 3
 *
 * CompanySubcontractor = 4
 *
 * CompanyCustomer = 5
 *
 * CompanyProject = 6
 *
 * Role = 7
 *
 * PublicAnnouncement = 8
 *
 * Absence = 9
 *
 * CompanyCustomerContact = 10
 * @format int32
 */
export enum WebhookEntityType {
  All = 1,
  CompanyCandidate = 2,
  CompanyEmployee = 3,
  CompanySubcontractor = 4,
  CompanyCustomer = 5,
  CompanyProject = 6,
  Role = 7,
  PublicAnnouncement = 8,
  Absence = 9,
  CompanyCustomerContact = 10,
}

export interface WebhookModel {
  /** @format uuid */
  id?: string;
  isActive?: boolean;
  endpointUrl?: string | null;
  configurations?: WebhookConfigurationModel[] | null;
  credentials?: WebhookCredentialsModel[] | null;
}

/**
 *
 *
 * None = 0
 *
 * GroupDocs = 1
 *
 * Aspose = 2
 * @format int32
 */
export enum WordEngineType {
  None = 0,
  GroupDocs = 1,
  Aspose = 2,
}

export interface WorkExperienceBlockItemModel {
  skills?: SkillBlockItemModel[] | null;
  title?: string | null;
  description?: string | null;
  employer?: string | null;
  location?: LocationBlockModel | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string | null;
  url?: string | null;
  logotype?: ImageBlockModel | null;
  /** @format int32 */
  parentBlockItemId?: number | null;
  parentBlockItemUpdated?: boolean | null;
  /** @format int32 */
  profileTranslationId?: number | null;
  /** @format date-time */
  updated?: string | null;
  /** @format date-time */
  discarded?: string | null;
  /** @format uuid */
  id?: string;
  disabled?: boolean;
}

export interface WorkExperienceBlockModel {
  /** @deprecated */
  skillsHeading?: string | null;
  subHeading?: string | null;
  hideSubHeading?: boolean;
  hideInEdit?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideText?: boolean;
  useLogotype?: boolean;
  data?: WorkExperienceBlockItemModel[] | null;
  /** @format uuid */
  blockId?: string;
  /** @format date-time */
  updated?: string | null;
  heading?: string | null;
}
