/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import { customUseFetch, type CustomFetchOptions } from "~/composables/fetch/customUseFetch";
export interface AddReactionParams {
  /** UUID чата */
  chatId: string;
  /** UUID сообщения */
  messageId: string;
}

export interface AuthLoginDto {
  /**
   * Логин или email пользователя
   * @example "user@example.com"
   */
  login: string;
  /**
   * Пароль пользователя
   * @minLength 6
   * @example "strongPassword123"
   */
  password: string;
}

export interface AuthLoginResponseDto {
  /** Access token для аутентификации */
  accessToken: string;
  /** Refresh token для обновления access token */
  refreshToken: string;
}

export interface BlockChatParams {
  id: string;
}

export interface BlockListResponseDto {
  blocks: BlockResponseDto[];
  /** @example 5 */
  total: number;
}

export interface BlockResponseDto {
  blocked: object;
  blocker: object;
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  id: string;
}

export interface BlockStatusResponseDto {
  /** @example false */
  isBlockedByMe: boolean;
  /** @example true */
  isBlockedByThem: boolean;
  /** @example false */
  mutualBlock: boolean;
}

export interface BlockedUsersResponseDto {
  /** @example 5 */
  total: number;
  users: object[];
}

export interface ChatListResponseDto {
  chats: ChatResponseDto[];
  /** @example 20 */
  limit: number;
  /** @example 1 */
  page: number;
  /** @example 10 */
  total: number;
}

export interface ChatResponseDto {
  /**
   * ID пользователя, который заблокировал чат
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  blockedBy?: string;
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * Признак что беседа удалена текущим пользователем
   * @example false
   */
  deletedByMe: boolean;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  id: string;
  /** @example false */
  isBlocked: boolean;
  /**
   * ID получателя сообщений (собеседника)
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  recipientId: string;
  /**
   * Количество непрочитанных сообщений в чате
   * @example 5
   */
  unreadCount?: number;
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  updatedAt: string;
  user: SimpleUserResponseDto;
}

export interface ChatUnreadDto {
  /**
   * UUID чата
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  chatId: string;
  /**
   * Количество непрочитанных сообщений в чате
   * @example 5
   */
  count: number;
  /**
   * Текст последнего непрочитанного сообщения
   * @example "Привет! Как дела?"
   */
  lastMessagePreview?: string;
  /**
   * Время последнего непрочитанного сообщения
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  lastMessageTime?: string;
}

export interface CheckBlockParams {
  /** UUID пользователя для проверки */
  userId: string;
}

export interface CityListResponseDto {
  /** Массив городов */
  cities: CityResponseDto[];
}

export interface CityResponseDto {
  /**
   * UUID города
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  id: string;
  /**
   * Название города
   * @maxLength 150
   * @example "Москва"
   */
  label: string;
}

export interface CreateBlockDto {
  /**
   * UUID пользователя для блокировки
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  userId: string;
}

export interface CreateChatDto {
  /**
   * UUID пользователя, с которым создать чат
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  userId: string;
}

export interface CreateCityDto {
  /**
   * Название города
   * @minLength 1
   * @maxLength 150
   * @example "Москва"
   */
  label: string;
}

export interface CreateGroupDto {
  /**
   * Роль пользователя
   * @example "ADMIN"
   */
  role: "USER" | "MODERATOR" | "ADMIN" | "CONTENT_MANAGER" | "SUPPORT";
}

export interface CreateGroupParams {
  userId: string;
}

export interface CreateMessageDto {
  /**
   * Текст сообщения
   * @example "Привет! Как дела?"
   */
  content?: string;
  /**
   * ID стикера (если type=STICKER)
   * @example "sticker_123"
   */
  stickerId?: string;
  /**
   * Тип сообщения
   * @example "TEXT"
   */
  type: "TEXT" | "STICKER";
}

export interface CreateMessageParams {
  /** UUID чата */
  chatId: string;
}

export interface CreateReportDto {
  /**
   * Подробное описание жалобы
   * @example "Пользователь постоянно отправляет рекламные сообщения"
   */
  description?: string;
  /**
   * UUID сообщения (если жалоба на конкретное сообщение)
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  messageId?: string;
  /** @example "SPAM" */
  reason: "SPAM" | "HARASSMENT";
  /**
   * UUID пользователя, на которого подается жалоба
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  reportedUserId: string;
}

export interface CreateStickerPackDto {
  /** @example "Набор веселых эмоций и реакций" */
  description?: string;
  /** @example "Веселые эмоции" */
  name: string;
  /** @example "https://example.com/preview.jpg" */
  previewUrl?: string;
}

export interface CreateUserDto {
  /**
   * Дата рождения
   * @example "1990-01-01"
   */
  dateBirthday?: string;
  /**
   * Email пользователя
   * @example "user@example.com"
   */
  email: string;
  /**
   * Имя пользователя
   * @example "Иван"
   */
  firstName: string;
  /**
   * Пол пользователя
   * @example "MALE"
   */
  gender: "MALE" | "FEMALE" | "OTHER";
  /** Дополнительная информация о пользователе */
  info?: CreateUserInfoDto;
  /**
   * Фамилия пользователя
   * @example "Иванов"
   */
  lastName?: string;
  /**
   * Отчество пользователя
   * @example "Иванович"
   */
  middleName?: string;
  /**
   * Пароль
   * @minLength 6
   * @example "password123"
   */
  password: string;
}

export interface CreateUserInfoDto {
  /**
   * Информация о себе (макс. 300 символов)
   * @maxLength 300
   * @example "Привет! Я люблю путешествия и программирование."
   */
  aboutMe?: string;
  /**
   * ID города
   * @example "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
   */
  cityId?: string;
  /**
   * Максимальный возраст партнера
   * @max 100
   * @example 30
   */
  desiredPartnerAgeMax?: number;
  /**
   * Минимальный возраст партнера
   * @min 18
   * @example 18
   */
  desiredPartnerAgeMin?: number;
  /** Желаемый пол партнера */
  desiredPartnerGender?: "MALE" | "FEMALE" | "OTHER";
  /**
   * Никнейм
   * @example "CoolNick"
   */
  nickname?: string;
  /** Знак зодиака */
  zodiacSign?:
    | "ARIES"
    | "TAURUS"
    | "GEMINI"
    | "CANCER"
    | "LEO"
    | "VIRGO"
    | "LIBRA"
    | "SCORPIO"
    | "SAGITTARIUS"
    | "CAPRICORN"
    | "AQUARIUS"
    | "PISCES"
    | "NONE";
}

export interface DeleteAllBlocksResponseDto {
  /** @example "Все блокировки успешно удалены" */
  message: string;
  /** @example true */
  success: boolean;
}

export interface DeleteChatParams {
  /** UUID чата */
  id: string;
}

export interface DeleteChatResponseDto {
  /** @example "Чат успешно удален" */
  message: string;
  /** @example true */
  success: boolean;
}

export interface DeleteCityResponseDto {
  /**
   * Сообщение об успешном удалении
   * @example "City deleted successfully"
   */
  message: string;
}

export interface DeleteGroupParams {
  groupId: string;
  userId: string;
}

export interface DeleteMessageParams {
  /** UUID чата */
  chatId: string;
  /** UUID сообщения */
  messageId: string;
}

export interface DeleteParams {
  /** City ID */
  id: string;
}

export interface DeletePhotosDto {
  /**
   * Array of photo IDs to delete
   * @example ["a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"]
   */
  photoIds: string[];
}

export interface DeleteReportParams {
  /** UUID жалобы */
  id: string;
}

export interface DeleteReportResponseDto {
  /** @example "Жалоба успешно удалена" */
  message: string;
  /** @example true */
  success: boolean;
}

export interface DeleteStickerParams {
  /** UUID стикера */
  id: string;
}

export interface FindAllParams {
  limit?: number;
  page?: number;
  search?: string;
}

export interface FindAllWithoutPaginationParams {
  search?: string;
}

export interface FindOneParams {
  /** City ID */
  id: string;
}

export interface GetByIdParams {
  id: string;
}

export interface GetByNicknameParams {
  /**
   * Никнейм пользователя
   * @example "CoolNick123"
   */
  nickname: string;
}

export interface GetChatMessagesParams {
  /** UUID чата */
  chatId: string;
  /**
   * Количество элементов на странице
   * @example 50
   */
  limit?: number;
  /**
   * Номер страницы
   * @example 1
   */
  page?: number;
}

export interface GetChatParams {
  /** UUID чата */
  id: string;
}

export interface GetMyReportsParams {
  /**
   * Количество элементов на странице
   * @example 20
   */
  limit?: number;
  /**
   * Номер страницы
   * @example 1
   */
  page?: number;
}

export interface GetPackByIdParams {
  /** UUID набора стикеров */
  id: string;
}

export interface GetPhotosParams {
  userId: string;
}

export interface GetReportParams {
  /** UUID жалобы */
  id: string;
}

export interface GetReportsByReportedUserParams {
  /** UUID пользователя */
  userId: string;
}

export interface GetReportsParams {
  /**
   * Количество элементов на странице
   * @example 20
   */
  limit?: number;
  /**
   * Номер страницы
   * @example 1
   */
  page?: number;
  /** Фильтр по статусу жалобы */
  status?: "PENDING" | "RESOLVED";
}

export interface GetStickerByIdParams {
  /** UUID стикера */
  id: string;
}

export interface GetStickerByStickerIdParams {
  /**
   * Внутренний ID стикера
   * @example "sticker_123"
   */
  stickerId: string;
}

export interface GetUserChatsParams {
  /**
   * Количество элементов на странице
   * @example 20
   */
  limit?: number;
  /**
   * Номер страницы
   * @example 1
   */
  page?: number;
}

export interface GetUserGroupsParams {
  userId: string;
}

export interface GetUsersParams {
  /**
   * Минимальный возраст
   * @example 18
   */
  ageFrom?: number;
  /**
   * Максимальный возраст
   * @example 26
   */
  ageTo?: number;
  /** UUID Города */
  cityId?: string;
  /**
   * Фильтр по email (частичное совпадение)
   * @example "example.com"
   */
  email?: string;
  /**
   * Список полей для выборки
   * @example ["id","email","firstName"]
   */
  fields?: string[];
  /**
   * Фильтр по имени (частичное совпадение)
   * @example "Ivan"
   */
  firstName?: string;
  /** Фильтр по полу */
  gender?: "MALE" | "FEMALE" | "OTHER";
  /**
   * Фильтр по фамилии (частичное совпадение)
   * @example "Petrov"
   */
  lastName?: string;
  /**
   * Количество элементов на странице (по умолчанию 10)
   * @min 1
   * @max 100
   * @default 10
   * @example 10
   */
  limit?: number;
  /**
   * Фильтр по никнейму (из userInfo)
   * @example "coolUser"
   */
  nickname?: string;
  /**
   * Номер страницы (по умолчанию 1)
   * @min 1
   * @default 1
   * @example 1
   */
  page?: number;
  /** Знак зодиака */
  zodiacSign?:
    | "ARIES"
    | "TAURUS"
    | "GEMINI"
    | "CANCER"
    | "LEO"
    | "VIRGO"
    | "LIBRA"
    | "SCORPIO"
    | "SAGITTARIUS"
    | "CAPRICORN"
    | "AQUARIUS"
    | "PISCES"
    | "NONE";
}

export interface GroupResponseDto {
  /**
   * Дата создания
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * UUID группы
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  id: string;
  /**
   * Роль пользователя
   * @example "USER"
   */
  role: "USER" | "MODERATOR" | "ADMIN" | "CONTENT_MANAGER" | "SUPPORT";
  /**
   * Дата обновления
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  updatedAt: string;
}

export interface LogoutResponseDto {
  /**
   * Сообщение о результате
   * @example "Successfully logged out"
   */
  message: string;
  /**
   * Флаг успешного выхода
   * @example true
   */
  success: boolean;
}

export interface MarkAsReadParams {
  /** UUID чата */
  chatId: string;
  /** UUID сообщения */
  messageId: string;
}

export interface MarkAsReadResponseDto {
  /** @example "Сообщение отмечено как прочитанное" */
  message: string;
  /** @example true */
  success: boolean;
}

export interface MessageListResponseDto {
  /** @example 20 */
  limit: number;
  messages: MessageResponseDto[];
  /** @example 1 */
  page: number;
  /** @example 100 */
  total: number;
}

export interface MessageReactionDto {
  /**
   * Реакция (эмодзи)
   * @example "👍"
   */
  reaction: string;
}

export interface MessageResponseDto {
  author: SimpleUserResponseDto;
  chat: object;
  /** @example "Привет! Как дела?" */
  content?: string;
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  id: string;
  /** @example false */
  isDeleted: boolean;
  /** @example false */
  isEdited: boolean;
  /** @example false */
  isRead: boolean;
  /** @example false */
  needsModeration: boolean;
  /** @example "👍" */
  reaction?: string;
  /** @example "sticker_123" */
  stickerId?: string;
  /** @example "TEXT" */
  type: "TEXT" | "STICKER";
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  updatedAt: string;
}

export interface NewFacesResponseDto {
  /** Последние зарегистрированные женщины */
  female: SimpleUserResponseDto[];
  /** Последние зарегистрированные мужчины */
  male: SimpleUserResponseDto[];
}

export interface PaginatedCityResponseDto {
  /** Массив городов */
  data: CityResponseDto[];
  /** Метаданные пагинации */
  meta: {
    /**
     * Количество элементов на странице
     * @example 10
     */
    limit?: number;
    /**
     * Текущая страница
     * @example 1
     */
    page?: number;
    /**
     * Общее количество элементов
     * @example 100
     */
    total?: number;
  };
}

export interface PaginatedSimpleUsersResponseDto {
  /**
   * Общее количество элементов
   * @example 100
   */
  count: number;
  /** Массив элементов */
  data: SimpleUserResponseDto[];
  /**
   * Количество элементов на странице
   * @example 10
   */
  limit: number;
  /**
   * Текущая страница
   * @example 1
   */
  page: number;
}

export interface PhotosOrderDto {
  /**
   * Array of photo IDs to delete
   * @example ["a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"]
   */
  orderedPhotoIds: string[];
}

export interface ReportListResponseDto {
  /** @example 20 */
  limit: number;
  /** @example 1 */
  page: number;
  reports: ReportResponseDto[];
  /** @example 25 */
  total: number;
}

export interface ReportResponseDto {
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /** @example "Пользователь отправляет спам-сообщения" */
  description?: string;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  id: string;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  messageId?: string;
  /** @example "SPAM" */
  reason: "SPAM" | "HARASSMENT";
  reportedUser: object;
  reporter: object;
  /** @example "PENDING" */
  status: "PENDING" | "RESOLVED";
}

export interface ResolveReportDto {
  /** @example "Жалоба рассмотрена и закрыта" */
  resolutionComment: string;
}

export interface ResolveReportParams {
  /** UUID жалобы */
  id: string;
}

export interface SearchStickersParams {
  /**
   * Поисковый запрос
   * @example "улыбка"
   */
  q: string;
}

export interface SimpleUserResponseDto {
  /**
   * Дата рождения
   * @example "1990-01-01"
   */
  dateBirthday?: string;
  /**
   * Имя пользователя
   * @example "Иван"
   */
  firstName: string;
  /**
   * Пол пользователя
   * @example "MALE"
   */
  gender: "MALE" | "FEMALE" | "OTHER";
  /**
   * UUID пользователя
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  id: string;
  /** Дополнительная информация */
  info?: UserInfoResponseDto;
  /**
   * Онлайн ли пользователь
   * @example true
   */
  isOnline: boolean;
  /**
   * Фамилия пользователя
   * @example "Иванов"
   */
  lastName?: string;
  /**
   * Когда пользователь был последний раз онлайн
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  lastSeen?: string;
  /** Основное фото пользователя */
  mainPhoto?: UserPhotoResponseDto;
  /**
   * Отчество пользователя
   * @example "Иванович"
   */
  middleName?: string;
  /**
   * Общее количество фото пользователя
   * @example 5
   */
  totalPhotos: number;
}

export interface StickerPackListResponseDto {
  packs: StickerPackResponseDto[];
  /** @example 10 */
  total: number;
}

export interface StickerPackResponseDto {
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /** @example "Набор веселых эмоций и реакций" */
  description?: string;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  id: string;
  /** @example true */
  isActive: boolean;
  /** @example "Веселые эмоции" */
  name: string;
  /** @example "https://example.com/preview.jpg" */
  previewUrl?: string;
  stickers: StickerResponseDto[];
}

export interface StickerResponseDto {
  /**
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  id: string;
  /** @example "https://storage.com/sticker_large.webp" */
  largeUrl: string;
  /** @example "https://storage.com/sticker_middle.webp" */
  middleUrl: string;
  /** @example "Улыбка" */
  name: string;
  /** @example 1 */
  order: number;
  /** @example "https://storage.com/sticker_origin.webp" */
  originUrl: string;
  pack: StickerPackResponseDto;
  /** @example "https://storage.com/sticker_small.webp" */
  smallUrl: string;
  /** @example "sticker_123" */
  stickerId: string;
}

export interface UnBlockChatParams {
  id: string;
}

export interface UnblockResponseMessageDto {
  /** @example "Пользователь успешно разблокирован" */
  message: string;
  /** @example true */
  success: boolean;
}

export interface UnblockUserParams {
  /** UUID пользователя для разблокировки */
  userId: string;
}

export interface UnreadCountsDto {
  /** Список чатов с непрочитанными сообщениями */
  chats: ChatUnreadDto[];
  /**
   * Общее количество непрочитанных сообщений
   * @example 15
   */
  total: number;
}

export interface UnreadResponseDto {
  data: UnreadCountsDto;
  /** @example true */
  success: boolean;
}

export interface UpdateCityDto {
  /**
   * Новое название города
   * @minLength 1
   * @maxLength 150
   * @example "Санкт-Петербург"
   */
  label?: string;
}

export interface UpdateGroupParams {
  groupId: string;
  userId: string;
}

export interface UpdateMessageDto {
  /**
   * Новый текст сообщения
   * @example "Привет! Как твои дела?"
   */
  content: string;
}

export interface UpdateMessageParams {
  /** UUID чата */
  chatId: string;
  /** UUID сообщения */
  messageId: string;
}

export interface UpdateParams {
  id: string;
}

export interface UpdateParams2 {
  /** City ID */
  id: string;
}

export interface UpdateUserDto {
  /**
   * Дата рождения
   * @example "1990-01-01"
   */
  dateBirthday?: string;
  /**
   * Имя пользователя
   * @example "Иван"
   */
  firstName?: string;
  /** Пол пользователя */
  gender?: "MALE" | "FEMALE" | "OTHER";
  /** Дополнительная информация о пользователе */
  info?: UpdateUserInfoDto;
  /**
   * Фамилия пользователя
   * @example "Иванов"
   */
  lastName?: string;
  /**
   * Отчество пользователя
   * @example "Иванович"
   */
  middleName?: string;
}

export interface UpdateUserInfoDto {
  /**
   * Информация о себе (макс. 300 символов)
   * @maxLength 300
   * @example "Привет! Я люблю путешествия и программирование."
   */
  aboutMe?: string;
  /**
   * ID города
   * @example "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
   */
  cityId?: string;
  /**
   * Максимальный возраст партнера
   * @max 100
   * @example 30
   */
  desiredPartnerAgeMax?: number;
  /**
   * Минимальный возраст партнера
   * @min 18
   * @example 18
   */
  desiredPartnerAgeMin?: number;
  /** Желаемый пол партнера */
  desiredPartnerGender?: "MALE" | "FEMALE" | "OTHER";
  /**
   * Никнейм
   * @example "CoolNick"
   */
  nickname?: string;
  /** Знак зодиака */
  zodiacSign?:
    | "ARIES"
    | "TAURUS"
    | "GEMINI"
    | "CANCER"
    | "LEO"
    | "VIRGO"
    | "LIBRA"
    | "SCORPIO"
    | "SAGITTARIUS"
    | "CAPRICORN"
    | "AQUARIUS"
    | "PISCES"
    | "NONE";
}

export interface UploadPhotosResponseDto {
  photos: UserPhotoResponseDto[];
}

export interface UserGroupResponseDto {
  /**
   * Дата создания
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * Роль пользователя
   * @example "USER"
   */
  role: "USER" | "MODERATOR" | "ADMIN" | "CONTENT_MANAGER" | "SUPPORT";
  /**
   * Дата обновления
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  updatedAt: string;
}

export interface UserInfoResponseDto {
  /**
   * Информация о себе
   * @example "Люблю активный отдых и читать книги."
   */
  aboutMe?: string;
  /**
   * Возраст
   * @example 18
   */
  age?: number;
  /**
   * ID города
   * @example "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
   */
  cityId?: string;
  /**
   * Максимальный возраст партнера
   * @example 30
   */
  desiredPartnerAgeMax?: number;
  /**
   * Минимальный возраст партнера
   * @example 18
   */
  desiredPartnerAgeMin?: number;
  /** Желаемый пол партнера */
  desiredPartnerGender?: "MALE" | "FEMALE" | "OTHER";
  /**
   * Никнейм
   * @example "CoolNick"
   */
  nickname?: string;
  /** Знак зодиака */
  zodiacSign?:
    | "ARIES"
    | "TAURUS"
    | "GEMINI"
    | "CANCER"
    | "LEO"
    | "VIRGO"
    | "LIBRA"
    | "SCORPIO"
    | "SAGITTARIUS"
    | "CAPRICORN"
    | "AQUARIUS"
    | "PISCES"
    | "NONE";
}

export interface UserPhotoResponseDto {
  /** @example "https://storage.com/big.jpg" */
  bigUrl: string;
  /** @example "https://storage.com/hd.jpg" */
  hdUrl: string;
  /** @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" */
  id: string;
  /** @example true */
  isMain: boolean;
  /** @example "https://storage.com/large.jpg" */
  largeUrl: string;
  /** @example "https://storage.com/middle.jpg" */
  middleUrl: string;
  /** @example "https://storage.com/mobile.jpg" */
  mobileUrl: string;
  /** @example 1 */
  order: number;
  /** @example "PORTRAIT" */
  orientation: "PORTRAIT" | "LANDSCAPE" | "SQUARE";
  /** @example "https://storage.com/origin.jpg" */
  originUrl: string;
  /** @example "https://storage.com/small.jpg" */
  smallUrl: string;
  /** @example true */
  verified: boolean;
}

export interface UserResponseDto {
  /**
   * Дата создания
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * Дата рождения
   * @example "1990-01-01"
   */
  dateBirthday?: string;
  /**
   * Email пользователя
   * @example "user@example.com"
   */
  email: string;
  /**
   * Имя пользователя
   * @example "Иван"
   */
  firstName: string;
  /**
   * Пол пользователя
   * @example "MALE"
   */
  gender: "MALE" | "FEMALE" | "OTHER";
  /** Группы пользователя */
  groups?: UserGroupResponseDto[];
  /**
   * UUID пользователя
   * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
   */
  id: string;
  /** Дополнительная информация */
  info?: UserInfoResponseDto;
  /**
   * Подтвержден ли email
   * @example true
   */
  isEmailVerified: boolean;
  /**
   * Онлайн ли пользователь
   * @example true
   */
  isOnline: boolean;
  /**
   * Последний вход
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  lastLoginAt?: string;
  /**
   * Фамилия пользователя
   * @example "Иванов"
   */
  lastName?: string;
  /**
   * Когда пользователь был последний раз онлайн
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  lastSeen?: string;
  /**
   * Логин пользователя
   * @example "ivan"
   */
  login: string;
  /** Основное фото пользователя */
  mainPhoto?: UserPhotoResponseDto;
  /**
   * Отчество пользователя
   * @example "Иванович"
   */
  middleName?: string;
  /**
   * Общее количество фото пользователя
   * @example 5
   */
  totalPhotos: number;
  /**
   * Дата обновления
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  updatedAt: string;
}

export interface VerifyPhotoParams {
  photoId: string;
}

/**
 * @title Описание API
 * @version 1.0
 * @contact
 *
 * Nirvana_2025
 */
export class Api {
  static users = {
    /**
     * No description * @tags Users
     * @name CreateGroup
     * @summary Создать новую группу/роль для пользователя
     * @request POST:/users/{userId}/groups
     * @secure
     * @response `201` `GroupResponseDto`*/

    createGroup: (
      { userId, ...query }: CreateGroupParams,
      data: CreateGroupDto,
    ): Promise<GroupResponseDto> =>
      $post<GroupResponseDto>(`/users/${userId}/groups`, {
        data,
        isBearer: true,
      }),

    createGroupAsync: (
      { userId },
      opts?: CustomFetchOptions<GroupResponseDto>,
    ) =>
      customUseFetch<GroupResponseDto>(`/users/${userId}/groups`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Users
     * @name DeleteGroup
     * @summary Удалить группу пользователя
     * @request DELETE:/users/{userId}/groups/{groupId}
     * @secure
     * @response `204` `void`*/

    deleteGroup: ({
      userId,
      groupId,
      ...query
    }: DeleteGroupParams): Promise<void> =>
      $delete<void>(`/users/${userId}/groups/${groupId}`, {
        isBearer: true,
      }),

    deleteGroupAsync: ({ userId, groupId }, opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/users/${userId}/groups/${groupId}`, "delete", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Удаляет указанные фото пользователя. Если удаляется главное фото, следующее по порядку становится главным. * @tags User Photos
     * @name DeletePhotos
     * @summary Удаление фото
     * @request DELETE:/users/photos
     * @secure
     * @response `200` `void` Фото успешно удалены
     * @response `400` `void` Некорректный запрос
     * @response `404` `void` Фото не найдены*/

    deletePhotos: (data: DeletePhotosDto): Promise<void> =>
      $delete<void>(`/users/photos`, {
        data,
        isBearer: true,
      }),

    deletePhotosAsync: (opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/users/photos`, "delete", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Users
     * @name GetById
     * @summary Получение пользователя по Id
     * @request GET:/users/{id}
     * @response `200` `UserResponseDto`*/

    getById: ({ id, ...query }: GetByIdParams): Promise<UserResponseDto> =>
      $get<UserResponseDto>(`/users/${id}`, {
        isBearer: false,
      }),

    getByIdAsync: ({ id }, opts?: CustomFetchOptions<UserResponseDto>) =>
      customUseFetch<UserResponseDto>(`/users/${id}`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags Users
     * @name GetByNickname
     * @summary Получение пользователя по никнейму
     * @request GET:/users/by-nickname/{nickname}
     * @response `200` `UserResponseDto`
     * @response `400` `void` Неверный формат никнейма
     * @response `404` `void` Пользователь с таким никнеймом не найден*/

    getByNickname: ({
      nickname,
      ...query
    }: GetByNicknameParams): Promise<UserResponseDto> =>
      $get<UserResponseDto>(`/users/by-nickname/${nickname}`, {
        isBearer: false,
      }),

    getByNicknameAsync: (
      { nickname },
      opts?: CustomFetchOptions<UserResponseDto>,
    ) =>
      customUseFetch<UserResponseDto>(`/users/by-nickname/${nickname}`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags User Photos
     * @name GetMyPhotos
     * @request GET:/users/photos/me
     * @secure
     * @response `200` `void`*/

    getMyPhotos: (): Promise<void> =>
      $get<void>(`/users/photos/me`, {
        isBearer: true,
      }),

    getMyPhotosAsync: (opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/users/photos/me`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает по 2 последних зарегистрированных мужчины и женщины * @tags Users
     * @name GetNewFaces
     * @summary Получение последних зарегистрированных пользователей
     * @request GET:/users/new-faces
     * @response `200` `NewFacesResponseDto` Объект с массивами пользователей*/

    getNewFaces: (): Promise<NewFacesResponseDto> =>
      $get<NewFacesResponseDto>(`/users/new-faces`, {
        isBearer: false,
      }),

    getNewFacesAsync: (opts?: CustomFetchOptions<NewFacesResponseDto>) =>
      customUseFetch<NewFacesResponseDto>(`/users/new-faces`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags User Photos, User Photos
     * @name GetPhotos
     * @summary Получить все фото пользователя
     * @request GET:/users/photos/{userId}
     * @response `200` `(UserPhotoResponseDto)[]`*/

    getPhotos: ({
      userId,
      ...query
    }: GetPhotosParams): Promise<UserPhotoResponseDto[]> =>
      $get<UserPhotoResponseDto[]>(`/users/photos/${userId}`, {
        isBearer: false,
      }),

    getPhotosAsync: (
      { userId },
      opts?: CustomFetchOptions<UserPhotoResponseDto[]>,
    ) =>
      customUseFetch<UserPhotoResponseDto[]>(`/users/photos/${userId}`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags User Photos, Moderation
     * @name GetUnverifiedPhotos
     * @summary Получить все не проверенные фото
     * @request GET:/users/photos/unverified
     * @secure
     * @response `200` `(UserPhotoResponseDto)[]`*/

    getUnverifiedPhotos: (): Promise<UserPhotoResponseDto[]> =>
      $get<UserPhotoResponseDto[]>(`/users/photos/unverified`, {
        isBearer: true,
      }),

    getUnverifiedPhotosAsync: (
      opts?: CustomFetchOptions<UserPhotoResponseDto[]>,
    ) =>
      customUseFetch<UserPhotoResponseDto[]>(
        `/users/photos/unverified`,
        "get",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
     * No description * @tags Users
     * @name GetUserGroups
     * @summary Получить все группы пользователя
     * @request GET:/users/{userId}/groups
     * @secure
     * @response `200` `(GroupResponseDto)[]`*/

    getUserGroups: ({
      userId,
      ...query
    }: GetUserGroupsParams): Promise<GroupResponseDto[]> =>
      $get<GroupResponseDto[]>(`/users/${userId}/groups`, {
        isBearer: true,
      }),

    getUserGroupsAsync: (
      { userId },
      opts?: CustomFetchOptions<GroupResponseDto[]>,
    ) =>
      customUseFetch<GroupResponseDto[]>(`/users/${userId}/groups`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Поддерживает фильтрацию по полям пользователя и его информации * @tags Users
     * @name GetUsers
     * @summary Получение списка пользователей с пагинацией и фильтрацией
     * @request GET:/users
     * @response `200` `PaginatedSimpleUsersResponseDto` Пагинированный список пользователей*/

    getUsers: (
      query: GetUsersParams,
    ): Promise<PaginatedSimpleUsersResponseDto> =>
      $get<PaginatedSimpleUsersResponseDto>(`/users`, {
        params: query,
        isBearer: false,
      }),

    getUsersAsync: (
      opts?: CustomFetchOptions<PaginatedSimpleUsersResponseDto>,
    ) =>
      customUseFetch<PaginatedSimpleUsersResponseDto>(`/users`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags Users
     * @name Register
     * @summary Регистрация пользователя
     * @request POST:/users/register
     * @response `201` `UserResponseDto`*/

    register: (data: CreateUserDto): Promise<UserResponseDto> =>
      $post<UserResponseDto>(`/users/register`, {
        data,
        isBearer: false,
      }),

    registerAsync: (opts?: CustomFetchOptions<UserResponseDto>) =>
      customUseFetch<UserResponseDto>(`/users/register`, "post", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags Users
     * @name Update
     * @summary Обновление пользователя
     * @request PUT:/users/{id}
     * @secure
     * @response `200` `UserResponseDto`*/

    update: (
      { id, ...query }: UpdateParams,
      data: UpdateUserDto,
    ): Promise<UserResponseDto> =>
      $put<UserResponseDto>(`/users/${id}`, {
        data,
        isBearer: true,
      }),

    updateAsync: ({ id }, opts?: CustomFetchOptions<UserResponseDto>) =>
      customUseFetch<UserResponseDto>(`/users/${id}`, "put", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Users
     * @name UpdateCurrentUser
     * @summary Обновление текущего пользователя
     * @request PUT:/users/update
     * @secure
     * @response `200` `UserResponseDto`*/

    updateCurrentUser: (data: UpdateUserDto): Promise<UserResponseDto> =>
      $put<UserResponseDto>(`/users/update`, {
        data,
        isBearer: true,
      }),

    updateCurrentUserAsync: (opts?: CustomFetchOptions<UserResponseDto>) =>
      customUseFetch<UserResponseDto>(`/users/update`, "put", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Users
     * @name UpdateGroup
     * @summary Обновить группу пользователя
     * @request PUT:/users/{userId}/groups/{groupId}
     * @secure
     * @response `200` `GroupResponseDto`*/

    updateGroup: ({
      userId,
      groupId,
      ...query
    }: UpdateGroupParams): Promise<GroupResponseDto> =>
      $put<GroupResponseDto>(`/users/${userId}/groups/${groupId}`, {
        isBearer: true,
      }),

    updateGroupAsync: (
      { userId, groupId },
      opts?: CustomFetchOptions<GroupResponseDto>,
    ) =>
      customUseFetch<GroupResponseDto>(
        `/users/${userId}/groups/${groupId}`,
        "put",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
     * No description * @tags User Photos
     * @name UpdatePhotosOrder
     * @summary Изменение порядка фотографий
     * @request PUT:/users/photos/order
     * @secure
     * @response `200` `(UserPhotoResponseDto)[]`*/

    updatePhotosOrder: (
      data: PhotosOrderDto,
    ): Promise<UserPhotoResponseDto[]> =>
      $put<UserPhotoResponseDto[]>(`/users/photos/order`, {
        data,
        isBearer: true,
      }),

    updatePhotosOrderAsync: (
      opts?: CustomFetchOptions<UserPhotoResponseDto[]>,
    ) =>
      customUseFetch<UserPhotoResponseDto[]>(`/users/photos/order`, "put", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags User Photos
     * @name UploadMainPhoto
     * @summary Загрузка главного фото
     * @request POST:/users/photos/uploadMainPhoto
     * @secure
     * @response `201` `UserPhotoResponseDto` Successfully uploaded main photo*/

    uploadMainPhoto: (data: {
      /** @format binary */
      file?: File;
    }): Promise<UserPhotoResponseDto> =>
      $post<UserPhotoResponseDto>(`/users/photos/uploadMainPhoto`, {
        data,
        isBearer: true,
      }),

    uploadMainPhotoAsync: (opts?: CustomFetchOptions<UserPhotoResponseDto>) =>
      customUseFetch<UserPhotoResponseDto>(
        `/users/photos/uploadMainPhoto`,
        "post",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
     * No description * @tags User Photos
     * @name UploadPhotos
     * @summary Загрузка фото пользователя
     * @request POST:/users/photos
     * @secure
     * @response `200` `UploadPhotosResponseDto`*/

    uploadPhotos: (data: {
      files?: File[];
    }): Promise<UploadPhotosResponseDto> =>
      $post<UploadPhotosResponseDto>(`/users/photos`, {
        data,
        isBearer: true,
      }),

    uploadPhotosAsync: (opts?: CustomFetchOptions<UploadPhotosResponseDto>) =>
      customUseFetch<UploadPhotosResponseDto>(`/users/photos`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags User Photos, Moderation
     * @name VerifyPhoto
     * @summary Пометить фото как проверенное
     * @request PATCH:/users/photos/{photoId}/verify
     * @secure
     * @response `200` `UserPhotoResponseDto`*/

    verifyPhoto: ({
      photoId,
      ...query
    }: VerifyPhotoParams): Promise<UserPhotoResponseDto> =>
      $patch<UserPhotoResponseDto>(`/users/photos/${photoId}/verify`, {
        isBearer: true,
      }),

    verifyPhotoAsync: (
      { photoId },
      opts?: CustomFetchOptions<UserPhotoResponseDto>,
    ) =>
      customUseFetch<UserPhotoResponseDto>(
        `/users/photos/${photoId}/verify`,
        "patch",
        {
          ...opts,
          isBearer: true,
        },
      ),
  };
  static auth = {
    /**
     * @description Authenticates user and returns access and refresh tokens * @tags Auth
     * @name Login
     * @summary User authentication
     * @request POST:/auth/login
     * @response `200` `AuthLoginResponseDto` Successfully authenticated
     * @response `401` `void` Invalid credentials
     * @response `429` `void` Too many login attempts*/

    login: (data: AuthLoginDto): Promise<AuthLoginResponseDto> =>
      $post<AuthLoginResponseDto>(`/auth/login`, {
        data,
        isBearer: false,
      }),

    loginAsync: (opts?: CustomFetchOptions<AuthLoginResponseDto>) =>
      customUseFetch<AuthLoginResponseDto>(`/auth/login`, "post", {
        ...opts,
        isBearer: false,
      }),

    /**
     * @description Invalidates the current access token * @tags Auth
     * @name Logout
     * @summary User logout
     * @request GET:/auth/logout
     * @secure
     * @response `200` `LogoutResponseDto` Successfully logged out
     * @response `401` `void` Unauthorized access*/

    logout: (): Promise<LogoutResponseDto> =>
      $get<LogoutResponseDto>(`/auth/logout`, {
        isBearer: true,
      }),

    logoutAsync: (opts?: CustomFetchOptions<LogoutResponseDto>) =>
      customUseFetch<LogoutResponseDto>(`/auth/logout`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Generates new access and refresh tokens * @tags Auth
     * @name Refresh
     * @summary Refresh tokens
     * @request GET:/auth/refresh
     * @secure
     * @response `200` `AuthLoginResponseDto` Tokens successfully refreshed
     * @response `401` `void` Invalid or expired refresh token*/

    refresh: (): Promise<AuthLoginResponseDto> =>
      $get<AuthLoginResponseDto>(`/auth/refresh`, {
        isBearer: true,
      }),

    refreshAsync: (opts?: CustomFetchOptions<AuthLoginResponseDto>) =>
      customUseFetch<AuthLoginResponseDto>(`/auth/refresh`, "get", {
        ...opts,
        isBearer: true,
      }),
  };
  static chats = {
    /**
     * @description Добавляет или изменяет реакцию (эмодзи) на сообщение * @tags Messages
     * @name AddReaction
     * @summary Добавить/изменить реакцию на сообщение
     * @request PUT:/chats/{chatId}/messages/{messageId}/reaction
     * @secure
     * @response `200` `MessageResponseDto` Реакция успешно добавлена/изменена
     * @response `403` `void` Нет доступа к чату
     * @response `404` `void` Сообщение не найдено*/

    addReaction: (
      { messageId, chatId, ...query }: AddReactionParams,
      data: MessageReactionDto,
    ): Promise<MessageResponseDto> =>
      $put<MessageResponseDto>(
        `/chats/${chatId}/messages/${messageId}/reaction`,
        {
          data,
          isBearer: true,
        },
      ),

    addReactionAsync: (
      { messageId, chatId },
      opts?: CustomFetchOptions<MessageResponseDto>,
    ) =>
      customUseFetch<MessageResponseDto>(
        `/chats/${chatId}/messages/${messageId}/reaction`,
        "put",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
     * @description Блокировать чат * @tags Chats
     * @name BlockChat
     * @summary Блокировать чат с пользователем
     * @request PUT:/chats/{id}/block
     * @secure
     * @response `201` `void` Чат успешно заблокирован
     * @response `400` `void` Неверные данные запроса
     * @response `403` `void` Пользователь заблокирован
     * @response `404` `void` Пользователь не найден*/

    blockChat: ({ id, ...query }: BlockChatParams): Promise<void> =>
      $put<void>(`/chats/${id}/block`, {
        isBearer: true,
      }),

    blockChatAsync: ({ id }, opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/chats/${id}/block`, "put", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Создает новый чат 1 на 1 с указанным пользователем * @tags Chats
     * @name CreateChat
     * @summary Создать чат с пользователем
     * @request POST:/chats
     * @secure
     * @response `201` `ChatResponseDto` Чат успешно создан
     * @response `400` `void` Неверные данные запроса
     * @response `403` `void` Пользователь заблокирован
     * @response `404` `void` Пользователь не найден*/

    createChat: (data: CreateChatDto): Promise<ChatResponseDto> =>
      $post<ChatResponseDto>(`/chats`, {
        data,
        isBearer: true,
      }),

    createChatAsync: (opts?: CustomFetchOptions<ChatResponseDto>) =>
      customUseFetch<ChatResponseDto>(`/chats`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Создает новое сообщение в указанном чате * @tags Messages
     * @name CreateMessage
     * @summary Отправить сообщение в чат
     * @request POST:/chats/{chatId}/messages
     * @secure
     * @response `201` `MessageResponseDto` Сообщение успешно отправлено
     * @response `400` `void` Неверные данные сообщения
     * @response `403` `void` Чат заблокирован или нет доступа
     * @response `404` `void` Чат не найден*/

    createMessage: (
      { chatId, ...query }: CreateMessageParams,
      data: CreateMessageDto,
    ): Promise<MessageResponseDto> =>
      $post<MessageResponseDto>(`/chats/${chatId}/messages`, {
        data,
        isBearer: true,
      }),

    createMessageAsync: (
      { chatId },
      opts?: CustomFetchOptions<MessageResponseDto>,
    ) =>
      customUseFetch<MessageResponseDto>(`/chats/${chatId}/messages`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Удаляет чат для текущего пользователя. Если оба пользователя удалили чат, он удаляется полностью. * @tags Chats
     * @name DeleteChat
     * @summary Удалить чат
     * @request DELETE:/chats/{id}
     * @secure
     * @response `200` `DeleteChatResponseDto` Чат успешно удален
     * @response `404` `void` Чат не найден*/

    deleteChat: ({
      id,
      ...query
    }: DeleteChatParams): Promise<DeleteChatResponseDto> =>
      $delete<DeleteChatResponseDto>(`/chats/${id}`, {
        isBearer: true,
      }),

    deleteChatAsync: (
      { id },
      opts?: CustomFetchOptions<DeleteChatResponseDto>,
    ) =>
      customUseFetch<DeleteChatResponseDto>(`/chats/${id}`, "delete", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Удаляет сообщение. Доступно только для непрочитанных сообщений. * @tags Messages
     * @name DeleteMessage
     * @summary Удалить сообщение
     * @request DELETE:/chats/{chatId}/messages/{messageId}
     * @secure
     * @response `200` `void` Сообщение успешно удалено
     * @response `400` `void` Сообщение уже прочитано
     * @response `403` `void` Нет прав на удаление
     * @response `404` `void` Сообщение не найдено*/

    deleteMessage: ({
      messageId,
      chatId,
      ...query
    }: DeleteMessageParams): Promise<void> =>
      $delete<void>(`/chats/${chatId}/messages/${messageId}`, {
        isBearer: true,
      }),

    deleteMessageAsync: (
      { messageId, chatId },
      opts?: CustomFetchOptions<void>,
    ) =>
      customUseFetch<void>(`/chats/${chatId}/messages/${messageId}`, "delete", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает подробную информацию о конкретном чате * @tags Chats
     * @name GetChat
     * @summary Получить информацию о чате
     * @request GET:/chats/{id}
     * @secure
     * @response `200` `ChatResponseDto` Информация о чате успешно получена
     * @response `404` `void` Чат не найден*/

    getChat: ({ id, ...query }: GetChatParams): Promise<ChatResponseDto> =>
      $get<ChatResponseDto>(`/chats/${id}`, {
        isBearer: true,
      }),

    getChatAsync: ({ id }, opts?: CustomFetchOptions<ChatResponseDto>) =>
      customUseFetch<ChatResponseDto>(`/chats/${id}`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает пагинированную историю сообщений указанного чата * @tags Messages
     * @name GetChatMessages
     * @summary Получить историю сообщений чата
     * @request GET:/chats/{chatId}/messages
     * @secure
     * @response `200` `MessageListResponseDto` История сообщений успешно получена
     * @response `404` `void` Чат не найден*/

    getChatMessages: ({
      chatId,
      ...query
    }: GetChatMessagesParams): Promise<MessageListResponseDto> =>
      $get<MessageListResponseDto>(`/chats/${chatId}/messages`, {
        params: query,
        isBearer: true,
      }),

    getChatMessagesAsync: (
      { chatId },
      opts?: CustomFetchOptions<MessageListResponseDto>,
    ) =>
      customUseFetch<MessageListResponseDto>(
        `/chats/${chatId}/messages`,
        "get",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
     * @description Возвращает детальную информацию по каждому чату с непрочитанными сообщениями * @tags Chats
     * @name GetChatsWithUnread
     * @summary Получить чаты с непрочитанными сообщениями
     * @request GET:/chats/unread/chats
     * @secure
     * @response `200` `(ChatUnreadDto)[]` Список чатов с непрочитанными сообщениями успешно получен*/

    getChatsWithUnread: (): Promise<ChatUnreadDto[]> =>
      $get<ChatUnreadDto[]>(`/chats/unread/chats`, {
        isBearer: true,
      }),

    getChatsWithUnreadAsync: (opts?: CustomFetchOptions<ChatUnreadDto[]>) =>
      customUseFetch<ChatUnreadDto[]>(`/chats/unread/chats`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает общее количество непрочитанных сообщений и детали по чатам * @tags Chats
     * @name GetUnreadCounts
     * @summary Получить количество непрочитанных сообщений
     * @request GET:/chats/unread/counts
     * @secure
     * @response `200` `UnreadResponseDto` Счетчики непрочитанных сообщений успешно получены*/

    getUnreadCounts: (): Promise<UnreadResponseDto> =>
      $get<UnreadResponseDto>(`/chats/unread/counts`, {
        isBearer: true,
      }),

    getUnreadCountsAsync: (opts?: CustomFetchOptions<UnreadResponseDto>) =>
      customUseFetch<UnreadResponseDto>(`/chats/unread/counts`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает пагинированный список чатов текущего пользователя * @tags Chats
     * @name GetUserChats
     * @summary Получить список чатов пользователя
     * @request GET:/chats
     * @secure
     * @response `200` `ChatListResponseDto` Список чатов успешно получен*/

    getUserChats: (query: GetUserChatsParams): Promise<ChatListResponseDto> =>
      $get<ChatListResponseDto>(`/chats`, {
        params: query,
        isBearer: true,
      }),

    getUserChatsAsync: (opts?: CustomFetchOptions<ChatListResponseDto>) =>
      customUseFetch<ChatListResponseDto>(`/chats`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Отмечает сообщение как прочитанное текущим пользователем * @tags Messages
     * @name MarkAsRead
     * @summary Отметить сообщение как прочитанное
     * @request POST:/chats/{chatId}/messages/{messageId}/read
     * @secure
     * @response `200` `MarkAsReadResponseDto` Сообщение отмечено как прочитанное
     * @response `400` `void` Нельзя отметить свое сообщение как прочитанное
     * @response `404` `void` Сообщение не найдено*/

    markAsRead: ({
      messageId,
      chatId,
      ...query
    }: MarkAsReadParams): Promise<MarkAsReadResponseDto> =>
      $post<MarkAsReadResponseDto>(
        `/chats/${chatId}/messages/${messageId}/read`,
        {
          isBearer: true,
        },
      ),

    markAsReadAsync: (
      { messageId, chatId },
      opts?: CustomFetchOptions<MarkAsReadResponseDto>,
    ) =>
      customUseFetch<MarkAsReadResponseDto>(
        `/chats/${chatId}/messages/${messageId}/read`,
        "post",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
     * @description Разблокировать чат * @tags Chats
     * @name UnBlockChat
     * @summary Разблокировать чат с пользователем
     * @request PUT:/chats/{id}/unblock
     * @secure
     * @response `201` `void` Чат успешно заблокирован
     * @response `400` `void` Неверные данные запроса
     * @response `403` `void` Пользователь заблокирован
     * @response `404` `void` Пользователь не найден*/

    unBlockChat: ({ id, ...query }: UnBlockChatParams): Promise<void> =>
      $put<void>(`/chats/${id}/unblock`, {
        isBearer: true,
      }),

    unBlockChatAsync: ({ id }, opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/chats/${id}/unblock`, "put", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Редактирует текст сообщения. Доступно только для непрочитанных сообщений. * @tags Messages
     * @name UpdateMessage
     * @summary Редактировать сообщение
     * @request PUT:/chats/{chatId}/messages/{messageId}
     * @secure
     * @response `200` `MessageResponseDto` Сообщение успешно отредактировано
     * @response `400` `void` Сообщение уже прочитано
     * @response `403` `void` Нет прав на редактирование
     * @response `404` `void` Сообщение не найдено*/

    updateMessage: (
      { messageId, chatId, ...query }: UpdateMessageParams,
      data: UpdateMessageDto,
    ): Promise<MessageResponseDto> =>
      $put<MessageResponseDto>(`/chats/${chatId}/messages/${messageId}`, {
        data,
        isBearer: true,
      }),

    updateMessageAsync: (
      { messageId, chatId },
      opts?: CustomFetchOptions<MessageResponseDto>,
    ) =>
      customUseFetch<MessageResponseDto>(
        `/chats/${chatId}/messages/${messageId}`,
        "put",
        {
          ...opts,
          isBearer: true,
        },
      ),
  };
  static blocks = {
    /**
     * @description Блокирует указанного пользователя и все связанные чаты * @tags Blocks
     * @name BlockUser
     * @summary Заблокировать пользователя
     * @request POST:/blocks
     * @secure
     * @response `201` `BlockResponseDto` Пользователь успешно заблокирован
     * @response `400` `void` Неверные данные запроса
     * @response `404` `void` Пользователь не найден*/

    blockUser: (data: CreateBlockDto): Promise<BlockResponseDto> =>
      $post<BlockResponseDto>(`/blocks`, {
        data,
        isBearer: true,
      }),

    blockUserAsync: (opts?: CustomFetchOptions<BlockResponseDto>) =>
      customUseFetch<BlockResponseDto>(`/blocks`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Проверяет, заблокирован ли указанный пользователь для текущего пользователя * @tags Blocks
     * @name CheckBlock
     * @summary Проверить блокировку
     * @request GET:/blocks/check/{userId}
     * @secure
     * @response `200` `BlockStatusResponseDto` Статус блокировки успешно получен*/

    checkBlock: ({
      userId,
      ...query
    }: CheckBlockParams): Promise<BlockStatusResponseDto> =>
      $get<BlockStatusResponseDto>(`/blocks/check/${userId}`, {
        isBearer: true,
      }),

    checkBlockAsync: (
      { userId },
      opts?: CustomFetchOptions<BlockStatusResponseDto>,
    ) =>
      customUseFetch<BlockStatusResponseDto>(`/blocks/check/${userId}`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Удаляет все блокировки, установленные текущим пользователем * @tags Blocks
     * @name DeleteAllUserBlocks
     * @summary Удалить все мои блокировки
     * @request DELETE:/blocks
     * @secure
     * @response `200` `DeleteAllBlocksResponseDto` Все блокировки успешно удалены*/

    deleteAllUserBlocks: (): Promise<DeleteAllBlocksResponseDto> =>
      $delete<DeleteAllBlocksResponseDto>(`/blocks`, {
        isBearer: true,
      }),

    deleteAllUserBlocksAsync: (
      opts?: CustomFetchOptions<DeleteAllBlocksResponseDto>,
    ) =>
      customUseFetch<DeleteAllBlocksResponseDto>(`/blocks`, "delete", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает список пользователей, заблокировавших текущего пользователя * @tags Blocks
     * @name GetBlockedByUsers
     * @summary Получить список пользователей, которые заблокировали меня
     * @request GET:/blocks/blocked-by
     * @secure
     * @response `200` `BlockedUsersResponseDto` Список пользователей, которые заблокировали меня, успешно получен*/

    getBlockedByUsers: (): Promise<BlockedUsersResponseDto> =>
      $get<BlockedUsersResponseDto>(`/blocks/blocked-by`, {
        isBearer: true,
      }),

    getBlockedByUsersAsync: (
      opts?: CustomFetchOptions<BlockedUsersResponseDto>,
    ) =>
      customUseFetch<BlockedUsersResponseDto>(`/blocks/blocked-by`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
 * @description Возвращает массив ID пользователей, заблокировавших текущего пользователя * @tags Blocks
 * @name GetBlockedByUsersIds
 * @summary Получить ID пользователей, которые заблокировали меня
 * @request GET:/blocks/ids/blocked-by
 * @secure
 * @response `200` `{
  \** @example ["uuid1","uuid2"] *\
    userIds?: (string)[],

}` ID пользователей, которые заблокировали меня, успешно получены*/

    getBlockedByUsersIds: (): Promise<{
      /** @example ["uuid1","uuid2"] */
      userIds?: string[];
    }> =>
      $get<{
        /** @example ["uuid1","uuid2"] */
        userIds?: string[];
      }>(`/blocks/ids/blocked-by`, {
        isBearer: true,
      }),

    getBlockedByUsersIdsAsync: (
      opts?: CustomFetchOptions<{
        /** @example [&quot;uuid1&quot;,&quot;uuid2&quot;] */
        userIds?: string[];
      }>,
    ) =>
      customUseFetch<{
        /** @example [&quot;uuid1&quot;,&quot;uuid2&quot;] */
        userIds?: string[];
      }>(`/blocks/ids/blocked-by`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает список пользователей, заблокированных текущим пользователем * @tags Blocks
     * @name GetBlockedUsers
     * @summary Получить список заблокированных пользователей (только пользователи)
     * @request GET:/blocks/blocked-users
     * @secure
     * @response `200` `BlockedUsersResponseDto` Список заблокированных пользователей успешно получен*/

    getBlockedUsers: (): Promise<BlockedUsersResponseDto> =>
      $get<BlockedUsersResponseDto>(`/blocks/blocked-users`, {
        isBearer: true,
      }),

    getBlockedUsersAsync: (
      opts?: CustomFetchOptions<BlockedUsersResponseDto>,
    ) =>
      customUseFetch<BlockedUsersResponseDto>(`/blocks/blocked-users`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
 * @description Возвращает массив ID пользователей, заблокированных текущим пользователем * @tags Blocks
 * @name GetBlockedUsersIds
 * @summary Получить ID заблокированных пользователей
 * @request GET:/blocks/ids/blocked
 * @secure
 * @response `200` `{
  \** @example ["uuid1","uuid2"] *\
    userIds?: (string)[],

}` ID заблокированных пользователей успешно получены*/

    getBlockedUsersIds: (): Promise<{
      /** @example ["uuid1","uuid2"] */
      userIds?: string[];
    }> =>
      $get<{
        /** @example ["uuid1","uuid2"] */
        userIds?: string[];
      }>(`/blocks/ids/blocked`, {
        isBearer: true,
      }),

    getBlockedUsersIdsAsync: (
      opts?: CustomFetchOptions<{
        /** @example [&quot;uuid1&quot;,&quot;uuid2&quot;] */
        userIds?: string[];
      }>,
    ) =>
      customUseFetch<{
        /** @example [&quot;uuid1&quot;,&quot;uuid2&quot;] */
        userIds?: string[];
      }>(`/blocks/ids/blocked`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает список взаимных блокировок (когда оба пользователя заблокировали друг друга) * @tags Blocks
     * @name GetMutualBlocks
     * @summary Получить взаимные блокировки
     * @request GET:/blocks/mutual
     * @secure
     * @response `200` `BlockListResponseDto` Список взаимных блокировок успешно получен*/

    getMutualBlocks: (): Promise<BlockListResponseDto> =>
      $get<BlockListResponseDto>(`/blocks/mutual`, {
        isBearer: true,
      }),

    getMutualBlocksAsync: (opts?: CustomFetchOptions<BlockListResponseDto>) =>
      customUseFetch<BlockListResponseDto>(`/blocks/mutual`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает список всех пользователей, заблокированных текущим пользователем * @tags Blocks
     * @name GetUserBlocks
     * @summary Получить список заблокированных пользователей
     * @request GET:/blocks
     * @secure
     * @response `200` `BlockListResponseDto` Список заблокированных пользователей успешно получен*/

    getUserBlocks: (): Promise<BlockListResponseDto> =>
      $get<BlockListResponseDto>(`/blocks`, {
        isBearer: true,
      }),

    getUserBlocksAsync: (opts?: CustomFetchOptions<BlockListResponseDto>) =>
      customUseFetch<BlockListResponseDto>(`/blocks`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Разблокирует указанного пользователя и связанные чаты * @tags Blocks
     * @name UnblockUser
     * @summary Разблокировать пользователя
     * @request DELETE:/blocks/{userId}
     * @secure
     * @response `200` `UnblockResponseMessageDto` Пользователь успешно разблокирован
     * @response `404` `void` Блокировка не найдена*/

    unblockUser: ({
      userId,
      ...query
    }: UnblockUserParams): Promise<UnblockResponseMessageDto> =>
      $delete<UnblockResponseMessageDto>(`/blocks/${userId}`, {
        isBearer: true,
      }),

    unblockUserAsync: (
      { userId },
      opts?: CustomFetchOptions<UnblockResponseMessageDto>,
    ) =>
      customUseFetch<UnblockResponseMessageDto>(`/blocks/${userId}`, "delete", {
        ...opts,
        isBearer: true,
      }),
  };
  static onlineStatus = {
    /**
     * No description * @tags Online Status
     * @name GetOnlineStats
     * @summary Получить статистику онлайн пользователей
     * @request GET:/online-status/stats
     * @secure
     * @response `200` `void` Статистика получена*/

    getOnlineStats: (): Promise<void> =>
      $get<void>(`/online-status/stats`, {
        isBearer: true,
      }),

    getOnlineStatsAsync: (opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/online-status/stats`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Online Status
     * @name GetOnlineUsers
     * @summary Получить список онлайн пользователей
     * @request GET:/online-status/online-users
     * @secure
     * @response `200` `void` Список получен*/

    getOnlineUsers: (): Promise<void> =>
      $get<void>(`/online-status/online-users`, {
        isBearer: true,
      }),

    getOnlineUsersAsync: (opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/online-status/online-users`, "get", {
        ...opts,
        isBearer: true,
      }),
  };
  static cities = {
    /**
     * No description * @tags Cities
     * @name Create
     * @request POST:/cities
     * @secure
     * @response `200` `CityResponseDto` Successfully created city*/

    create: (data: CreateCityDto): Promise<CityResponseDto> =>
      $post<CityResponseDto>(`/cities`, {
        data,
        isBearer: true,
      }),

    createAsync: (opts?: CustomFetchOptions<CityResponseDto>) =>
      customUseFetch<CityResponseDto>(`/cities`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Cities
     * @name Delete
     * @request DELETE:/cities/{id}
     * @secure
     * @response `200` `DeleteCityResponseDto` Successfully deleted city*/

    delete: ({ id, ...query }: DeleteParams): Promise<DeleteCityResponseDto> =>
      $delete<DeleteCityResponseDto>(`/cities/${id}`, {
        isBearer: true,
      }),

    deleteAsync: ({ id }, opts?: CustomFetchOptions<DeleteCityResponseDto>) =>
      customUseFetch<DeleteCityResponseDto>(`/cities/${id}`, "delete", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Cities
     * @name FindAll
     * @request GET:/cities
     * @response `200` `PaginatedCityResponseDto` Successfully retrieved paginated list of cities*/

    findAll: (query: FindAllParams): Promise<PaginatedCityResponseDto> =>
      $get<PaginatedCityResponseDto>(`/cities`, {
        params: query,
        isBearer: false,
      }),

    findAllAsync: (opts?: CustomFetchOptions<PaginatedCityResponseDto>) =>
      customUseFetch<PaginatedCityResponseDto>(`/cities`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags Cities
     * @name FindAllWithoutPagination
     * @request GET:/cities/all
     * @response `200` `CityListResponseDto` Successfully retrieved list of all cities*/

    findAllWithoutPagination: (
      query: FindAllWithoutPaginationParams,
    ): Promise<CityListResponseDto> =>
      $get<CityListResponseDto>(`/cities/all`, {
        params: query,
        isBearer: false,
      }),

    findAllWithoutPaginationAsync: (
      opts?: CustomFetchOptions<CityListResponseDto>,
    ) =>
      customUseFetch<CityListResponseDto>(`/cities/all`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags Cities
     * @name FindOne
     * @request GET:/cities/{id}
     * @response `200` `CityResponseDto` Successfully retrieved city*/

    findOne: ({ id, ...query }: FindOneParams): Promise<CityResponseDto> =>
      $get<CityResponseDto>(`/cities/${id}`, {
        isBearer: false,
      }),

    findOneAsync: ({ id }, opts?: CustomFetchOptions<CityResponseDto>) =>
      customUseFetch<CityResponseDto>(`/cities/${id}`, "get", {
        ...opts,
        isBearer: false,
      }),

    /**
     * No description * @tags Cities
     * @name Update
     * @request PUT:/cities/{id}
     * @secure
     * @response `200` `CityResponseDto` Successfully updated city*/

    update: (
      { id, ...query }: UpdateParams2,
      data: UpdateCityDto,
    ): Promise<CityResponseDto> =>
      $put<CityResponseDto>(`/cities/${id}`, {
        data,
        isBearer: true,
      }),

    updateAsync: ({ id }, opts?: CustomFetchOptions<CityResponseDto>) =>
      customUseFetch<CityResponseDto>(`/cities/${id}`, "put", {
        ...opts,
        isBearer: true,
      }),
  };
  static reports = {
    /**
     * @description Создает новую жалобу на указанного пользователя * @tags Reports
     * @name CreateReport
     * @summary Подать жалобу на пользователя
     * @request POST:/reports
     * @secure
     * @response `201` `ReportResponseDto` Жалоба успешно отправлена
     * @response `400` `void` Неверные данные запроса
     * @response `404` `void` Пользователь не найден*/

    createReport: (data: CreateReportDto): Promise<ReportResponseDto> =>
      $post<ReportResponseDto>(`/reports`, {
        data,
        isBearer: true,
      }),

    createReportAsync: (opts?: CustomFetchOptions<ReportResponseDto>) =>
      customUseFetch<ReportResponseDto>(`/reports`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Удаляет жалобу из системы * @tags Reports
     * @name DeleteReport
     * @summary Удалить жалобу (только для админов/модераторов)
     * @request DELETE:/reports/{id}
     * @secure
     * @response `200` `DeleteReportResponseDto` Жалоба успешно удалена
     * @response `404` `void` Жалоба не найдена*/

    deleteReport: ({
      id,
      ...query
    }: DeleteReportParams): Promise<DeleteReportResponseDto> =>
      $delete<DeleteReportResponseDto>(`/reports/${id}`, {
        isBearer: true,
      }),

    deleteReportAsync: (
      { id },
      opts?: CustomFetchOptions<DeleteReportResponseDto>,
    ) =>
      customUseFetch<DeleteReportResponseDto>(`/reports/${id}`, "delete", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает список жалоб, поданных текущим пользователем * @tags Reports
     * @name GetMyReports
     * @summary Получить мои жалобы
     * @request GET:/reports/my
     * @secure
     * @response `200` `ReportListResponseDto` Список моих жалоб успешно получен*/

    getMyReports: (query: GetMyReportsParams): Promise<ReportListResponseDto> =>
      $get<ReportListResponseDto>(`/reports/my`, {
        params: query,
        isBearer: true,
      }),

    getMyReportsAsync: (opts?: CustomFetchOptions<ReportListResponseDto>) =>
      customUseFetch<ReportListResponseDto>(`/reports/my`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает подробную информацию о конкретной жалобе * @tags Reports
     * @name GetReport
     * @summary Получить информацию о жалобе (только для админов/модераторов)
     * @request GET:/reports/{id}
     * @secure
     * @response `200` `ReportResponseDto` Информация о жалобе успешно получена
     * @response `404` `void` Жалоба не найдена*/

    getReport: ({
      id,
      ...query
    }: GetReportParams): Promise<ReportResponseDto> =>
      $get<ReportResponseDto>(`/reports/${id}`, {
        isBearer: true,
      }),

    getReportAsync: ({ id }, opts?: CustomFetchOptions<ReportResponseDto>) =>
      customUseFetch<ReportResponseDto>(`/reports/${id}`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает пагинированный список всех жалоб * @tags Reports
     * @name GetReports
     * @summary Получить список жалоб (только для админов/модераторов)
     * @request GET:/reports
     * @secure
     * @response `200` `ReportListResponseDto` Список жалоб успешно получен*/

    getReports: (query: GetReportsParams): Promise<ReportListResponseDto> =>
      $get<ReportListResponseDto>(`/reports`, {
        params: query,
        isBearer: true,
      }),

    getReportsAsync: (opts?: CustomFetchOptions<ReportListResponseDto>) =>
      customUseFetch<ReportListResponseDto>(`/reports`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает список жалоб на указанного пользователя * @tags Reports
     * @name GetReportsByReportedUser
     * @summary Получить жалобы на пользователя (только для админов/модераторов)
     * @request GET:/reports/reported-user/{userId}
     * @secure
     * @response `200` `(ReportResponseDto)[]` Список жалоб на пользователя успешно получен*/

    getReportsByReportedUser: ({
      userId,
      ...query
    }: GetReportsByReportedUserParams): Promise<ReportResponseDto[]> =>
      $get<ReportResponseDto[]>(`/reports/reported-user/${userId}`, {
        isBearer: true,
      }),

    getReportsByReportedUserAsync: (
      { userId },
      opts?: CustomFetchOptions<ReportResponseDto[]>,
    ) =>
      customUseFetch<ReportResponseDto[]>(
        `/reports/reported-user/${userId}`,
        "get",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
 * @description Возвращает количество жалоб по статусам * @tags Reports
 * @name GetReportsCount
 * @summary Получить статистику по жалобам (только для админов/модераторов)
 * @request GET:/reports/stats/count
 * @secure
 * @response `200` `{
  \**
   * Количество ожидающих жалоб
   * @example 5
   *\
    pending?: number,
  \**
   * Количество рассмотренных жалоб
   * @example 10
   *\
    resolved?: number,

}` Статистика успешно получена*/

    getReportsCount: (): Promise<{
      /**
       * Количество ожидающих жалоб
       * @example 5
       */
      pending?: number;
      /**
       * Количество рассмотренных жалоб
       * @example 10
       */
      resolved?: number;
    }> =>
      $get<{
        /**
         * Количество ожидающих жалоб
         * @example 5
         */
        pending?: number;
        /**
         * Количество рассмотренных жалоб
         * @example 10
         */
        resolved?: number;
      }>(`/reports/stats/count`, {
        isBearer: true,
      }),

    getReportsCountAsync: (
      opts?: CustomFetchOptions<{
        /**
         * Количество ожидающих жалоб
         * @example 5
         */
        pending?: number;
        /**
         * Количество рассмотренных жалоб
         * @example 10
         */
        resolved?: number;
      }>,
    ) =>
      customUseFetch<{
        /**
         * Количество ожидающих жалоб
         * @example 5
         */
        pending?: number;
        /**
         * Количество рассмотренных жалоб
         * @example 10
         */
        resolved?: number;
      }>(`/reports/stats/count`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Отмечает жалобу как рассмотренную * @tags Reports
     * @name ResolveReport
     * @summary Рассмотреть жалобу (только для админов/модераторов)
     * @request PUT:/reports/{id}/resolve
     * @secure
     * @response `200` `ReportResponseDto` Жалоба успешно рассмотрена
     * @response `400` `void` Жалоба уже рассмотрена
     * @response `404` `void` Жалоба не найдена*/

    resolveReport: (
      { id, ...query }: ResolveReportParams,
      data: ResolveReportDto,
    ): Promise<ReportResponseDto> =>
      $put<ReportResponseDto>(`/reports/${id}/resolve`, {
        data,
        isBearer: true,
      }),

    resolveReportAsync: (
      { id },
      opts?: CustomFetchOptions<ReportResponseDto>,
    ) =>
      customUseFetch<ReportResponseDto>(`/reports/${id}/resolve`, "put", {
        ...opts,
        isBearer: true,
      }),
  };
  static stickers = {
    /**
     * @description Возвращает список всех доступных наборов стикеров * @tags Stickers
     * @name GetAllPacks
     * @summary Получить все активные наборы стикеров
     * @request GET:/stickers/packs
     * @secure
     * @response `200` `StickerPackListResponseDto` Список наборов стикеров успешно получен*/

    getAllPacks: (): Promise<StickerPackListResponseDto> =>
      $get<StickerPackListResponseDto>(`/stickers/packs`, {
        isBearer: true,
      }),

    getAllPacksAsync: (opts?: CustomFetchOptions<StickerPackListResponseDto>) =>
      customUseFetch<StickerPackListResponseDto>(`/stickers/packs`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает подробную информацию о наборе стикеров * @tags Stickers
     * @name GetPackById
     * @summary Получить набор стикеров по ID
     * @request GET:/stickers/packs/{id}
     * @secure
     * @response `200` `StickerPackResponseDto` Набор стикеров успешно получен
     * @response `404` `void` Набор стикеров не найден*/

    getPackById: ({
      id,
      ...query
    }: GetPackByIdParams): Promise<StickerPackResponseDto> =>
      $get<StickerPackResponseDto>(`/stickers/packs/${id}`, {
        isBearer: true,
      }),

    getPackByIdAsync: (
      { id },
      opts?: CustomFetchOptions<StickerPackResponseDto>,
    ) =>
      customUseFetch<StickerPackResponseDto>(`/stickers/packs/${id}`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает информацию о конкретном стикере * @tags Stickers
     * @name GetStickerById
     * @summary Получить стикер по ID
     * @request GET:/stickers/{id}
     * @secure
     * @response `200` `StickerResponseDto` Стикер успешно получен
     * @response `404` `void` Стикер не найден*/

    getStickerById: ({
      id,
      ...query
    }: GetStickerByIdParams): Promise<StickerResponseDto> =>
      $get<StickerResponseDto>(`/stickers/${id}`, {
        isBearer: true,
      }),

    getStickerByIdAsync: (
      { id },
      opts?: CustomFetchOptions<StickerResponseDto>,
    ) =>
      customUseFetch<StickerResponseDto>(`/stickers/${id}`, "get", {
        ...opts,
        isBearer: true,
      }),

    /**
     * @description Возвращает информацию о стикере по его внутреннему идентификатору * @tags Stickers
     * @name GetStickerByStickerId
     * @summary Получить стикер по stickerId
     * @request GET:/stickers/by-sticker-id/{stickerId}
     * @secure
     * @response `200` `StickerResponseDto` Стикер успешно получен
     * @response `404` `void` Стикер не найден*/

    getStickerByStickerId: ({
      stickerId,
      ...query
    }: GetStickerByStickerIdParams): Promise<StickerResponseDto> =>
      $get<StickerResponseDto>(`/stickers/by-sticker-id/${stickerId}`, {
        isBearer: true,
      }),

    getStickerByStickerIdAsync: (
      { stickerId },
      opts?: CustomFetchOptions<StickerResponseDto>,
    ) =>
      customUseFetch<StickerResponseDto>(
        `/stickers/by-sticker-id/${stickerId}`,
        "get",
        {
          ...opts,
          isBearer: true,
        },
      ),

    /**
     * @description Ищет стикеры по названию * @tags Stickers
     * @name SearchStickers
     * @summary Поиск стикеров
     * @request GET:/stickers/search
     * @secure
     * @response `200` `(StickerResponseDto)[]` Результаты поиска успешно получены*/

    searchStickers: (
      query: SearchStickersParams,
    ): Promise<StickerResponseDto[]> =>
      $get<StickerResponseDto[]>(`/stickers/search`, {
        params: query,
        isBearer: true,
      }),

    searchStickersAsync: (opts?: CustomFetchOptions<StickerResponseDto[]>) =>
      customUseFetch<StickerResponseDto[]>(`/stickers/search`, "get", {
        ...opts,
        isBearer: true,
      }),
  };
  static admin = {
    /**
     * No description * @tags Stickers Admin
     * @name CreatePack
     * @summary Создать набор стикеров (только для админов)
     * @request POST:/admin/stickers/packs
     * @secure
     * @response `201` `StickerPackResponseDto`*/

    createPack: (data: CreateStickerPackDto): Promise<StickerPackResponseDto> =>
      $post<StickerPackResponseDto>(`/admin/stickers/packs`, {
        data,
        isBearer: true,
      }),

    createPackAsync: (opts?: CustomFetchOptions<StickerPackResponseDto>) =>
      customUseFetch<StickerPackResponseDto>(`/admin/stickers/packs`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Stickers Admin
     * @name CreateSticker
     * @summary Создать стикер (только для админов)
     * @request POST:/admin/stickers/stickers
     * @secure
     * @response `201` `StickerResponseDto`*/

    createSticker: (data: {
      /** @format binary */
      image?: File;
      /** @example "Улыбка" */
      name?: string;
      /** @example 1 */
      order?: number;
      /** @example "uuid" */
      packId?: string;
      /** @example "sticker_123" */
      stickerId?: string;
    }): Promise<StickerResponseDto> =>
      $post<StickerResponseDto>(`/admin/stickers/stickers`, {
        data,
        isBearer: true,
      }),

    createStickerAsync: (opts?: CustomFetchOptions<StickerResponseDto>) =>
      customUseFetch<StickerResponseDto>(`/admin/stickers/stickers`, "post", {
        ...opts,
        isBearer: true,
      }),

    /**
     * No description * @tags Stickers Admin
     * @name DeleteSticker
     * @summary Удалить стикер (только для админов)
     * @request DELETE:/admin/stickers/stickers/{id}
     * @secure
     * @response `200` `void` Стикер успешно удален*/

    deleteSticker: ({ id, ...query }: DeleteStickerParams): Promise<void> =>
      $delete<void>(`/admin/stickers/stickers/${id}`, {
        isBearer: true,
      }),

    deleteStickerAsync: ({ id }, opts?: CustomFetchOptions<void>) =>
      customUseFetch<void>(`/admin/stickers/stickers/${id}`, "delete", {
        ...opts,
        isBearer: true,
      }),
  };
}
