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

import {
  AbsenceAddEditModel,
  AbsencePeriodDtoModel,
  AbsencePeriodModel,
  AbsenceTypeModel,
  AddCompanySubcontractorGroupMemberModel,
  AvailabilityFilterModel,
  AvailabilityModel,
  ClassicCompanyUserResumeModel,
  CompanyCandidateAddInviteModel,
  CompanyCandidateAddModel,
  CompanyCandidateBaseModel,
  CompanyCandidateEventBaseModel,
  CompanyCandidateEventMeetingModel,
  CompanyCandidateEventModel,
  CompanyCandidateEventNoteModel,
  CompanyCandidateEventTaskModel,
  CompanyCandidateExtendedModel,
  CompanyCandidateFileAttachmentListModel,
  CompanyCandidatePipelineModel,
  CompanyCandidateSkillAddModel,
  CompanyCandidateSkillModel,
  CompanyCandidateUriAttachmentAddModel,
  CompanyCandidateUriAttachmentModel,
  CompanyCapabilitiesModel,
  CompanyCustomerAddModel,
  CompanyCustomerAddressAddEditModel,
  CompanyCustomerAddressModel,
  CompanyCustomerBaseModel,
  CompanyCustomerContactAddEditModel,
  CompanyCustomerContactModel,
  CompanyCustomerDeleteModel,
  CompanyCustomerEditModel,
  CompanyCustomerExtendedModel,
  CompanyCustomerManagerModel,
  CompanyCustomerManagersAddEditModel,
  CompanyCustomerModel,
  CompanyImageModel,
  CompanyModel,
  CompanyProfileFilterModel,
  CompanyProfilesModel,
  CompanyRecruitmentManagerModel,
  CompanySubcontractorGroupModel,
  CompanyTagBaseModel,
  CompanyTagModel,
  CompanyUserAddModel,
  CompanyUserBaseModel,
  CompanyUserEditModel,
  CompanyUserEventBaseModel,
  CompanyUserEventMeetingAddEditModel,
  CompanyUserEventMeetingModel,
  CompanyUserEventModel,
  CompanyUserEventNoteAddEditModel,
  CompanyUserEventNoteModel,
  CompanyUserEventTaskAddEditModel,
  CompanyUserEventTaskModel,
  CompanyUserExtendedModel,
  CompanyUserFullModel,
  CompanyUserModel,
  CompanyUserPermissionsEditModel,
  CompanyUserProfileAddEditModel,
  CompanyUserProfileBaseModel,
  CompanyUserProfileCommitmentAddEditModel,
  CompanyUserProfileCommitmentModel,
  CompanyUserProfileEducationAddEditModel,
  CompanyUserProfileEducationModel,
  CompanyUserProfileEmployerAddEditModel,
  CompanyUserProfileEmployerModel,
  CompanyUserProfileExtSkillAddEditModel,
  CompanyUserProfileExtSkillModel,
  CompanyUserProfileFullModel,
  CompanyUserProfileLanguageAddEditModel,
  CompanyUserProfileLanguageModel,
  CompanyUserProfilePresentationEditModel,
  CompanyUserProfilePresentationModel,
  CompanyUserProfileReferenceAddEditModel,
  CompanyUserProfileReferenceModel,
  CompanyUserProfileSkillAddModel,
  CompanyUserProfileSkillEditModel,
  CompanyUserProfileSkillModel,
  CompanyUserProfileTrainingAddEditModel,
  CompanyUserProfileTrainingModel,
  CompanyUserProfileWorkExperienceAddEditModel,
  CompanyUserProfileWorkExperienceModel,
  CompanyUserProjectAssignmentModel,
  CompanyUserResumeBaseModel,
  CompanyUserSkillModel,
  CompanyUserSubcontractorAddEditModel,
  CompanyUserSubcontractorBaseModel,
  CompanyUserSubcontractorFileAttachmentListModel,
  CompanyUserSubcontractorModel,
  ConvertCompanyUserToAadAccountModel,
  CurrencyModel,
  CustomerEventBaseModel,
  CustomerEventMeetingAddEditModel,
  CustomerEventMeetingModel,
  CustomerEventModel,
  CustomerEventNoteAddEditModel,
  CustomerEventNoteModel,
  CustomerEventTaskAddEditModel,
  CustomerEventTaskModel,
  DynamicCompanyUserResumeModel,
  ErrorModel,
  EventMeetingAddEditModel,
  EventNoteAddEditModel,
  EventTaskAddEditModel,
  ImportProfileAsyncOperation,
  JsonPatchDocument,
  KeywordModel,
  MentionTextModel,
  PartnersFilterModel,
  PartnersOverviewModel,
  ProfileLanguageModel,
  ProjectAddEditModel,
  ProjectAssignmentAddModel,
  ProjectAssignmentAnnouncementBaseModel,
  ProjectAssignmentAnnounceModel,
  ProjectAssignmentEditModel,
  ProjectAssignmentFilterModel,
  ProjectAssignmentMemberEmployeeAddModel,
  ProjectAssignmentMemberEmployeeEditModel,
  ProjectAssignmentMemberSubcontractorAddModel,
  ProjectAssignmentMemberSubcontractorEditModel,
  ProjectAssignmentModel,
  ProjectAssignmentSkillAddModel,
  ProjectAssignmentSkillEditModel,
  ProjectAssignmentSkillModel,
  ProjectAssignmentWithStatusModel,
  ProjectBaseModel,
  ProjectEventBaseModel,
  ProjectEventMeetingAddEditModel,
  ProjectEventMeetingModel,
  ProjectEventModel,
  ProjectEventNoteAddEditModel,
  ProjectEventNoteModel,
  ProjectEventTaskAddEditModel,
  ProjectEventTaskModel,
  ProjectModel,
  ProjectPipelineModel,
  ProjectReferenceModel,
  RecruitmentSourceModel,
  RoleModel,
  SearchCompanyCandidateQueryModel,
  SearchCompanyCandidateResultModel,
  SearchCompanyCustomerContactQueryModel,
  SearchCompanyCustomerContactResultModel,
  SearchCompanyCustomerQueryModel,
  SearchCompanyCustomerResultModel,
  SearchCompanyUserQueryModel,
  SearchCompanyUserResultModel,
  SearchProjectQueryModel,
  SearchProjectsResultModel,
  SearchSkillQueryModel,
  SearchSkillResultModel,
  SkillSearchQueryTermModel,
  TeamAddEditModel,
  TeamBaseModel,
  TeamManagerEditModel,
  TeamManagerModel,
  TeamMemberAddModel,
  TeamMemberEditModel,
  TeamMemberModel,
  TeamMemberMoveModel,
  TeamModel,
  ValidationModel,
  WebhookAddModel,
  WebhookModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class V01<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Absence
   * @name Absence
   * @summary Get absence period by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}
   */
  absence = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<AbsencePeriodModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/absences/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Absence
   * @name UpdateAbsence
   * @summary Update Absence Item for User
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}
   */
  updateAbsence = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: AbsenceAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<AbsencePeriodModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/absences/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Absence
   * @name DeleteAbsence
   * @summary Delete absence
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}
   */
  deleteAbsence = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/absences/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Absence
   * @name NewAbsence
   * @summary Create Absence Item for User
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/absences
   */
  newAbsence = (companyId: number, companyUserId: number, data: AbsenceAddEditModel, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/absences`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Absences
   * @name Absences
   * @summary Get absence period by company user id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/absences
   */
  absences = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<AbsencePeriodDtoModel[], void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/absences`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AbsenceType
   * @name AbsenceTypes
   * @summary Get absence types for company
   * @request GET:/v0.1/companies/{companyId}/absence/types
   */
  absenceTypes = (companyId: number, params: RequestParams = {}) =>
    this.request<AbsenceTypeModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/absence/types`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Availability
   * @name SearchAvailability
   * @summary Get availability for company users. Omitting companyUserId gets availability for all company users in company.
   * @request POST:/v0.1/companies/{companyId}/availability
   */
  searchAvailability = (companyId: number, data: AvailabilityFilterModel, params: RequestParams = {}) =>
    this.request<AvailabilityModel[], void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/availability`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Company
   * @name Company
   * @summary Get company by id
   * @request GET:/v0.1/companies/{companyId}
   */
  company = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyAddressUsers
   * @name CompanyAddressUsers
   * @summary Get company users list for an address
   * @request GET:/v0.1/companies/{companyId}/addresses/{id}/users
   */
  companyAddressUsers = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserExtendedModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/addresses/${id}/users`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidate
   * @name Candidate
   * @summary Get Candidate by Id
   * @request GET:/v0.1/companies/{companyId}/candidates/{id}
   */
  candidate = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyCandidateExtendedModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidate
   * @name PatchCompanyCandidate
   * @summary Patch company candidate
   * @request PATCH:/v0.1/companies/{companyId}/candidates/{id}
   */
  patchCompanyCandidate = (companyId: number, id: number, data: JsonPatchDocument, params: RequestParams = {}) =>
    this.request<CompanyCandidateExtendedModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * @tags CompanyCandidate
 * @name DeleteCompanyCandidate
 * @summary Delete candidate from the system
This action is irreversible, use with caution
 * @request DELETE:/v0.1/companies/{companyId}/candidates/{id}
 */
  deleteCompanyCandidate = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidate
   * @name AddCompanyCandidate
   * @summary Create Candidate
   * @request POST:/v0.1/companies/{companyId}/candidates
   */
  addCompanyCandidate = (companyId: number, data: CompanyCandidateAddModel, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidates
   * @name Candidates
   * @summary Get Candidates
   * @request GET:/v0.1/companies/{companyId}/candidates
   */
  candidates = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyCandidateBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
 * @description Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * @tags CompanyCandidate
 * @name InviteCandidate
 * @summary Invite the CompanyCandidate to create their own Cinode account
A email is sent with your message and details for how to login
 * @request POST:/v0.1/companies/{companyId}/candidates/{id}/invite
 */
  inviteCandidate = (companyId: number, id: number, data: CompanyCandidateAddInviteModel, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}/invite`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEvent
   * @name CompanyCandidateEvent
   * @summary Get company candidates event by id
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events/{id}
   */
  companyCandidateEvent = (companyId: number, candidateId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventMeeting
   * @name CompanyCandidateEventMeeting
   * @summary Get company candidates meeting event with specified id
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}
   */
  companyCandidateEventMeeting = (companyId: number, candidateId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/meetings/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventMeeting
   * @name UpdateCompanyCandidateEventMeeting
   * @summary Update meeting event for company candidate
   * @request PUT:/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}
   */
  updateCompanyCandidateEventMeeting = (
    companyId: number,
    candidateId: number,
    id: string,
    data: EventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCandidateEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/meetings/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventMeeting
   * @name DeleteCompanyCandidateEventMeeting
   * @summary Delete company candidate meeting event
   * @request DELETE:/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}
   */
  deleteCompanyCandidateEventMeeting = (
    companyId: number,
    candidateId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/meetings/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventMeeting
   * @name NewCompanyCandidateEventMeeting
   * @summary Add new meeting event for company candidate
   * @request POST:/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings
   */
  newCompanyCandidateEventMeeting = (
    companyId: number,
    candidateId: number,
    data: EventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/meetings`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventMeetings
   * @name CompanyCandidateMeetingEventList
   * @summary Get company candidates events meetings list
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings
   */
  companyCandidateMeetingEventList = (companyId: number, candidateId: number, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/meetings`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventNote
   * @name CompanyCandidateEventNote
   * @summary Get company candidates note event with specified id
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}
   */
  companyCandidateEventNote = (companyId: number, candidateId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/notes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventNote
   * @name UpdateCompanyCandidateEventNote
   * @summary Update note event for company candidate
   * @request PUT:/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}
   */
  updateCompanyCandidateEventNote = (
    companyId: number,
    candidateId: number,
    id: string,
    data: EventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCandidateEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/notes/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventNote
   * @name DeleteCompanyCandidateEventNote
   * @summary Delete company candidate note event
   * @request DELETE:/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}
   */
  deleteCompanyCandidateEventNote = (companyId: number, candidateId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/notes/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventNote
   * @name NewCompanyCandidateEventNote
   * @summary Add new note event for company candidate
   * @request POST:/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes
   */
  newCompanyCandidateEventNote = (
    companyId: number,
    candidateId: number,
    data: EventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/notes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventNotes
   * @name CompanyCandidateNoteEventList
   * @summary Get company candidates events notes list
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes
   */
  companyCandidateNoteEventList = (companyId: number, candidateId: number, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/notes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEvents
   * @name CompanyCandidateEvents
   * @summary Get company candidates events list
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events
   */
  companyCandidateEvents = (companyId: number, candidateId: number, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventTask
   * @name CompanyCandidateEventTask
   * @summary Get company candidates task event with specified id
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}
   */
  companyCandidateEventTask = (companyId: number, candidateId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/tasks/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventTask
   * @name UpdateCompanyCandidateEventTask
   * @summary Update task event for company candidate
   * @request PUT:/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}
   */
  updateCompanyCandidateEventTask = (
    companyId: number,
    candidateId: number,
    id: string,
    data: EventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCandidateEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/tasks/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventTask
   * @name DeleteCompanyCandidateEventTask
   * @summary Delete company candidate task event
   * @request DELETE:/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}
   */
  deleteCompanyCandidateEventTask = (companyId: number, candidateId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/tasks/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventTask
   * @name NewCompanyCandidateEventTask
   * @summary Add new task event for company candidate
   * @request POST:/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks
   */
  newCompanyCandidateEventTask = (
    companyId: number,
    candidateId: number,
    data: EventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/tasks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateEventTasks
   * @name CompanyCandidateTaskEventList
   * @summary Get company candidates events tasks list
   * @request GET:/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks
   */
  companyCandidateTaskEventList = (companyId: number, candidateId: number, params: RequestParams = {}) =>
    this.request<CompanyCandidateEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/events/tasks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateFileAttachment
   * @name GetCandidateAttachment
   * @summary Get Candidate File Attachment by Id
   * @request GET:/v0.1/companies/{companyId}/candidates/{id}/attachments/{attachmentId}
   */
  getCandidateAttachment = (id: number, companyId: number, attachmentId: string, params: RequestParams = {}) =>
    this.request<string, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}/attachments/${attachmentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateFileAttachments
   * @name CandidateAttachment
   * @summary Upload Candidate File Attachment
   * @request POST:/v0.1/companies/{companyId}/candidates/{id}/attachments
   */
  candidateAttachment = (
    id: number,
    companyId: number,
    data: {
      Files: File[];
      Title: string;
      Description?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CompanyCandidateFileAttachmentListModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}/attachments`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidatePipelines
   * @name CandidatePipelines
   * @summary Get candidate pipelines
   * @request GET:/v0.1/companies/{companyId}/candidates/pipelines
   */
  candidatePipelines = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyCandidatePipelineModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/pipelines`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: POST /v0.1/companies/1/candidates/19870/skills { "name": "SQL", "companyCandidateId": 19870, "keywordSynonymId": 577, "languageId":1 }
   *
   * @tags CompanyCandidateSkills
   * @name NewCompanyCandidateSkill
   * @summary Add a Skill to company candidate
   * @request POST:/v0.1/companies/{companyId}/candidates/{candidateId}/skills
   */
  newCompanyCandidateSkill = (
    companyId: number,
    candidateId: number,
    data: CompanyCandidateSkillAddModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCandidateSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/skills`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: DELETE /v0.1/companies/1/candidates/19870/skills/577
   *
   * @tags CompanyCandidateSkills
   * @name DeleteCompanyCandidateSkill
   * @summary Delete Candidate Skill
   * @request DELETE:/v0.1/companies/{companyId}/candidates/{candidateId}/skills/{id}
   */
  deleteCompanyCandidateSkill = (companyId: number, candidateId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${candidateId}/skills/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateUriAttachment
   * @name CandidateUriAttachment
   * @summary Add Candidate Uri (Link)
   * @request POST:/v0.1/companies/{companyId}/candidates/{id}/uriattachments
   */
  candidateUriAttachment = (
    id: number,
    companyId: number,
    data: CompanyCandidateUriAttachmentAddModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCandidateUriAttachmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}/uriattachments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateUriAttachment
   * @name DeleteCandidateUriAttachment
   * @summary Delete Candidate Uri (Link)
   * @request DELETE:/v0.1/companies/{companyId}/candidates/{id}/uriattachments/{attachmentId}
   */
  deleteCandidateUriAttachment = (id: number, companyId: number, attachmentId: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}/uriattachments/${attachmentId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyCandidateUriAttachments
   * @name GetCandidateUriAttachment
   * @summary Get Candidate Uri Attachment by Id
   * @request GET:/v0.1/companies/{companyId}/candidates/{id}/uriattachments/{attachmentId}
   */
  getCandidateUriAttachment = (id: number, companyId: number, attachmentId: string, params: RequestParams = {}) =>
    this.request<CompanyCandidateUriAttachmentModel, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/${id}/uriattachments/${attachmentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyCapabilities
   * @name CompanyCapabilities
   * @summary Get company capabilities
   * @request GET:/v0.1/companies/{companyId}/capabilities
   */
  companyCapabilities = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyCapabilitiesModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/capabilities`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyCurrencies
   * @name CompanyCurrencies
   * @summary Get company currencies
   * @request GET:/v0.1/companies/{companyId}/currencies
   */
  companyCurrencies = (companyId: number, params: RequestParams = {}) =>
    this.request<CurrencyModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/currencies`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomer
   * @name GetCompanyCustomer
   * @summary Get company customer by id
   * @request GET:/v0.1/companies/{companyId}/customers/{id}
   */
  getCompanyCustomer = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyCustomerModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomer
   * @name UpdateCompanyCustomer
   * @summary Update company customer
   * @request PUT:/v0.1/companies/{companyId}/customers/{id}
   */
  updateCompanyCustomer = (id: number, companyId: number, data: CompanyCustomerEditModel, params: RequestParams = {}) =>
    this.request<CompanyCustomerModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomer
   * @name PatchCompanyCustomer
   * @summary Patch company customer
   * @request PATCH:/v0.1/companies/{companyId}/customers/{id}
   */
  patchCompanyCustomer = (id: number, companyId: number, data: JsonPatchDocument, params: RequestParams = {}) =>
    this.request<CompanyCustomerModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomer
   * @name DeleteCompanyCustomer
   * @summary Delete customer
   * @request DELETE:/v0.1/companies/{companyId}/customers/{id}
   */
  deleteCompanyCustomer = (
    id: number,
    companyId: number,
    data: CompanyCustomerDeleteModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${id}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomer
   * @name NewCompanyCustomer
   * @summary Add company customer
   * @request POST:/v0.1/companies/{companyId}/customers
   */
  newCompanyCustomer = (companyId: number, data: CompanyCustomerAddModel, params: RequestParams = {}) =>
    this.request<CompanyCustomerModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomers
   * @name CompanyCustomers
   * @summary Get company customers list
   * @request GET:/v0.1/companies/{companyId}/customers
   */
  companyCustomers = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyCustomerBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerAddress
   * @name CustomerAddress
   * @summary Get customer address by id
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}
   */
  customerAddress = (companyId: number, customerId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyCustomerAddressModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/addresses/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerAddress
   * @name EditCompanyCustomerAddress
   * @summary Update customer address
   * @request PUT:/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}
   */
  editCompanyCustomerAddress = (
    companyId: number,
    customerId: number,
    id: number,
    data: CompanyCustomerAddressAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCustomerAddressModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/addresses/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerAddress
   * @name DeleteCompanyCustomerAddress
   * @summary Delete customer address
   * @request DELETE:/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}
   */
  deleteCompanyCustomerAddress = (companyId: number, customerId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/addresses/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerAddress
   * @name NewCompanyCustomerAddress
   * @summary Add customer address
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/addresses
   */
  newCompanyCustomerAddress = (
    companyId: number,
    customerId: number,
    data: CompanyCustomerAddressAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCustomerAddressModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/addresses`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerContact
   * @name Contact
   * @summary Get customer contact by id
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}
   */
  contact = (companyId: number, customerId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyCustomerContactModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/contacts/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerContact
   * @name EditCompanyCustomerContact
   * @summary Update customer contact
   * @request PUT:/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}
   */
  editCompanyCustomerContact = (
    companyId: number,
    customerId: number,
    id: number,
    data: CompanyCustomerContactAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCustomerContactModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/contacts/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerContact
   * @name DeleteCompanyCustomerContact
   * @summary Delete customer contact
   * @request DELETE:/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}
   */
  deleteCompanyCustomerContact = (companyId: number, customerId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/contacts/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerContact
   * @name NewCompanyCustomerContact
   * @summary Add customer contact
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/contacts
   */
  newCompanyCustomerContact = (
    companyId: number,
    customerId: number,
    data: CompanyCustomerContactAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCustomerContactModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/contacts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerContacts
   * @name Contacts
   * @summary Get customer contact list
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/contacts
   */
  contacts = (companyId: number, customerId: number, params: RequestParams = {}) =>
    this.request<CompanyCustomerContactModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/contacts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Note: Posted tags will replace any existing tags for the contact. A new tag will be created if the Id for a tag is not provided. Sample request: POST /v0.1/companies/1/customers/19870/contacts/5360/tags [ { "name": "tag-name", "id": 2 }, { "name": "tag-test", "id": 1 }, ]
   *
   * @tags CompanyCustomerContactTags
   * @name EditCustomerContactTags
   * @summary Edit Tags for CustomerContact
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/contacts/{contactId}/tags
   */
  editCustomerContactTags = (
    companyId: number,
    customerId: number,
    contactId: number,
    data: CompanyTagModel[],
    params: RequestParams = {},
  ) =>
    this.request<CompanyTagModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/contacts/${contactId}/tags`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEvent
   * @name CompanyCustomerEvent
   * @summary Get customer event by id
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events/{id}
   */
  companyCustomerEvent = (companyId: number, customerId: number, id: string, params: RequestParams = {}) =>
    this.request<CustomerEventModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEvents
   * @name CompanyCustomerEvents
   * @summary Get customer events list
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events
   */
  companyCustomerEvents = (companyId: number, customerId: number, params: RequestParams = {}) =>
    this.request<CustomerEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsMeeting
   * @name CompanyCustomerEventMeeting
   * @summary Get customer event meeting by id
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}
   */
  companyCustomerEventMeeting = (companyId: number, customerId: number, id: string, params: RequestParams = {}) =>
    this.request<CustomerEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/meetings/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsMeeting
   * @name UpdateMeeting
   * @summary Update customer event meeting
   * @request PUT:/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}
   */
  updateMeeting = (
    companyId: number,
    customerId: number,
    id: string,
    data: CustomerEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CustomerEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/meetings/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsMeeting
   * @name DeleteMeeting
   * @summary Delete customer event meeting
   * @request DELETE:/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}
   */
  deleteMeeting = (companyId: number, customerId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/meetings/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsMeeting
   * @name NewMeeting
   * @summary Add customer event meeting
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/events/meetings
   */
  newMeeting = (
    companyId: number,
    customerId: number,
    data: CustomerEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CustomerEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/meetings`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsMeetings
   * @name CompanyCustomerEventMeetings
   * @summary Get customer event meetings list
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events/meetings
   */
  companyCustomerEventMeetings = (companyId: number, customerId: number, params: RequestParams = {}) =>
    this.request<CustomerEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/meetings`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsNote
   * @name CompanyCustomerEventNote
   * @summary Get customer event note by id
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}
   */
  companyCustomerEventNote = (companyId: number, customerId: number, id: string, params: RequestParams = {}) =>
    this.request<CustomerEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/notes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsNote
   * @name UpdateNote
   * @summary Update customer event note
   * @request PUT:/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}
   */
  updateNote = (
    companyId: number,
    customerId: number,
    id: string,
    data: CustomerEventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CustomerEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/notes/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsNote
   * @name DeleteNote
   * @summary Delete customer event note
   * @request DELETE:/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}
   */
  deleteNote = (companyId: number, customerId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/notes/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsNote
   * @name NewNote
   * @summary Add customer event note
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/events/notes
   */
  newNote = (companyId: number, customerId: number, data: CustomerEventNoteAddEditModel, params: RequestParams = {}) =>
    this.request<CustomerEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/notes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsNotes
   * @name CompanyCustomerEventNotes
   * @summary Get customer event notes list
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events/notes
   */
  companyCustomerEventNotes = (companyId: number, customerId: number, params: RequestParams = {}) =>
    this.request<CustomerEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/notes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsTask
   * @name CompanyCustomerEventTask
   * @summary Get customer event task by id
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}
   */
  companyCustomerEventTask = (companyId: number, customerId: number, id: string, params: RequestParams = {}) =>
    this.request<CustomerEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/tasks/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsTask
   * @name UpdateTask
   * @summary Update customer event task
   * @request PUT:/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}
   */
  updateTask = (
    companyId: number,
    customerId: number,
    id: string,
    data: CustomerEventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CustomerEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/tasks/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsTask
   * @name DeleteTask
   * @summary Delete customer event task
   * @request DELETE:/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}
   */
  deleteTask = (companyId: number, customerId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/tasks/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsTask
   * @name NewTask
   * @summary Add customer event task
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/events/tasks
   */
  newTask = (companyId: number, customerId: number, data: CustomerEventTaskAddEditModel, params: RequestParams = {}) =>
    this.request<CustomerEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/tasks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerEventsTasks
   * @name CompanyCustomerEventTasks
   * @summary Get customer event tasks list
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/events/tasks
   */
  companyCustomerEventTasks = (companyId: number, customerId: number, params: RequestParams = {}) =>
    this.request<CustomerEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/events/tasks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerFileAttachment
   * @name GetCustomerAttachment
   * @summary Get customer file attachment by Id
   * @request GET:/v0.1/companies/{companyId}/customers/{id}/attachments/{attachmentId}
   */
  getCustomerAttachment = (id: number, companyId: number, attachmentId: string, params: RequestParams = {}) =>
    this.request<string, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${id}/attachments/${attachmentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomerManagers
   * @name CompanyCustomerManagers
   * @summary Get customer managers
   * @request GET:/v0.1/companies/{companyId}/customers/{customerId}/managers
   */
  companyCustomerManagers = (companyId: number, customerId: number, params: RequestParams = {}) =>
    this.request<CompanyCustomerManagerModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/managers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: POST /v0.1/companies/1/customers/22228/managers { [ 51096 ] }
   *
   * @tags CompanyCustomerManagers
   * @name AddCompanyCustomerResponsible
   * @summary Add customer responsible
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/managers
   */
  addCompanyCustomerResponsible = (
    companyId: number,
    customerId: number,
    data: CompanyCustomerManagersAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyCustomerManagerModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/managers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: DELETE /v0.1/companies/1/customers/22228/managers/54632
   *
   * @tags CompanyCustomerManagers
   * @name RemoveCustomerManager
   * @summary Remove customer responsible
   * @request DELETE:/v0.1/companies/{companyId}/customers/{customerId}/managers/{id}
   */
  removeCustomerManager = (companyId: number, customerId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/managers/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags CompanyCustomersExtended
   * @name CustomersExtended
   * @summary Get extended company customers list
   * @request GET:/v0.1/companies/{companyId}/customers/extended
   */
  customersExtended = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyCustomerExtendedModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/extended`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Note: Posted tags will replace any existing tags for the customer. A new tag will be created if the Id for a tag is not provided. Sample request: POST /v0.1/companies/1/customers/19870/tags [ { "name": "tag-name", "id": 2 }, { "name": "tag-test", "id": 1 }, ]
   *
   * @tags CompanyCustomerTags
   * @name EditCustomerTags
   * @summary Edit Tags for Customer
   * @request POST:/v0.1/companies/{companyId}/customers/{customerId}/tags
   */
  editCustomerTags = (companyId: number, customerId: number, data: CompanyTagModel[], params: RequestParams = {}) =>
    this.request<CompanyCustomerModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/${customerId}/tags`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyImage
   * @name CompanyImage
   * @summary Get Company Image by Id
   * @request GET:/v0.1/companies/{companyId}/images/{id}
   */
  companyImage = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyImageModel, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/images/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyImage
   * @name CompanyImageDownload
   * @summary Download Company Image
   * @request GET:/v0.1/companies/{companyId}/images/{id}/{imageFileName}
   */
  companyImageDownload = (companyId: number, id: number, imageFileName: string, params: RequestParams = {}) =>
    this.request<string, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/images/${id}/${imageFileName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyImages
   * @name CompanyImages
   * @summary Get Company Images Assigned to User
   * @request GET:/v0.1/companies/{companyId}/users/{id}/images
   */
  companyImages = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyImageModel[], void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${id}/images`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyImages
   * @name AddCompanyImage
   * @summary Add Image to User
   * @request POST:/v0.1/companies/{companyId}/users/{id}/images
   */
  addCompanyImage = (
    companyId: number,
    id: number,
    data: {
      /** @format binary */
      File: File;
      SetAsPrimary?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CompanyImageModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${id}/images`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: GET /v0.1/companies/1/managers
   *
   * @tags CompanyManagers
   * @name CompanyManagers
   * @summary Get company managers
   * @request GET:/v0.1/companies/{companyId}/managers
   */
  companyManagers = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyUserBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/managers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: POST /v0.1/companies/1/profiles { "createdOffsetDays": 90, "updatedOffsetDays": 30, "pageAndSortBy": { "page": 1, "itemsPerPage": 15, "order": 0, "sortBy": 1 } }
   *
   * @tags CompanyProfiles
   * @name CompanyProfiles
   * @summary Get profiles list
   * @request POST:/v0.1/companies/{companyId}/profiles
   */
  companyProfiles = (companyId: number, data: CompanyProfileFilterModel, params: RequestParams = {}) =>
    this.request<CompanyProfilesModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/profiles`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags CompanyProjectFileAttachment
   * @name GetProjectAttachment
   * @summary Get Project file attachment by Id
   * @request GET:/v0.1/companies/{companyId}/projects/{id}/attachments/{attachmentId}
   */
  getProjectAttachment = (id: number, companyId: number, attachmentId: string, params: RequestParams = {}) =>
    this.request<string, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${id}/attachments/${attachmentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags CompanyRecruitmentManagers
   * @name RecruitmentManagers
   * @summary Get recruitment managers
   * @request GET:/v0.1/companies/{companyId}/recruitment/managers
   */
  recruitmentManagers = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyRecruitmentManagerModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/recruitment/managers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires module: CompanyUserResume.
   *
   * @tags CompanyResumes
   * @name CompanyResumes
   * @summary Get resumes list
   * @request GET:/v0.1/companies/{companyId}/resumes
   */
  companyResumes = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyUserResumeBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/resumes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanySubcontractorGroup
   * @name GetCompanySubcontractorGroup
   * @summary Get Subcontractor Group by Id
   * @request GET:/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}
   */
  getCompanySubcontractorGroup = (companyId: number, subcontractorGroupId: number, params: RequestParams = {}) =>
    this.request<CompanySubcontractorGroupModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/groups/${subcontractorGroupId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanySubcontractorGroupMembers
   * @name AddCompanySubcontractorGroupMember
   * @summary Add subcontractor group member
   * @request POST:/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}/members
   */
  addCompanySubcontractorGroupMember = (
    companyId: number,
    subcontractorGroupId: number,
    data: AddCompanySubcontractorGroupMemberModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/groups/${subcontractorGroupId}/members`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanySubcontractorGroupMembers
   * @name DeleteCompanySubcontractorGroupMember
   * @summary Delete subcontractor group member
   * @request DELETE:/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}/members/{id}
   */
  deleteCompanySubcontractorGroupMember = (
    companyId: number,
    subcontractorGroupId: number,
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/groups/${subcontractorGroupId}/members/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanySubcontractorGroups
   * @name GetCompanySubcontractorGroups
   * @summary Get Subcontractor Groups by Company Id
   * @request GET:/v0.1/companies/{companyId}/subcontractors/groups
   */
  getCompanySubcontractorGroups = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanySubcontractorGroupModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/groups`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: GET /v0.1/companies/1/tags/1
   *
   * @tags CompanyTag
   * @name CompanyTag
   * @summary Get company tag by Id
   * @request GET:/v0.1/companies/{companyId}/tags/{id}
   */
  companyTag = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyTagModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/tags/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: GET /v0.1/companies/1/tags
   *
   * @tags CompanyTags
   * @name CompanyTags
   * @summary Get company tags
   * @request GET:/v0.1/companies/{companyId}/tags
   */
  companyTags = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyTagBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/tags`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyTeam
   * @name Team
   * @summary Get team by id
   * @request GET:/v0.1/companies/{companyId}/teams/{id}
   */
  team = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<TeamModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeam
   * @name UpdateTeam
   * @summary Update team
   * @request PUT:/v0.1/companies/{companyId}/teams/{id}
   */
  updateTeam = (id: number, companyId: number, data: TeamAddEditModel, params: RequestParams = {}) =>
    this.request<TeamModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeam
   * @name NewTeam
   * @summary Add team
   * @request POST:/v0.1/companies/{companyId}/teams
   */
  newTeam = (companyId: number, data: TeamAddEditModel, params: RequestParams = {}) =>
    this.request<TeamModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyTeams
   * @name CompanyTeams
   * @summary Get teams list
   * @request GET:/v0.1/companies/{companyId}/teams
   */
  companyTeams = (companyId: number, params: RequestParams = {}) =>
    this.request<TeamBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyTeamManagers
   * @name TeamManagers
   * @summary Get team managers
   * @request GET:/v0.1/companies/{companyId}/teams/{teamId}/managers
   */
  teamManagers = (companyId: number, teamId: number, params: RequestParams = {}) =>
    this.request<CompanyUserExtendedModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/managers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: POST /v0.1/companies/1/teams/1234/managers { "teamId" : 1234, "companyUserId" : 54632 }
   *
   * @tags CompanyTeamManagers
   * @name AddTeamManager
   * @summary Add team manager
   * @request POST:/v0.1/companies/{companyId}/teams/{teamId}/managers
   */
  addTeamManager = (companyId: number, teamId: string, data: TeamManagerEditModel, params: RequestParams = {}) =>
    this.request<TeamManagerModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/managers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: DELETE /v0.1/companies/1/teams/1234/managers/54632
   *
   * @tags CompanyTeamManagers
   * @name RemoveTeamManager
   * @summary Remove team manager
   * @request DELETE:/v0.1/companies/{companyId}/teams/{teamId}/managers/{id}
   */
  removeTeamManager = (companyId: number, teamId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/managers/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyTeamMember
   * @name GetTeamMember
   * @summary Get team member
   * @request GET:/v0.1/companies/{companyId}/teams/{teamId}/members/{id}
   */
  getTeamMember = (companyId: number, teamId: number, id: number, params: RequestParams = {}) =>
    this.request<TeamMemberModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/members/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeamMember
   * @name UpdateTeamMember
   * @summary Update team member
   * @request PUT:/v0.1/companies/{companyId}/teams/{teamId}/members/{id}
   */
  updateTeamMember = (
    companyId: number,
    teamId: number,
    id: number,
    data: TeamMemberEditModel,
    params: RequestParams = {},
  ) =>
    this.request<TeamMemberModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/members/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeamMember
   * @name RemoveTeamMember
   * @summary Remove team member
   * @request DELETE:/v0.1/companies/{companyId}/teams/{teamId}/members/{id}
   */
  removeTeamMember = (companyId: number, teamId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/members/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeamMember
   * @name AddTeamMember
   * @summary Add team member
   * @request POST:/v0.1/companies/{companyId}/teams/{teamId}/members
   */
  addTeamMember = (companyId: number, teamId: number, data: TeamMemberAddModel, params: RequestParams = {}) =>
    this.request<TeamMemberModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/members`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyTeamMembers
   * @name GetTeamMembers
   * @summary Get team members
   * @request GET:/v0.1/companies/{companyId}/teams/{teamId}/members
   */
  getTeamMembers = (companyId: number, teamId: number, params: RequestParams = {}) =>
    this.request<TeamMemberModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/members`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeamMember
   * @name MoveTeamMember
   * @summary Move team member and associated bookings to another team
   * @request POST:/v0.1/companies/{companyId}/teams/{teamId}/members/{id}/move
   */
  moveTeamMember = (
    companyId: number,
    teamId: number,
    id: number,
    data: TeamMemberMoveModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/members/${id}/move`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyTeamUsers
   * @name GetTeamUsers
   * @summary Get team members
   * @request GET:/v0.1/companies/{companyId}/teams/{teamId}/users
   * @deprecated
   */
  getTeamUsers = (companyId: number, teamId: number, params: RequestParams = {}) =>
    this.request<CompanyUserExtendedModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/users`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeamUsers
   * @name AddTeamUser
   * @summary Add team member
   * @request POST:/v0.1/companies/{companyId}/teams/{teamId}/users
   * @deprecated
   */
  addTeamUser = (companyId: number, teamId: number, data: TeamMemberAddModel, params: RequestParams = {}) =>
    this.request<TeamMemberModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyTeamUsers
   * @name RemoveTeamUser
   * @summary Remove team member
   * @request DELETE:/v0.1/companies/{companyId}/teams/{teamId}/users/{id}
   * @deprecated
   */
  removeTeamUser = (companyId: number, teamId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserExtendedModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/teams/${teamId}/users/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUser
   * @name User
   * @summary Get company user by id
   * @request GET:/v0.1/companies/{companyId}/users/{id}
   */
  user = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyUser
   * @name UpdateCompanyUser
   * @summary Update company user
   * @request PUT:/v0.1/companies/{companyId}/users/{id}
   */
  updateCompanyUser = (companyId: number, id: number, data: CompanyUserEditModel, params: RequestParams = {}) =>
    this.request<CompanyUserFullModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyUser
   * @name PatchCompanyUser
   * @summary Patch company user
   * @request PATCH:/v0.1/companies/{companyId}/users/{id}
   */
  patchCompanyUser = (companyId: number, id: number, data: JsonPatchDocument, params: RequestParams = {}) =>
    this.request<CompanyUserFullModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Requires access level: CompanyAdmin. 
 *
 * @tags CompanyUser
 * @name DeleteCompanyUser
 * @summary Delete user from the system
Firstly, the user has to be disconnected, which can be done through a PATCH or PUT
This action is irreversible, use with caution
 * @request DELETE:/v0.1/companies/{companyId}/users/{id}
 */
  deleteCompanyUser = (
    companyId: number,
    id: number,
    query?: {
      /** CompanyUser FirstName */
      firstName?: string;
      /** CompanyUser LastName */
      lastName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${id}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyUser
   * @name AddCompanyUser
   * @summary Add company user employee
   * @request POST:/v0.1/companies/{companyId}/users
   */
  addCompanyUser = (companyId: number, data: CompanyUserAddModel, params: RequestParams = {}) =>
    this.request<CompanyUserFullModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUsers
   * @name CompanyUsers
   * @summary Get company users list
   * @request GET:/v0.1/companies/{companyId}/users
   */
  companyUsers = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyUserExtendedModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyUserConvert
   * @name ConvertUserToAadAccount
   * @summary Convert company user employee to an AAD account
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/convert-aad
   */
  convertUserToAadAccount = (
    companyUserId: number,
    companyId: string,
    data: ConvertCompanyUserToAadAccountModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/convert-aad`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEvent
   * @name CompanyUserEmployeeEvent
   * @summary Get employee event
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events/{id}
   */
  companyUserEmployeeEvent = (companyId: number, companyUserId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyUserEventModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventMeeting
   * @name CompanyUserEmployeeEventMeeting
   * @summary Get employee meeting event
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings/{id}
   */
  companyUserEmployeeEventMeeting = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/meetings/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventMeeting
   * @name UpdateCompanyUserEmployeeEventMeeting
   * @summary Updates employee meeting event
   * @request PUT:/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings/{id}
   */
  updateCompanyUserEmployeeEventMeeting = (
    companyId: number,
    companyUserId: number,
    id: string,
    data: CompanyUserEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/meetings/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventMeeting
   * @name DeleteCompanyUserEmployeeEventMeeting
   * @summary Deletes meeting event
   * @request DELETE:/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings/{id}
   */
  deleteCompanyUserEmployeeEventMeeting = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/meetings/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventMeeting
   * @name NewCompanyUserEmployeeEventMeeting
   * @summary Creates new employee meeting event
   * @request POST:/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings
   */
  newCompanyUserEmployeeEventMeeting = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/meetings`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventsMeetings
   * @name CompanyUserEmployeeEventMeetingList
   * @summary Get employee meetings events list
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings
   */
  companyUserEmployeeEventMeetingList = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/meetings`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventNote
   * @name CompanyUserEmployeeEventNote
   * @summary Get employee note event
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}
   */
  companyUserEmployeeEventNote = (companyId: number, companyUserId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyUserEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/notes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventNote
   * @name UpdateCompanyUserEmployeeEventNote
   * @summary Updates employee note event
   * @request PUT:/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}
   */
  updateCompanyUserEmployeeEventNote = (
    companyId: number,
    companyUserId: number,
    id: string,
    data: CompanyUserEventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/notes/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventNote
   * @name DeleteCompanyUserEmployeeEventNote
   * @summary Deletes meeting event
   * @request DELETE:/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}
   */
  deleteCompanyUserEmployeeEventNote = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/notes/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventNote
   * @name NewCompanyUserEmployeeEventNote
   * @summary Creates new employee note event
   * @request POST:/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes
   */
  newCompanyUserEmployeeEventNote = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserEventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/notes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventsNotes
   * @name CompanyUserEmployeeEventNoteList
   * @summary Get employee notes events list
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes
   */
  companyUserEmployeeEventNoteList = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/notes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEvents
   * @name CompanyUserEmployeeEvents
   * @summary Get employee events list
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events
   */
  companyUserEmployeeEvents = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventsTasks
   * @name CompanyUserEmployeeEventTaskList
   * @summary Get employee tasks events list
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks
   */
  companyUserEmployeeEventTaskList = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/tasks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventTask
   * @name NewCompanyUserEmployeeEventTask
   * @summary Creates new employee task event
   * @request POST:/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks
   */
  newCompanyUserEmployeeEventTask = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserEventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/tasks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventTask
   * @name CompanyUserEmployeeEventTask
   * @summary Get employee task event
   * @request GET:/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks/{id}
   */
  companyUserEmployeeEventTask = (companyId: number, companyUserId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyUserEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/tasks/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventTask
   * @name UpdateCompanyUserEmployeeEventTask
   * @summary Updates employee's task event
   * @request PUT:/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks/{id}
   */
  updateCompanyUserEmployeeEventTask = (
    companyId: number,
    companyUserId: number,
    id: string,
    data: CompanyUserEventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/tasks/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager.
   *
   * @tags CompanyUserEmployeeEventTask
   * @name DeleteCompanyUserEmployeeEventTask
   * @summary Deletes meeting event
   * @request DELETE:/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks/{id}
   */
  deleteCompanyUserEmployeeEventTask = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/employees/${companyUserId}/events/tasks/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyUserFull
   * @name UserFull
   * @summary Get company user, including financial fields, by id
   * @request GET:/v0.1/companies/{companyId}/users-full/{id}
   */
  userFull = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserFullModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users-full/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin.
   *
   * @tags CompanyUserPermissions
   * @name UpdatePermissions
   * @summary Update Permissions for Company User
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/permissions
   */
  updatePermissions = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserPermissionsEditModel,
    params: RequestParams = {},
  ) =>
    this.request<RoleModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/permissions`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfile
   * @name CompanyUserProfile
   * @summary Get profile by company user id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile
   */
  companyUserProfile = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileFullModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfile
   * @name NewCompanyUserProfile
   * @summary Create Profile for user
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile
   */
  newCompanyUserProfile = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileCommitment
   * @name CompanyUserProfileCommitment
   * @summary Get profile commitment by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments/{id}
   */
  companyUserProfileCommitment = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileCommitmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/commitments/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileCommitment
   * @name UpdateCompanyUserProfileCommitment
   * @summary Update Profile Commitment
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments/{id}
   */
  updateCompanyUserProfileCommitment = (
    id: number,
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileCommitmentAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileCommitmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/commitments/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileCommitment
   * @name DeleteCompanyUserProfileCommitment
   * @summary Delete Commitment
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments/{id}
   */
  deleteCompanyUserProfileCommitment = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/commitments/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileCommitment
   * @name NewCompanyUserProfileCommitment
   * @summary Create Profile Commitment
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments
   */
  newCompanyUserProfileCommitment = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileCommitmentAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/commitments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEducation
   * @name CompanyUserProfileEducation
   * @summary Get profile education by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}
   */
  companyUserProfileEducation = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileEducationModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/educations/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEducation
   * @name UpdateCompanyUserProfileEducation
   * @summary Update Profile Education
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}
   */
  updateCompanyUserProfileEducation = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileEducationAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileEducationModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/educations/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEducation
   * @name DeleteCompanyUserProfileEducation
   * @summary Delete Profile Education
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}
   */
  deleteCompanyUserProfileEducation = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/educations/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEducation
   * @name NewCompanyUserProfileEducation
   * @summary Create Profile Education
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations
   */
  newCompanyUserProfileEducation = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileEducationAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/educations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEmployer
   * @name CompanyUserProfileEmployer
   * @summary Get profile employer by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}
   */
  companyUserProfileEmployer = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileEmployerModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/employers/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEmployer
   * @name UpdateCompanyUserProfileEmployer
   * @summary Update Profile Employer
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}
   */
  updateCompanyUserProfileEmployer = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileEmployerAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileEmployerModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/employers/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEmployer
   * @name DeleteCompanyUserProfileEmployer
   * @summary Delete Profile Employer
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}
   */
  deleteCompanyUserProfileEmployer = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/employers/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileEmployer
   * @name NewCompanyUserProfileEmployer
   * @summary Create Employer profile item
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers
   */
  newCompanyUserProfileEmployer = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileEmployerAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/employers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileExtSkill
   * @name CompanyUserProfileExtSkill
   * @summary Get profile external skill by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}
   */
  companyUserProfileExtSkill = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileExtSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/extskills/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileExtSkill
   * @name UpdateCompanyUserProfileExtSkill
   * @summary Update Extra Skill Profile Item
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}
   */
  updateCompanyUserProfileExtSkill = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileExtSkillAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileExtSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/extskills/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileExtSkill
   * @name DeleteCompanyUserProfileExtSkill
   * @summary Delete Extra Skill Profile Item
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}
   */
  deleteCompanyUserProfileExtSkill = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/extskills/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileExtSkill
   * @name NewCompanyUserProfileExtSkill
   * @summary Create Extra Skill Profile Item
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills
   */
  newCompanyUserProfileExtSkill = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileExtSkillAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/extskills`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This will start an async operation. - If the operation is started successfully, the response will be `202 Accepted` and the `Location` header will contain the URL to get the status of the operation. - If the operation is not started successfully, the response will be `400 Bad Request`
   *
   * @tags CompanyUserProfileImport
   * @name CreateCompanyUserProfileImport
   * @summary Create new profile import for a user.
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/import
   */
  createCompanyUserProfileImport = (
    companyId: number,
    companyUserId: number,
    data: {
      /** @format binary */
      File: File;
      MapSkillExperienceYearsToLevel?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/import`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description This will return the status of an async operation. - If the operation is still in progress, the response will be `202 Accepted` - If the operation is completed successfully, the response will be `200 OK` and the `status` property will be `Completed` - If the operation is completed with errors, the response will be `200 OK` and the `status` property will be `Failed`
   *
   * @tags CompanyUserProfileImport
   * @name GetCompanyUserProfileImport
   * @summary Get current status of the async profile import operation.
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/import/{operationId}
   */
  getCompanyUserProfileImport = (
    companyId: number,
    companyUserId: number,
    operationId: number,
    params: RequestParams = {},
  ) =>
    this.request<ImportProfileAsyncOperation, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/import/${operationId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileLanguage
   * @name CompanyUserProfileLanguage
   * @summary Get profile language by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}
   */
  companyUserProfileLanguage = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileLanguageModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/languages/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileLanguage
   * @name UpdateCompanyUserProfileLanguage
   * @summary Update Language Profile Item
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}
   */
  updateCompanyUserProfileLanguage = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileLanguageAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileLanguageModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/languages/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileLanguage
   * @name DeleteCompanyUserProfileLanguage
   * @summary Delete Language Profile Item
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}
   */
  deleteCompanyUserProfileLanguage = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/languages/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileLanguage
   * @name NewCompanyUserProfileLanguage
   * @summary Create Language Profile Item
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages
   */
  newCompanyUserProfileLanguage = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileLanguageAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/languages`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileLanguages
   * @name ProfileLanguages
   * @summary Get Available Profile Languages
   * @request GET:/v0.1/languages
   */
  profileLanguages = (params: RequestParams = {}) =>
    this.request<ProfileLanguageModel[], void | ErrorModel>({
      path: `/v0.1/languages`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfilePresentation
   * @name CompanyUserProfilePresentation
   * @summary Get profile presentation
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/presentation
   */
  companyUserProfilePresentation = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfilePresentationModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/presentation`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfilePresentation
   * @name UpdateCompanyUserProfilePresentation
   * @summary Edit Profile Presentation
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/presentation
   */
  updateCompanyUserProfilePresentation = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfilePresentationEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfilePresentationModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/presentation`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileReference
   * @name CompanyUserProfileReference
   * @summary Get profile reference by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}
   */
  companyUserProfileReference = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileReferenceModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/references/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileReference
   * @name UpdateCompanyUserProfileReference
   * @summary Update Profile Reference Item
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}
   */
  updateCompanyUserProfileReference = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileReferenceAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileReferenceModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/references/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileReference
   * @name DeleteCompanyUserProfileReference
   * @summary Delete Profile Reference Item
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}
   */
  deleteCompanyUserProfileReference = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/references/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileReference
   * @name NewCompanyUserProfileReference
   * @summary Create Profile Reference Item
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/references
   */
  newCompanyUserProfileReference = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileReferenceAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/references`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfiles
   * @name CompanyUserProfiles
   * @summary Get profiles list
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profiles
   */
  companyUserProfiles = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profiles`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileSkill
   * @name CompanyUserProfileSkill
   * @summary Get profile skill by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}
   */
  companyUserProfileSkill = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/skills/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileSkill
   * @name UpdateCompanyUserProfileSkill
   * @summary Update Profile Skill
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}
   */
  updateCompanyUserProfileSkill = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileSkillEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/skills/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileSkill
   * @name DeleteCompanyUserProfileSkill
   * @summary Delete Profile Skill
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}
   */
  deleteCompanyUserProfileSkill = (id: number, companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/skills/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileSkill
   * @name NewCompanyUserProfileSkill
   * @summary Add Skill to profile
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills
   */
  newCompanyUserProfileSkill = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileSkillAddModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/skills`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileTraining
   * @name CompanyUserProfileTraining
   * @summary Get profile training by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}
   */
  companyUserProfileTraining = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProfileTrainingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/trainings/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileTraining
   * @name UpdateCompanyUserProfileTraining
   * @summary Update Profile Training Item
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}
   */
  updateCompanyUserProfileTraining = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileTrainingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileTrainingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/trainings/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileTraining
   * @name DeleteCompanyUserProfileTraining
   * @summary Delete Profile Training Item
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}
   */
  deleteCompanyUserProfileTraining = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/trainings/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileTraining
   * @name NewCompanyUserProfileTraining
   * @summary Create Profile Training Item
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings
   */
  newCompanyUserProfileTraining = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileTrainingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/trainings`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileWorkExperience
   * @name CompanyUserProfileWorkExperience
   * @summary Get profile work experience by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}
   */
  companyUserProfileWorkExperience = (
    companyId: number,
    companyUserId: number,
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileWorkExperienceModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/workexperiences/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileWorkExperience
   * @name UpdateCompanyUserProfileWorkExperience
   * @summary Update Profile Work Experience
   * @request PUT:/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}
   */
  updateCompanyUserProfileWorkExperience = (
    companyId: number,
    companyUserId: number,
    id: number,
    data: CompanyUserProfileWorkExperienceAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserProfileWorkExperienceModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/workexperiences/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileWorkExperience
   * @name DeleteCompanyUserProfileWorkExperience
   * @summary Delete Profile Work Experience Item
   * @request DELETE:/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}
   */
  deleteCompanyUserProfileWorkExperience = (
    id: number,
    companyId: number,
    companyUserId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/workexperiences/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserProfileWorkExperience
   * @name NewCompanyUserProfileWorkExperience
   * @summary Create WorkExperience Profile Item
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences
   */
  newCompanyUserProfileWorkExperience = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserProfileWorkExperienceAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/profile/workexperiences`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires module: CompanyUserResume.
   *
   * @tags CompanyUserResume
   * @name GetResume
   * @summary Get resume by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/resumes/{id}
   */
  getResume = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<ClassicCompanyUserResumeModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/resumes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires module: CompanyUserResume.
   *
   * @tags CompanyUserResumes
   * @name CompanyUserResumes
   * @summary Get company user resumes list
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/resumes
   */
  companyUserResumes = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserResumeBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/resumes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags CompanyUserRoles
   * @name CompanyUserRoles
   * @summary Get Roles for CompanyUser by id
   * @request GET:/v0.1/companies/{companyId}/users/{id}/roles
   */
  companyUserRoles = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${id}/roles`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUsersExtended
   * @name CompanyUsersExtended
   * @summary Get extended company users list
   * @request GET:/v0.1/companies/{companyId}/users/extended
   */
  companyUsersExtended = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyUserExtendedModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/extended`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserSkill
   * @name Skill
   * @summary Get skill by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/skills/{id}
   */
  skill = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/skills/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserSkills
   * @name Skills
   * @summary Get skills list
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/skills
   */
  skills = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserSkillModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/skills`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractor
   * @name CompanySubcontractor
   * @summary Get company user by id
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{id}
   */
  companySubcontractor = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<CompanyUserSubcontractorModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
 * @description Requires access level: PartnerManager. Requires module: Partners. 
 *
 * @tags CompanyUserSubcontractor
 * @name DeleteCompanySubcontractor
 * @summary Delete subcontractor from the system
This action is irreversible, use with caution
 * @request DELETE:/v0.1/companies/{companyId}/subcontractors/{id}
 */
  deleteCompanySubcontractor = (
    companyId: number,
    id: number,
    query?: {
      /** Subcontractor FirstName */
      firstName?: string;
      /** Subcontractor LastName */
      lastName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${id}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractor
   * @name AddCompanyUserSubcontractor
   * @summary Add subcontractor
   * @request POST:/v0.1/companies/{companyId}/subcontractors
   */
  addCompanyUserSubcontractor = (
    companyId: number,
    data: CompanyUserSubcontractorAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserSubcontractorModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractors
   * @name CompanyUserSubcontractors
   * @summary Get subcontractors list
   * @request GET:/v0.1/companies/{companyId}/subcontractors
   */
  companyUserSubcontractors = (companyId: number, params: RequestParams = {}) =>
    this.request<CompanyUserSubcontractorBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEvent
   * @name CompanyUserSubcontractorEvent
   * @summary Get subcontractors events list
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/{id}
   */
  companyUserSubcontractorEvent = (companyId: number, companyUserId: number, id: string, params: RequestParams = {}) =>
    this.request<CompanyUserEventModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventMeeting
   * @name CompanyUserSubcontractorEventMeeting
   * @summary Get subcontractor meeting event
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}
   */
  companyUserSubcontractorEventMeeting = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/meetings/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventMeeting
   * @name UpdateCompanyUserSubcontractorEventMeeting
   * @summary Updates subcontractor meeting event
   * @request PUT:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}
   */
  updateCompanyUserSubcontractorEventMeeting = (
    companyId: number,
    companyUserId: number,
    id: string,
    data: CompanyUserEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/meetings/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventMeeting
   * @name DeleteCompanyUserSubcontractorEventMeeting
   * @summary Deletes meeting event
   * @request DELETE:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}
   */
  deleteCompanyUserSubcontractorEventMeeting = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/meetings/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventMeeting
   * @name NewCompanyUserSubcontractorEventMeeting
   * @summary Creates new subcontractor meeting event
   * @request POST:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings
   */
  newCompanyUserSubcontractorEventMeeting = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/meetings`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventsMeetings
   * @name CompanyUserSubcontractorEventMeetingList
   * @summary Get subcontractors meetings events list
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings
   */
  companyUserSubcontractorEventMeetingList = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/meetings`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventNote
   * @name CompanyUserSubcontractorEventNote
   * @summary Get subcontractors notes events list
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes/{id}
   */
  companyUserSubcontractorEventNote = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/notes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventNote
   * @name UpdateCompanyUserSubcontractorEventNote
   * @summary Updates subcontractor note event
   * @request PUT:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes/{id}
   */
  updateCompanyUserSubcontractorEventNote = (
    companyId: number,
    companyUserId: number,
    id: string,
    data: CompanyUserEventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/notes/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventNote
   * @name DeleteCompanyUserSubcontractorEventNote
   * @summary Deletes meeting event
   * @request DELETE:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes/{id}
   */
  deleteCompanyUserSubcontractorEventNote = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/notes/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventNote
   * @name NewCompanyUserSubcontractorEventNote
   * @summary Creates new subcontractors note event
   * @request POST:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes
   */
  newCompanyUserSubcontractorEventNote = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserEventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/notes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventsNotes
   * @name CompanyUserSubcontractorEventsNotes
   * @summary Get subcontractors notes events list
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes
   */
  companyUserSubcontractorEventsNotes = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/notes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEvents
   * @name CompanyUserSubcontractorEvents
   * @summary Get subcontractors events list
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{subcontractorId}/events
   */
  companyUserSubcontractorEvents = (companyId: number, subcontractorId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${subcontractorId}/events`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventsTasks
   * @name CompanyUserSubcontractorEventsTasks
   * @summary Get subcontractors tasks events list
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks
   */
  companyUserSubcontractorEventsTasks = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<CompanyUserEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/tasks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventTask
   * @name NewCompanyUserSubcontractorEventTask
   * @summary Creates new subcontractor task event
   * @request POST:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks
   */
  newCompanyUserSubcontractorEventTask = (
    companyId: number,
    companyUserId: number,
    data: CompanyUserEventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/tasks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventTask
   * @name CompanyUserSubcontractorEventTask
   * @summary Get subcontractors tasks events list
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}
   */
  companyUserSubcontractorEventTask = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/tasks/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventTask
   * @name UpdateCompanyUserSubcontractorEventTask
   * @summary Updates subcontractor task event
   * @request PUT:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}
   */
  updateCompanyUserSubcontractorEventTask = (
    companyId: number,
    companyUserId: number,
    id: string,
    data: CompanyUserEventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/tasks/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorEventTask
   * @name DeleteCompanyUserSubcontractorEventTask
   * @summary Deletes meeting event
   * @request DELETE:/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}
   */
  deleteCompanyUserSubcontractorEventTask = (
    companyId: number,
    companyUserId: number,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${companyUserId}/events/tasks/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorFileAttachment
   * @name GetSubcontractorAttachment
   * @summary Get subcontractor File Attachment by Id
   * @request GET:/v0.1/companies/{companyId}/subcontractors/{id}/attachments/{attachmentId}
   */
  getSubcontractorAttachment = (id: number, companyId: number, attachmentId: string, params: RequestParams = {}) =>
    this.request<string, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${id}/attachments/${attachmentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags CompanyUserSubcontractorFileAttachments
   * @name SubcontractorAttachment
   * @summary Upload subcontractor file attachment
   * @request POST:/v0.1/companies/{companyId}/subcontractors/{id}/attachments
   */
  subcontractorAttachment = (
    id: number,
    companyId: number,
    data: {
      Files: File[];
      Title: string;
      Description?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserSubcontractorFileAttachmentListModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/subcontractors/${id}/attachments`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Note: Posted tags will replace any existing tags for the user. A new tag will be created if the id for a tag is not provided. Sample request: POST /v0.1/companies/1/users/19870/tags [ { "name": "tag-name", "id": 2 }, { "name": "tag-new", }, ]
   *
   * @tags CompanyUserTags
   * @name EditCompanyUserTags
   * @summary Edit Tags for User
   * @request POST:/v0.1/companies/{companyId}/users/{companyUserId}/tags
   */
  editCompanyUserTags = (
    companyId: number,
    companyUserId: number,
    data: CompanyTagModel[],
    params: RequestParams = {},
  ) =>
    this.request<CompanyUserModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/tags`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CompanyUserTeams
   * @name UserTeams
   * @summary Get teams for team member
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/teams
   */
  userTeams = (companyId: number, companyUserId: number, params: RequestParams = {}) =>
    this.request<TeamBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/teams`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: POST /v0.1/companies/1/webhooks { "isActive": false, "endpointUrl": "https://webhook.site/7a619ffb-e67c-41fc-8113-083d6013f76c", "configurations": [ { "entityType": 1, "actionType": 1 } ], "credentials": [ { "isBasicAuthentication": true, "headerName": "user", "headerValue": "somevalue" } ] }
   *
   * @tags CompanyWebhook
   * @name NewWebhook
   * @summary Add Webhook
   * @request POST:/v0.1/companies/{companyId}/webhooks
   */
  newWebhook = (companyId: number, data: WebhookAddModel, params: RequestParams = {}) =>
    this.request<WebhookModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/webhooks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: GET /v0.1/companies/1/webhooks
   *
   * @tags CompanyWebhooks
   * @name CompanyWebhooks
   * @summary Get company webhooks
   * @request GET:/v0.1/companies/{companyId}/webhooks
   */
  companyWebhooks = (companyId: number, params: RequestParams = {}) =>
    this.request<WebhookModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/webhooks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyAdmin. Requires module: Webhooks.
   *
   * @tags CompanyWebhook
   * @name InstallWebhookManifest
   * @request POST:/v0.1/companies/{companyId}/webhooks/manifest
   */
  installWebhookManifest = (companyId: number, data: WebhookAddModel[], params: RequestParams = {}) =>
    this.request<WebhookModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/webhooks/manifest`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: DELETE /v0.1/companies/1/webhooks/42a3a220-766c-eb11-8e13-000c29b4e92f
   *
   * @tags CompanyWebhook
   * @name RemoveWebhook
   * @summary Remove webhook
   * @request DELETE:/v0.1/companies/{companyId}/webhooks/{id}
   */
  removeWebhook = (companyId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/webhooks/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires module: CompanyUserResume.
   *
   * @tags DynamicCompanyUserResume
   * @name DynamicResume
   * @summary Get resume by id
   * @request GET:/v0.1/companies/{companyId}/users/{companyUserId}/resumes/{id}/dynamic
   */
  dynamicResume = (companyId: number, companyUserId: number, id: number, params: RequestParams = {}) =>
    this.request<DynamicCompanyUserResumeModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/${companyUserId}/resumes/${id}/dynamic`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags KeywordSearch
   * @name SearchKeyword
   * @summary Search keywords by term
   * @request GET:/v0.1/companies/{companyId}/keywords/search/{term}
   */
  searchKeyword = (companyId: number, term: string, params: RequestParams = {}) =>
    this.request<KeywordModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/keywords/search/${term}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Mentions
 * @name TranslateMentions
 * @summary Translates any mention-ids in a text to their human readable form. 
Translations are access restricted, if you don't have enough access
to get the name of an id, it won't be translated.
 * @request POST:/v0.1/companies/{companyId}/mentions/to-natural-text
 */
  translateMentions = (companyId: number, data: MentionTextModel, params: RequestParams = {}) =>
    this.request<string, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/mentions/to-natural-text`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: PartnerManager. Requires module: Partners.
   *
   * @tags Partners
   * @name SearchPartners
   * @summary Get Partners by filter
   * @request POST:/v0.1/companies/{companyId}/partners
   */
  searchPartners = (companyId: number, data: PartnersFilterModel, params: RequestParams = {}) =>
    this.request<PartnersOverviewModel, void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/partners`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags Project
   * @name Project
   * @summary Get project by id
   * @request GET:/v0.1/companies/{companyId}/projects/{id}
   */
  project = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<ProjectModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags Project
   * @name UpdateCompanyProject
   * @summary Update project
   * @request PUT:/v0.1/companies/{companyId}/projects/{id}
   */
  updateCompanyProject = (id: number, companyId: number, data: ProjectAddEditModel, params: RequestParams = {}) =>
    this.request<ProjectModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags Project
   * @name DeleteCompanyProject
   * @summary Delete project
   * @request DELETE:/v0.1/companies/{companyId}/projects/{id}
   */
  deleteCompanyProject = (companyId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags Project
   * @name NewCompanyProject
   * @summary Add project
   * @request POST:/v0.1/companies/{companyId}/projects
   */
  newCompanyProject = (companyId: number, data: ProjectAddEditModel, params: RequestParams = {}) =>
    this.request<ProjectModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags Projects
   * @name Projects
   * @summary Get projects list  - please note this endpoint currently only returns projects with the status WON. Please use the SearchProjects endpoint for more options of filtering desired Projects
   * @request GET:/v0.1/companies/{companyId}/projects
   */
  projects = (companyId: number, params: RequestParams = {}) =>
    this.request<ProjectBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignment
   * @name OldProjectAssignment
   * @summary Get projectassignment by id (Obsolete)
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/projectassignments/{id}
   * @deprecated
   */
  oldProjectAssignment = (companyId: number, projectId: number, id: number, params: RequestParams = {}) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/projectassignments/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignment
   * @name ProjectAssignment
   * @summary Get Role by id
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}
   */
  projectAssignment = (companyId: number, projectId: number, id: number, params: RequestParams = {}) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignment
   * @name UpdateProjectAssignment
   * @summary Edit Role
   * @request PUT:/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}
   */
  updateProjectAssignment = (
    companyId: number,
    projectId: number,
    id: number,
    data: ProjectAssignmentEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignment
   * @name DeleteProjectAssignment
   * @summary Delete Role
   * @request DELETE:/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}
   */
  deleteProjectAssignment = (companyId: number, projectId: number, id: number, params: RequestParams = {}) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignment
   * @name NewProjectAssignment
   * @summary Add Role
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/roles
   */
  newProjectAssignment = (
    companyId: number,
    projectId: number,
    data: ProjectAssignmentAddModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * @tags ProjectAssignment
 * @name AnnounceProjectAssignment
 * @summary Announce a role (ProjectAssignment) to the Partner Network and optionally also to Cinode Market(https://cinode.market/requests). 
If you are testing, set the "PublishForReal" to "false", otherwise you will publish this announcement for real. When you're testing ("PublishForReal = false) RequestId will be 0 in the response.
 * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/roles/{projectAssignmentId}/announce
 */
  announceProjectAssignment = (
    projectId: number,
    projectAssignmentId: number,
    companyId: string,
    data: ProjectAssignmentAnnounceModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentAnnouncementBaseModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${projectAssignmentId}/announce`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentMember
   * @name AddProjectAssignmentMemberEmployee
   * @summary Add Role Member Employee
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/employee
   */
  addProjectAssignmentMemberEmployee = (
    companyId: number,
    projectId: number,
    roleId: number,
    data: ProjectAssignmentMemberEmployeeAddModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/members/employee`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentMember
   * @name AddProjectAssignmentMemberSubcontractor
   * @summary Add Role Member Subcontractor
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/subcontractor
   */
  addProjectAssignmentMemberSubcontractor = (
    companyId: number,
    projectId: number,
    roleId: number,
    data: ProjectAssignmentMemberSubcontractorAddModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/members/subcontractor`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentMember
   * @name UpdateProjectAssignmentMemberEmployee
   * @summary Edit Role Member Employee
   * @request PUT:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/employee/{id}
   */
  updateProjectAssignmentMemberEmployee = (
    companyId: number,
    projectId: number,
    roleId: number,
    id: number,
    data: ProjectAssignmentMemberEmployeeEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/members/employee/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentMember
   * @name UpdateProjectAssignmentMemberSubcontractor
   * @summary Edit Role Member Subcontractor
   * @request PUT:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/subcontractor/{id}
   */
  updateProjectAssignmentMemberSubcontractor = (
    companyId: number,
    projectId: number,
    roleId: number,
    id: number,
    data: ProjectAssignmentMemberSubcontractorEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/members/subcontractor/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentMember
   * @name DeleteProjectAssignmentMemberEmployee
   * @summary Delete Role Member
   * @request DELETE:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/{id}
   */
  deleteProjectAssignmentMemberEmployee = (
    companyId: number,
    projectId: number,
    roleId: number,
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/members/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
 * @description Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * @tags ProjectAssignments
 * @name SearchRoles
 * @summary Get Roles by Filter
Rate limited, restricted to once per minute, max 1000 requests per day
 * @request POST:/v0.1/companies/{companyId}/roles
 */
  searchRoles = (companyId: number, data: ProjectAssignmentFilterModel, params: RequestParams = {}) =>
    this.request<ProjectAssignmentWithStatusModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/roles`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentSkills
   * @name AddProjectAssignmentSkill
   * @summary Add Role Skill
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills
   */
  addProjectAssignmentSkill = (
    companyId: number,
    projectId: number,
    roleId: number,
    data: ProjectAssignmentSkillAddModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/skills`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentSkills
   * @name UpdateProjectAssignmentSkill
   * @summary Update Role Skill
   * @request PUT:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills/{id}
   */
  updateProjectAssignmentSkill = (
    companyId: number,
    projectId: number,
    roleId: number,
    id: number,
    data: ProjectAssignmentSkillEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/skills/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectAssignmentSkills
   * @name DeleteProjectAssignmentSkill
   * @summary Delete Role Skill
   * @request DELETE:/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills/{id}
   */
  deleteProjectAssignmentSkill = (
    companyId: number,
    projectId: number,
    roleId: number,
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentSkillModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/roles/${roleId}/skills/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEvent
   * @name ProjectEvent
   * @summary Get project event by id
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events/{id}
   */
  projectEvent = (companyId: number, projectId: number, id: string, params: RequestParams = {}) =>
    this.request<ProjectEventModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEvents
   * @name ProjectEvents
   * @summary Get project events list
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events
   */
  projectEvents = (companyId: number, projectId: number, params: RequestParams = {}) =>
    this.request<ProjectEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsMeeting
   * @name ProjectEventMeeting
   * @summary Get project event meeting by id
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}
   */
  projectEventMeeting = (companyId: number, projectId: number, id: string, params: RequestParams = {}) =>
    this.request<ProjectEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/meetings/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsMeeting
   * @name UpdateProjectMeeting
   * @summary Update project event meeting
   * @request PUT:/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}
   */
  updateProjectMeeting = (
    companyId: number,
    projectId: number,
    id: string,
    data: ProjectEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/meetings/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsMeeting
   * @name DeleteProjectMeeting
   * @summary Delete project event meeting
   * @request DELETE:/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}
   */
  deleteProjectMeeting = (companyId: number, projectId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/meetings/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsMeeting
   * @name NewProjectMeeting
   * @summary Add project event meeting
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/events/meetings
   */
  newProjectMeeting = (
    companyId: number,
    projectId: number,
    data: ProjectEventMeetingAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectEventMeetingModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/meetings`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsMeetings
   * @name ProjectEventMeetings
   * @summary Get project events meetings list
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events/meetings
   */
  projectEventMeetings = (companyId: number, projectId: number, params: RequestParams = {}) =>
    this.request<ProjectEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/meetings`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsNote
   * @name ProjectEventNote
   * @summary Get project event note by id
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}
   */
  projectEventNote = (companyId: number, projectId: number, id: string, params: RequestParams = {}) =>
    this.request<CustomerEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/notes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsNote
   * @name UpdateProjectNote
   * @summary Update project event note
   * @request PUT:/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}
   */
  updateProjectNote = (
    companyId: number,
    projectId: number,
    id: string,
    data: ProjectEventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/notes/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsNote
   * @name DeleteProjectNote
   * @summary Delete project event note
   * @request DELETE:/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}
   */
  deleteProjectNote = (companyId: number, projectId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/notes/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsNote
   * @name NewProjectNote
   * @summary Add project event note
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/events/notes
   */
  newProjectNote = (
    companyId: number,
    projectId: number,
    data: ProjectEventNoteAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectEventNoteModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/notes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsNotes
   * @name ProjectEventNotes
   * @summary Get project event notes list
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events/notes
   */
  projectEventNotes = (companyId: number, projectId: number, params: RequestParams = {}) =>
    this.request<ProjectEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/notes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsTask
   * @name ProjectEventTask
   * @summary Get project event task by id
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}
   */
  projectEventTask = (companyId: number, projectId: number, id: string, params: RequestParams = {}) =>
    this.request<ProjectEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/tasks/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsTask
   * @name UpdateProjectTask
   * @summary Update project event task
   * @request PUT:/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}
   */
  updateProjectTask = (
    companyId: number,
    projectId: number,
    id: string,
    data: ProjectEventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/tasks/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsTask
   * @name DeleteProjectTask
   * @summary Delete project event task
   * @request DELETE:/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}
   */
  deleteProjectTask = (companyId: number, projectId: number, id: string, params: RequestParams = {}) =>
    this.request<void, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/tasks/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsTask
   * @name NewProjectTask
   * @summary Add project event task
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/events/tasks
   */
  newProjectTask = (
    companyId: number,
    projectId: number,
    data: ProjectEventTaskAddEditModel,
    params: RequestParams = {},
  ) =>
    this.request<ProjectEventTaskModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/tasks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectEventsTasks
   * @name ProjectEventTasks
   * @summary Get project event tasks list
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/events/tasks
   */
  projectEventTasks = (companyId: number, projectId: number, params: RequestParams = {}) =>
    this.request<ProjectEventBaseModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/events/tasks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectPipelines
   * @name ProjectPipelines
   * @summary Get project pipelines
   * @request GET:/v0.1/companies/{companyId}/projects/pipelines
   */
  projectPipelines = (companyId: number, params: RequestParams = {}) =>
    this.request<ProjectPipelineModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/pipelines`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectReference
   * @name ProjectReference
   * @summary Get project reference by id
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/references/{id}
   */
  projectReference = (companyId: number, projectId: number, id: number, params: RequestParams = {}) =>
    this.request<ProjectReferenceModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/references/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Assignments.
   *
   * @tags ProjectReferences
   * @name ProjectReferences
   * @summary Get project reference by id
   * @request GET:/v0.1/companies/{companyId}/projects/{projectId}/references
   */
  projectReferences = (companyId: number, projectId: number, params: RequestParams = {}) =>
    this.request<ProjectReferenceModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/references`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Note: Posted tags will replace any existing tags for the project. A new tag will be created, if the id for a tag not provided. Sample request: POST /v0.1/companies/1/projects/19870/tags [ { "name": "tag-name", "id": 2 }, { "name": "tag-test", "id": 1 }, ]
   *
   * @tags ProjectTags
   * @name EditProjectTags
   * @summary Edit Tags for Project
   * @request POST:/v0.1/companies/{companyId}/projects/{projectId}/tags
   */
  editProjectTags = (companyId: number, projectId: number, data: CompanyTagModel[], params: RequestParams = {}) =>
    this.request<ProjectModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/${projectId}/tags`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyRecruiter. Requires module: Recruitment.
   *
   * @tags RecruitmentSources
   * @name RecruitmentSources
   * @summary Get recruitment sources
   * @request GET:/v0.1/companies/{companyId}/candidates/recruitment-sources
   */
  recruitmentSources = (companyId: number, params: RequestParams = {}) =>
    this.request<RecruitmentSourceModel[], ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/recruitment-sources`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sample request: POST /v0.1/companies/1/candidates/search { "term": "candidate property value", "rating": 3 "status": 0, "sources": [], "noRecruiter": false, "recruiters": [], "states": [0], "pipeline": null, "pageAndSortBy": { "page": 1, "itemsPerPage": 15 }, "pipelines": [] }
   *
   * @tags SearchCompanyCandidate
   * @name SearchCompanyCandidate
   * @summary Get company candidates list from search criteria
   * @request POST:/v0.1/companies/{companyId}/candidates/search
   */
  searchCompanyCandidate = (companyId: number, data: SearchCompanyCandidateQueryModel, params: RequestParams = {}) =>
    this.request<SearchCompanyCandidateResultModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/candidates/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags SearchCompanyCustomerContact
   * @name SearchCompanyCustomerContact
   * @summary Get company customer contacts list from search criteria
   * @request POST:/v0.1/companies/{companyId}/customers/contacts/search
   */
  searchCompanyCustomerContact = (
    companyId: number,
    data: SearchCompanyCustomerContactQueryModel,
    params: RequestParams = {},
  ) =>
    this.request<SearchCompanyCustomerContactResultModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/contacts/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requires access level: CompanyManager. Requires module: Customers.
   *
   * @tags SearchCompanyCustomers
   * @name SearchCompanyCustomer
   * @summary Get company customers list from search criteria
   * @request POST:/v0.1/companies/{companyId}/customers/search
   */
  searchCompanyCustomer = (companyId: number, data: SearchCompanyCustomerQueryModel, params: RequestParams = {}) =>
    this.request<SearchCompanyCustomerResultModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/customers/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SearchCompanyUser
   * @name SearchCompanyUser
   * @summary Get company users list from search criteria
   * @request POST:/v0.1/companies/{companyId}/users/search
   */
  searchCompanyUser = (companyId: number, data: SearchCompanyUserQueryModel, params: RequestParams = {}) =>
    this.request<SearchCompanyUserResultModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/users/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sample request { "pipelines": [4], "projectStates": [0], "PageAndSortBy": { "SortBy": "0", "SortOrder": "1", "Page": "1", "ItemsPerPage": "15", } } SortBy Parameter can be: CreatedDateTime=0 // Default Title=1 Identifier=2 CustomerIdentifier=3 SeoId=4 UpdatedDateTime=6 LastTouchDateTime=7
   *
   * @tags SearchProject
   * @name SearchProject
   * @summary Get projects list from search criteria
   * @request POST:/v0.1/companies/{companyId}/projects/search
   */
  searchProject = (companyId: number, data: SearchProjectQueryModel, params: RequestParams = {}) =>
    this.request<SearchProjectsResultModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/projects/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SkillSearch
   * @name SearchSkill
   * @summary Search users by skill keyword id
   * @request POST:/v0.1/companies/{companyId}/skills/search
   */
  searchSkill = (companyId: number, data: SearchSkillQueryModel, params: RequestParams = {}) =>
    this.request<SearchSkillResultModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/skills/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SkillSearchTerm
   * @name SearchSkillTerm
   * @summary Search users with skills by term (string value)
   * @request POST:/v0.1/companies/{companyId}/skills/search/term
   */
  searchSkillTerm = (companyId: number, data: SkillSearchQueryTermModel, params: RequestParams = {}) =>
    this.request<SearchSkillResultModel, ValidationModel | void | ErrorModel>({
      path: `/v0.1/companies/${companyId}/skills/search/term`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
