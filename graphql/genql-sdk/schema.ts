// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    bigint: any,
    bytea: any,
    citext: any,
    json: any,
    jsonb: any,
    numeric: any,
    time: any,
    timestamp: any,
    timestamptz: any,
    uuid: any,
}

export interface FixPeriodCompletionsOutput {
    message: Scalars['String']
    __typename: 'FixPeriodCompletionsOutput'
}

export interface GroupReportsOutput {
    has_next_page: (Scalars['Boolean'] | null)
    next_start: (Scalars['String'] | null)
    reports: ((PeriodReport | null)[] | null)
    __typename: 'GroupReportsOutput'
}

export interface InitialiseE2EOutput {
    ok: Scalars['Boolean']
    __typename: 'InitialiseE2EOutput'
}

export type PaymentStatus = 'Cancelled' | 'Cancelled_Partially' | 'Completed' | 'Failed' | 'In_transit' | 'Pending' | 'Processing' | 'Rejected' | 'Success_hold'

export type PaymentType = 'MoneyIn' | 'MoneyOut'

export interface PeriodReport {
    deposits: Scalars['Float']
    end: Scalars['String']
    expected: Scalars['Float']
    payments: ((PeriodReportPayment | null)[] | null)
    recurrency: Recurrency
    start: Scalars['String']
    status: ReportStatus
    withdrawals: Scalars['Float']
    __typename: 'PeriodReport'
}

export interface PeriodReportMember {
    user: (PeriodReportUser | null)
    user_id: (Scalars['String'] | null)
    __typename: 'PeriodReportMember'
}

export interface PeriodReportPayment {
    amount: Scalars['Float']
    created_at: Scalars['String']
    id: Scalars['String']
    member: (PeriodReportMember | null)
    transaction_status: PaymentStatus
    transaction_type: PaymentType
    __typename: 'PeriodReportPayment'
}

export interface PeriodReportUser {
    displayName: Scalars['String']
    id: Scalars['String']
    __typename: 'PeriodReportUser'
}

export type Recurrency = 'Daily' | 'Monthly' | 'Weekly'

export type ReportStatus = 'Failure' | 'InProgress' | 'Success'


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authProviderRequests {
    id: Scalars['uuid']
    options: (Scalars['jsonb'] | null)
    __typename: 'authProviderRequests'
}


/** aggregated selection of "auth.provider_requests" */
export interface authProviderRequests_aggregate {
    aggregate: (authProviderRequests_aggregate_fields | null)
    nodes: authProviderRequests[]
    __typename: 'authProviderRequests_aggregate'
}


/** aggregate fields of "auth.provider_requests" */
export interface authProviderRequests_aggregate_fields {
    count: Scalars['Int']
    max: (authProviderRequests_max_fields | null)
    min: (authProviderRequests_min_fields | null)
    __typename: 'authProviderRequests_aggregate_fields'
}


/** unique or primary key constraints on table "auth.provider_requests" */
export type authProviderRequests_constraint = 'provider_requests_pkey'


/** aggregate max on columns */
export interface authProviderRequests_max_fields {
    id: (Scalars['uuid'] | null)
    __typename: 'authProviderRequests_max_fields'
}


/** aggregate min on columns */
export interface authProviderRequests_min_fields {
    id: (Scalars['uuid'] | null)
    __typename: 'authProviderRequests_min_fields'
}


/** response of any mutation on the table "auth.provider_requests" */
export interface authProviderRequests_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authProviderRequests[]
    __typename: 'authProviderRequests_mutation_response'
}


/** select columns of table "auth.provider_requests" */
export type authProviderRequests_select_column = 'id' | 'options'


/** update columns of table "auth.provider_requests" */
export type authProviderRequests_update_column = 'id' | 'options'


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authProviders {
    id: Scalars['String']
    /** An array relationship */
    userProviders: authUserProviders[]
    /** An aggregate relationship */
    userProviders_aggregate: authUserProviders_aggregate
    __typename: 'authProviders'
}


/** aggregated selection of "auth.providers" */
export interface authProviders_aggregate {
    aggregate: (authProviders_aggregate_fields | null)
    nodes: authProviders[]
    __typename: 'authProviders_aggregate'
}


/** aggregate fields of "auth.providers" */
export interface authProviders_aggregate_fields {
    count: Scalars['Int']
    max: (authProviders_max_fields | null)
    min: (authProviders_min_fields | null)
    __typename: 'authProviders_aggregate_fields'
}


/** unique or primary key constraints on table "auth.providers" */
export type authProviders_constraint = 'providers_pkey'


/** aggregate max on columns */
export interface authProviders_max_fields {
    id: (Scalars['String'] | null)
    __typename: 'authProviders_max_fields'
}


/** aggregate min on columns */
export interface authProviders_min_fields {
    id: (Scalars['String'] | null)
    __typename: 'authProviders_min_fields'
}


/** response of any mutation on the table "auth.providers" */
export interface authProviders_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authProviders[]
    __typename: 'authProviders_mutation_response'
}


/** select columns of table "auth.providers" */
export type authProviders_select_column = 'id'


/** update columns of table "auth.providers" */
export type authProviders_update_column = 'id'


/** columns and relationships of "auth.refresh_token_types" */
export interface authRefreshTokenTypes {
    comment: (Scalars['String'] | null)
    /** An array relationship */
    refreshTokens: authRefreshTokens[]
    /** An aggregate relationship */
    refreshTokens_aggregate: authRefreshTokens_aggregate
    value: Scalars['String']
    __typename: 'authRefreshTokenTypes'
}


/** aggregated selection of "auth.refresh_token_types" */
export interface authRefreshTokenTypes_aggregate {
    aggregate: (authRefreshTokenTypes_aggregate_fields | null)
    nodes: authRefreshTokenTypes[]
    __typename: 'authRefreshTokenTypes_aggregate'
}


/** aggregate fields of "auth.refresh_token_types" */
export interface authRefreshTokenTypes_aggregate_fields {
    count: Scalars['Int']
    max: (authRefreshTokenTypes_max_fields | null)
    min: (authRefreshTokenTypes_min_fields | null)
    __typename: 'authRefreshTokenTypes_aggregate_fields'
}


/** unique or primary key constraints on table "auth.refresh_token_types" */
export type authRefreshTokenTypes_constraint = 'refresh_token_types_pkey'

export type authRefreshTokenTypes_enum = 'pat' | 'regular'


/** aggregate max on columns */
export interface authRefreshTokenTypes_max_fields {
    comment: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'authRefreshTokenTypes_max_fields'
}


/** aggregate min on columns */
export interface authRefreshTokenTypes_min_fields {
    comment: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'authRefreshTokenTypes_min_fields'
}


/** response of any mutation on the table "auth.refresh_token_types" */
export interface authRefreshTokenTypes_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authRefreshTokenTypes[]
    __typename: 'authRefreshTokenTypes_mutation_response'
}


/** select columns of table "auth.refresh_token_types" */
export type authRefreshTokenTypes_select_column = 'comment' | 'value'


/** update columns of table "auth.refresh_token_types" */
export type authRefreshTokenTypes_update_column = 'comment' | 'value'


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authRefreshTokens {
    createdAt: Scalars['timestamptz']
    expiresAt: Scalars['timestamptz']
    id: Scalars['uuid']
    metadata: (Scalars['jsonb'] | null)
    refreshTokenHash: (Scalars['String'] | null)
    /** An object relationship */
    refresh_token_type: authRefreshTokenTypes
    type: authRefreshTokenTypes_enum
    /** An object relationship */
    user: users
    userId: Scalars['uuid']
    __typename: 'authRefreshTokens'
}


/** aggregated selection of "auth.refresh_tokens" */
export interface authRefreshTokens_aggregate {
    aggregate: (authRefreshTokens_aggregate_fields | null)
    nodes: authRefreshTokens[]
    __typename: 'authRefreshTokens_aggregate'
}


/** aggregate fields of "auth.refresh_tokens" */
export interface authRefreshTokens_aggregate_fields {
    count: Scalars['Int']
    max: (authRefreshTokens_max_fields | null)
    min: (authRefreshTokens_min_fields | null)
    __typename: 'authRefreshTokens_aggregate_fields'
}


/** unique or primary key constraints on table "auth.refresh_tokens" */
export type authRefreshTokens_constraint = 'refresh_tokens_pkey'


/** aggregate max on columns */
export interface authRefreshTokens_max_fields {
    createdAt: (Scalars['timestamptz'] | null)
    expiresAt: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    refreshTokenHash: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authRefreshTokens_max_fields'
}


/** aggregate min on columns */
export interface authRefreshTokens_min_fields {
    createdAt: (Scalars['timestamptz'] | null)
    expiresAt: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    refreshTokenHash: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authRefreshTokens_min_fields'
}


/** response of any mutation on the table "auth.refresh_tokens" */
export interface authRefreshTokens_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authRefreshTokens[]
    __typename: 'authRefreshTokens_mutation_response'
}


/** select columns of table "auth.refresh_tokens" */
export type authRefreshTokens_select_column = 'createdAt' | 'expiresAt' | 'id' | 'metadata' | 'refreshTokenHash' | 'type' | 'userId'


/** update columns of table "auth.refresh_tokens" */
export type authRefreshTokens_update_column = 'createdAt' | 'expiresAt' | 'id' | 'metadata' | 'refreshTokenHash' | 'type' | 'userId'


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authRoles {
    role: Scalars['String']
    /** An array relationship */
    userRoles: authUserRoles[]
    /** An aggregate relationship */
    userRoles_aggregate: authUserRoles_aggregate
    /** An array relationship */
    usersByDefaultRole: users[]
    /** An aggregate relationship */
    usersByDefaultRole_aggregate: users_aggregate
    __typename: 'authRoles'
}


/** aggregated selection of "auth.roles" */
export interface authRoles_aggregate {
    aggregate: (authRoles_aggregate_fields | null)
    nodes: authRoles[]
    __typename: 'authRoles_aggregate'
}


/** aggregate fields of "auth.roles" */
export interface authRoles_aggregate_fields {
    count: Scalars['Int']
    max: (authRoles_max_fields | null)
    min: (authRoles_min_fields | null)
    __typename: 'authRoles_aggregate_fields'
}


/** unique or primary key constraints on table "auth.roles" */
export type authRoles_constraint = 'roles_pkey'


/** aggregate max on columns */
export interface authRoles_max_fields {
    role: (Scalars['String'] | null)
    __typename: 'authRoles_max_fields'
}


/** aggregate min on columns */
export interface authRoles_min_fields {
    role: (Scalars['String'] | null)
    __typename: 'authRoles_min_fields'
}


/** response of any mutation on the table "auth.roles" */
export interface authRoles_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authRoles[]
    __typename: 'authRoles_mutation_response'
}


/** select columns of table "auth.roles" */
export type authRoles_select_column = 'role'


/** update columns of table "auth.roles" */
export type authRoles_update_column = 'role'


/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authUserProviders {
    accessToken: Scalars['String']
    createdAt: Scalars['timestamptz']
    id: Scalars['uuid']
    /** An object relationship */
    provider: authProviders
    providerId: Scalars['String']
    providerUserId: Scalars['String']
    refreshToken: (Scalars['String'] | null)
    updatedAt: Scalars['timestamptz']
    /** An object relationship */
    user: users
    userId: Scalars['uuid']
    __typename: 'authUserProviders'
}


/** aggregated selection of "auth.user_providers" */
export interface authUserProviders_aggregate {
    aggregate: (authUserProviders_aggregate_fields | null)
    nodes: authUserProviders[]
    __typename: 'authUserProviders_aggregate'
}


/** aggregate fields of "auth.user_providers" */
export interface authUserProviders_aggregate_fields {
    count: Scalars['Int']
    max: (authUserProviders_max_fields | null)
    min: (authUserProviders_min_fields | null)
    __typename: 'authUserProviders_aggregate_fields'
}


/** unique or primary key constraints on table "auth.user_providers" */
export type authUserProviders_constraint = 'user_providers_pkey' | 'user_providers_provider_id_provider_user_id_key' | 'user_providers_user_id_provider_id_key'


/** aggregate max on columns */
export interface authUserProviders_max_fields {
    accessToken: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    providerId: (Scalars['String'] | null)
    providerUserId: (Scalars['String'] | null)
    refreshToken: (Scalars['String'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authUserProviders_max_fields'
}


/** aggregate min on columns */
export interface authUserProviders_min_fields {
    accessToken: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    providerId: (Scalars['String'] | null)
    providerUserId: (Scalars['String'] | null)
    refreshToken: (Scalars['String'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authUserProviders_min_fields'
}


/** response of any mutation on the table "auth.user_providers" */
export interface authUserProviders_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authUserProviders[]
    __typename: 'authUserProviders_mutation_response'
}


/** select columns of table "auth.user_providers" */
export type authUserProviders_select_column = 'accessToken' | 'createdAt' | 'id' | 'providerId' | 'providerUserId' | 'refreshToken' | 'updatedAt' | 'userId'


/** update columns of table "auth.user_providers" */
export type authUserProviders_update_column = 'accessToken' | 'createdAt' | 'id' | 'providerId' | 'providerUserId' | 'refreshToken' | 'updatedAt' | 'userId'


/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authUserRoles {
    createdAt: Scalars['timestamptz']
    id: Scalars['uuid']
    role: Scalars['String']
    /** An object relationship */
    roleByRole: authRoles
    /** An object relationship */
    user: users
    userId: Scalars['uuid']
    __typename: 'authUserRoles'
}


/** aggregated selection of "auth.user_roles" */
export interface authUserRoles_aggregate {
    aggregate: (authUserRoles_aggregate_fields | null)
    nodes: authUserRoles[]
    __typename: 'authUserRoles_aggregate'
}


/** aggregate fields of "auth.user_roles" */
export interface authUserRoles_aggregate_fields {
    count: Scalars['Int']
    max: (authUserRoles_max_fields | null)
    min: (authUserRoles_min_fields | null)
    __typename: 'authUserRoles_aggregate_fields'
}


/** unique or primary key constraints on table "auth.user_roles" */
export type authUserRoles_constraint = 'user_roles_pkey' | 'user_roles_user_id_role_key'


/** aggregate max on columns */
export interface authUserRoles_max_fields {
    createdAt: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    role: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authUserRoles_max_fields'
}


/** aggregate min on columns */
export interface authUserRoles_min_fields {
    createdAt: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    role: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authUserRoles_min_fields'
}


/** response of any mutation on the table "auth.user_roles" */
export interface authUserRoles_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authUserRoles[]
    __typename: 'authUserRoles_mutation_response'
}


/** select columns of table "auth.user_roles" */
export type authUserRoles_select_column = 'createdAt' | 'id' | 'role' | 'userId'


/** update columns of table "auth.user_roles" */
export type authUserRoles_update_column = 'createdAt' | 'id' | 'role' | 'userId'


/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authUserSecurityKeys {
    counter: Scalars['bigint']
    credentialId: Scalars['String']
    credentialPublicKey: (Scalars['bytea'] | null)
    id: Scalars['uuid']
    nickname: (Scalars['String'] | null)
    transports: Scalars['String']
    /** An object relationship */
    user: users
    userId: Scalars['uuid']
    __typename: 'authUserSecurityKeys'
}


/** aggregated selection of "auth.user_security_keys" */
export interface authUserSecurityKeys_aggregate {
    aggregate: (authUserSecurityKeys_aggregate_fields | null)
    nodes: authUserSecurityKeys[]
    __typename: 'authUserSecurityKeys_aggregate'
}


/** aggregate fields of "auth.user_security_keys" */
export interface authUserSecurityKeys_aggregate_fields {
    avg: (authUserSecurityKeys_avg_fields | null)
    count: Scalars['Int']
    max: (authUserSecurityKeys_max_fields | null)
    min: (authUserSecurityKeys_min_fields | null)
    stddev: (authUserSecurityKeys_stddev_fields | null)
    stddev_pop: (authUserSecurityKeys_stddev_pop_fields | null)
    stddev_samp: (authUserSecurityKeys_stddev_samp_fields | null)
    sum: (authUserSecurityKeys_sum_fields | null)
    var_pop: (authUserSecurityKeys_var_pop_fields | null)
    var_samp: (authUserSecurityKeys_var_samp_fields | null)
    variance: (authUserSecurityKeys_variance_fields | null)
    __typename: 'authUserSecurityKeys_aggregate_fields'
}


/** aggregate avg on columns */
export interface authUserSecurityKeys_avg_fields {
    counter: (Scalars['Float'] | null)
    __typename: 'authUserSecurityKeys_avg_fields'
}


/** unique or primary key constraints on table "auth.user_security_keys" */
export type authUserSecurityKeys_constraint = 'user_security_key_credential_id_key' | 'user_security_keys_pkey'


/** aggregate max on columns */
export interface authUserSecurityKeys_max_fields {
    counter: (Scalars['bigint'] | null)
    credentialId: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    nickname: (Scalars['String'] | null)
    transports: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authUserSecurityKeys_max_fields'
}


/** aggregate min on columns */
export interface authUserSecurityKeys_min_fields {
    counter: (Scalars['bigint'] | null)
    credentialId: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    nickname: (Scalars['String'] | null)
    transports: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'authUserSecurityKeys_min_fields'
}


/** response of any mutation on the table "auth.user_security_keys" */
export interface authUserSecurityKeys_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: authUserSecurityKeys[]
    __typename: 'authUserSecurityKeys_mutation_response'
}


/** select columns of table "auth.user_security_keys" */
export type authUserSecurityKeys_select_column = 'counter' | 'credentialId' | 'credentialPublicKey' | 'id' | 'nickname' | 'transports' | 'userId'


/** aggregate stddev on columns */
export interface authUserSecurityKeys_stddev_fields {
    counter: (Scalars['Float'] | null)
    __typename: 'authUserSecurityKeys_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface authUserSecurityKeys_stddev_pop_fields {
    counter: (Scalars['Float'] | null)
    __typename: 'authUserSecurityKeys_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface authUserSecurityKeys_stddev_samp_fields {
    counter: (Scalars['Float'] | null)
    __typename: 'authUserSecurityKeys_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface authUserSecurityKeys_sum_fields {
    counter: (Scalars['bigint'] | null)
    __typename: 'authUserSecurityKeys_sum_fields'
}


/** update columns of table "auth.user_security_keys" */
export type authUserSecurityKeys_update_column = 'counter' | 'credentialId' | 'credentialPublicKey' | 'id' | 'nickname' | 'transports' | 'userId'


/** aggregate var_pop on columns */
export interface authUserSecurityKeys_var_pop_fields {
    counter: (Scalars['Float'] | null)
    __typename: 'authUserSecurityKeys_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface authUserSecurityKeys_var_samp_fields {
    counter: (Scalars['Float'] | null)
    __typename: 'authUserSecurityKeys_var_samp_fields'
}


/** aggregate variance on columns */
export interface authUserSecurityKeys_variance_fields {
    counter: (Scalars['Float'] | null)
    __typename: 'authUserSecurityKeys_variance_fields'
}


/** Internal table for tracking migrations. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface auth_migrations {
    executed_at: (Scalars['timestamp'] | null)
    hash: Scalars['String']
    id: Scalars['Int']
    name: Scalars['String']
    __typename: 'auth_migrations'
}


/** aggregated selection of "auth.migrations" */
export interface auth_migrations_aggregate {
    aggregate: (auth_migrations_aggregate_fields | null)
    nodes: auth_migrations[]
    __typename: 'auth_migrations_aggregate'
}


/** aggregate fields of "auth.migrations" */
export interface auth_migrations_aggregate_fields {
    avg: (auth_migrations_avg_fields | null)
    count: Scalars['Int']
    max: (auth_migrations_max_fields | null)
    min: (auth_migrations_min_fields | null)
    stddev: (auth_migrations_stddev_fields | null)
    stddev_pop: (auth_migrations_stddev_pop_fields | null)
    stddev_samp: (auth_migrations_stddev_samp_fields | null)
    sum: (auth_migrations_sum_fields | null)
    var_pop: (auth_migrations_var_pop_fields | null)
    var_samp: (auth_migrations_var_samp_fields | null)
    variance: (auth_migrations_variance_fields | null)
    __typename: 'auth_migrations_aggregate_fields'
}


/** aggregate avg on columns */
export interface auth_migrations_avg_fields {
    id: (Scalars['Float'] | null)
    __typename: 'auth_migrations_avg_fields'
}


/** unique or primary key constraints on table "auth.migrations" */
export type auth_migrations_constraint = 'migrations_name_key' | 'migrations_pkey'


/** aggregate max on columns */
export interface auth_migrations_max_fields {
    executed_at: (Scalars['timestamp'] | null)
    hash: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    __typename: 'auth_migrations_max_fields'
}


/** aggregate min on columns */
export interface auth_migrations_min_fields {
    executed_at: (Scalars['timestamp'] | null)
    hash: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    __typename: 'auth_migrations_min_fields'
}


/** response of any mutation on the table "auth.migrations" */
export interface auth_migrations_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: auth_migrations[]
    __typename: 'auth_migrations_mutation_response'
}


/** select columns of table "auth.migrations" */
export type auth_migrations_select_column = 'executed_at' | 'hash' | 'id' | 'name'


/** aggregate stddev on columns */
export interface auth_migrations_stddev_fields {
    id: (Scalars['Float'] | null)
    __typename: 'auth_migrations_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface auth_migrations_stddev_pop_fields {
    id: (Scalars['Float'] | null)
    __typename: 'auth_migrations_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface auth_migrations_stddev_samp_fields {
    id: (Scalars['Float'] | null)
    __typename: 'auth_migrations_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface auth_migrations_sum_fields {
    id: (Scalars['Int'] | null)
    __typename: 'auth_migrations_sum_fields'
}


/** update columns of table "auth.migrations" */
export type auth_migrations_update_column = 'executed_at' | 'hash' | 'id' | 'name'


/** aggregate var_pop on columns */
export interface auth_migrations_var_pop_fields {
    id: (Scalars['Float'] | null)
    __typename: 'auth_migrations_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface auth_migrations_var_samp_fields {
    id: (Scalars['Float'] | null)
    __typename: 'auth_migrations_var_samp_fields'
}


/** aggregate variance on columns */
export interface auth_migrations_variance_fields {
    id: (Scalars['Float'] | null)
    __typename: 'auth_migrations_variance_fields'
}


/** columns and relationships of "storage.buckets" */
export interface buckets {
    cacheControl: (Scalars['String'] | null)
    createdAt: Scalars['timestamptz']
    downloadExpiration: Scalars['Int']
    /** An array relationship */
    files: files[]
    /** An aggregate relationship */
    files_aggregate: files_aggregate
    id: Scalars['String']
    maxUploadFileSize: Scalars['Int']
    minUploadFileSize: Scalars['Int']
    presignedUrlsEnabled: Scalars['Boolean']
    updatedAt: Scalars['timestamptz']
    __typename: 'buckets'
}


/** aggregated selection of "storage.buckets" */
export interface buckets_aggregate {
    aggregate: (buckets_aggregate_fields | null)
    nodes: buckets[]
    __typename: 'buckets_aggregate'
}


/** aggregate fields of "storage.buckets" */
export interface buckets_aggregate_fields {
    avg: (buckets_avg_fields | null)
    count: Scalars['Int']
    max: (buckets_max_fields | null)
    min: (buckets_min_fields | null)
    stddev: (buckets_stddev_fields | null)
    stddev_pop: (buckets_stddev_pop_fields | null)
    stddev_samp: (buckets_stddev_samp_fields | null)
    sum: (buckets_sum_fields | null)
    var_pop: (buckets_var_pop_fields | null)
    var_samp: (buckets_var_samp_fields | null)
    variance: (buckets_variance_fields | null)
    __typename: 'buckets_aggregate_fields'
}


/** aggregate avg on columns */
export interface buckets_avg_fields {
    downloadExpiration: (Scalars['Float'] | null)
    maxUploadFileSize: (Scalars['Float'] | null)
    minUploadFileSize: (Scalars['Float'] | null)
    __typename: 'buckets_avg_fields'
}


/** unique or primary key constraints on table "storage.buckets" */
export type buckets_constraint = 'buckets_pkey'


/** aggregate max on columns */
export interface buckets_max_fields {
    cacheControl: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    downloadExpiration: (Scalars['Int'] | null)
    id: (Scalars['String'] | null)
    maxUploadFileSize: (Scalars['Int'] | null)
    minUploadFileSize: (Scalars['Int'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    __typename: 'buckets_max_fields'
}


/** aggregate min on columns */
export interface buckets_min_fields {
    cacheControl: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    downloadExpiration: (Scalars['Int'] | null)
    id: (Scalars['String'] | null)
    maxUploadFileSize: (Scalars['Int'] | null)
    minUploadFileSize: (Scalars['Int'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    __typename: 'buckets_min_fields'
}


/** response of any mutation on the table "storage.buckets" */
export interface buckets_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: buckets[]
    __typename: 'buckets_mutation_response'
}


/** select columns of table "storage.buckets" */
export type buckets_select_column = 'cacheControl' | 'createdAt' | 'downloadExpiration' | 'id' | 'maxUploadFileSize' | 'minUploadFileSize' | 'presignedUrlsEnabled' | 'updatedAt'


/** aggregate stddev on columns */
export interface buckets_stddev_fields {
    downloadExpiration: (Scalars['Float'] | null)
    maxUploadFileSize: (Scalars['Float'] | null)
    minUploadFileSize: (Scalars['Float'] | null)
    __typename: 'buckets_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface buckets_stddev_pop_fields {
    downloadExpiration: (Scalars['Float'] | null)
    maxUploadFileSize: (Scalars['Float'] | null)
    minUploadFileSize: (Scalars['Float'] | null)
    __typename: 'buckets_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface buckets_stddev_samp_fields {
    downloadExpiration: (Scalars['Float'] | null)
    maxUploadFileSize: (Scalars['Float'] | null)
    minUploadFileSize: (Scalars['Float'] | null)
    __typename: 'buckets_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface buckets_sum_fields {
    downloadExpiration: (Scalars['Int'] | null)
    maxUploadFileSize: (Scalars['Int'] | null)
    minUploadFileSize: (Scalars['Int'] | null)
    __typename: 'buckets_sum_fields'
}


/** update columns of table "storage.buckets" */
export type buckets_update_column = 'cacheControl' | 'createdAt' | 'downloadExpiration' | 'id' | 'maxUploadFileSize' | 'minUploadFileSize' | 'presignedUrlsEnabled' | 'updatedAt'


/** aggregate var_pop on columns */
export interface buckets_var_pop_fields {
    downloadExpiration: (Scalars['Float'] | null)
    maxUploadFileSize: (Scalars['Float'] | null)
    minUploadFileSize: (Scalars['Float'] | null)
    __typename: 'buckets_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface buckets_var_samp_fields {
    downloadExpiration: (Scalars['Float'] | null)
    maxUploadFileSize: (Scalars['Float'] | null)
    minUploadFileSize: (Scalars['Float'] | null)
    __typename: 'buckets_var_samp_fields'
}


/** aggregate variance on columns */
export interface buckets_variance_fields {
    downloadExpiration: (Scalars['Float'] | null)
    maxUploadFileSize: (Scalars['Float'] | null)
    minUploadFileSize: (Scalars['Float'] | null)
    __typename: 'buckets_variance_fields'
}


/** columns and relationships of "campaign_file" */
export interface campaign_file {
    campaign_id: Scalars['uuid']
    created_at: Scalars['timestamptz']
    /** An object relationship */
    file: files
    file_id: Scalars['uuid']
    id: Scalars['uuid']
    /** An object relationship */
    partner: partner
    /** An object relationship */
    partner_campaign: partner_campaign
    partner_id: Scalars['uuid']
    updated_at: Scalars['timestamptz']
    __typename: 'campaign_file'
}


/** aggregated selection of "campaign_file" */
export interface campaign_file_aggregate {
    aggregate: (campaign_file_aggregate_fields | null)
    nodes: campaign_file[]
    __typename: 'campaign_file_aggregate'
}


/** aggregate fields of "campaign_file" */
export interface campaign_file_aggregate_fields {
    count: Scalars['Int']
    max: (campaign_file_max_fields | null)
    min: (campaign_file_min_fields | null)
    __typename: 'campaign_file_aggregate_fields'
}


/** unique or primary key constraints on table "campaign_file" */
export type campaign_file_constraint = 'campaign_file_partner_id_campaign_id_file_id_key' | 'campaign_file_pkey'


/** aggregate max on columns */
export interface campaign_file_max_fields {
    campaign_id: (Scalars['uuid'] | null)
    created_at: (Scalars['timestamptz'] | null)
    file_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'campaign_file_max_fields'
}


/** aggregate min on columns */
export interface campaign_file_min_fields {
    campaign_id: (Scalars['uuid'] | null)
    created_at: (Scalars['timestamptz'] | null)
    file_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'campaign_file_min_fields'
}


/** response of any mutation on the table "campaign_file" */
export interface campaign_file_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: campaign_file[]
    __typename: 'campaign_file_mutation_response'
}


/** select columns of table "campaign_file" */
export type campaign_file_select_column = 'campaign_id' | 'created_at' | 'file_id' | 'id' | 'partner_id' | 'updated_at'


/** update columns of table "campaign_file" */
export type campaign_file_update_column = 'campaign_id' | 'created_at' | 'file_id' | 'id' | 'partner_id' | 'updated_at'


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "en_currencies" */
export interface en_currencies {
    description: Scalars['String']
    /** An array relationship */
    payments: payment[]
    /** An aggregate relationship */
    payments_aggregate: payment_aggregate
    value: Scalars['String']
    __typename: 'en_currencies'
}


/** aggregated selection of "en_currencies" */
export interface en_currencies_aggregate {
    aggregate: (en_currencies_aggregate_fields | null)
    nodes: en_currencies[]
    __typename: 'en_currencies_aggregate'
}


/** aggregate fields of "en_currencies" */
export interface en_currencies_aggregate_fields {
    count: Scalars['Int']
    max: (en_currencies_max_fields | null)
    min: (en_currencies_min_fields | null)
    __typename: 'en_currencies_aggregate_fields'
}


/** unique or primary key constraints on table "en_currencies" */
export type en_currencies_constraint = 'en_currencies_pkey'

export type en_currencies_enum = 'CFD' | 'USD'


/** aggregate max on columns */
export interface en_currencies_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_currencies_max_fields'
}


/** aggregate min on columns */
export interface en_currencies_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_currencies_min_fields'
}


/** response of any mutation on the table "en_currencies" */
export interface en_currencies_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_currencies[]
    __typename: 'en_currencies_mutation_response'
}


/** select columns of table "en_currencies" */
export type en_currencies_select_column = 'description' | 'value'


/** update columns of table "en_currencies" */
export type en_currencies_update_column = 'description' | 'value'


/** columns and relationships of "en_notifications" */
export interface en_notifications {
    description: Scalars['String']
    /** An array relationship */
    invites: invitation[]
    /** An aggregate relationship */
    invites_aggregate: invitation_aggregate
    /** An array relationship */
    notifications: notification[]
    /** An aggregate relationship */
    notifications_aggregate: notification_aggregate
    value: Scalars['String']
    __typename: 'en_notifications'
}


/** aggregated selection of "en_notifications" */
export interface en_notifications_aggregate {
    aggregate: (en_notifications_aggregate_fields | null)
    nodes: en_notifications[]
    __typename: 'en_notifications_aggregate'
}


/** aggregate fields of "en_notifications" */
export interface en_notifications_aggregate_fields {
    count: Scalars['Int']
    max: (en_notifications_max_fields | null)
    min: (en_notifications_min_fields | null)
    __typename: 'en_notifications_aggregate_fields'
}


/** unique or primary key constraints on table "en_notifications" */
export type en_notifications_constraint = 'enum_notifications_pkey'

export type en_notifications_enum = 'internal' | 'member_invitation' | 'member_joined' | 'payment_reminder' | 'payment_review' | 'period_completion' | 'whatsapp'


/** aggregate max on columns */
export interface en_notifications_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_notifications_max_fields'
}


/** aggregate min on columns */
export interface en_notifications_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_notifications_min_fields'
}


/** response of any mutation on the table "en_notifications" */
export interface en_notifications_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_notifications[]
    __typename: 'en_notifications_mutation_response'
}


/** select columns of table "en_notifications" */
export type en_notifications_select_column = 'description' | 'value'


/** update columns of table "en_notifications" */
export type en_notifications_update_column = 'description' | 'value'


/** columns and relationships of "en_partner_steps" */
export interface en_partner_steps {
    description: Scalars['String']
    /** An array relationship */
    partners: partner[]
    /** An aggregate relationship */
    partners_aggregate: partner_aggregate
    value: Scalars['String']
    __typename: 'en_partner_steps'
}


/** aggregated selection of "en_partner_steps" */
export interface en_partner_steps_aggregate {
    aggregate: (en_partner_steps_aggregate_fields | null)
    nodes: en_partner_steps[]
    __typename: 'en_partner_steps_aggregate'
}


/** aggregate fields of "en_partner_steps" */
export interface en_partner_steps_aggregate_fields {
    count: Scalars['Int']
    max: (en_partner_steps_max_fields | null)
    min: (en_partner_steps_min_fields | null)
    __typename: 'en_partner_steps_aggregate_fields'
}


/** unique or primary key constraints on table "en_partner_steps" */
export type en_partner_steps_constraint = 'en_partner_steps_pkey'

export type en_partner_steps_enum = 'activated' | 'activation' | 'created' | 'document_verification' | 'funds_destination' | 'operators_creation'


/** aggregate max on columns */
export interface en_partner_steps_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_partner_steps_max_fields'
}


/** aggregate min on columns */
export interface en_partner_steps_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_partner_steps_min_fields'
}


/** response of any mutation on the table "en_partner_steps" */
export interface en_partner_steps_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_partner_steps[]
    __typename: 'en_partner_steps_mutation_response'
}


/** select columns of table "en_partner_steps" */
export type en_partner_steps_select_column = 'description' | 'value'


/** update columns of table "en_partner_steps" */
export type en_partner_steps_update_column = 'description' | 'value'


/** columns and relationships of "en_payment_providers" */
export interface en_payment_providers {
    description: Scalars['String']
    /** An array relationship */
    payments: payment[]
    /** An aggregate relationship */
    payments_aggregate: payment_aggregate
    value: Scalars['String']
    __typename: 'en_payment_providers'
}


/** aggregated selection of "en_payment_providers" */
export interface en_payment_providers_aggregate {
    aggregate: (en_payment_providers_aggregate_fields | null)
    nodes: en_payment_providers[]
    __typename: 'en_payment_providers_aggregate'
}


/** aggregate fields of "en_payment_providers" */
export interface en_payment_providers_aggregate_fields {
    count: Scalars['Int']
    max: (en_payment_providers_max_fields | null)
    min: (en_payment_providers_min_fields | null)
    __typename: 'en_payment_providers_aggregate_fields'
}


/** unique or primary key constraints on table "en_payment_providers" */
export type en_payment_providers_constraint = 'payment_providers_pkey'

export type en_payment_providers_enum = 'AFRICELL_CD' | 'AIRTEL_CD' | 'AIRTEL_KEY' | 'ECOBANK_CD' | 'ECOCASH_BI' | 'EQUITY_CD' | 'LUMICAHS_BI' | 'ORANGE_MONEY_CD' | 'SAFARICOM_KE' | 'UNIPESA_GATEWAY' | 'UNIPESA_SIM' | 'VODACOM_CD'


/** aggregate max on columns */
export interface en_payment_providers_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_payment_providers_max_fields'
}


/** aggregate min on columns */
export interface en_payment_providers_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_payment_providers_min_fields'
}


/** response of any mutation on the table "en_payment_providers" */
export interface en_payment_providers_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_payment_providers[]
    __typename: 'en_payment_providers_mutation_response'
}


/** select columns of table "en_payment_providers" */
export type en_payment_providers_select_column = 'description' | 'value'


/** update columns of table "en_payment_providers" */
export type en_payment_providers_update_column = 'description' | 'value'


/** columns and relationships of "en_permissions" */
export interface en_permissions {
    description: Scalars['String']
    /** An array relationship */
    payment_permissions: payment_review[]
    /** An aggregate relationship */
    payment_permissions_aggregate: payment_review_aggregate
    value: Scalars['String']
    __typename: 'en_permissions'
}


/** aggregated selection of "en_permissions" */
export interface en_permissions_aggregate {
    aggregate: (en_permissions_aggregate_fields | null)
    nodes: en_permissions[]
    __typename: 'en_permissions_aggregate'
}


/** aggregate fields of "en_permissions" */
export interface en_permissions_aggregate_fields {
    count: Scalars['Int']
    max: (en_permissions_max_fields | null)
    min: (en_permissions_min_fields | null)
    __typename: 'en_permissions_aggregate_fields'
}


/** unique or primary key constraints on table "en_permissions" */
export type en_permissions_constraint = 'en_permissions_pkey'

export type en_permissions_enum = 'Accepted' | 'Pending' | 'Rejected'


/** aggregate max on columns */
export interface en_permissions_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_permissions_max_fields'
}


/** aggregate min on columns */
export interface en_permissions_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_permissions_min_fields'
}


/** response of any mutation on the table "en_permissions" */
export interface en_permissions_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_permissions[]
    __typename: 'en_permissions_mutation_response'
}


/** select columns of table "en_permissions" */
export type en_permissions_select_column = 'description' | 'value'


/** update columns of table "en_permissions" */
export type en_permissions_update_column = 'description' | 'value'


/** columns and relationships of "en_recurrencies" */
export interface en_recurrencies {
    description: Scalars['String']
    /** An array relationship */
    groups: group[]
    /** An aggregate relationship */
    groups_aggregate: group_aggregate
    /** An array relationship */
    members: member[]
    /** An aggregate relationship */
    members_aggregate: member_aggregate
    value: Scalars['String']
    __typename: 'en_recurrencies'
}


/** aggregated selection of "en_recurrencies" */
export interface en_recurrencies_aggregate {
    aggregate: (en_recurrencies_aggregate_fields | null)
    nodes: en_recurrencies[]
    __typename: 'en_recurrencies_aggregate'
}


/** aggregate fields of "en_recurrencies" */
export interface en_recurrencies_aggregate_fields {
    count: Scalars['Int']
    max: (en_recurrencies_max_fields | null)
    min: (en_recurrencies_min_fields | null)
    __typename: 'en_recurrencies_aggregate_fields'
}


/** unique or primary key constraints on table "en_recurrencies" */
export type en_recurrencies_constraint = 'enum_period_recurrency_description_key' | 'enum_period_recurrency_pkey'

export type en_recurrencies_enum = 'Daily' | 'Monthly' | 'Weekly'


/** aggregate max on columns */
export interface en_recurrencies_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_recurrencies_max_fields'
}


/** aggregate min on columns */
export interface en_recurrencies_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_recurrencies_min_fields'
}


/** response of any mutation on the table "en_recurrencies" */
export interface en_recurrencies_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_recurrencies[]
    __typename: 'en_recurrencies_mutation_response'
}


/** select columns of table "en_recurrencies" */
export type en_recurrencies_select_column = 'description' | 'value'


/** update columns of table "en_recurrencies" */
export type en_recurrencies_update_column = 'description' | 'value'


/** columns and relationships of "en_statuses" */
export interface en_statuses {
    description: Scalars['String']
    /** An array relationship */
    invites: invitation[]
    /** An aggregate relationship */
    invites_aggregate: invitation_aggregate
    /** An array relationship */
    notifications: notification[]
    /** An aggregate relationship */
    notifications_aggregate: notification_aggregate
    /** An array relationship */
    payments: payment[]
    /** An aggregate relationship */
    payments_aggregate: payment_aggregate
    value: Scalars['String']
    __typename: 'en_statuses'
}


/** aggregated selection of "en_statuses" */
export interface en_statuses_aggregate {
    aggregate: (en_statuses_aggregate_fields | null)
    nodes: en_statuses[]
    __typename: 'en_statuses_aggregate'
}


/** aggregate fields of "en_statuses" */
export interface en_statuses_aggregate_fields {
    count: Scalars['Int']
    max: (en_statuses_max_fields | null)
    min: (en_statuses_min_fields | null)
    __typename: 'en_statuses_aggregate_fields'
}


/** unique or primary key constraints on table "en_statuses" */
export type en_statuses_constraint = 'enum_statuses_description_key' | 'enum_statuses_pkey'

export type en_statuses_enum = 'Cancelled' | 'Cancelled_Partially' | 'Completed' | 'Failed' | 'In_transit' | 'Pending' | 'Processing' | 'Rejected' | 'Success_hold'


/** aggregate max on columns */
export interface en_statuses_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_statuses_max_fields'
}


/** aggregate min on columns */
export interface en_statuses_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_statuses_min_fields'
}


/** response of any mutation on the table "en_statuses" */
export interface en_statuses_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_statuses[]
    __typename: 'en_statuses_mutation_response'
}


/** select columns of table "en_statuses" */
export type en_statuses_select_column = 'description' | 'value'


/** update columns of table "en_statuses" */
export type en_statuses_update_column = 'description' | 'value'


/** columns and relationships of "en_trans_types" */
export interface en_trans_types {
    description: Scalars['String']
    /** An array relationship */
    payments: payment[]
    /** An aggregate relationship */
    payments_aggregate: payment_aggregate
    value: Scalars['String']
    __typename: 'en_trans_types'
}


/** aggregated selection of "en_trans_types" */
export interface en_trans_types_aggregate {
    aggregate: (en_trans_types_aggregate_fields | null)
    nodes: en_trans_types[]
    __typename: 'en_trans_types_aggregate'
}


/** aggregate fields of "en_trans_types" */
export interface en_trans_types_aggregate_fields {
    count: Scalars['Int']
    max: (en_trans_types_max_fields | null)
    min: (en_trans_types_min_fields | null)
    __typename: 'en_trans_types_aggregate_fields'
}


/** unique or primary key constraints on table "en_trans_types" */
export type en_trans_types_constraint = 'enum_trans_statuses_pkey'

export type en_trans_types_enum = 'MoneyIn' | 'MoneyOut'


/** aggregate max on columns */
export interface en_trans_types_max_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_trans_types_max_fields'
}


/** aggregate min on columns */
export interface en_trans_types_min_fields {
    description: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'en_trans_types_min_fields'
}


/** response of any mutation on the table "en_trans_types" */
export interface en_trans_types_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: en_trans_types[]
    __typename: 'en_trans_types_mutation_response'
}


/** select columns of table "en_trans_types" */
export type en_trans_types_select_column = 'description' | 'value'


/** update columns of table "en_trans_types" */
export type en_trans_types_update_column = 'description' | 'value'


/** columns and relationships of "storage.files" */
export interface files {
    /** An object relationship */
    bucket: buckets
    bucketId: Scalars['String']
    /** An array relationship */
    campaign_files: campaign_file[]
    /** An aggregate relationship */
    campaign_files_aggregate: campaign_file_aggregate
    createdAt: Scalars['timestamptz']
    etag: (Scalars['String'] | null)
    id: Scalars['uuid']
    isUploaded: (Scalars['Boolean'] | null)
    mimeType: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    /** An array relationship */
    partner_files: partner_file[]
    /** An aggregate relationship */
    partner_files_aggregate: partner_file_aggregate
    size: (Scalars['Int'] | null)
    updatedAt: Scalars['timestamptz']
    uploadedByUserId: (Scalars['uuid'] | null)
    __typename: 'files'
}


/** aggregated selection of "storage.files" */
export interface files_aggregate {
    aggregate: (files_aggregate_fields | null)
    nodes: files[]
    __typename: 'files_aggregate'
}


/** aggregate fields of "storage.files" */
export interface files_aggregate_fields {
    avg: (files_avg_fields | null)
    count: Scalars['Int']
    max: (files_max_fields | null)
    min: (files_min_fields | null)
    stddev: (files_stddev_fields | null)
    stddev_pop: (files_stddev_pop_fields | null)
    stddev_samp: (files_stddev_samp_fields | null)
    sum: (files_sum_fields | null)
    var_pop: (files_var_pop_fields | null)
    var_samp: (files_var_samp_fields | null)
    variance: (files_variance_fields | null)
    __typename: 'files_aggregate_fields'
}


/** aggregate avg on columns */
export interface files_avg_fields {
    size: (Scalars['Float'] | null)
    __typename: 'files_avg_fields'
}


/** unique or primary key constraints on table "storage.files" */
export type files_constraint = 'files_pkey'


/** aggregate max on columns */
export interface files_max_fields {
    bucketId: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    etag: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    mimeType: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    size: (Scalars['Int'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    uploadedByUserId: (Scalars['uuid'] | null)
    __typename: 'files_max_fields'
}


/** aggregate min on columns */
export interface files_min_fields {
    bucketId: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    etag: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    mimeType: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    size: (Scalars['Int'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    uploadedByUserId: (Scalars['uuid'] | null)
    __typename: 'files_min_fields'
}


/** response of any mutation on the table "storage.files" */
export interface files_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: files[]
    __typename: 'files_mutation_response'
}


/** select columns of table "storage.files" */
export type files_select_column = 'bucketId' | 'createdAt' | 'etag' | 'id' | 'isUploaded' | 'mimeType' | 'name' | 'size' | 'updatedAt' | 'uploadedByUserId'


/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export type files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns = 'isUploaded'


/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export type files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns = 'isUploaded'


/** aggregate stddev on columns */
export interface files_stddev_fields {
    size: (Scalars['Float'] | null)
    __typename: 'files_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface files_stddev_pop_fields {
    size: (Scalars['Float'] | null)
    __typename: 'files_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface files_stddev_samp_fields {
    size: (Scalars['Float'] | null)
    __typename: 'files_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface files_sum_fields {
    size: (Scalars['Int'] | null)
    __typename: 'files_sum_fields'
}


/** update columns of table "storage.files" */
export type files_update_column = 'bucketId' | 'createdAt' | 'etag' | 'id' | 'isUploaded' | 'mimeType' | 'name' | 'size' | 'updatedAt' | 'uploadedByUserId'


/** aggregate var_pop on columns */
export interface files_var_pop_fields {
    size: (Scalars['Float'] | null)
    __typename: 'files_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface files_var_samp_fields {
    size: (Scalars['Float'] | null)
    __typename: 'files_var_samp_fields'
}


/** aggregate variance on columns */
export interface files_variance_fields {
    size: (Scalars['Float'] | null)
    __typename: 'files_variance_fields'
}


/** columns and relationships of "group" */
export interface group {
    admin_id: (Scalars['uuid'] | null)
    contribution: (Scalars['numeric'] | null)
    contribution_for_all: Scalars['Boolean']
    created_at: Scalars['timestamp']
    dummy: (Scalars['String'] | null)
    dummy_2: (Scalars['String'] | null)
    /** An object relationship */
    enum_recurrency: (en_recurrencies | null)
    /** A computed field, executes function "group_balance" */
    group_balance: (Scalars['numeric'] | null)
    group_name: Scalars['String']
    id: Scalars['uuid']
    /** An array relationship */
    invitations: invitation[]
    /** An aggregate relationship */
    invitations_aggregate: invitation_aggregate
    /** An array relationship */
    members: member[]
    /** An aggregate relationship */
    members_aggregate: member_aggregate
    /** An object relationship */
    partner: (partner | null)
    /** An object relationship */
    partner_campaign: (partner_campaign | null)
    partner_campaign_id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    /** An array relationship */
    payment_reviews: payment_review[]
    /** An aggregate relationship */
    payment_reviews_aggregate: payment_review_aggregate
    /** An array relationship */
    payments: payment[]
    /** An aggregate relationship */
    payments_aggregate: payment_aggregate
    /** An array relationship */
    periods: period[]
    /** An aggregate relationship */
    periods_aggregate: period_aggregate
    recurrency: (en_recurrencies_enum | null)
    recurrency_day: (Scalars['Int'] | null)
    recurrency_for_all: Scalars['Boolean']
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    user: (users | null)
    __typename: 'group'
}


/** aggregated selection of "group" */
export interface group_aggregate {
    aggregate: (group_aggregate_fields | null)
    nodes: group[]
    __typename: 'group_aggregate'
}


/** aggregate fields of "group" */
export interface group_aggregate_fields {
    avg: (group_avg_fields | null)
    count: Scalars['Int']
    max: (group_max_fields | null)
    min: (group_min_fields | null)
    stddev: (group_stddev_fields | null)
    stddev_pop: (group_stddev_pop_fields | null)
    stddev_samp: (group_stddev_samp_fields | null)
    sum: (group_sum_fields | null)
    var_pop: (group_var_pop_fields | null)
    var_samp: (group_var_samp_fields | null)
    variance: (group_variance_fields | null)
    __typename: 'group_aggregate_fields'
}


/** aggregate avg on columns */
export interface group_avg_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'group_avg_fields'
}


/** unique or primary key constraints on table "group" */
export type group_constraint = 'group_admin_id_group_name_key' | 'group_group_name_partner_id_key' | 'group_pkey'


/** aggregate max on columns */
export interface group_max_fields {
    admin_id: (Scalars['uuid'] | null)
    contribution: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamp'] | null)
    dummy: (Scalars['String'] | null)
    dummy_2: (Scalars['String'] | null)
    group_name: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    partner_campaign_id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    recurrency_day: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'group_max_fields'
}


/** aggregate min on columns */
export interface group_min_fields {
    admin_id: (Scalars['uuid'] | null)
    contribution: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamp'] | null)
    dummy: (Scalars['String'] | null)
    dummy_2: (Scalars['String'] | null)
    group_name: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    partner_campaign_id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    recurrency_day: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'group_min_fields'
}


/** response of any mutation on the table "group" */
export interface group_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: group[]
    __typename: 'group_mutation_response'
}


/** select columns of table "group" */
export type group_select_column = 'admin_id' | 'contribution' | 'contribution_for_all' | 'created_at' | 'dummy' | 'dummy_2' | 'group_name' | 'id' | 'partner_campaign_id' | 'partner_id' | 'recurrency' | 'recurrency_day' | 'recurrency_for_all' | 'updated_at'


/** select "group_aggregate_bool_exp_bool_and_arguments_columns" columns of table "group" */
export type group_select_column_group_aggregate_bool_exp_bool_and_arguments_columns = 'contribution_for_all' | 'recurrency_for_all'


/** select "group_aggregate_bool_exp_bool_or_arguments_columns" columns of table "group" */
export type group_select_column_group_aggregate_bool_exp_bool_or_arguments_columns = 'contribution_for_all' | 'recurrency_for_all'


/** aggregate stddev on columns */
export interface group_stddev_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'group_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface group_stddev_pop_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'group_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface group_stddev_samp_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'group_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface group_sum_fields {
    contribution: (Scalars['numeric'] | null)
    recurrency_day: (Scalars['Int'] | null)
    __typename: 'group_sum_fields'
}


/** update columns of table "group" */
export type group_update_column = 'admin_id' | 'contribution' | 'contribution_for_all' | 'created_at' | 'dummy' | 'dummy_2' | 'group_name' | 'id' | 'partner_campaign_id' | 'partner_id' | 'recurrency' | 'recurrency_day' | 'recurrency_for_all' | 'updated_at'


/** aggregate var_pop on columns */
export interface group_var_pop_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'group_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface group_var_samp_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'group_var_samp_fields'
}


/** aggregate variance on columns */
export interface group_variance_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'group_variance_fields'
}


/** columns and relationships of "invitation" */
export interface invitation {
    created_at: Scalars['timestamptz']
    dummy: (Scalars['String'] | null)
    /** An object relationship */
    en_notification: en_notifications
    /** An object relationship */
    en_status: en_statuses
    /** An object relationship */
    group: group
    group_id: Scalars['uuid']
    id: Scalars['uuid']
    invite_status: en_statuses_enum
    invite_type: en_notifications_enum
    /** An array relationship */
    members: member[]
    /** An aggregate relationship */
    members_aggregate: member_aggregate
    /** An array relationship */
    notifications: notification[]
    /** An aggregate relationship */
    notifications_aggregate: notification_aggregate
    receiver_id: (Scalars['uuid'] | null)
    receiver_phone: (Scalars['String'] | null)
    sender_id: Scalars['uuid']
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    user: (users | null)
    /** An object relationship */
    userBySenderId: users
    __typename: 'invitation'
}


/** aggregated selection of "invitation" */
export interface invitation_aggregate {
    aggregate: (invitation_aggregate_fields | null)
    nodes: invitation[]
    __typename: 'invitation_aggregate'
}


/** aggregate fields of "invitation" */
export interface invitation_aggregate_fields {
    count: Scalars['Int']
    max: (invitation_max_fields | null)
    min: (invitation_min_fields | null)
    __typename: 'invitation_aggregate_fields'
}


/** unique or primary key constraints on table "invitation" */
export type invitation_constraint = 'invite_pkey'


/** aggregate max on columns */
export interface invitation_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    dummy: (Scalars['String'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    receiver_id: (Scalars['uuid'] | null)
    receiver_phone: (Scalars['String'] | null)
    sender_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'invitation_max_fields'
}


/** aggregate min on columns */
export interface invitation_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    dummy: (Scalars['String'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    receiver_id: (Scalars['uuid'] | null)
    receiver_phone: (Scalars['String'] | null)
    sender_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'invitation_min_fields'
}


/** response of any mutation on the table "invitation" */
export interface invitation_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: invitation[]
    __typename: 'invitation_mutation_response'
}


/** select columns of table "invitation" */
export type invitation_select_column = 'created_at' | 'dummy' | 'group_id' | 'id' | 'invite_status' | 'invite_type' | 'receiver_id' | 'receiver_phone' | 'sender_id' | 'updated_at'


/** update columns of table "invitation" */
export type invitation_update_column = 'created_at' | 'dummy' | 'group_id' | 'id' | 'invite_status' | 'invite_type' | 'receiver_id' | 'receiver_phone' | 'sender_id' | 'updated_at'


/** columns and relationships of "member" */
export interface member {
    contribution: Scalars['numeric']
    created_at: Scalars['timestamptz']
    /** An object relationship */
    enum_recurrency: en_recurrencies
    /** A computed field, executes function "member_expense" */
    expense: (Scalars['numeric'] | null)
    /** An object relationship */
    group: group
    group_id: Scalars['uuid']
    id: Scalars['uuid']
    /** A computed field, executes function "member_income" */
    income: (Scalars['numeric'] | null)
    /** An object relationship */
    invitation: (invitation | null)
    invitation_id: (Scalars['uuid'] | null)
    /** An array relationship */
    paymentReviewsByRequesterId: payment_review[]
    /** An aggregate relationship */
    paymentReviewsByRequesterId_aggregate: payment_review_aggregate
    /** An array relationship */
    payment_reviews: payment_review[]
    /** An aggregate relationship */
    payment_reviews_aggregate: payment_review_aggregate
    /** An array relationship */
    payments: payment[]
    /** An aggregate relationship */
    payments_aggregate: payment_aggregate
    /** An array relationship */
    periods: period[]
    /** An aggregate relationship */
    periods_aggregate: period_aggregate
    recurrency: en_recurrencies_enum
    recurrency_day: (Scalars['Int'] | null)
    reminder_days: (Scalars['String'] | null)
    reminder_id: (Scalars['uuid'] | null)
    reminder_next: (Scalars['timestamptz'] | null)
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    user: users
    user_id: Scalars['uuid']
    __typename: 'member'
}


/** aggregated selection of "member" */
export interface member_aggregate {
    aggregate: (member_aggregate_fields | null)
    nodes: member[]
    __typename: 'member_aggregate'
}


/** aggregate fields of "member" */
export interface member_aggregate_fields {
    avg: (member_avg_fields | null)
    count: Scalars['Int']
    max: (member_max_fields | null)
    min: (member_min_fields | null)
    stddev: (member_stddev_fields | null)
    stddev_pop: (member_stddev_pop_fields | null)
    stddev_samp: (member_stddev_samp_fields | null)
    sum: (member_sum_fields | null)
    var_pop: (member_var_pop_fields | null)
    var_samp: (member_var_samp_fields | null)
    variance: (member_variance_fields | null)
    __typename: 'member_aggregate_fields'
}


/** aggregate avg on columns */
export interface member_avg_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'member_avg_fields'
}


/** unique or primary key constraints on table "member" */
export type member_constraint = 'member_group_id_user_id_key' | 'member_pkey'


/** aggregate max on columns */
export interface member_max_fields {
    contribution: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamptz'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    invitation_id: (Scalars['uuid'] | null)
    recurrency_day: (Scalars['Int'] | null)
    reminder_days: (Scalars['String'] | null)
    reminder_id: (Scalars['uuid'] | null)
    reminder_next: (Scalars['timestamptz'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'member_max_fields'
}


/** aggregate min on columns */
export interface member_min_fields {
    contribution: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamptz'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    invitation_id: (Scalars['uuid'] | null)
    recurrency_day: (Scalars['Int'] | null)
    reminder_days: (Scalars['String'] | null)
    reminder_id: (Scalars['uuid'] | null)
    reminder_next: (Scalars['timestamptz'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'member_min_fields'
}


/** response of any mutation on the table "member" */
export interface member_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: member[]
    __typename: 'member_mutation_response'
}


/** select columns of table "member" */
export type member_select_column = 'contribution' | 'created_at' | 'group_id' | 'id' | 'invitation_id' | 'recurrency' | 'recurrency_day' | 'reminder_days' | 'reminder_id' | 'reminder_next' | 'updated_at' | 'user_id'


/** aggregate stddev on columns */
export interface member_stddev_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'member_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface member_stddev_pop_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'member_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface member_stddev_samp_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'member_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface member_sum_fields {
    contribution: (Scalars['numeric'] | null)
    recurrency_day: (Scalars['Int'] | null)
    __typename: 'member_sum_fields'
}


/** update columns of table "member" */
export type member_update_column = 'contribution' | 'created_at' | 'group_id' | 'id' | 'invitation_id' | 'recurrency' | 'recurrency_day' | 'reminder_days' | 'reminder_id' | 'reminder_next' | 'updated_at' | 'user_id'


/** aggregate var_pop on columns */
export interface member_var_pop_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'member_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface member_var_samp_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'member_var_samp_fields'
}


/** aggregate variance on columns */
export interface member_variance_fields {
    contribution: (Scalars['Float'] | null)
    recurrency_day: (Scalars['Float'] | null)
    __typename: 'member_variance_fields'
}


/** mutation root */
export interface mutation_root {
    /** delete single row from the table: "auth.providers" */
    deleteAuthProvider: (authProviders | null)
    /** delete single row from the table: "auth.provider_requests" */
    deleteAuthProviderRequest: (authProviderRequests | null)
    /** delete data from the table: "auth.provider_requests" */
    deleteAuthProviderRequests: (authProviderRequests_mutation_response | null)
    /** delete data from the table: "auth.providers" */
    deleteAuthProviders: (authProviders_mutation_response | null)
    /** delete single row from the table: "auth.refresh_tokens" */
    deleteAuthRefreshToken: (authRefreshTokens | null)
    /** delete single row from the table: "auth.refresh_token_types" */
    deleteAuthRefreshTokenType: (authRefreshTokenTypes | null)
    /** delete data from the table: "auth.refresh_token_types" */
    deleteAuthRefreshTokenTypes: (authRefreshTokenTypes_mutation_response | null)
    /** delete data from the table: "auth.refresh_tokens" */
    deleteAuthRefreshTokens: (authRefreshTokens_mutation_response | null)
    /** delete single row from the table: "auth.roles" */
    deleteAuthRole: (authRoles | null)
    /** delete data from the table: "auth.roles" */
    deleteAuthRoles: (authRoles_mutation_response | null)
    /** delete single row from the table: "auth.user_providers" */
    deleteAuthUserProvider: (authUserProviders | null)
    /** delete data from the table: "auth.user_providers" */
    deleteAuthUserProviders: (authUserProviders_mutation_response | null)
    /** delete single row from the table: "auth.user_roles" */
    deleteAuthUserRole: (authUserRoles | null)
    /** delete data from the table: "auth.user_roles" */
    deleteAuthUserRoles: (authUserRoles_mutation_response | null)
    /** delete single row from the table: "auth.user_security_keys" */
    deleteAuthUserSecurityKey: (authUserSecurityKeys | null)
    /** delete data from the table: "auth.user_security_keys" */
    deleteAuthUserSecurityKeys: (authUserSecurityKeys_mutation_response | null)
    /** delete single row from the table: "storage.buckets" */
    deleteBucket: (buckets | null)
    /** delete data from the table: "storage.buckets" */
    deleteBuckets: (buckets_mutation_response | null)
    /** delete single row from the table: "storage.files" */
    deleteFile: (files | null)
    /** delete data from the table: "storage.files" */
    deleteFiles: (files_mutation_response | null)
    /** delete single row from the table: "auth.users" */
    deleteUser: (users | null)
    /** delete data from the table: "auth.users" */
    deleteUsers: (users_mutation_response | null)
    /** delete data from the table: "auth.migrations" */
    delete_auth_migrations: (auth_migrations_mutation_response | null)
    /** delete single row from the table: "auth.migrations" */
    delete_auth_migrations_by_pk: (auth_migrations | null)
    /** delete data from the table: "campaign_file" */
    delete_campaign_file: (campaign_file_mutation_response | null)
    /** delete single row from the table: "campaign_file" */
    delete_campaign_file_by_pk: (campaign_file | null)
    /** delete data from the table: "en_currencies" */
    delete_en_currencies: (en_currencies_mutation_response | null)
    /** delete single row from the table: "en_currencies" */
    delete_en_currencies_by_pk: (en_currencies | null)
    /** delete data from the table: "en_notifications" */
    delete_en_notifications: (en_notifications_mutation_response | null)
    /** delete single row from the table: "en_notifications" */
    delete_en_notifications_by_pk: (en_notifications | null)
    /** delete data from the table: "en_partner_steps" */
    delete_en_partner_steps: (en_partner_steps_mutation_response | null)
    /** delete single row from the table: "en_partner_steps" */
    delete_en_partner_steps_by_pk: (en_partner_steps | null)
    /** delete data from the table: "en_payment_providers" */
    delete_en_payment_providers: (en_payment_providers_mutation_response | null)
    /** delete single row from the table: "en_payment_providers" */
    delete_en_payment_providers_by_pk: (en_payment_providers | null)
    /** delete data from the table: "en_permissions" */
    delete_en_permissions: (en_permissions_mutation_response | null)
    /** delete single row from the table: "en_permissions" */
    delete_en_permissions_by_pk: (en_permissions | null)
    /** delete data from the table: "en_recurrencies" */
    delete_en_recurrencies: (en_recurrencies_mutation_response | null)
    /** delete single row from the table: "en_recurrencies" */
    delete_en_recurrencies_by_pk: (en_recurrencies | null)
    /** delete data from the table: "en_statuses" */
    delete_en_statuses: (en_statuses_mutation_response | null)
    /** delete single row from the table: "en_statuses" */
    delete_en_statuses_by_pk: (en_statuses | null)
    /** delete data from the table: "en_trans_types" */
    delete_en_trans_types: (en_trans_types_mutation_response | null)
    /** delete single row from the table: "en_trans_types" */
    delete_en_trans_types_by_pk: (en_trans_types | null)
    /** delete data from the table: "group" */
    delete_group: (group_mutation_response | null)
    /** delete single row from the table: "group" */
    delete_group_by_pk: (group | null)
    /** delete data from the table: "invitation" */
    delete_invitation: (invitation_mutation_response | null)
    /** delete single row from the table: "invitation" */
    delete_invitation_by_pk: (invitation | null)
    /** delete data from the table: "member" */
    delete_member: (member_mutation_response | null)
    /** delete single row from the table: "member" */
    delete_member_by_pk: (member | null)
    /** delete data from the table: "notification" */
    delete_notification: (notification_mutation_response | null)
    /** delete single row from the table: "notification" */
    delete_notification_by_pk: (notification | null)
    /** delete data from the table: "notification_item" */
    delete_notification_item: (notification_item_mutation_response | null)
    /** delete single row from the table: "notification_item" */
    delete_notification_item_by_pk: (notification_item | null)
    /** delete data from the table: "partner" */
    delete_partner: (partner_mutation_response | null)
    /** delete single row from the table: "partner" */
    delete_partner_by_pk: (partner | null)
    /** delete data from the table: "partner_campaign" */
    delete_partner_campaign: (partner_campaign_mutation_response | null)
    /** delete single row from the table: "partner_campaign" */
    delete_partner_campaign_by_pk: (partner_campaign | null)
    /** delete data from the table: "partner_file" */
    delete_partner_file: (partner_file_mutation_response | null)
    /** delete single row from the table: "partner_file" */
    delete_partner_file_by_pk: (partner_file | null)
    /** delete data from the table: "partner_operator" */
    delete_partner_operator: (partner_operator_mutation_response | null)
    /** delete single row from the table: "partner_operator" */
    delete_partner_operator_by_pk: (partner_operator | null)
    /** delete data from the table: "payment" */
    delete_payment: (payment_mutation_response | null)
    /** delete single row from the table: "payment" */
    delete_payment_by_pk: (payment | null)
    /** delete data from the table: "payment_review" */
    delete_payment_review: (payment_review_mutation_response | null)
    /** delete single row from the table: "payment_review" */
    delete_payment_review_by_pk: (payment_review | null)
    /** delete data from the table: "period" */
    delete_period: (period_mutation_response | null)
    /** delete single row from the table: "period" */
    delete_period_by_pk: (period | null)
    /** delete data from the table: "scheduled_event" */
    delete_scheduled_event: (scheduled_event_mutation_response | null)
    /** delete single row from the table: "scheduled_event" */
    delete_scheduled_event_by_pk: (scheduled_event | null)
    /** delete data from the table: "state_cache" */
    delete_state_cache: (state_cache_mutation_response | null)
    /** delete single row from the table: "state_cache" */
    delete_state_cache_by_pk: (state_cache | null)
    /** delete data from the table: "storage.schema_migrations" */
    delete_storage_schema_migrations: (storage_schema_migrations_mutation_response | null)
    /** delete single row from the table: "storage.schema_migrations" */
    delete_storage_schema_migrations_by_pk: (storage_schema_migrations | null)
    /** delete data from the table: "user_profile" */
    delete_user_profile: (user_profile_mutation_response | null)
    /** delete single row from the table: "user_profile" */
    delete_user_profile_by_pk: (user_profile | null)
    fix_period_completions: (FixPeriodCompletionsOutput | null)
    group_reports: (GroupReportsOutput | null)
    /** initialise e2e tests */
    initialiseE2E: (InitialiseE2EOutput | null)
    /** insert a single row into the table: "auth.providers" */
    insertAuthProvider: (authProviders | null)
    /** insert a single row into the table: "auth.provider_requests" */
    insertAuthProviderRequest: (authProviderRequests | null)
    /** insert data into the table: "auth.provider_requests" */
    insertAuthProviderRequests: (authProviderRequests_mutation_response | null)
    /** insert data into the table: "auth.providers" */
    insertAuthProviders: (authProviders_mutation_response | null)
    /** insert a single row into the table: "auth.refresh_tokens" */
    insertAuthRefreshToken: (authRefreshTokens | null)
    /** insert a single row into the table: "auth.refresh_token_types" */
    insertAuthRefreshTokenType: (authRefreshTokenTypes | null)
    /** insert data into the table: "auth.refresh_token_types" */
    insertAuthRefreshTokenTypes: (authRefreshTokenTypes_mutation_response | null)
    /** insert data into the table: "auth.refresh_tokens" */
    insertAuthRefreshTokens: (authRefreshTokens_mutation_response | null)
    /** insert a single row into the table: "auth.roles" */
    insertAuthRole: (authRoles | null)
    /** insert data into the table: "auth.roles" */
    insertAuthRoles: (authRoles_mutation_response | null)
    /** insert a single row into the table: "auth.user_providers" */
    insertAuthUserProvider: (authUserProviders | null)
    /** insert data into the table: "auth.user_providers" */
    insertAuthUserProviders: (authUserProviders_mutation_response | null)
    /** insert a single row into the table: "auth.user_roles" */
    insertAuthUserRole: (authUserRoles | null)
    /** insert data into the table: "auth.user_roles" */
    insertAuthUserRoles: (authUserRoles_mutation_response | null)
    /** insert a single row into the table: "auth.user_security_keys" */
    insertAuthUserSecurityKey: (authUserSecurityKeys | null)
    /** insert data into the table: "auth.user_security_keys" */
    insertAuthUserSecurityKeys: (authUserSecurityKeys_mutation_response | null)
    /** insert a single row into the table: "storage.buckets" */
    insertBucket: (buckets | null)
    /** insert data into the table: "storage.buckets" */
    insertBuckets: (buckets_mutation_response | null)
    /** insert a single row into the table: "storage.files" */
    insertFile: (files | null)
    /** insert data into the table: "storage.files" */
    insertFiles: (files_mutation_response | null)
    /** insert a single row into the table: "auth.users" */
    insertUser: (users | null)
    /** insert data into the table: "auth.users" */
    insertUsers: (users_mutation_response | null)
    /** insert data into the table: "auth.migrations" */
    insert_auth_migrations: (auth_migrations_mutation_response | null)
    /** insert a single row into the table: "auth.migrations" */
    insert_auth_migrations_one: (auth_migrations | null)
    /** insert data into the table: "campaign_file" */
    insert_campaign_file: (campaign_file_mutation_response | null)
    /** insert a single row into the table: "campaign_file" */
    insert_campaign_file_one: (campaign_file | null)
    /** insert data into the table: "en_currencies" */
    insert_en_currencies: (en_currencies_mutation_response | null)
    /** insert a single row into the table: "en_currencies" */
    insert_en_currencies_one: (en_currencies | null)
    /** insert data into the table: "en_notifications" */
    insert_en_notifications: (en_notifications_mutation_response | null)
    /** insert a single row into the table: "en_notifications" */
    insert_en_notifications_one: (en_notifications | null)
    /** insert data into the table: "en_partner_steps" */
    insert_en_partner_steps: (en_partner_steps_mutation_response | null)
    /** insert a single row into the table: "en_partner_steps" */
    insert_en_partner_steps_one: (en_partner_steps | null)
    /** insert data into the table: "en_payment_providers" */
    insert_en_payment_providers: (en_payment_providers_mutation_response | null)
    /** insert a single row into the table: "en_payment_providers" */
    insert_en_payment_providers_one: (en_payment_providers | null)
    /** insert data into the table: "en_permissions" */
    insert_en_permissions: (en_permissions_mutation_response | null)
    /** insert a single row into the table: "en_permissions" */
    insert_en_permissions_one: (en_permissions | null)
    /** insert data into the table: "en_recurrencies" */
    insert_en_recurrencies: (en_recurrencies_mutation_response | null)
    /** insert a single row into the table: "en_recurrencies" */
    insert_en_recurrencies_one: (en_recurrencies | null)
    /** insert data into the table: "en_statuses" */
    insert_en_statuses: (en_statuses_mutation_response | null)
    /** insert a single row into the table: "en_statuses" */
    insert_en_statuses_one: (en_statuses | null)
    /** insert data into the table: "en_trans_types" */
    insert_en_trans_types: (en_trans_types_mutation_response | null)
    /** insert a single row into the table: "en_trans_types" */
    insert_en_trans_types_one: (en_trans_types | null)
    /** insert data into the table: "group" */
    insert_group: (group_mutation_response | null)
    /** insert a single row into the table: "group" */
    insert_group_one: (group | null)
    /** insert data into the table: "invitation" */
    insert_invitation: (invitation_mutation_response | null)
    /** insert a single row into the table: "invitation" */
    insert_invitation_one: (invitation | null)
    /** insert data into the table: "member" */
    insert_member: (member_mutation_response | null)
    /** insert a single row into the table: "member" */
    insert_member_one: (member | null)
    /** insert data into the table: "notification" */
    insert_notification: (notification_mutation_response | null)
    /** insert data into the table: "notification_item" */
    insert_notification_item: (notification_item_mutation_response | null)
    /** insert a single row into the table: "notification_item" */
    insert_notification_item_one: (notification_item | null)
    /** insert a single row into the table: "notification" */
    insert_notification_one: (notification | null)
    /** insert data into the table: "partner" */
    insert_partner: (partner_mutation_response | null)
    /** insert data into the table: "partner_campaign" */
    insert_partner_campaign: (partner_campaign_mutation_response | null)
    /** insert a single row into the table: "partner_campaign" */
    insert_partner_campaign_one: (partner_campaign | null)
    /** insert data into the table: "partner_file" */
    insert_partner_file: (partner_file_mutation_response | null)
    /** insert a single row into the table: "partner_file" */
    insert_partner_file_one: (partner_file | null)
    /** insert a single row into the table: "partner" */
    insert_partner_one: (partner | null)
    /** insert data into the table: "partner_operator" */
    insert_partner_operator: (partner_operator_mutation_response | null)
    /** insert a single row into the table: "partner_operator" */
    insert_partner_operator_one: (partner_operator | null)
    /** insert data into the table: "payment" */
    insert_payment: (payment_mutation_response | null)
    /** insert a single row into the table: "payment" */
    insert_payment_one: (payment | null)
    /** insert data into the table: "payment_review" */
    insert_payment_review: (payment_review_mutation_response | null)
    /** insert a single row into the table: "payment_review" */
    insert_payment_review_one: (payment_review | null)
    /** insert data into the table: "period" */
    insert_period: (period_mutation_response | null)
    /** insert a single row into the table: "period" */
    insert_period_one: (period | null)
    /** insert data into the table: "scheduled_event" */
    insert_scheduled_event: (scheduled_event_mutation_response | null)
    /** insert a single row into the table: "scheduled_event" */
    insert_scheduled_event_one: (scheduled_event | null)
    /** insert data into the table: "state_cache" */
    insert_state_cache: (state_cache_mutation_response | null)
    /** insert a single row into the table: "state_cache" */
    insert_state_cache_one: (state_cache | null)
    /** insert data into the table: "storage.schema_migrations" */
    insert_storage_schema_migrations: (storage_schema_migrations_mutation_response | null)
    /** insert a single row into the table: "storage.schema_migrations" */
    insert_storage_schema_migrations_one: (storage_schema_migrations | null)
    /** insert data into the table: "user_profile" */
    insert_user_profile: (user_profile_mutation_response | null)
    /** insert a single row into the table: "user_profile" */
    insert_user_profile_one: (user_profile | null)
    /** update single row of the table: "auth.providers" */
    updateAuthProvider: (authProviders | null)
    /** update single row of the table: "auth.provider_requests" */
    updateAuthProviderRequest: (authProviderRequests | null)
    /** update data of the table: "auth.provider_requests" */
    updateAuthProviderRequests: (authProviderRequests_mutation_response | null)
    /** update data of the table: "auth.providers" */
    updateAuthProviders: (authProviders_mutation_response | null)
    /** update single row of the table: "auth.refresh_tokens" */
    updateAuthRefreshToken: (authRefreshTokens | null)
    /** update single row of the table: "auth.refresh_token_types" */
    updateAuthRefreshTokenType: (authRefreshTokenTypes | null)
    /** update data of the table: "auth.refresh_token_types" */
    updateAuthRefreshTokenTypes: (authRefreshTokenTypes_mutation_response | null)
    /** update data of the table: "auth.refresh_tokens" */
    updateAuthRefreshTokens: (authRefreshTokens_mutation_response | null)
    /** update single row of the table: "auth.roles" */
    updateAuthRole: (authRoles | null)
    /** update data of the table: "auth.roles" */
    updateAuthRoles: (authRoles_mutation_response | null)
    /** update single row of the table: "auth.user_providers" */
    updateAuthUserProvider: (authUserProviders | null)
    /** update data of the table: "auth.user_providers" */
    updateAuthUserProviders: (authUserProviders_mutation_response | null)
    /** update single row of the table: "auth.user_roles" */
    updateAuthUserRole: (authUserRoles | null)
    /** update data of the table: "auth.user_roles" */
    updateAuthUserRoles: (authUserRoles_mutation_response | null)
    /** update single row of the table: "auth.user_security_keys" */
    updateAuthUserSecurityKey: (authUserSecurityKeys | null)
    /** update data of the table: "auth.user_security_keys" */
    updateAuthUserSecurityKeys: (authUserSecurityKeys_mutation_response | null)
    /** update single row of the table: "storage.buckets" */
    updateBucket: (buckets | null)
    /** update data of the table: "storage.buckets" */
    updateBuckets: (buckets_mutation_response | null)
    /** update single row of the table: "storage.files" */
    updateFile: (files | null)
    /** update data of the table: "storage.files" */
    updateFiles: (files_mutation_response | null)
    /** update single row of the table: "auth.users" */
    updateUser: (users | null)
    /** update data of the table: "auth.users" */
    updateUsers: (users_mutation_response | null)
    /** update multiples rows of table: "auth.provider_requests" */
    update_authProviderRequests_many: ((authProviderRequests_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.providers" */
    update_authProviders_many: ((authProviders_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.refresh_token_types" */
    update_authRefreshTokenTypes_many: ((authRefreshTokenTypes_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.refresh_tokens" */
    update_authRefreshTokens_many: ((authRefreshTokens_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.roles" */
    update_authRoles_many: ((authRoles_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.user_providers" */
    update_authUserProviders_many: ((authUserProviders_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.user_roles" */
    update_authUserRoles_many: ((authUserRoles_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.user_security_keys" */
    update_authUserSecurityKeys_many: ((authUserSecurityKeys_mutation_response | null)[] | null)
    /** update data of the table: "auth.migrations" */
    update_auth_migrations: (auth_migrations_mutation_response | null)
    /** update single row of the table: "auth.migrations" */
    update_auth_migrations_by_pk: (auth_migrations | null)
    /** update multiples rows of table: "auth.migrations" */
    update_auth_migrations_many: ((auth_migrations_mutation_response | null)[] | null)
    /** update multiples rows of table: "storage.buckets" */
    update_buckets_many: ((buckets_mutation_response | null)[] | null)
    /** update data of the table: "campaign_file" */
    update_campaign_file: (campaign_file_mutation_response | null)
    /** update single row of the table: "campaign_file" */
    update_campaign_file_by_pk: (campaign_file | null)
    /** update multiples rows of table: "campaign_file" */
    update_campaign_file_many: ((campaign_file_mutation_response | null)[] | null)
    /** update data of the table: "en_currencies" */
    update_en_currencies: (en_currencies_mutation_response | null)
    /** update single row of the table: "en_currencies" */
    update_en_currencies_by_pk: (en_currencies | null)
    /** update multiples rows of table: "en_currencies" */
    update_en_currencies_many: ((en_currencies_mutation_response | null)[] | null)
    /** update data of the table: "en_notifications" */
    update_en_notifications: (en_notifications_mutation_response | null)
    /** update single row of the table: "en_notifications" */
    update_en_notifications_by_pk: (en_notifications | null)
    /** update multiples rows of table: "en_notifications" */
    update_en_notifications_many: ((en_notifications_mutation_response | null)[] | null)
    /** update data of the table: "en_partner_steps" */
    update_en_partner_steps: (en_partner_steps_mutation_response | null)
    /** update single row of the table: "en_partner_steps" */
    update_en_partner_steps_by_pk: (en_partner_steps | null)
    /** update multiples rows of table: "en_partner_steps" */
    update_en_partner_steps_many: ((en_partner_steps_mutation_response | null)[] | null)
    /** update data of the table: "en_payment_providers" */
    update_en_payment_providers: (en_payment_providers_mutation_response | null)
    /** update single row of the table: "en_payment_providers" */
    update_en_payment_providers_by_pk: (en_payment_providers | null)
    /** update multiples rows of table: "en_payment_providers" */
    update_en_payment_providers_many: ((en_payment_providers_mutation_response | null)[] | null)
    /** update data of the table: "en_permissions" */
    update_en_permissions: (en_permissions_mutation_response | null)
    /** update single row of the table: "en_permissions" */
    update_en_permissions_by_pk: (en_permissions | null)
    /** update multiples rows of table: "en_permissions" */
    update_en_permissions_many: ((en_permissions_mutation_response | null)[] | null)
    /** update data of the table: "en_recurrencies" */
    update_en_recurrencies: (en_recurrencies_mutation_response | null)
    /** update single row of the table: "en_recurrencies" */
    update_en_recurrencies_by_pk: (en_recurrencies | null)
    /** update multiples rows of table: "en_recurrencies" */
    update_en_recurrencies_many: ((en_recurrencies_mutation_response | null)[] | null)
    /** update data of the table: "en_statuses" */
    update_en_statuses: (en_statuses_mutation_response | null)
    /** update single row of the table: "en_statuses" */
    update_en_statuses_by_pk: (en_statuses | null)
    /** update multiples rows of table: "en_statuses" */
    update_en_statuses_many: ((en_statuses_mutation_response | null)[] | null)
    /** update data of the table: "en_trans_types" */
    update_en_trans_types: (en_trans_types_mutation_response | null)
    /** update single row of the table: "en_trans_types" */
    update_en_trans_types_by_pk: (en_trans_types | null)
    /** update multiples rows of table: "en_trans_types" */
    update_en_trans_types_many: ((en_trans_types_mutation_response | null)[] | null)
    /** update multiples rows of table: "storage.files" */
    update_files_many: ((files_mutation_response | null)[] | null)
    /** update data of the table: "group" */
    update_group: (group_mutation_response | null)
    /** update single row of the table: "group" */
    update_group_by_pk: (group | null)
    /** update multiples rows of table: "group" */
    update_group_many: ((group_mutation_response | null)[] | null)
    /** update data of the table: "invitation" */
    update_invitation: (invitation_mutation_response | null)
    /** update single row of the table: "invitation" */
    update_invitation_by_pk: (invitation | null)
    /** update multiples rows of table: "invitation" */
    update_invitation_many: ((invitation_mutation_response | null)[] | null)
    /** update data of the table: "member" */
    update_member: (member_mutation_response | null)
    /** update single row of the table: "member" */
    update_member_by_pk: (member | null)
    /** update multiples rows of table: "member" */
    update_member_many: ((member_mutation_response | null)[] | null)
    /** update data of the table: "notification" */
    update_notification: (notification_mutation_response | null)
    /** update single row of the table: "notification" */
    update_notification_by_pk: (notification | null)
    /** update data of the table: "notification_item" */
    update_notification_item: (notification_item_mutation_response | null)
    /** update single row of the table: "notification_item" */
    update_notification_item_by_pk: (notification_item | null)
    /** update multiples rows of table: "notification_item" */
    update_notification_item_many: ((notification_item_mutation_response | null)[] | null)
    /** update multiples rows of table: "notification" */
    update_notification_many: ((notification_mutation_response | null)[] | null)
    /** update data of the table: "partner" */
    update_partner: (partner_mutation_response | null)
    /** update single row of the table: "partner" */
    update_partner_by_pk: (partner | null)
    /** update data of the table: "partner_campaign" */
    update_partner_campaign: (partner_campaign_mutation_response | null)
    /** update single row of the table: "partner_campaign" */
    update_partner_campaign_by_pk: (partner_campaign | null)
    /** update multiples rows of table: "partner_campaign" */
    update_partner_campaign_many: ((partner_campaign_mutation_response | null)[] | null)
    /** update data of the table: "partner_file" */
    update_partner_file: (partner_file_mutation_response | null)
    /** update single row of the table: "partner_file" */
    update_partner_file_by_pk: (partner_file | null)
    /** update multiples rows of table: "partner_file" */
    update_partner_file_many: ((partner_file_mutation_response | null)[] | null)
    /** update multiples rows of table: "partner" */
    update_partner_many: ((partner_mutation_response | null)[] | null)
    /** update data of the table: "partner_operator" */
    update_partner_operator: (partner_operator_mutation_response | null)
    /** update single row of the table: "partner_operator" */
    update_partner_operator_by_pk: (partner_operator | null)
    /** update multiples rows of table: "partner_operator" */
    update_partner_operator_many: ((partner_operator_mutation_response | null)[] | null)
    /** update data of the table: "payment" */
    update_payment: (payment_mutation_response | null)
    /** update single row of the table: "payment" */
    update_payment_by_pk: (payment | null)
    /** update multiples rows of table: "payment" */
    update_payment_many: ((payment_mutation_response | null)[] | null)
    /** update data of the table: "payment_review" */
    update_payment_review: (payment_review_mutation_response | null)
    /** update single row of the table: "payment_review" */
    update_payment_review_by_pk: (payment_review | null)
    /** update multiples rows of table: "payment_review" */
    update_payment_review_many: ((payment_review_mutation_response | null)[] | null)
    /** update data of the table: "period" */
    update_period: (period_mutation_response | null)
    /** update single row of the table: "period" */
    update_period_by_pk: (period | null)
    /** update multiples rows of table: "period" */
    update_period_many: ((period_mutation_response | null)[] | null)
    /** update data of the table: "scheduled_event" */
    update_scheduled_event: (scheduled_event_mutation_response | null)
    /** update single row of the table: "scheduled_event" */
    update_scheduled_event_by_pk: (scheduled_event | null)
    /** update multiples rows of table: "scheduled_event" */
    update_scheduled_event_many: ((scheduled_event_mutation_response | null)[] | null)
    /** update data of the table: "state_cache" */
    update_state_cache: (state_cache_mutation_response | null)
    /** update single row of the table: "state_cache" */
    update_state_cache_by_pk: (state_cache | null)
    /** update multiples rows of table: "state_cache" */
    update_state_cache_many: ((state_cache_mutation_response | null)[] | null)
    /** update data of the table: "storage.schema_migrations" */
    update_storage_schema_migrations: (storage_schema_migrations_mutation_response | null)
    /** update single row of the table: "storage.schema_migrations" */
    update_storage_schema_migrations_by_pk: (storage_schema_migrations | null)
    /** update multiples rows of table: "storage.schema_migrations" */
    update_storage_schema_migrations_many: ((storage_schema_migrations_mutation_response | null)[] | null)
    /** update data of the table: "user_profile" */
    update_user_profile: (user_profile_mutation_response | null)
    /** update single row of the table: "user_profile" */
    update_user_profile_by_pk: (user_profile | null)
    /** update multiples rows of table: "user_profile" */
    update_user_profile_many: ((user_profile_mutation_response | null)[] | null)
    /** update multiples rows of table: "auth.users" */
    update_users_many: ((users_mutation_response | null)[] | null)
    __typename: 'mutation_root'
}


/** columns and relationships of "notification" */
export interface notification {
    created_at: Scalars['timestamptz']
    data: (Scalars['json'] | null)
    /** An object relationship */
    en_notification: en_notifications
    /** An object relationship */
    en_status: (en_statuses | null)
    id: Scalars['uuid']
    /** An object relationship */
    invitation: (invitation | null)
    invitation_id: (Scalars['uuid'] | null)
    message: Scalars['String']
    notifiable: (Scalars['Boolean'] | null)
    /** An array relationship */
    notification_items: notification_item[]
    /** An aggregate relationship */
    notification_items_aggregate: notification_item_aggregate
    payment_review_id: (Scalars['uuid'] | null)
    /** An object relationship */
    payment_reviews: (payment_review | null)
    status: (en_statuses_enum | null)
    title: (Scalars['String'] | null)
    type: en_notifications_enum
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    user: (users | null)
    user_id: (Scalars['uuid'] | null)
    viewed: (Scalars['Boolean'] | null)
    __typename: 'notification'
}


/** aggregated selection of "notification" */
export interface notification_aggregate {
    aggregate: (notification_aggregate_fields | null)
    nodes: notification[]
    __typename: 'notification_aggregate'
}


/** aggregate fields of "notification" */
export interface notification_aggregate_fields {
    count: Scalars['Int']
    max: (notification_max_fields | null)
    min: (notification_min_fields | null)
    __typename: 'notification_aggregate_fields'
}


/** unique or primary key constraints on table "notification" */
export type notification_constraint = 'notification_pkey'


/** columns and relationships of "notification_item" */
export interface notification_item {
    created_at: Scalars['timestamptz']
    id: Scalars['uuid']
    /** An object relationship */
    notification: notification
    notification_id: Scalars['uuid']
    notification_message: (Scalars['String'] | null)
    notification_title: (Scalars['String'] | null)
    /** An object relationship */
    period: (period | null)
    period_id: (Scalars['uuid'] | null)
    seen: (Scalars['Boolean'] | null)
    updated_at: Scalars['timestamptz']
    __typename: 'notification_item'
}


/** aggregated selection of "notification_item" */
export interface notification_item_aggregate {
    aggregate: (notification_item_aggregate_fields | null)
    nodes: notification_item[]
    __typename: 'notification_item_aggregate'
}


/** aggregate fields of "notification_item" */
export interface notification_item_aggregate_fields {
    count: Scalars['Int']
    max: (notification_item_max_fields | null)
    min: (notification_item_min_fields | null)
    __typename: 'notification_item_aggregate_fields'
}


/** unique or primary key constraints on table "notification_item" */
export type notification_item_constraint = 'notification_item_pkey'


/** aggregate max on columns */
export interface notification_item_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    notification_id: (Scalars['uuid'] | null)
    notification_message: (Scalars['String'] | null)
    notification_title: (Scalars['String'] | null)
    period_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'notification_item_max_fields'
}


/** aggregate min on columns */
export interface notification_item_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    notification_id: (Scalars['uuid'] | null)
    notification_message: (Scalars['String'] | null)
    notification_title: (Scalars['String'] | null)
    period_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'notification_item_min_fields'
}


/** response of any mutation on the table "notification_item" */
export interface notification_item_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: notification_item[]
    __typename: 'notification_item_mutation_response'
}


/** select columns of table "notification_item" */
export type notification_item_select_column = 'created_at' | 'id' | 'notification_id' | 'notification_message' | 'notification_title' | 'period_id' | 'seen' | 'updated_at'


/** select "notification_item_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notification_item" */
export type notification_item_select_column_notification_item_aggregate_bool_exp_bool_and_arguments_columns = 'seen'


/** select "notification_item_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notification_item" */
export type notification_item_select_column_notification_item_aggregate_bool_exp_bool_or_arguments_columns = 'seen'


/** update columns of table "notification_item" */
export type notification_item_update_column = 'created_at' | 'id' | 'notification_id' | 'notification_message' | 'notification_title' | 'period_id' | 'seen' | 'updated_at'


/** aggregate max on columns */
export interface notification_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    invitation_id: (Scalars['uuid'] | null)
    message: (Scalars['String'] | null)
    payment_review_id: (Scalars['uuid'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'notification_max_fields'
}


/** aggregate min on columns */
export interface notification_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    invitation_id: (Scalars['uuid'] | null)
    message: (Scalars['String'] | null)
    payment_review_id: (Scalars['uuid'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'notification_min_fields'
}


/** response of any mutation on the table "notification" */
export interface notification_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: notification[]
    __typename: 'notification_mutation_response'
}


/** select columns of table "notification" */
export type notification_select_column = 'created_at' | 'data' | 'id' | 'invitation_id' | 'message' | 'notifiable' | 'payment_review_id' | 'status' | 'title' | 'type' | 'updated_at' | 'user_id' | 'viewed'


/** select "notification_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notification" */
export type notification_select_column_notification_aggregate_bool_exp_bool_and_arguments_columns = 'notifiable' | 'viewed'


/** select "notification_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notification" */
export type notification_select_column_notification_aggregate_bool_exp_bool_or_arguments_columns = 'notifiable' | 'viewed'


/** update columns of table "notification" */
export type notification_update_column = 'created_at' | 'data' | 'id' | 'invitation_id' | 'message' | 'notifiable' | 'payment_review_id' | 'status' | 'title' | 'type' | 'updated_at' | 'user_id' | 'viewed'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "partner" */
export interface partner {
    /** An array relationship */
    campaign_files: campaign_file[]
    /** An aggregate relationship */
    campaign_files_aggregate: campaign_file_aggregate
    created_at: Scalars['timestamptz']
    /** An object relationship */
    en_partner_step: (en_partner_steps | null)
    /** An array relationship */
    groups: group[]
    /** An aggregate relationship */
    groups_aggregate: group_aggregate
    id: Scalars['uuid']
    partner_address: (Scalars['String'] | null)
    /** An array relationship */
    partner_campaigns: partner_campaign[]
    /** An aggregate relationship */
    partner_campaigns_aggregate: partner_campaign_aggregate
    partner_description: (Scalars['String'] | null)
    partner_email: (Scalars['String'] | null)
    /** An array relationship */
    partner_files: partner_file[]
    /** An aggregate relationship */
    partner_files_aggregate: partner_file_aggregate
    partner_name: Scalars['String']
    /** An array relationship */
    partner_operators: partner_operator[]
    /** An aggregate relationship */
    partner_operators_aggregate: partner_operator_aggregate
    partner_phone: (Scalars['String'] | null)
    partner_step: (en_partner_steps_enum | null)
    updated_at: Scalars['timestamptz']
    __typename: 'partner'
}


/** aggregated selection of "partner" */
export interface partner_aggregate {
    aggregate: (partner_aggregate_fields | null)
    nodes: partner[]
    __typename: 'partner_aggregate'
}


/** aggregate fields of "partner" */
export interface partner_aggregate_fields {
    count: Scalars['Int']
    max: (partner_max_fields | null)
    min: (partner_min_fields | null)
    __typename: 'partner_aggregate_fields'
}


/** columns and relationships of "partner_campaign" */
export interface partner_campaign {
    active: (Scalars['Boolean'] | null)
    campaign_code: (Scalars['String'] | null)
    campaign_description: Scalars['String']
    campaign_ending_date: (Scalars['timestamptz'] | null)
    /** An array relationship */
    campaign_files: campaign_file[]
    /** An aggregate relationship */
    campaign_files_aggregate: campaign_file_aggregate
    campaign_starting_date: Scalars['timestamptz']
    campaign_title: Scalars['String']
    contribution_amount: Scalars['numeric']
    created_at: Scalars['timestamptz']
    /** An array relationship */
    groups: group[]
    /** An aggregate relationship */
    groups_aggregate: group_aggregate
    id: Scalars['uuid']
    /** An object relationship */
    partner: partner
    partner_id: Scalars['uuid']
    updated_at: Scalars['timestamptz']
    __typename: 'partner_campaign'
}


/** aggregated selection of "partner_campaign" */
export interface partner_campaign_aggregate {
    aggregate: (partner_campaign_aggregate_fields | null)
    nodes: partner_campaign[]
    __typename: 'partner_campaign_aggregate'
}


/** aggregate fields of "partner_campaign" */
export interface partner_campaign_aggregate_fields {
    avg: (partner_campaign_avg_fields | null)
    count: Scalars['Int']
    max: (partner_campaign_max_fields | null)
    min: (partner_campaign_min_fields | null)
    stddev: (partner_campaign_stddev_fields | null)
    stddev_pop: (partner_campaign_stddev_pop_fields | null)
    stddev_samp: (partner_campaign_stddev_samp_fields | null)
    sum: (partner_campaign_sum_fields | null)
    var_pop: (partner_campaign_var_pop_fields | null)
    var_samp: (partner_campaign_var_samp_fields | null)
    variance: (partner_campaign_variance_fields | null)
    __typename: 'partner_campaign_aggregate_fields'
}


/** aggregate avg on columns */
export interface partner_campaign_avg_fields {
    contribution_amount: (Scalars['Float'] | null)
    __typename: 'partner_campaign_avg_fields'
}


/** unique or primary key constraints on table "partner_campaign" */
export type partner_campaign_constraint = 'partner_campaign_partner_id_campaign_title_key' | 'partner_campaign_pkey'


/** aggregate max on columns */
export interface partner_campaign_max_fields {
    campaign_code: (Scalars['String'] | null)
    campaign_description: (Scalars['String'] | null)
    campaign_ending_date: (Scalars['timestamptz'] | null)
    campaign_starting_date: (Scalars['timestamptz'] | null)
    campaign_title: (Scalars['String'] | null)
    contribution_amount: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'partner_campaign_max_fields'
}


/** aggregate min on columns */
export interface partner_campaign_min_fields {
    campaign_code: (Scalars['String'] | null)
    campaign_description: (Scalars['String'] | null)
    campaign_ending_date: (Scalars['timestamptz'] | null)
    campaign_starting_date: (Scalars['timestamptz'] | null)
    campaign_title: (Scalars['String'] | null)
    contribution_amount: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'partner_campaign_min_fields'
}


/** response of any mutation on the table "partner_campaign" */
export interface partner_campaign_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: partner_campaign[]
    __typename: 'partner_campaign_mutation_response'
}


/** select columns of table "partner_campaign" */
export type partner_campaign_select_column = 'active' | 'campaign_code' | 'campaign_description' | 'campaign_ending_date' | 'campaign_starting_date' | 'campaign_title' | 'contribution_amount' | 'created_at' | 'id' | 'partner_id' | 'updated_at'


/** select "partner_campaign_aggregate_bool_exp_bool_and_arguments_columns" columns of table "partner_campaign" */
export type partner_campaign_select_column_partner_campaign_aggregate_bool_exp_bool_and_arguments_columns = 'active'


/** select "partner_campaign_aggregate_bool_exp_bool_or_arguments_columns" columns of table "partner_campaign" */
export type partner_campaign_select_column_partner_campaign_aggregate_bool_exp_bool_or_arguments_columns = 'active'


/** aggregate stddev on columns */
export interface partner_campaign_stddev_fields {
    contribution_amount: (Scalars['Float'] | null)
    __typename: 'partner_campaign_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface partner_campaign_stddev_pop_fields {
    contribution_amount: (Scalars['Float'] | null)
    __typename: 'partner_campaign_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface partner_campaign_stddev_samp_fields {
    contribution_amount: (Scalars['Float'] | null)
    __typename: 'partner_campaign_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface partner_campaign_sum_fields {
    contribution_amount: (Scalars['numeric'] | null)
    __typename: 'partner_campaign_sum_fields'
}


/** update columns of table "partner_campaign" */
export type partner_campaign_update_column = 'active' | 'campaign_code' | 'campaign_description' | 'campaign_ending_date' | 'campaign_starting_date' | 'campaign_title' | 'contribution_amount' | 'created_at' | 'id' | 'partner_id' | 'updated_at'


/** aggregate var_pop on columns */
export interface partner_campaign_var_pop_fields {
    contribution_amount: (Scalars['Float'] | null)
    __typename: 'partner_campaign_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface partner_campaign_var_samp_fields {
    contribution_amount: (Scalars['Float'] | null)
    __typename: 'partner_campaign_var_samp_fields'
}


/** aggregate variance on columns */
export interface partner_campaign_variance_fields {
    contribution_amount: (Scalars['Float'] | null)
    __typename: 'partner_campaign_variance_fields'
}


/** unique or primary key constraints on table "partner" */
export type partner_constraint = 'partner_partner_name_key' | 'partner_pkey'


/** columns and relationships of "partner_file" */
export interface partner_file {
    created_at: Scalars['timestamptz']
    /** An object relationship */
    file: files
    file_id: Scalars['uuid']
    id: Scalars['uuid']
    /** An object relationship */
    partner: partner
    partner_id: Scalars['uuid']
    updated_at: Scalars['timestamptz']
    __typename: 'partner_file'
}


/** aggregated selection of "partner_file" */
export interface partner_file_aggregate {
    aggregate: (partner_file_aggregate_fields | null)
    nodes: partner_file[]
    __typename: 'partner_file_aggregate'
}


/** aggregate fields of "partner_file" */
export interface partner_file_aggregate_fields {
    count: Scalars['Int']
    max: (partner_file_max_fields | null)
    min: (partner_file_min_fields | null)
    __typename: 'partner_file_aggregate_fields'
}


/** unique or primary key constraints on table "partner_file" */
export type partner_file_constraint = 'partner_file_pkey'


/** aggregate max on columns */
export interface partner_file_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    file_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'partner_file_max_fields'
}


/** aggregate min on columns */
export interface partner_file_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    file_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    partner_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'partner_file_min_fields'
}


/** response of any mutation on the table "partner_file" */
export interface partner_file_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: partner_file[]
    __typename: 'partner_file_mutation_response'
}


/** select columns of table "partner_file" */
export type partner_file_select_column = 'created_at' | 'file_id' | 'id' | 'partner_id' | 'updated_at'


/** update columns of table "partner_file" */
export type partner_file_update_column = 'created_at' | 'file_id' | 'id' | 'partner_id' | 'updated_at'


/** aggregate max on columns */
export interface partner_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    partner_address: (Scalars['String'] | null)
    partner_description: (Scalars['String'] | null)
    partner_email: (Scalars['String'] | null)
    partner_name: (Scalars['String'] | null)
    partner_phone: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'partner_max_fields'
}


/** aggregate min on columns */
export interface partner_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    partner_address: (Scalars['String'] | null)
    partner_description: (Scalars['String'] | null)
    partner_email: (Scalars['String'] | null)
    partner_name: (Scalars['String'] | null)
    partner_phone: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'partner_min_fields'
}


/** response of any mutation on the table "partner" */
export interface partner_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: partner[]
    __typename: 'partner_mutation_response'
}


/** columns and relationships of "partner_operator" */
export interface partner_operator {
    created_at: (Scalars['timestamptz'] | null)
    id: Scalars['uuid']
    /** An object relationship */
    partner: partner
    partnerid: Scalars['uuid']
    updated_at: (Scalars['timestamptz'] | null)
    /** An object relationship */
    user: users
    userid: Scalars['uuid']
    __typename: 'partner_operator'
}


/** aggregated selection of "partner_operator" */
export interface partner_operator_aggregate {
    aggregate: (partner_operator_aggregate_fields | null)
    nodes: partner_operator[]
    __typename: 'partner_operator_aggregate'
}


/** aggregate fields of "partner_operator" */
export interface partner_operator_aggregate_fields {
    count: Scalars['Int']
    max: (partner_operator_max_fields | null)
    min: (partner_operator_min_fields | null)
    __typename: 'partner_operator_aggregate_fields'
}


/** unique or primary key constraints on table "partner_operator" */
export type partner_operator_constraint = 'partner_operator_partnerid_userid_key' | 'partner_operator_pkey'


/** aggregate max on columns */
export interface partner_operator_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    partnerid: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    userid: (Scalars['uuid'] | null)
    __typename: 'partner_operator_max_fields'
}


/** aggregate min on columns */
export interface partner_operator_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    partnerid: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    userid: (Scalars['uuid'] | null)
    __typename: 'partner_operator_min_fields'
}


/** response of any mutation on the table "partner_operator" */
export interface partner_operator_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: partner_operator[]
    __typename: 'partner_operator_mutation_response'
}


/** select columns of table "partner_operator" */
export type partner_operator_select_column = 'created_at' | 'id' | 'partnerid' | 'updated_at' | 'userid'


/** update columns of table "partner_operator" */
export type partner_operator_update_column = 'created_at' | 'id' | 'partnerid' | 'updated_at' | 'userid'


/** select columns of table "partner" */
export type partner_select_column = 'created_at' | 'id' | 'partner_address' | 'partner_description' | 'partner_email' | 'partner_name' | 'partner_phone' | 'partner_step' | 'updated_at'


/** update columns of table "partner" */
export type partner_update_column = 'created_at' | 'id' | 'partner_address' | 'partner_description' | 'partner_email' | 'partner_name' | 'partner_phone' | 'partner_step' | 'updated_at'


/** columns and relationships of "payment" */
export interface payment {
    amount: Scalars['numeric']
    cardinfo: (Scalars['jsonb'] | null)
    created_at: Scalars['timestamptz']
    customer_id: (Scalars['String'] | null)
    dest_customer_name: (Scalars['String'] | null)
    dest_customer_phone: (Scalars['String'] | null)
    /** An object relationship */
    en_currency: (en_currencies | null)
    /** An object relationship */
    enum_status: en_statuses
    /** An object relationship */
    enum_trans_type: en_trans_types
    from_ci: (Scalars['Boolean'] | null)
    /** An object relationship */
    group: group
    group_id: Scalars['uuid']
    id: Scalars['uuid']
    /** An object relationship */
    member: member
    member_id: Scalars['uuid']
    narration: (Scalars['String'] | null)
    operation_exception: (Scalars['jsonb'] | null)
    order_id: (Scalars['uuid'] | null)
    payload_gateway: (Scalars['jsonb'] | null)
    payload_request: (Scalars['jsonb'] | null)
    payload_response: (Scalars['jsonb'] | null)
    /** An array relationship */
    paymentReviewsByPaymentId: payment_review[]
    /** An aggregate relationship */
    paymentReviewsByPaymentId_aggregate: payment_review_aggregate
    payment_currency: (en_currencies_enum | null)
    /** An object relationship */
    payment_provider: (en_payment_providers | null)
    payment_provider_id: (en_payment_providers_enum | null)
    /** An array relationship */
    payment_reviews: payment_review[]
    /** An aggregate relationship */
    payment_reviews_aggregate: payment_review_aggregate
    /** An object relationship */
    period: period
    period_id: Scalars['uuid']
    scheduled_at: (Scalars['timestamptz'] | null)
    source_customer_name: (Scalars['String'] | null)
    source_customer_phone: (Scalars['String'] | null)
    temp: (Scalars['jsonb'] | null)
    transaction_status: en_statuses_enum
    transaction_type: en_trans_types_enum
    updated_at: Scalars['timestamptz']
    __typename: 'payment'
}


/** aggregated selection of "payment" */
export interface payment_aggregate {
    aggregate: (payment_aggregate_fields | null)
    nodes: payment[]
    __typename: 'payment_aggregate'
}


/** aggregate fields of "payment" */
export interface payment_aggregate_fields {
    avg: (payment_avg_fields | null)
    count: Scalars['Int']
    max: (payment_max_fields | null)
    min: (payment_min_fields | null)
    stddev: (payment_stddev_fields | null)
    stddev_pop: (payment_stddev_pop_fields | null)
    stddev_samp: (payment_stddev_samp_fields | null)
    sum: (payment_sum_fields | null)
    var_pop: (payment_var_pop_fields | null)
    var_samp: (payment_var_samp_fields | null)
    variance: (payment_variance_fields | null)
    __typename: 'payment_aggregate_fields'
}


/** aggregate avg on columns */
export interface payment_avg_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'payment_avg_fields'
}


/** unique or primary key constraints on table "payment" */
export type payment_constraint = 'payment_pkey'


/** aggregate max on columns */
export interface payment_max_fields {
    amount: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamptz'] | null)
    customer_id: (Scalars['String'] | null)
    dest_customer_name: (Scalars['String'] | null)
    dest_customer_phone: (Scalars['String'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    member_id: (Scalars['uuid'] | null)
    narration: (Scalars['String'] | null)
    order_id: (Scalars['uuid'] | null)
    period_id: (Scalars['uuid'] | null)
    scheduled_at: (Scalars['timestamptz'] | null)
    source_customer_name: (Scalars['String'] | null)
    source_customer_phone: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'payment_max_fields'
}


/** aggregate min on columns */
export interface payment_min_fields {
    amount: (Scalars['numeric'] | null)
    created_at: (Scalars['timestamptz'] | null)
    customer_id: (Scalars['String'] | null)
    dest_customer_name: (Scalars['String'] | null)
    dest_customer_phone: (Scalars['String'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    member_id: (Scalars['uuid'] | null)
    narration: (Scalars['String'] | null)
    order_id: (Scalars['uuid'] | null)
    period_id: (Scalars['uuid'] | null)
    scheduled_at: (Scalars['timestamptz'] | null)
    source_customer_name: (Scalars['String'] | null)
    source_customer_phone: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'payment_min_fields'
}


/** response of any mutation on the table "payment" */
export interface payment_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: payment[]
    __typename: 'payment_mutation_response'
}


/** columns and relationships of "payment_review" */
export interface payment_review {
    created_at: Scalars['timestamptz']
    /** An object relationship */
    en_permission: en_permissions
    /** An object relationship */
    group: group
    group_id: Scalars['uuid']
    id: Scalars['uuid']
    index: (Scalars['Int'] | null)
    notes: (Scalars['String'] | null)
    /** An array relationship */
    notifications: notification[]
    /** An aggregate relationship */
    notifications_aggregate: notification_aggregate
    /** An object relationship */
    payment: payment
    payment_id: Scalars['uuid']
    /** An object relationship */
    period: period
    period_id: Scalars['uuid']
    /** An object relationship */
    requester: (member | null)
    requester_id: Scalars['uuid']
    response: en_permissions_enum
    /** An object relationship */
    reviewer: (member | null)
    reviewer_id: Scalars['uuid']
    updated_at: Scalars['timestamptz']
    __typename: 'payment_review'
}


/** aggregated selection of "payment_review" */
export interface payment_review_aggregate {
    aggregate: (payment_review_aggregate_fields | null)
    nodes: payment_review[]
    __typename: 'payment_review_aggregate'
}


/** aggregate fields of "payment_review" */
export interface payment_review_aggregate_fields {
    avg: (payment_review_avg_fields | null)
    count: Scalars['Int']
    max: (payment_review_max_fields | null)
    min: (payment_review_min_fields | null)
    stddev: (payment_review_stddev_fields | null)
    stddev_pop: (payment_review_stddev_pop_fields | null)
    stddev_samp: (payment_review_stddev_samp_fields | null)
    sum: (payment_review_sum_fields | null)
    var_pop: (payment_review_var_pop_fields | null)
    var_samp: (payment_review_var_samp_fields | null)
    variance: (payment_review_variance_fields | null)
    __typename: 'payment_review_aggregate_fields'
}


/** aggregate avg on columns */
export interface payment_review_avg_fields {
    index: (Scalars['Float'] | null)
    __typename: 'payment_review_avg_fields'
}


/** unique or primary key constraints on table "payment_review" */
export type payment_review_constraint = 'payment_permission_pkey'


/** aggregate max on columns */
export interface payment_review_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    index: (Scalars['Int'] | null)
    notes: (Scalars['String'] | null)
    payment_id: (Scalars['uuid'] | null)
    period_id: (Scalars['uuid'] | null)
    requester_id: (Scalars['uuid'] | null)
    reviewer_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'payment_review_max_fields'
}


/** aggregate min on columns */
export interface payment_review_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    index: (Scalars['Int'] | null)
    notes: (Scalars['String'] | null)
    payment_id: (Scalars['uuid'] | null)
    period_id: (Scalars['uuid'] | null)
    requester_id: (Scalars['uuid'] | null)
    reviewer_id: (Scalars['uuid'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'payment_review_min_fields'
}


/** response of any mutation on the table "payment_review" */
export interface payment_review_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: payment_review[]
    __typename: 'payment_review_mutation_response'
}


/** select columns of table "payment_review" */
export type payment_review_select_column = 'created_at' | 'group_id' | 'id' | 'index' | 'notes' | 'payment_id' | 'period_id' | 'requester_id' | 'response' | 'reviewer_id' | 'updated_at'


/** aggregate stddev on columns */
export interface payment_review_stddev_fields {
    index: (Scalars['Float'] | null)
    __typename: 'payment_review_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface payment_review_stddev_pop_fields {
    index: (Scalars['Float'] | null)
    __typename: 'payment_review_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface payment_review_stddev_samp_fields {
    index: (Scalars['Float'] | null)
    __typename: 'payment_review_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface payment_review_sum_fields {
    index: (Scalars['Int'] | null)
    __typename: 'payment_review_sum_fields'
}


/** update columns of table "payment_review" */
export type payment_review_update_column = 'created_at' | 'group_id' | 'id' | 'index' | 'notes' | 'payment_id' | 'period_id' | 'requester_id' | 'response' | 'reviewer_id' | 'updated_at'


/** aggregate var_pop on columns */
export interface payment_review_var_pop_fields {
    index: (Scalars['Float'] | null)
    __typename: 'payment_review_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface payment_review_var_samp_fields {
    index: (Scalars['Float'] | null)
    __typename: 'payment_review_var_samp_fields'
}


/** aggregate variance on columns */
export interface payment_review_variance_fields {
    index: (Scalars['Float'] | null)
    __typename: 'payment_review_variance_fields'
}


/** select columns of table "payment" */
export type payment_select_column = 'amount' | 'cardinfo' | 'created_at' | 'customer_id' | 'dest_customer_name' | 'dest_customer_phone' | 'from_ci' | 'group_id' | 'id' | 'member_id' | 'narration' | 'operation_exception' | 'order_id' | 'payload_gateway' | 'payload_request' | 'payload_response' | 'payment_currency' | 'payment_provider_id' | 'period_id' | 'scheduled_at' | 'source_customer_name' | 'source_customer_phone' | 'temp' | 'transaction_status' | 'transaction_type' | 'updated_at'


/** select "payment_aggregate_bool_exp_bool_and_arguments_columns" columns of table "payment" */
export type payment_select_column_payment_aggregate_bool_exp_bool_and_arguments_columns = 'from_ci'


/** select "payment_aggregate_bool_exp_bool_or_arguments_columns" columns of table "payment" */
export type payment_select_column_payment_aggregate_bool_exp_bool_or_arguments_columns = 'from_ci'


/** aggregate stddev on columns */
export interface payment_stddev_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'payment_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface payment_stddev_pop_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'payment_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface payment_stddev_samp_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'payment_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface payment_sum_fields {
    amount: (Scalars['numeric'] | null)
    __typename: 'payment_sum_fields'
}


/** update columns of table "payment" */
export type payment_update_column = 'amount' | 'cardinfo' | 'created_at' | 'customer_id' | 'dest_customer_name' | 'dest_customer_phone' | 'from_ci' | 'group_id' | 'id' | 'member_id' | 'narration' | 'operation_exception' | 'order_id' | 'payload_gateway' | 'payload_request' | 'payload_response' | 'payment_currency' | 'payment_provider_id' | 'period_id' | 'scheduled_at' | 'source_customer_name' | 'source_customer_phone' | 'temp' | 'transaction_status' | 'transaction_type' | 'updated_at'


/** aggregate var_pop on columns */
export interface payment_var_pop_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'payment_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface payment_var_samp_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'payment_var_samp_fields'
}


/** aggregate variance on columns */
export interface payment_variance_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'payment_variance_fields'
}


/** columns and relationships of "period" */
export interface period {
    completed_at: Scalars['timestamptz']
    created_at: Scalars['timestamptz']
    event_id: (Scalars['uuid'] | null)
    /** An object relationship */
    group: group
    group_id: Scalars['uuid']
    id: Scalars['uuid']
    /** An object relationship */
    member: member
    member_id: Scalars['uuid']
    /** An array relationship */
    notification_items: notification_item[]
    /** An aggregate relationship */
    notification_items_aggregate: notification_item_aggregate
    /** An array relationship */
    payment_requests: payment_review[]
    /** An aggregate relationship */
    payment_requests_aggregate: payment_review_aggregate
    /** An array relationship */
    payments: payment[]
    /** An aggregate relationship */
    payments_aggregate: payment_aggregate
    period_index: Scalars['Int']
    processed: (Scalars['Boolean'] | null)
    reminder_index: (Scalars['Int'] | null)
    /** An object relationship */
    scheduled_event: (scheduled_event | null)
    updated_at: Scalars['timestamptz']
    __typename: 'period'
}


/** aggregated selection of "period" */
export interface period_aggregate {
    aggregate: (period_aggregate_fields | null)
    nodes: period[]
    __typename: 'period_aggregate'
}


/** aggregate fields of "period" */
export interface period_aggregate_fields {
    avg: (period_avg_fields | null)
    count: Scalars['Int']
    max: (period_max_fields | null)
    min: (period_min_fields | null)
    stddev: (period_stddev_fields | null)
    stddev_pop: (period_stddev_pop_fields | null)
    stddev_samp: (period_stddev_samp_fields | null)
    sum: (period_sum_fields | null)
    var_pop: (period_var_pop_fields | null)
    var_samp: (period_var_samp_fields | null)
    variance: (period_variance_fields | null)
    __typename: 'period_aggregate_fields'
}


/** aggregate avg on columns */
export interface period_avg_fields {
    period_index: (Scalars['Float'] | null)
    reminder_index: (Scalars['Float'] | null)
    __typename: 'period_avg_fields'
}


/** unique or primary key constraints on table "period" */
export type period_constraint = 'period_group_id_member_id_period_index_key' | 'period_pkey'


/** aggregate max on columns */
export interface period_max_fields {
    completed_at: (Scalars['timestamptz'] | null)
    created_at: (Scalars['timestamptz'] | null)
    event_id: (Scalars['uuid'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    member_id: (Scalars['uuid'] | null)
    period_index: (Scalars['Int'] | null)
    reminder_index: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'period_max_fields'
}


/** aggregate min on columns */
export interface period_min_fields {
    completed_at: (Scalars['timestamptz'] | null)
    created_at: (Scalars['timestamptz'] | null)
    event_id: (Scalars['uuid'] | null)
    group_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    member_id: (Scalars['uuid'] | null)
    period_index: (Scalars['Int'] | null)
    reminder_index: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'period_min_fields'
}


/** response of any mutation on the table "period" */
export interface period_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: period[]
    __typename: 'period_mutation_response'
}


/** select columns of table "period" */
export type period_select_column = 'completed_at' | 'created_at' | 'event_id' | 'group_id' | 'id' | 'member_id' | 'period_index' | 'processed' | 'reminder_index' | 'updated_at'


/** select "period_aggregate_bool_exp_bool_and_arguments_columns" columns of table "period" */
export type period_select_column_period_aggregate_bool_exp_bool_and_arguments_columns = 'processed'


/** select "period_aggregate_bool_exp_bool_or_arguments_columns" columns of table "period" */
export type period_select_column_period_aggregate_bool_exp_bool_or_arguments_columns = 'processed'


/** aggregate stddev on columns */
export interface period_stddev_fields {
    period_index: (Scalars['Float'] | null)
    reminder_index: (Scalars['Float'] | null)
    __typename: 'period_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface period_stddev_pop_fields {
    period_index: (Scalars['Float'] | null)
    reminder_index: (Scalars['Float'] | null)
    __typename: 'period_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface period_stddev_samp_fields {
    period_index: (Scalars['Float'] | null)
    reminder_index: (Scalars['Float'] | null)
    __typename: 'period_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface period_sum_fields {
    period_index: (Scalars['Int'] | null)
    reminder_index: (Scalars['Int'] | null)
    __typename: 'period_sum_fields'
}


/** update columns of table "period" */
export type period_update_column = 'completed_at' | 'created_at' | 'event_id' | 'group_id' | 'id' | 'member_id' | 'period_index' | 'processed' | 'reminder_index' | 'updated_at'


/** aggregate var_pop on columns */
export interface period_var_pop_fields {
    period_index: (Scalars['Float'] | null)
    reminder_index: (Scalars['Float'] | null)
    __typename: 'period_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface period_var_samp_fields {
    period_index: (Scalars['Float'] | null)
    reminder_index: (Scalars['Float'] | null)
    __typename: 'period_var_samp_fields'
}


/** aggregate variance on columns */
export interface period_variance_fields {
    period_index: (Scalars['Float'] | null)
    reminder_index: (Scalars['Float'] | null)
    __typename: 'period_variance_fields'
}

export interface query_root {
    /** fetch data from the table: "auth.providers" using primary key columns */
    authProvider: (authProviders | null)
    /** fetch data from the table: "auth.provider_requests" using primary key columns */
    authProviderRequest: (authProviderRequests | null)
    /** fetch data from the table: "auth.provider_requests" */
    authProviderRequests: authProviderRequests[]
    /** fetch aggregated fields from the table: "auth.provider_requests" */
    authProviderRequestsAggregate: authProviderRequests_aggregate
    /** fetch data from the table: "auth.providers" */
    authProviders: authProviders[]
    /** fetch aggregated fields from the table: "auth.providers" */
    authProvidersAggregate: authProviders_aggregate
    /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
    authRefreshToken: (authRefreshTokens | null)
    /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
    authRefreshTokenType: (authRefreshTokenTypes | null)
    /** fetch data from the table: "auth.refresh_token_types" */
    authRefreshTokenTypes: authRefreshTokenTypes[]
    /** fetch aggregated fields from the table: "auth.refresh_token_types" */
    authRefreshTokenTypesAggregate: authRefreshTokenTypes_aggregate
    /** fetch data from the table: "auth.refresh_tokens" */
    authRefreshTokens: authRefreshTokens[]
    /** fetch aggregated fields from the table: "auth.refresh_tokens" */
    authRefreshTokensAggregate: authRefreshTokens_aggregate
    /** fetch data from the table: "auth.roles" using primary key columns */
    authRole: (authRoles | null)
    /** fetch data from the table: "auth.roles" */
    authRoles: authRoles[]
    /** fetch aggregated fields from the table: "auth.roles" */
    authRolesAggregate: authRoles_aggregate
    /** fetch data from the table: "auth.user_providers" using primary key columns */
    authUserProvider: (authUserProviders | null)
    /** fetch data from the table: "auth.user_providers" */
    authUserProviders: authUserProviders[]
    /** fetch aggregated fields from the table: "auth.user_providers" */
    authUserProvidersAggregate: authUserProviders_aggregate
    /** fetch data from the table: "auth.user_roles" using primary key columns */
    authUserRole: (authUserRoles | null)
    /** fetch data from the table: "auth.user_roles" */
    authUserRoles: authUserRoles[]
    /** fetch aggregated fields from the table: "auth.user_roles" */
    authUserRolesAggregate: authUserRoles_aggregate
    /** fetch data from the table: "auth.user_security_keys" using primary key columns */
    authUserSecurityKey: (authUserSecurityKeys | null)
    /** fetch data from the table: "auth.user_security_keys" */
    authUserSecurityKeys: authUserSecurityKeys[]
    /** fetch aggregated fields from the table: "auth.user_security_keys" */
    authUserSecurityKeysAggregate: authUserSecurityKeys_aggregate
    /** fetch data from the table: "auth.migrations" */
    auth_migrations: auth_migrations[]
    /** fetch aggregated fields from the table: "auth.migrations" */
    auth_migrations_aggregate: auth_migrations_aggregate
    /** fetch data from the table: "auth.migrations" using primary key columns */
    auth_migrations_by_pk: (auth_migrations | null)
    /** fetch data from the table: "storage.buckets" using primary key columns */
    bucket: (buckets | null)
    /** fetch data from the table: "storage.buckets" */
    buckets: buckets[]
    /** fetch aggregated fields from the table: "storage.buckets" */
    bucketsAggregate: buckets_aggregate
    /** fetch data from the table: "campaign_file" */
    campaign_file: campaign_file[]
    /** fetch aggregated fields from the table: "campaign_file" */
    campaign_file_aggregate: campaign_file_aggregate
    /** fetch data from the table: "campaign_file" using primary key columns */
    campaign_file_by_pk: (campaign_file | null)
    /** fetch data from the table: "en_currencies" */
    en_currencies: en_currencies[]
    /** fetch aggregated fields from the table: "en_currencies" */
    en_currencies_aggregate: en_currencies_aggregate
    /** fetch data from the table: "en_currencies" using primary key columns */
    en_currencies_by_pk: (en_currencies | null)
    /** fetch data from the table: "en_notifications" */
    en_notifications: en_notifications[]
    /** fetch aggregated fields from the table: "en_notifications" */
    en_notifications_aggregate: en_notifications_aggregate
    /** fetch data from the table: "en_notifications" using primary key columns */
    en_notifications_by_pk: (en_notifications | null)
    /** fetch data from the table: "en_partner_steps" */
    en_partner_steps: en_partner_steps[]
    /** fetch aggregated fields from the table: "en_partner_steps" */
    en_partner_steps_aggregate: en_partner_steps_aggregate
    /** fetch data from the table: "en_partner_steps" using primary key columns */
    en_partner_steps_by_pk: (en_partner_steps | null)
    /** fetch data from the table: "en_payment_providers" */
    en_payment_providers: en_payment_providers[]
    /** fetch aggregated fields from the table: "en_payment_providers" */
    en_payment_providers_aggregate: en_payment_providers_aggregate
    /** fetch data from the table: "en_payment_providers" using primary key columns */
    en_payment_providers_by_pk: (en_payment_providers | null)
    /** fetch data from the table: "en_permissions" */
    en_permissions: en_permissions[]
    /** fetch aggregated fields from the table: "en_permissions" */
    en_permissions_aggregate: en_permissions_aggregate
    /** fetch data from the table: "en_permissions" using primary key columns */
    en_permissions_by_pk: (en_permissions | null)
    /** fetch data from the table: "en_recurrencies" */
    en_recurrencies: en_recurrencies[]
    /** fetch aggregated fields from the table: "en_recurrencies" */
    en_recurrencies_aggregate: en_recurrencies_aggregate
    /** fetch data from the table: "en_recurrencies" using primary key columns */
    en_recurrencies_by_pk: (en_recurrencies | null)
    /** fetch data from the table: "en_statuses" */
    en_statuses: en_statuses[]
    /** fetch aggregated fields from the table: "en_statuses" */
    en_statuses_aggregate: en_statuses_aggregate
    /** fetch data from the table: "en_statuses" using primary key columns */
    en_statuses_by_pk: (en_statuses | null)
    /** fetch data from the table: "en_trans_types" */
    en_trans_types: en_trans_types[]
    /** fetch aggregated fields from the table: "en_trans_types" */
    en_trans_types_aggregate: en_trans_types_aggregate
    /** fetch data from the table: "en_trans_types" using primary key columns */
    en_trans_types_by_pk: (en_trans_types | null)
    /** fetch data from the table: "storage.files" using primary key columns */
    file: (files | null)
    /** An array relationship */
    files: files[]
    /** fetch aggregated fields from the table: "storage.files" */
    filesAggregate: files_aggregate
    /** fetch data from the table: "group" */
    group: group[]
    /** fetch aggregated fields from the table: "group" */
    group_aggregate: group_aggregate
    /** fetch data from the table: "group" using primary key columns */
    group_by_pk: (group | null)
    /** fetch data from the table: "invitation" */
    invitation: invitation[]
    /** fetch aggregated fields from the table: "invitation" */
    invitation_aggregate: invitation_aggregate
    /** fetch data from the table: "invitation" using primary key columns */
    invitation_by_pk: (invitation | null)
    /** fetch data from the table: "member" */
    member: member[]
    /** fetch aggregated fields from the table: "member" */
    member_aggregate: member_aggregate
    /** fetch data from the table: "member" using primary key columns */
    member_by_pk: (member | null)
    /** fetch data from the table: "notification" */
    notification: notification[]
    /** fetch aggregated fields from the table: "notification" */
    notification_aggregate: notification_aggregate
    /** fetch data from the table: "notification" using primary key columns */
    notification_by_pk: (notification | null)
    /** fetch data from the table: "notification_item" */
    notification_item: notification_item[]
    /** fetch aggregated fields from the table: "notification_item" */
    notification_item_aggregate: notification_item_aggregate
    /** fetch data from the table: "notification_item" using primary key columns */
    notification_item_by_pk: (notification_item | null)
    /** fetch data from the table: "partner" */
    partner: partner[]
    /** fetch aggregated fields from the table: "partner" */
    partner_aggregate: partner_aggregate
    /** fetch data from the table: "partner" using primary key columns */
    partner_by_pk: (partner | null)
    /** fetch data from the table: "partner_campaign" */
    partner_campaign: partner_campaign[]
    /** fetch aggregated fields from the table: "partner_campaign" */
    partner_campaign_aggregate: partner_campaign_aggregate
    /** fetch data from the table: "partner_campaign" using primary key columns */
    partner_campaign_by_pk: (partner_campaign | null)
    /** fetch data from the table: "partner_file" */
    partner_file: partner_file[]
    /** fetch aggregated fields from the table: "partner_file" */
    partner_file_aggregate: partner_file_aggregate
    /** fetch data from the table: "partner_file" using primary key columns */
    partner_file_by_pk: (partner_file | null)
    /** fetch data from the table: "partner_operator" */
    partner_operator: partner_operator[]
    /** fetch aggregated fields from the table: "partner_operator" */
    partner_operator_aggregate: partner_operator_aggregate
    /** fetch data from the table: "partner_operator" using primary key columns */
    partner_operator_by_pk: (partner_operator | null)
    /** fetch data from the table: "payment" */
    payment: payment[]
    /** fetch aggregated fields from the table: "payment" */
    payment_aggregate: payment_aggregate
    /** fetch data from the table: "payment" using primary key columns */
    payment_by_pk: (payment | null)
    /** fetch data from the table: "payment_review" */
    payment_review: payment_review[]
    /** fetch aggregated fields from the table: "payment_review" */
    payment_review_aggregate: payment_review_aggregate
    /** fetch data from the table: "payment_review" using primary key columns */
    payment_review_by_pk: (payment_review | null)
    /** fetch data from the table: "period" */
    period: period[]
    /** fetch aggregated fields from the table: "period" */
    period_aggregate: period_aggregate
    /** fetch data from the table: "period" using primary key columns */
    period_by_pk: (period | null)
    /** fetch data from the table: "scheduled_event" */
    scheduled_event: scheduled_event[]
    /** fetch aggregated fields from the table: "scheduled_event" */
    scheduled_event_aggregate: scheduled_event_aggregate
    /** fetch data from the table: "scheduled_event" using primary key columns */
    scheduled_event_by_pk: (scheduled_event | null)
    /** fetch data from the table: "state_cache" */
    state_cache: state_cache[]
    /** fetch aggregated fields from the table: "state_cache" */
    state_cache_aggregate: state_cache_aggregate
    /** fetch data from the table: "state_cache" using primary key columns */
    state_cache_by_pk: (state_cache | null)
    /** fetch data from the table: "storage.schema_migrations" */
    storage_schema_migrations: storage_schema_migrations[]
    /** fetch aggregated fields from the table: "storage.schema_migrations" */
    storage_schema_migrations_aggregate: storage_schema_migrations_aggregate
    /** fetch data from the table: "storage.schema_migrations" using primary key columns */
    storage_schema_migrations_by_pk: (storage_schema_migrations | null)
    /** fetch data from the table: "auth.users" using primary key columns */
    user: (users | null)
    /** fetch data from the table: "user_profile" */
    user_profile: user_profile[]
    /** fetch aggregated fields from the table: "user_profile" */
    user_profile_aggregate: user_profile_aggregate
    /** fetch data from the table: "user_profile" using primary key columns */
    user_profile_by_pk: (user_profile | null)
    /** fetch data from the table: "auth.users" */
    users: users[]
    /** fetch aggregated fields from the table: "auth.users" */
    usersAggregate: users_aggregate
    __typename: 'query_root'
}


/** records of scheduled events */
export interface scheduled_event {
    created_at: Scalars['timestamptz']
    event_id: (Scalars['uuid'] | null)
    id: Scalars['uuid']
    period_ids: (Scalars['String'] | null)
    /** An array relationship */
    periods: period[]
    /** An aggregate relationship */
    periods_aggregate: period_aggregate
    scheduled_at: Scalars['timestamptz']
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    user: (users | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'scheduled_event'
}


/** aggregated selection of "scheduled_event" */
export interface scheduled_event_aggregate {
    aggregate: (scheduled_event_aggregate_fields | null)
    nodes: scheduled_event[]
    __typename: 'scheduled_event_aggregate'
}


/** aggregate fields of "scheduled_event" */
export interface scheduled_event_aggregate_fields {
    count: Scalars['Int']
    max: (scheduled_event_max_fields | null)
    min: (scheduled_event_min_fields | null)
    __typename: 'scheduled_event_aggregate_fields'
}


/** unique or primary key constraints on table "scheduled_event" */
export type scheduled_event_constraint = 'scheduled_events_pkey'


/** aggregate max on columns */
export interface scheduled_event_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    event_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    period_ids: (Scalars['String'] | null)
    scheduled_at: (Scalars['timestamptz'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'scheduled_event_max_fields'
}


/** aggregate min on columns */
export interface scheduled_event_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    event_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    period_ids: (Scalars['String'] | null)
    scheduled_at: (Scalars['timestamptz'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'scheduled_event_min_fields'
}


/** response of any mutation on the table "scheduled_event" */
export interface scheduled_event_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: scheduled_event[]
    __typename: 'scheduled_event_mutation_response'
}


/** select columns of table "scheduled_event" */
export type scheduled_event_select_column = 'created_at' | 'event_id' | 'id' | 'period_ids' | 'scheduled_at' | 'updated_at' | 'user_id'


/** update columns of table "scheduled_event" */
export type scheduled_event_update_column = 'created_at' | 'event_id' | 'id' | 'period_ids' | 'scheduled_at' | 'updated_at' | 'user_id'


/** columns and relationships of "state_cache" */
export interface state_cache {
    created_at: Scalars['timestamptz']
    id: Scalars['uuid']
    ref_id: Scalars['uuid']
    state: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'state_cache'
}


/** aggregated selection of "state_cache" */
export interface state_cache_aggregate {
    aggregate: (state_cache_aggregate_fields | null)
    nodes: state_cache[]
    __typename: 'state_cache_aggregate'
}


/** aggregate fields of "state_cache" */
export interface state_cache_aggregate_fields {
    count: Scalars['Int']
    max: (state_cache_max_fields | null)
    min: (state_cache_min_fields | null)
    __typename: 'state_cache_aggregate_fields'
}


/** unique or primary key constraints on table "state_cache" */
export type state_cache_constraint = 'state_cache_pkey'


/** aggregate max on columns */
export interface state_cache_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    ref_id: (Scalars['uuid'] | null)
    state: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'state_cache_max_fields'
}


/** aggregate min on columns */
export interface state_cache_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    ref_id: (Scalars['uuid'] | null)
    state: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'state_cache_min_fields'
}


/** response of any mutation on the table "state_cache" */
export interface state_cache_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: state_cache[]
    __typename: 'state_cache_mutation_response'
}


/** select columns of table "state_cache" */
export type state_cache_select_column = 'created_at' | 'id' | 'ref_id' | 'state' | 'updated_at'


/** update columns of table "state_cache" */
export type state_cache_update_column = 'created_at' | 'id' | 'ref_id' | 'state' | 'updated_at'


/** columns and relationships of "storage.schema_migrations" */
export interface storage_schema_migrations {
    dirty: Scalars['Boolean']
    version: Scalars['bigint']
    __typename: 'storage_schema_migrations'
}


/** aggregated selection of "storage.schema_migrations" */
export interface storage_schema_migrations_aggregate {
    aggregate: (storage_schema_migrations_aggregate_fields | null)
    nodes: storage_schema_migrations[]
    __typename: 'storage_schema_migrations_aggregate'
}


/** aggregate fields of "storage.schema_migrations" */
export interface storage_schema_migrations_aggregate_fields {
    avg: (storage_schema_migrations_avg_fields | null)
    count: Scalars['Int']
    max: (storage_schema_migrations_max_fields | null)
    min: (storage_schema_migrations_min_fields | null)
    stddev: (storage_schema_migrations_stddev_fields | null)
    stddev_pop: (storage_schema_migrations_stddev_pop_fields | null)
    stddev_samp: (storage_schema_migrations_stddev_samp_fields | null)
    sum: (storage_schema_migrations_sum_fields | null)
    var_pop: (storage_schema_migrations_var_pop_fields | null)
    var_samp: (storage_schema_migrations_var_samp_fields | null)
    variance: (storage_schema_migrations_variance_fields | null)
    __typename: 'storage_schema_migrations_aggregate_fields'
}


/** aggregate avg on columns */
export interface storage_schema_migrations_avg_fields {
    version: (Scalars['Float'] | null)
    __typename: 'storage_schema_migrations_avg_fields'
}


/** unique or primary key constraints on table "storage.schema_migrations" */
export type storage_schema_migrations_constraint = 'schema_migrations_pkey'


/** aggregate max on columns */
export interface storage_schema_migrations_max_fields {
    version: (Scalars['bigint'] | null)
    __typename: 'storage_schema_migrations_max_fields'
}


/** aggregate min on columns */
export interface storage_schema_migrations_min_fields {
    version: (Scalars['bigint'] | null)
    __typename: 'storage_schema_migrations_min_fields'
}


/** response of any mutation on the table "storage.schema_migrations" */
export interface storage_schema_migrations_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: storage_schema_migrations[]
    __typename: 'storage_schema_migrations_mutation_response'
}


/** select columns of table "storage.schema_migrations" */
export type storage_schema_migrations_select_column = 'dirty' | 'version'


/** aggregate stddev on columns */
export interface storage_schema_migrations_stddev_fields {
    version: (Scalars['Float'] | null)
    __typename: 'storage_schema_migrations_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface storage_schema_migrations_stddev_pop_fields {
    version: (Scalars['Float'] | null)
    __typename: 'storage_schema_migrations_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface storage_schema_migrations_stddev_samp_fields {
    version: (Scalars['Float'] | null)
    __typename: 'storage_schema_migrations_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface storage_schema_migrations_sum_fields {
    version: (Scalars['bigint'] | null)
    __typename: 'storage_schema_migrations_sum_fields'
}


/** update columns of table "storage.schema_migrations" */
export type storage_schema_migrations_update_column = 'dirty' | 'version'


/** aggregate var_pop on columns */
export interface storage_schema_migrations_var_pop_fields {
    version: (Scalars['Float'] | null)
    __typename: 'storage_schema_migrations_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface storage_schema_migrations_var_samp_fields {
    version: (Scalars['Float'] | null)
    __typename: 'storage_schema_migrations_var_samp_fields'
}


/** aggregate variance on columns */
export interface storage_schema_migrations_variance_fields {
    version: (Scalars['Float'] | null)
    __typename: 'storage_schema_migrations_variance_fields'
}

export interface subscription_root {
    /** fetch data from the table: "auth.providers" using primary key columns */
    authProvider: (authProviders | null)
    /** fetch data from the table: "auth.provider_requests" using primary key columns */
    authProviderRequest: (authProviderRequests | null)
    /** fetch data from the table: "auth.provider_requests" */
    authProviderRequests: authProviderRequests[]
    /** fetch aggregated fields from the table: "auth.provider_requests" */
    authProviderRequestsAggregate: authProviderRequests_aggregate
    /** fetch data from the table in a streaming manner: "auth.provider_requests" */
    authProviderRequests_stream: authProviderRequests[]
    /** fetch data from the table: "auth.providers" */
    authProviders: authProviders[]
    /** fetch aggregated fields from the table: "auth.providers" */
    authProvidersAggregate: authProviders_aggregate
    /** fetch data from the table in a streaming manner: "auth.providers" */
    authProviders_stream: authProviders[]
    /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
    authRefreshToken: (authRefreshTokens | null)
    /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
    authRefreshTokenType: (authRefreshTokenTypes | null)
    /** fetch data from the table: "auth.refresh_token_types" */
    authRefreshTokenTypes: authRefreshTokenTypes[]
    /** fetch aggregated fields from the table: "auth.refresh_token_types" */
    authRefreshTokenTypesAggregate: authRefreshTokenTypes_aggregate
    /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
    authRefreshTokenTypes_stream: authRefreshTokenTypes[]
    /** fetch data from the table: "auth.refresh_tokens" */
    authRefreshTokens: authRefreshTokens[]
    /** fetch aggregated fields from the table: "auth.refresh_tokens" */
    authRefreshTokensAggregate: authRefreshTokens_aggregate
    /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
    authRefreshTokens_stream: authRefreshTokens[]
    /** fetch data from the table: "auth.roles" using primary key columns */
    authRole: (authRoles | null)
    /** fetch data from the table: "auth.roles" */
    authRoles: authRoles[]
    /** fetch aggregated fields from the table: "auth.roles" */
    authRolesAggregate: authRoles_aggregate
    /** fetch data from the table in a streaming manner: "auth.roles" */
    authRoles_stream: authRoles[]
    /** fetch data from the table: "auth.user_providers" using primary key columns */
    authUserProvider: (authUserProviders | null)
    /** fetch data from the table: "auth.user_providers" */
    authUserProviders: authUserProviders[]
    /** fetch aggregated fields from the table: "auth.user_providers" */
    authUserProvidersAggregate: authUserProviders_aggregate
    /** fetch data from the table in a streaming manner: "auth.user_providers" */
    authUserProviders_stream: authUserProviders[]
    /** fetch data from the table: "auth.user_roles" using primary key columns */
    authUserRole: (authUserRoles | null)
    /** fetch data from the table: "auth.user_roles" */
    authUserRoles: authUserRoles[]
    /** fetch aggregated fields from the table: "auth.user_roles" */
    authUserRolesAggregate: authUserRoles_aggregate
    /** fetch data from the table in a streaming manner: "auth.user_roles" */
    authUserRoles_stream: authUserRoles[]
    /** fetch data from the table: "auth.user_security_keys" using primary key columns */
    authUserSecurityKey: (authUserSecurityKeys | null)
    /** fetch data from the table: "auth.user_security_keys" */
    authUserSecurityKeys: authUserSecurityKeys[]
    /** fetch aggregated fields from the table: "auth.user_security_keys" */
    authUserSecurityKeysAggregate: authUserSecurityKeys_aggregate
    /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
    authUserSecurityKeys_stream: authUserSecurityKeys[]
    /** fetch data from the table: "auth.migrations" */
    auth_migrations: auth_migrations[]
    /** fetch aggregated fields from the table: "auth.migrations" */
    auth_migrations_aggregate: auth_migrations_aggregate
    /** fetch data from the table: "auth.migrations" using primary key columns */
    auth_migrations_by_pk: (auth_migrations | null)
    /** fetch data from the table in a streaming manner: "auth.migrations" */
    auth_migrations_stream: auth_migrations[]
    /** fetch data from the table: "storage.buckets" using primary key columns */
    bucket: (buckets | null)
    /** fetch data from the table: "storage.buckets" */
    buckets: buckets[]
    /** fetch aggregated fields from the table: "storage.buckets" */
    bucketsAggregate: buckets_aggregate
    /** fetch data from the table in a streaming manner: "storage.buckets" */
    buckets_stream: buckets[]
    /** fetch data from the table: "campaign_file" */
    campaign_file: campaign_file[]
    /** fetch aggregated fields from the table: "campaign_file" */
    campaign_file_aggregate: campaign_file_aggregate
    /** fetch data from the table: "campaign_file" using primary key columns */
    campaign_file_by_pk: (campaign_file | null)
    /** fetch data from the table in a streaming manner: "campaign_file" */
    campaign_file_stream: campaign_file[]
    /** fetch data from the table: "en_currencies" */
    en_currencies: en_currencies[]
    /** fetch aggregated fields from the table: "en_currencies" */
    en_currencies_aggregate: en_currencies_aggregate
    /** fetch data from the table: "en_currencies" using primary key columns */
    en_currencies_by_pk: (en_currencies | null)
    /** fetch data from the table in a streaming manner: "en_currencies" */
    en_currencies_stream: en_currencies[]
    /** fetch data from the table: "en_notifications" */
    en_notifications: en_notifications[]
    /** fetch aggregated fields from the table: "en_notifications" */
    en_notifications_aggregate: en_notifications_aggregate
    /** fetch data from the table: "en_notifications" using primary key columns */
    en_notifications_by_pk: (en_notifications | null)
    /** fetch data from the table in a streaming manner: "en_notifications" */
    en_notifications_stream: en_notifications[]
    /** fetch data from the table: "en_partner_steps" */
    en_partner_steps: en_partner_steps[]
    /** fetch aggregated fields from the table: "en_partner_steps" */
    en_partner_steps_aggregate: en_partner_steps_aggregate
    /** fetch data from the table: "en_partner_steps" using primary key columns */
    en_partner_steps_by_pk: (en_partner_steps | null)
    /** fetch data from the table in a streaming manner: "en_partner_steps" */
    en_partner_steps_stream: en_partner_steps[]
    /** fetch data from the table: "en_payment_providers" */
    en_payment_providers: en_payment_providers[]
    /** fetch aggregated fields from the table: "en_payment_providers" */
    en_payment_providers_aggregate: en_payment_providers_aggregate
    /** fetch data from the table: "en_payment_providers" using primary key columns */
    en_payment_providers_by_pk: (en_payment_providers | null)
    /** fetch data from the table in a streaming manner: "en_payment_providers" */
    en_payment_providers_stream: en_payment_providers[]
    /** fetch data from the table: "en_permissions" */
    en_permissions: en_permissions[]
    /** fetch aggregated fields from the table: "en_permissions" */
    en_permissions_aggregate: en_permissions_aggregate
    /** fetch data from the table: "en_permissions" using primary key columns */
    en_permissions_by_pk: (en_permissions | null)
    /** fetch data from the table in a streaming manner: "en_permissions" */
    en_permissions_stream: en_permissions[]
    /** fetch data from the table: "en_recurrencies" */
    en_recurrencies: en_recurrencies[]
    /** fetch aggregated fields from the table: "en_recurrencies" */
    en_recurrencies_aggregate: en_recurrencies_aggregate
    /** fetch data from the table: "en_recurrencies" using primary key columns */
    en_recurrencies_by_pk: (en_recurrencies | null)
    /** fetch data from the table in a streaming manner: "en_recurrencies" */
    en_recurrencies_stream: en_recurrencies[]
    /** fetch data from the table: "en_statuses" */
    en_statuses: en_statuses[]
    /** fetch aggregated fields from the table: "en_statuses" */
    en_statuses_aggregate: en_statuses_aggregate
    /** fetch data from the table: "en_statuses" using primary key columns */
    en_statuses_by_pk: (en_statuses | null)
    /** fetch data from the table in a streaming manner: "en_statuses" */
    en_statuses_stream: en_statuses[]
    /** fetch data from the table: "en_trans_types" */
    en_trans_types: en_trans_types[]
    /** fetch aggregated fields from the table: "en_trans_types" */
    en_trans_types_aggregate: en_trans_types_aggregate
    /** fetch data from the table: "en_trans_types" using primary key columns */
    en_trans_types_by_pk: (en_trans_types | null)
    /** fetch data from the table in a streaming manner: "en_trans_types" */
    en_trans_types_stream: en_trans_types[]
    /** fetch data from the table: "storage.files" using primary key columns */
    file: (files | null)
    /** An array relationship */
    files: files[]
    /** fetch aggregated fields from the table: "storage.files" */
    filesAggregate: files_aggregate
    /** fetch data from the table in a streaming manner: "storage.files" */
    files_stream: files[]
    /** fetch data from the table: "group" */
    group: group[]
    /** fetch aggregated fields from the table: "group" */
    group_aggregate: group_aggregate
    /** fetch data from the table: "group" using primary key columns */
    group_by_pk: (group | null)
    /** fetch data from the table in a streaming manner: "group" */
    group_stream: group[]
    /** fetch data from the table: "invitation" */
    invitation: invitation[]
    /** fetch aggregated fields from the table: "invitation" */
    invitation_aggregate: invitation_aggregate
    /** fetch data from the table: "invitation" using primary key columns */
    invitation_by_pk: (invitation | null)
    /** fetch data from the table in a streaming manner: "invitation" */
    invitation_stream: invitation[]
    /** fetch data from the table: "member" */
    member: member[]
    /** fetch aggregated fields from the table: "member" */
    member_aggregate: member_aggregate
    /** fetch data from the table: "member" using primary key columns */
    member_by_pk: (member | null)
    /** fetch data from the table in a streaming manner: "member" */
    member_stream: member[]
    /** fetch data from the table: "notification" */
    notification: notification[]
    /** fetch aggregated fields from the table: "notification" */
    notification_aggregate: notification_aggregate
    /** fetch data from the table: "notification" using primary key columns */
    notification_by_pk: (notification | null)
    /** fetch data from the table: "notification_item" */
    notification_item: notification_item[]
    /** fetch aggregated fields from the table: "notification_item" */
    notification_item_aggregate: notification_item_aggregate
    /** fetch data from the table: "notification_item" using primary key columns */
    notification_item_by_pk: (notification_item | null)
    /** fetch data from the table in a streaming manner: "notification_item" */
    notification_item_stream: notification_item[]
    /** fetch data from the table in a streaming manner: "notification" */
    notification_stream: notification[]
    /** fetch data from the table: "partner" */
    partner: partner[]
    /** fetch aggregated fields from the table: "partner" */
    partner_aggregate: partner_aggregate
    /** fetch data from the table: "partner" using primary key columns */
    partner_by_pk: (partner | null)
    /** fetch data from the table: "partner_campaign" */
    partner_campaign: partner_campaign[]
    /** fetch aggregated fields from the table: "partner_campaign" */
    partner_campaign_aggregate: partner_campaign_aggregate
    /** fetch data from the table: "partner_campaign" using primary key columns */
    partner_campaign_by_pk: (partner_campaign | null)
    /** fetch data from the table in a streaming manner: "partner_campaign" */
    partner_campaign_stream: partner_campaign[]
    /** fetch data from the table: "partner_file" */
    partner_file: partner_file[]
    /** fetch aggregated fields from the table: "partner_file" */
    partner_file_aggregate: partner_file_aggregate
    /** fetch data from the table: "partner_file" using primary key columns */
    partner_file_by_pk: (partner_file | null)
    /** fetch data from the table in a streaming manner: "partner_file" */
    partner_file_stream: partner_file[]
    /** fetch data from the table: "partner_operator" */
    partner_operator: partner_operator[]
    /** fetch aggregated fields from the table: "partner_operator" */
    partner_operator_aggregate: partner_operator_aggregate
    /** fetch data from the table: "partner_operator" using primary key columns */
    partner_operator_by_pk: (partner_operator | null)
    /** fetch data from the table in a streaming manner: "partner_operator" */
    partner_operator_stream: partner_operator[]
    /** fetch data from the table in a streaming manner: "partner" */
    partner_stream: partner[]
    /** fetch data from the table: "payment" */
    payment: payment[]
    /** fetch aggregated fields from the table: "payment" */
    payment_aggregate: payment_aggregate
    /** fetch data from the table: "payment" using primary key columns */
    payment_by_pk: (payment | null)
    /** fetch data from the table: "payment_review" */
    payment_review: payment_review[]
    /** fetch aggregated fields from the table: "payment_review" */
    payment_review_aggregate: payment_review_aggregate
    /** fetch data from the table: "payment_review" using primary key columns */
    payment_review_by_pk: (payment_review | null)
    /** fetch data from the table in a streaming manner: "payment_review" */
    payment_review_stream: payment_review[]
    /** fetch data from the table in a streaming manner: "payment" */
    payment_stream: payment[]
    /** fetch data from the table: "period" */
    period: period[]
    /** fetch aggregated fields from the table: "period" */
    period_aggregate: period_aggregate
    /** fetch data from the table: "period" using primary key columns */
    period_by_pk: (period | null)
    /** fetch data from the table in a streaming manner: "period" */
    period_stream: period[]
    /** fetch data from the table: "scheduled_event" */
    scheduled_event: scheduled_event[]
    /** fetch aggregated fields from the table: "scheduled_event" */
    scheduled_event_aggregate: scheduled_event_aggregate
    /** fetch data from the table: "scheduled_event" using primary key columns */
    scheduled_event_by_pk: (scheduled_event | null)
    /** fetch data from the table in a streaming manner: "scheduled_event" */
    scheduled_event_stream: scheduled_event[]
    /** fetch data from the table: "state_cache" */
    state_cache: state_cache[]
    /** fetch aggregated fields from the table: "state_cache" */
    state_cache_aggregate: state_cache_aggregate
    /** fetch data from the table: "state_cache" using primary key columns */
    state_cache_by_pk: (state_cache | null)
    /** fetch data from the table in a streaming manner: "state_cache" */
    state_cache_stream: state_cache[]
    /** fetch data from the table: "storage.schema_migrations" */
    storage_schema_migrations: storage_schema_migrations[]
    /** fetch aggregated fields from the table: "storage.schema_migrations" */
    storage_schema_migrations_aggregate: storage_schema_migrations_aggregate
    /** fetch data from the table: "storage.schema_migrations" using primary key columns */
    storage_schema_migrations_by_pk: (storage_schema_migrations | null)
    /** fetch data from the table in a streaming manner: "storage.schema_migrations" */
    storage_schema_migrations_stream: storage_schema_migrations[]
    /** fetch data from the table: "auth.users" using primary key columns */
    user: (users | null)
    /** fetch data from the table: "user_profile" */
    user_profile: user_profile[]
    /** fetch aggregated fields from the table: "user_profile" */
    user_profile_aggregate: user_profile_aggregate
    /** fetch data from the table: "user_profile" using primary key columns */
    user_profile_by_pk: (user_profile | null)
    /** fetch data from the table in a streaming manner: "user_profile" */
    user_profile_stream: user_profile[]
    /** fetch data from the table: "auth.users" */
    users: users[]
    /** fetch aggregated fields from the table: "auth.users" */
    usersAggregate: users_aggregate
    /** fetch data from the table in a streaming manner: "auth.users" */
    users_stream: users[]
    __typename: 'subscription_root'
}


/** columns and relationships of "user_profile" */
export interface user_profile {
    clerk_id: (Scalars['String'] | null)
    country_code: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    expo_push_token: (Scalars['String'] | null)
    from_ci: (Scalars['Boolean'] | null)
    from_ussd: (Scalars['Boolean'] | null)
    has_email: (Scalars['Boolean'] | null)
    id: Scalars['uuid']
    invitation_url: (Scalars['String'] | null)
    personal_access_token: (Scalars['String'] | null)
    personal_access_token_expires_at: (Scalars['time'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    /** An object relationship */
    user: users
    user_id: Scalars['uuid']
    __typename: 'user_profile'
}


/** aggregated selection of "user_profile" */
export interface user_profile_aggregate {
    aggregate: (user_profile_aggregate_fields | null)
    nodes: user_profile[]
    __typename: 'user_profile_aggregate'
}


/** aggregate fields of "user_profile" */
export interface user_profile_aggregate_fields {
    count: Scalars['Int']
    max: (user_profile_max_fields | null)
    min: (user_profile_min_fields | null)
    __typename: 'user_profile_aggregate_fields'
}


/** unique or primary key constraints on table "user_profile" */
export type user_profile_constraint = 'user_profile_pkey' | 'user_profile_user_id_key'


/** aggregate max on columns */
export interface user_profile_max_fields {
    clerk_id: (Scalars['String'] | null)
    country_code: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    expo_push_token: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    invitation_url: (Scalars['String'] | null)
    personal_access_token: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'user_profile_max_fields'
}


/** aggregate min on columns */
export interface user_profile_min_fields {
    clerk_id: (Scalars['String'] | null)
    country_code: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    expo_push_token: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    invitation_url: (Scalars['String'] | null)
    personal_access_token: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'user_profile_min_fields'
}


/** response of any mutation on the table "user_profile" */
export interface user_profile_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: user_profile[]
    __typename: 'user_profile_mutation_response'
}


/** select columns of table "user_profile" */
export type user_profile_select_column = 'clerk_id' | 'country_code' | 'created_at' | 'expo_push_token' | 'from_ci' | 'from_ussd' | 'has_email' | 'id' | 'invitation_url' | 'personal_access_token' | 'personal_access_token_expires_at' | 'updated_at' | 'user_id'


/** update columns of table "user_profile" */
export type user_profile_update_column = 'clerk_id' | 'country_code' | 'created_at' | 'expo_push_token' | 'from_ci' | 'from_ussd' | 'has_email' | 'id' | 'invitation_url' | 'personal_access_token' | 'personal_access_token_expires_at' | 'updated_at' | 'user_id'


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface users {
    activeMfaType: (Scalars['String'] | null)
    avatarUrl: Scalars['String']
    createdAt: Scalars['timestamptz']
    currentChallenge: (Scalars['String'] | null)
    defaultRole: Scalars['String']
    /** An object relationship */
    defaultRoleByRole: authRoles
    disabled: Scalars['Boolean']
    displayName: Scalars['String']
    email: (Scalars['citext'] | null)
    emailVerified: Scalars['Boolean']
    /** An array relationship */
    groups: group[]
    /** An aggregate relationship */
    groups_aggregate: group_aggregate
    id: Scalars['uuid']
    /** An array relationship */
    invitations: invitation[]
    /** An array relationship */
    invitationsBySenderId: invitation[]
    /** An aggregate relationship */
    invitationsBySenderId_aggregate: invitation_aggregate
    /** An aggregate relationship */
    invitations_aggregate: invitation_aggregate
    isAnonymous: Scalars['Boolean']
    lastSeen: (Scalars['timestamptz'] | null)
    locale: Scalars['String']
    /** An array relationship */
    members: member[]
    /** An aggregate relationship */
    members_aggregate: member_aggregate
    metadata: (Scalars['jsonb'] | null)
    newEmail: (Scalars['citext'] | null)
    /** An array relationship */
    notifications: notification[]
    /** An aggregate relationship */
    notifications_aggregate: notification_aggregate
    otpHash: (Scalars['String'] | null)
    otpHashExpiresAt: Scalars['timestamptz']
    otpMethodLastUsed: (Scalars['String'] | null)
    /** An array relationship */
    partner_operators: partner_operator[]
    /** An aggregate relationship */
    partner_operators_aggregate: partner_operator_aggregate
    passwordHash: (Scalars['String'] | null)
    phoneNumber: (Scalars['String'] | null)
    phoneNumberVerified: Scalars['Boolean']
    /** An array relationship */
    refreshTokens: authRefreshTokens[]
    /** An aggregate relationship */
    refreshTokens_aggregate: authRefreshTokens_aggregate
    /** An array relationship */
    roles: authUserRoles[]
    /** An aggregate relationship */
    roles_aggregate: authUserRoles_aggregate
    /** An array relationship */
    scheduled_events: scheduled_event[]
    /** An aggregate relationship */
    scheduled_events_aggregate: scheduled_event_aggregate
    /** An array relationship */
    securityKeys: authUserSecurityKeys[]
    /** An aggregate relationship */
    securityKeys_aggregate: authUserSecurityKeys_aggregate
    ticket: (Scalars['String'] | null)
    ticketExpiresAt: Scalars['timestamptz']
    totpSecret: (Scalars['String'] | null)
    updatedAt: Scalars['timestamptz']
    /** An array relationship */
    userProviders: authUserProviders[]
    /** An aggregate relationship */
    userProviders_aggregate: authUserProviders_aggregate
    /** An object relationship */
    user_profile: (user_profile | null)
    __typename: 'users'
}


/** aggregated selection of "auth.users" */
export interface users_aggregate {
    aggregate: (users_aggregate_fields | null)
    nodes: users[]
    __typename: 'users_aggregate'
}


/** aggregate fields of "auth.users" */
export interface users_aggregate_fields {
    count: Scalars['Int']
    max: (users_max_fields | null)
    min: (users_min_fields | null)
    __typename: 'users_aggregate_fields'
}


/** unique or primary key constraints on table "auth.users" */
export type users_constraint = 'users_email_key' | 'users_phone_number_key' | 'users_pkey'


/** aggregate max on columns */
export interface users_max_fields {
    activeMfaType: (Scalars['String'] | null)
    avatarUrl: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    currentChallenge: (Scalars['String'] | null)
    defaultRole: (Scalars['String'] | null)
    displayName: (Scalars['String'] | null)
    email: (Scalars['citext'] | null)
    id: (Scalars['uuid'] | null)
    lastSeen: (Scalars['timestamptz'] | null)
    locale: (Scalars['String'] | null)
    newEmail: (Scalars['citext'] | null)
    otpHash: (Scalars['String'] | null)
    otpHashExpiresAt: (Scalars['timestamptz'] | null)
    otpMethodLastUsed: (Scalars['String'] | null)
    passwordHash: (Scalars['String'] | null)
    phoneNumber: (Scalars['String'] | null)
    ticket: (Scalars['String'] | null)
    ticketExpiresAt: (Scalars['timestamptz'] | null)
    totpSecret: (Scalars['String'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    __typename: 'users_max_fields'
}


/** aggregate min on columns */
export interface users_min_fields {
    activeMfaType: (Scalars['String'] | null)
    avatarUrl: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    currentChallenge: (Scalars['String'] | null)
    defaultRole: (Scalars['String'] | null)
    displayName: (Scalars['String'] | null)
    email: (Scalars['citext'] | null)
    id: (Scalars['uuid'] | null)
    lastSeen: (Scalars['timestamptz'] | null)
    locale: (Scalars['String'] | null)
    newEmail: (Scalars['citext'] | null)
    otpHash: (Scalars['String'] | null)
    otpHashExpiresAt: (Scalars['timestamptz'] | null)
    otpMethodLastUsed: (Scalars['String'] | null)
    passwordHash: (Scalars['String'] | null)
    phoneNumber: (Scalars['String'] | null)
    ticket: (Scalars['String'] | null)
    ticketExpiresAt: (Scalars['timestamptz'] | null)
    totpSecret: (Scalars['String'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    __typename: 'users_min_fields'
}


/** response of any mutation on the table "auth.users" */
export interface users_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: users[]
    __typename: 'users_mutation_response'
}


/** select columns of table "auth.users" */
export type users_select_column = 'activeMfaType' | 'avatarUrl' | 'createdAt' | 'currentChallenge' | 'defaultRole' | 'disabled' | 'displayName' | 'email' | 'emailVerified' | 'id' | 'isAnonymous' | 'lastSeen' | 'locale' | 'metadata' | 'newEmail' | 'otpHash' | 'otpHashExpiresAt' | 'otpMethodLastUsed' | 'passwordHash' | 'phoneNumber' | 'phoneNumberVerified' | 'ticket' | 'ticketExpiresAt' | 'totpSecret' | 'updatedAt'


/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export type users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns = 'disabled' | 'emailVerified' | 'isAnonymous' | 'phoneNumberVerified'


/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export type users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns = 'disabled' | 'emailVerified' | 'isAnonymous' | 'phoneNumberVerified'


/** update columns of table "auth.users" */
export type users_update_column = 'activeMfaType' | 'avatarUrl' | 'createdAt' | 'currentChallenge' | 'defaultRole' | 'disabled' | 'displayName' | 'email' | 'emailVerified' | 'id' | 'isAnonymous' | 'lastSeen' | 'locale' | 'metadata' | 'newEmail' | 'otpHash' | 'otpHashExpiresAt' | 'otpMethodLastUsed' | 'passwordHash' | 'phoneNumber' | 'phoneNumberVerified' | 'ticket' | 'ticketExpiresAt' | 'totpSecret' | 'updatedAt'

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}

export interface FixPeriodCompletionsOutputGenqlSelection{
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GroupReportsInput {id: Scalars['String'],start: Scalars['String']}

export interface GroupReportsOutputGenqlSelection{
    has_next_page?: boolean | number
    next_start?: boolean | number
    reports?: PeriodReportGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface InitialiseE2EOutputGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}

export interface PeriodReportGenqlSelection{
    deposits?: boolean | number
    end?: boolean | number
    expected?: boolean | number
    payments?: PeriodReportPaymentGenqlSelection
    recurrency?: boolean | number
    start?: boolean | number
    status?: boolean | number
    withdrawals?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PeriodReportMemberGenqlSelection{
    user?: PeriodReportUserGenqlSelection
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PeriodReportPaymentGenqlSelection{
    amount?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    member?: PeriodReportMemberGenqlSelection
    transaction_status?: boolean | number
    transaction_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PeriodReportUserGenqlSelection{
    displayName?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authProviderRequestsGenqlSelection{
    id?: boolean | number
    options?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.provider_requests" */
export interface authProviderRequests_aggregateGenqlSelection{
    aggregate?: authProviderRequests_aggregate_fieldsGenqlSelection
    nodes?: authProviderRequestsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "auth.provider_requests" */
export interface authProviderRequests_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (authProviderRequests_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authProviderRequests_max_fieldsGenqlSelection
    min?: authProviderRequests_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface authProviderRequests_append_input {options?: (Scalars['jsonb'] | null)}


/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export interface authProviderRequests_bool_exp {_and?: (authProviderRequests_bool_exp[] | null),_not?: (authProviderRequests_bool_exp | null),_or?: (authProviderRequests_bool_exp[] | null),id?: (uuid_comparison_exp | null),options?: (jsonb_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface authProviderRequests_delete_at_path_input {options?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface authProviderRequests_delete_elem_input {options?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface authProviderRequests_delete_key_input {options?: (Scalars['String'] | null)}


/** input type for inserting data into table "auth.provider_requests" */
export interface authProviderRequests_insert_input {id?: (Scalars['uuid'] | null),options?: (Scalars['jsonb'] | null)}


/** aggregate max on columns */
export interface authProviderRequests_max_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface authProviderRequests_min_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "auth.provider_requests" */
export interface authProviderRequests_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authProviderRequestsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "auth.provider_requests" */
export interface authProviderRequests_on_conflict {constraint: authProviderRequests_constraint,update_columns?: authProviderRequests_update_column[],where?: (authProviderRequests_bool_exp | null)}


/** Ordering options when selecting data from "auth.provider_requests". */
export interface authProviderRequests_order_by {id?: (order_by | null),options?: (order_by | null)}


/** primary key columns input for table: auth.provider_requests */
export interface authProviderRequests_pk_columns_input {id: Scalars['uuid']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface authProviderRequests_prepend_input {options?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "auth.provider_requests" */
export interface authProviderRequests_set_input {id?: (Scalars['uuid'] | null),options?: (Scalars['jsonb'] | null)}


/** Streaming cursor of the table "authProviderRequests" */
export interface authProviderRequests_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authProviderRequests_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authProviderRequests_stream_cursor_value_input {id?: (Scalars['uuid'] | null),options?: (Scalars['jsonb'] | null)}

export interface authProviderRequests_updates {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (authProviderRequests_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (authProviderRequests_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (authProviderRequests_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (authProviderRequests_delete_key_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (authProviderRequests_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (authProviderRequests_set_input | null),
/** filter the rows which have to be updated */
where: authProviderRequests_bool_exp}


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authProvidersGenqlSelection{
    id?: boolean | number
    /** An array relationship */
    userProviders?: (authUserProvidersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** An aggregate relationship */
    userProviders_aggregate?: (authUserProviders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.providers" */
export interface authProviders_aggregateGenqlSelection{
    aggregate?: authProviders_aggregate_fieldsGenqlSelection
    nodes?: authProvidersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "auth.providers" */
export interface authProviders_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (authProviders_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authProviders_max_fieldsGenqlSelection
    min?: authProviders_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export interface authProviders_bool_exp {_and?: (authProviders_bool_exp[] | null),_not?: (authProviders_bool_exp | null),_or?: (authProviders_bool_exp[] | null),id?: (String_comparison_exp | null),userProviders?: (authUserProviders_bool_exp | null),userProviders_aggregate?: (authUserProviders_aggregate_bool_exp | null)}


/** input type for inserting data into table "auth.providers" */
export interface authProviders_insert_input {id?: (Scalars['String'] | null),userProviders?: (authUserProviders_arr_rel_insert_input | null)}


/** aggregate max on columns */
export interface authProviders_max_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface authProviders_min_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "auth.providers" */
export interface authProviders_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authProvidersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "auth.providers" */
export interface authProviders_obj_rel_insert_input {data: authProviders_insert_input,
/** upsert condition */
on_conflict?: (authProviders_on_conflict | null)}


/** on_conflict condition type for table "auth.providers" */
export interface authProviders_on_conflict {constraint: authProviders_constraint,update_columns?: authProviders_update_column[],where?: (authProviders_bool_exp | null)}


/** Ordering options when selecting data from "auth.providers". */
export interface authProviders_order_by {id?: (order_by | null),userProviders_aggregate?: (authUserProviders_aggregate_order_by | null)}


/** primary key columns input for table: auth.providers */
export interface authProviders_pk_columns_input {id: Scalars['String']}


/** input type for updating data in table "auth.providers" */
export interface authProviders_set_input {id?: (Scalars['String'] | null)}


/** Streaming cursor of the table "authProviders" */
export interface authProviders_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authProviders_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authProviders_stream_cursor_value_input {id?: (Scalars['String'] | null)}

export interface authProviders_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (authProviders_set_input | null),
/** filter the rows which have to be updated */
where: authProviders_bool_exp}


/** columns and relationships of "auth.refresh_token_types" */
export interface authRefreshTokenTypesGenqlSelection{
    comment?: boolean | number
    /** An array relationship */
    refreshTokens?: (authRefreshTokensGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** An aggregate relationship */
    refreshTokens_aggregate?: (authRefreshTokens_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.refresh_token_types" */
export interface authRefreshTokenTypes_aggregateGenqlSelection{
    aggregate?: authRefreshTokenTypes_aggregate_fieldsGenqlSelection
    nodes?: authRefreshTokenTypesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "auth.refresh_token_types" */
export interface authRefreshTokenTypes_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (authRefreshTokenTypes_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authRefreshTokenTypes_max_fieldsGenqlSelection
    min?: authRefreshTokenTypes_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export interface authRefreshTokenTypes_bool_exp {_and?: (authRefreshTokenTypes_bool_exp[] | null),_not?: (authRefreshTokenTypes_bool_exp | null),_or?: (authRefreshTokenTypes_bool_exp[] | null),comment?: (String_comparison_exp | null),refreshTokens?: (authRefreshTokens_bool_exp | null),refreshTokens_aggregate?: (authRefreshTokens_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export interface authRefreshTokenTypes_enum_comparison_exp {_eq?: (authRefreshTokenTypes_enum | null),_in?: (authRefreshTokenTypes_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (authRefreshTokenTypes_enum | null),_nin?: (authRefreshTokenTypes_enum[] | null)}


/** input type for inserting data into table "auth.refresh_token_types" */
export interface authRefreshTokenTypes_insert_input {comment?: (Scalars['String'] | null),refreshTokens?: (authRefreshTokens_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface authRefreshTokenTypes_max_fieldsGenqlSelection{
    comment?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface authRefreshTokenTypes_min_fieldsGenqlSelection{
    comment?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "auth.refresh_token_types" */
export interface authRefreshTokenTypes_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authRefreshTokenTypesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "auth.refresh_token_types" */
export interface authRefreshTokenTypes_obj_rel_insert_input {data: authRefreshTokenTypes_insert_input,
/** upsert condition */
on_conflict?: (authRefreshTokenTypes_on_conflict | null)}


/** on_conflict condition type for table "auth.refresh_token_types" */
export interface authRefreshTokenTypes_on_conflict {constraint: authRefreshTokenTypes_constraint,update_columns?: authRefreshTokenTypes_update_column[],where?: (authRefreshTokenTypes_bool_exp | null)}


/** Ordering options when selecting data from "auth.refresh_token_types". */
export interface authRefreshTokenTypes_order_by {comment?: (order_by | null),refreshTokens_aggregate?: (authRefreshTokens_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: auth.refresh_token_types */
export interface authRefreshTokenTypes_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "auth.refresh_token_types" */
export interface authRefreshTokenTypes_set_input {comment?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "authRefreshTokenTypes" */
export interface authRefreshTokenTypes_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authRefreshTokenTypes_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authRefreshTokenTypes_stream_cursor_value_input {comment?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface authRefreshTokenTypes_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (authRefreshTokenTypes_set_input | null),
/** filter the rows which have to be updated */
where: authRefreshTokenTypes_bool_exp}


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authRefreshTokensGenqlSelection{
    createdAt?: boolean | number
    expiresAt?: boolean | number
    id?: boolean | number
    metadata?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    refreshTokenHash?: boolean | number
    /** An object relationship */
    refresh_token_type?: authRefreshTokenTypesGenqlSelection
    type?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.refresh_tokens" */
export interface authRefreshTokens_aggregateGenqlSelection{
    aggregate?: authRefreshTokens_aggregate_fieldsGenqlSelection
    nodes?: authRefreshTokensGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface authRefreshTokens_aggregate_bool_exp {count?: (authRefreshTokens_aggregate_bool_exp_count | null)}

export interface authRefreshTokens_aggregate_bool_exp_count {arguments?: (authRefreshTokens_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (authRefreshTokens_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "auth.refresh_tokens" */
export interface authRefreshTokens_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (authRefreshTokens_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authRefreshTokens_max_fieldsGenqlSelection
    min?: authRefreshTokens_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "auth.refresh_tokens" */
export interface authRefreshTokens_aggregate_order_by {count?: (order_by | null),max?: (authRefreshTokens_max_order_by | null),min?: (authRefreshTokens_min_order_by | null)}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface authRefreshTokens_append_input {metadata?: (Scalars['jsonb'] | null)}


/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export interface authRefreshTokens_arr_rel_insert_input {data: authRefreshTokens_insert_input[],
/** upsert condition */
on_conflict?: (authRefreshTokens_on_conflict | null)}


/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export interface authRefreshTokens_bool_exp {_and?: (authRefreshTokens_bool_exp[] | null),_not?: (authRefreshTokens_bool_exp | null),_or?: (authRefreshTokens_bool_exp[] | null),createdAt?: (timestamptz_comparison_exp | null),expiresAt?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),refreshTokenHash?: (String_comparison_exp | null),refresh_token_type?: (authRefreshTokenTypes_bool_exp | null),type?: (authRefreshTokenTypes_enum_comparison_exp | null),user?: (users_bool_exp | null),userId?: (uuid_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface authRefreshTokens_delete_at_path_input {metadata?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface authRefreshTokens_delete_elem_input {metadata?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface authRefreshTokens_delete_key_input {metadata?: (Scalars['String'] | null)}


/** input type for inserting data into table "auth.refresh_tokens" */
export interface authRefreshTokens_insert_input {createdAt?: (Scalars['timestamptz'] | null),expiresAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),metadata?: (Scalars['jsonb'] | null),refreshTokenHash?: (Scalars['String'] | null),refresh_token_type?: (authRefreshTokenTypes_obj_rel_insert_input | null),type?: (authRefreshTokenTypes_enum | null),user?: (users_obj_rel_insert_input | null),userId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface authRefreshTokens_max_fieldsGenqlSelection{
    createdAt?: boolean | number
    expiresAt?: boolean | number
    id?: boolean | number
    refreshTokenHash?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "auth.refresh_tokens" */
export interface authRefreshTokens_max_order_by {createdAt?: (order_by | null),expiresAt?: (order_by | null),id?: (order_by | null),refreshTokenHash?: (order_by | null),userId?: (order_by | null)}


/** aggregate min on columns */
export interface authRefreshTokens_min_fieldsGenqlSelection{
    createdAt?: boolean | number
    expiresAt?: boolean | number
    id?: boolean | number
    refreshTokenHash?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "auth.refresh_tokens" */
export interface authRefreshTokens_min_order_by {createdAt?: (order_by | null),expiresAt?: (order_by | null),id?: (order_by | null),refreshTokenHash?: (order_by | null),userId?: (order_by | null)}


/** response of any mutation on the table "auth.refresh_tokens" */
export interface authRefreshTokens_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authRefreshTokensGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "auth.refresh_tokens" */
export interface authRefreshTokens_on_conflict {constraint: authRefreshTokens_constraint,update_columns?: authRefreshTokens_update_column[],where?: (authRefreshTokens_bool_exp | null)}


/** Ordering options when selecting data from "auth.refresh_tokens". */
export interface authRefreshTokens_order_by {createdAt?: (order_by | null),expiresAt?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),refreshTokenHash?: (order_by | null),refresh_token_type?: (authRefreshTokenTypes_order_by | null),type?: (order_by | null),user?: (users_order_by | null),userId?: (order_by | null)}


/** primary key columns input for table: auth.refresh_tokens */
export interface authRefreshTokens_pk_columns_input {id: Scalars['uuid']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface authRefreshTokens_prepend_input {metadata?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "auth.refresh_tokens" */
export interface authRefreshTokens_set_input {createdAt?: (Scalars['timestamptz'] | null),expiresAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),metadata?: (Scalars['jsonb'] | null),refreshTokenHash?: (Scalars['String'] | null),type?: (authRefreshTokenTypes_enum | null),userId?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "authRefreshTokens" */
export interface authRefreshTokens_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authRefreshTokens_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authRefreshTokens_stream_cursor_value_input {createdAt?: (Scalars['timestamptz'] | null),expiresAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),metadata?: (Scalars['jsonb'] | null),refreshTokenHash?: (Scalars['String'] | null),type?: (authRefreshTokenTypes_enum | null),userId?: (Scalars['uuid'] | null)}

export interface authRefreshTokens_updates {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (authRefreshTokens_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (authRefreshTokens_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (authRefreshTokens_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (authRefreshTokens_delete_key_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (authRefreshTokens_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (authRefreshTokens_set_input | null),
/** filter the rows which have to be updated */
where: authRefreshTokens_bool_exp}


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authRolesGenqlSelection{
    role?: boolean | number
    /** An array relationship */
    userRoles?: (authUserRolesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** An aggregate relationship */
    userRoles_aggregate?: (authUserRoles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** An array relationship */
    usersByDefaultRole?: (usersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** An aggregate relationship */
    usersByDefaultRole_aggregate?: (users_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.roles" */
export interface authRoles_aggregateGenqlSelection{
    aggregate?: authRoles_aggregate_fieldsGenqlSelection
    nodes?: authRolesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "auth.roles" */
export interface authRoles_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (authRoles_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authRoles_max_fieldsGenqlSelection
    min?: authRoles_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export interface authRoles_bool_exp {_and?: (authRoles_bool_exp[] | null),_not?: (authRoles_bool_exp | null),_or?: (authRoles_bool_exp[] | null),role?: (String_comparison_exp | null),userRoles?: (authUserRoles_bool_exp | null),userRoles_aggregate?: (authUserRoles_aggregate_bool_exp | null),usersByDefaultRole?: (users_bool_exp | null),usersByDefaultRole_aggregate?: (users_aggregate_bool_exp | null)}


/** input type for inserting data into table "auth.roles" */
export interface authRoles_insert_input {role?: (Scalars['String'] | null),userRoles?: (authUserRoles_arr_rel_insert_input | null),usersByDefaultRole?: (users_arr_rel_insert_input | null)}


/** aggregate max on columns */
export interface authRoles_max_fieldsGenqlSelection{
    role?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface authRoles_min_fieldsGenqlSelection{
    role?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "auth.roles" */
export interface authRoles_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authRolesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "auth.roles" */
export interface authRoles_obj_rel_insert_input {data: authRoles_insert_input,
/** upsert condition */
on_conflict?: (authRoles_on_conflict | null)}


/** on_conflict condition type for table "auth.roles" */
export interface authRoles_on_conflict {constraint: authRoles_constraint,update_columns?: authRoles_update_column[],where?: (authRoles_bool_exp | null)}


/** Ordering options when selecting data from "auth.roles". */
export interface authRoles_order_by {role?: (order_by | null),userRoles_aggregate?: (authUserRoles_aggregate_order_by | null),usersByDefaultRole_aggregate?: (users_aggregate_order_by | null)}


/** primary key columns input for table: auth.roles */
export interface authRoles_pk_columns_input {role: Scalars['String']}


/** input type for updating data in table "auth.roles" */
export interface authRoles_set_input {role?: (Scalars['String'] | null)}


/** Streaming cursor of the table "authRoles" */
export interface authRoles_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authRoles_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authRoles_stream_cursor_value_input {role?: (Scalars['String'] | null)}

export interface authRoles_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (authRoles_set_input | null),
/** filter the rows which have to be updated */
where: authRoles_bool_exp}


/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authUserProvidersGenqlSelection{
    accessToken?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    /** An object relationship */
    provider?: authProvidersGenqlSelection
    providerId?: boolean | number
    providerUserId?: boolean | number
    refreshToken?: boolean | number
    updatedAt?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.user_providers" */
export interface authUserProviders_aggregateGenqlSelection{
    aggregate?: authUserProviders_aggregate_fieldsGenqlSelection
    nodes?: authUserProvidersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface authUserProviders_aggregate_bool_exp {count?: (authUserProviders_aggregate_bool_exp_count | null)}

export interface authUserProviders_aggregate_bool_exp_count {arguments?: (authUserProviders_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (authUserProviders_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "auth.user_providers" */
export interface authUserProviders_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (authUserProviders_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authUserProviders_max_fieldsGenqlSelection
    min?: authUserProviders_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "auth.user_providers" */
export interface authUserProviders_aggregate_order_by {count?: (order_by | null),max?: (authUserProviders_max_order_by | null),min?: (authUserProviders_min_order_by | null)}


/** input type for inserting array relation for remote table "auth.user_providers" */
export interface authUserProviders_arr_rel_insert_input {data: authUserProviders_insert_input[],
/** upsert condition */
on_conflict?: (authUserProviders_on_conflict | null)}


/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export interface authUserProviders_bool_exp {_and?: (authUserProviders_bool_exp[] | null),_not?: (authUserProviders_bool_exp | null),_or?: (authUserProviders_bool_exp[] | null),accessToken?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),provider?: (authProviders_bool_exp | null),providerId?: (String_comparison_exp | null),providerUserId?: (String_comparison_exp | null),refreshToken?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null),userId?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "auth.user_providers" */
export interface authUserProviders_insert_input {accessToken?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),provider?: (authProviders_obj_rel_insert_input | null),providerId?: (Scalars['String'] | null),providerUserId?: (Scalars['String'] | null),refreshToken?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null),userId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface authUserProviders_max_fieldsGenqlSelection{
    accessToken?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    providerId?: boolean | number
    providerUserId?: boolean | number
    refreshToken?: boolean | number
    updatedAt?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "auth.user_providers" */
export interface authUserProviders_max_order_by {accessToken?: (order_by | null),createdAt?: (order_by | null),id?: (order_by | null),providerId?: (order_by | null),providerUserId?: (order_by | null),refreshToken?: (order_by | null),updatedAt?: (order_by | null),userId?: (order_by | null)}


/** aggregate min on columns */
export interface authUserProviders_min_fieldsGenqlSelection{
    accessToken?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    providerId?: boolean | number
    providerUserId?: boolean | number
    refreshToken?: boolean | number
    updatedAt?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "auth.user_providers" */
export interface authUserProviders_min_order_by {accessToken?: (order_by | null),createdAt?: (order_by | null),id?: (order_by | null),providerId?: (order_by | null),providerUserId?: (order_by | null),refreshToken?: (order_by | null),updatedAt?: (order_by | null),userId?: (order_by | null)}


/** response of any mutation on the table "auth.user_providers" */
export interface authUserProviders_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authUserProvidersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "auth.user_providers" */
export interface authUserProviders_on_conflict {constraint: authUserProviders_constraint,update_columns?: authUserProviders_update_column[],where?: (authUserProviders_bool_exp | null)}


/** Ordering options when selecting data from "auth.user_providers". */
export interface authUserProviders_order_by {accessToken?: (order_by | null),createdAt?: (order_by | null),id?: (order_by | null),provider?: (authProviders_order_by | null),providerId?: (order_by | null),providerUserId?: (order_by | null),refreshToken?: (order_by | null),updatedAt?: (order_by | null),user?: (users_order_by | null),userId?: (order_by | null)}


/** primary key columns input for table: auth.user_providers */
export interface authUserProviders_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "auth.user_providers" */
export interface authUserProviders_set_input {accessToken?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),providerId?: (Scalars['String'] | null),providerUserId?: (Scalars['String'] | null),refreshToken?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),userId?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "authUserProviders" */
export interface authUserProviders_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authUserProviders_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authUserProviders_stream_cursor_value_input {accessToken?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),providerId?: (Scalars['String'] | null),providerUserId?: (Scalars['String'] | null),refreshToken?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),userId?: (Scalars['uuid'] | null)}

export interface authUserProviders_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (authUserProviders_set_input | null),
/** filter the rows which have to be updated */
where: authUserProviders_bool_exp}


/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authUserRolesGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    role?: boolean | number
    /** An object relationship */
    roleByRole?: authRolesGenqlSelection
    /** An object relationship */
    user?: usersGenqlSelection
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.user_roles" */
export interface authUserRoles_aggregateGenqlSelection{
    aggregate?: authUserRoles_aggregate_fieldsGenqlSelection
    nodes?: authUserRolesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface authUserRoles_aggregate_bool_exp {count?: (authUserRoles_aggregate_bool_exp_count | null)}

export interface authUserRoles_aggregate_bool_exp_count {arguments?: (authUserRoles_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (authUserRoles_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "auth.user_roles" */
export interface authUserRoles_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (authUserRoles_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authUserRoles_max_fieldsGenqlSelection
    min?: authUserRoles_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "auth.user_roles" */
export interface authUserRoles_aggregate_order_by {count?: (order_by | null),max?: (authUserRoles_max_order_by | null),min?: (authUserRoles_min_order_by | null)}


/** input type for inserting array relation for remote table "auth.user_roles" */
export interface authUserRoles_arr_rel_insert_input {data: authUserRoles_insert_input[],
/** upsert condition */
on_conflict?: (authUserRoles_on_conflict | null)}


/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export interface authUserRoles_bool_exp {_and?: (authUserRoles_bool_exp[] | null),_not?: (authUserRoles_bool_exp | null),_or?: (authUserRoles_bool_exp[] | null),createdAt?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),role?: (String_comparison_exp | null),roleByRole?: (authRoles_bool_exp | null),user?: (users_bool_exp | null),userId?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "auth.user_roles" */
export interface authUserRoles_insert_input {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),role?: (Scalars['String'] | null),roleByRole?: (authRoles_obj_rel_insert_input | null),user?: (users_obj_rel_insert_input | null),userId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface authUserRoles_max_fieldsGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    role?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "auth.user_roles" */
export interface authUserRoles_max_order_by {createdAt?: (order_by | null),id?: (order_by | null),role?: (order_by | null),userId?: (order_by | null)}


/** aggregate min on columns */
export interface authUserRoles_min_fieldsGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    role?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "auth.user_roles" */
export interface authUserRoles_min_order_by {createdAt?: (order_by | null),id?: (order_by | null),role?: (order_by | null),userId?: (order_by | null)}


/** response of any mutation on the table "auth.user_roles" */
export interface authUserRoles_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authUserRolesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "auth.user_roles" */
export interface authUserRoles_on_conflict {constraint: authUserRoles_constraint,update_columns?: authUserRoles_update_column[],where?: (authUserRoles_bool_exp | null)}


/** Ordering options when selecting data from "auth.user_roles". */
export interface authUserRoles_order_by {createdAt?: (order_by | null),id?: (order_by | null),role?: (order_by | null),roleByRole?: (authRoles_order_by | null),user?: (users_order_by | null),userId?: (order_by | null)}


/** primary key columns input for table: auth.user_roles */
export interface authUserRoles_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "auth.user_roles" */
export interface authUserRoles_set_input {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),role?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "authUserRoles" */
export interface authUserRoles_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authUserRoles_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authUserRoles_stream_cursor_value_input {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),role?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null)}

export interface authUserRoles_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (authUserRoles_set_input | null),
/** filter the rows which have to be updated */
where: authUserRoles_bool_exp}


/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface authUserSecurityKeysGenqlSelection{
    counter?: boolean | number
    credentialId?: boolean | number
    credentialPublicKey?: boolean | number
    id?: boolean | number
    nickname?: boolean | number
    transports?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.user_security_keys" */
export interface authUserSecurityKeys_aggregateGenqlSelection{
    aggregate?: authUserSecurityKeys_aggregate_fieldsGenqlSelection
    nodes?: authUserSecurityKeysGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface authUserSecurityKeys_aggregate_bool_exp {count?: (authUserSecurityKeys_aggregate_bool_exp_count | null)}

export interface authUserSecurityKeys_aggregate_bool_exp_count {arguments?: (authUserSecurityKeys_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (authUserSecurityKeys_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "auth.user_security_keys" */
export interface authUserSecurityKeys_aggregate_fieldsGenqlSelection{
    avg?: authUserSecurityKeys_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (authUserSecurityKeys_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: authUserSecurityKeys_max_fieldsGenqlSelection
    min?: authUserSecurityKeys_min_fieldsGenqlSelection
    stddev?: authUserSecurityKeys_stddev_fieldsGenqlSelection
    stddev_pop?: authUserSecurityKeys_stddev_pop_fieldsGenqlSelection
    stddev_samp?: authUserSecurityKeys_stddev_samp_fieldsGenqlSelection
    sum?: authUserSecurityKeys_sum_fieldsGenqlSelection
    var_pop?: authUserSecurityKeys_var_pop_fieldsGenqlSelection
    var_samp?: authUserSecurityKeys_var_samp_fieldsGenqlSelection
    variance?: authUserSecurityKeys_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "auth.user_security_keys" */
export interface authUserSecurityKeys_aggregate_order_by {avg?: (authUserSecurityKeys_avg_order_by | null),count?: (order_by | null),max?: (authUserSecurityKeys_max_order_by | null),min?: (authUserSecurityKeys_min_order_by | null),stddev?: (authUserSecurityKeys_stddev_order_by | null),stddev_pop?: (authUserSecurityKeys_stddev_pop_order_by | null),stddev_samp?: (authUserSecurityKeys_stddev_samp_order_by | null),sum?: (authUserSecurityKeys_sum_order_by | null),var_pop?: (authUserSecurityKeys_var_pop_order_by | null),var_samp?: (authUserSecurityKeys_var_samp_order_by | null),variance?: (authUserSecurityKeys_variance_order_by | null)}


/** input type for inserting array relation for remote table "auth.user_security_keys" */
export interface authUserSecurityKeys_arr_rel_insert_input {data: authUserSecurityKeys_insert_input[],
/** upsert condition */
on_conflict?: (authUserSecurityKeys_on_conflict | null)}


/** aggregate avg on columns */
export interface authUserSecurityKeys_avg_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_avg_order_by {counter?: (order_by | null)}


/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export interface authUserSecurityKeys_bool_exp {_and?: (authUserSecurityKeys_bool_exp[] | null),_not?: (authUserSecurityKeys_bool_exp | null),_or?: (authUserSecurityKeys_bool_exp[] | null),counter?: (bigint_comparison_exp | null),credentialId?: (String_comparison_exp | null),credentialPublicKey?: (bytea_comparison_exp | null),id?: (uuid_comparison_exp | null),nickname?: (String_comparison_exp | null),transports?: (String_comparison_exp | null),user?: (users_bool_exp | null),userId?: (uuid_comparison_exp | null)}


/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export interface authUserSecurityKeys_inc_input {counter?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "auth.user_security_keys" */
export interface authUserSecurityKeys_insert_input {counter?: (Scalars['bigint'] | null),credentialId?: (Scalars['String'] | null),credentialPublicKey?: (Scalars['bytea'] | null),id?: (Scalars['uuid'] | null),nickname?: (Scalars['String'] | null),transports?: (Scalars['String'] | null),user?: (users_obj_rel_insert_input | null),userId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface authUserSecurityKeys_max_fieldsGenqlSelection{
    counter?: boolean | number
    credentialId?: boolean | number
    id?: boolean | number
    nickname?: boolean | number
    transports?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_max_order_by {counter?: (order_by | null),credentialId?: (order_by | null),id?: (order_by | null),nickname?: (order_by | null),transports?: (order_by | null),userId?: (order_by | null)}


/** aggregate min on columns */
export interface authUserSecurityKeys_min_fieldsGenqlSelection{
    counter?: boolean | number
    credentialId?: boolean | number
    id?: boolean | number
    nickname?: boolean | number
    transports?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_min_order_by {counter?: (order_by | null),credentialId?: (order_by | null),id?: (order_by | null),nickname?: (order_by | null),transports?: (order_by | null),userId?: (order_by | null)}


/** response of any mutation on the table "auth.user_security_keys" */
export interface authUserSecurityKeys_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: authUserSecurityKeysGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "auth.user_security_keys" */
export interface authUserSecurityKeys_on_conflict {constraint: authUserSecurityKeys_constraint,update_columns?: authUserSecurityKeys_update_column[],where?: (authUserSecurityKeys_bool_exp | null)}


/** Ordering options when selecting data from "auth.user_security_keys". */
export interface authUserSecurityKeys_order_by {counter?: (order_by | null),credentialId?: (order_by | null),credentialPublicKey?: (order_by | null),id?: (order_by | null),nickname?: (order_by | null),transports?: (order_by | null),user?: (users_order_by | null),userId?: (order_by | null)}


/** primary key columns input for table: auth.user_security_keys */
export interface authUserSecurityKeys_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "auth.user_security_keys" */
export interface authUserSecurityKeys_set_input {counter?: (Scalars['bigint'] | null),credentialId?: (Scalars['String'] | null),credentialPublicKey?: (Scalars['bytea'] | null),id?: (Scalars['uuid'] | null),nickname?: (Scalars['String'] | null),transports?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null)}


/** aggregate stddev on columns */
export interface authUserSecurityKeys_stddev_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_stddev_order_by {counter?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface authUserSecurityKeys_stddev_pop_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_stddev_pop_order_by {counter?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface authUserSecurityKeys_stddev_samp_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_stddev_samp_order_by {counter?: (order_by | null)}


/** Streaming cursor of the table "authUserSecurityKeys" */
export interface authUserSecurityKeys_stream_cursor_input {
/** Stream column input with initial value */
initial_value: authUserSecurityKeys_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface authUserSecurityKeys_stream_cursor_value_input {counter?: (Scalars['bigint'] | null),credentialId?: (Scalars['String'] | null),credentialPublicKey?: (Scalars['bytea'] | null),id?: (Scalars['uuid'] | null),nickname?: (Scalars['String'] | null),transports?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null)}


/** aggregate sum on columns */
export interface authUserSecurityKeys_sum_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_sum_order_by {counter?: (order_by | null)}

export interface authUserSecurityKeys_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (authUserSecurityKeys_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (authUserSecurityKeys_set_input | null),
/** filter the rows which have to be updated */
where: authUserSecurityKeys_bool_exp}


/** aggregate var_pop on columns */
export interface authUserSecurityKeys_var_pop_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_var_pop_order_by {counter?: (order_by | null)}


/** aggregate var_samp on columns */
export interface authUserSecurityKeys_var_samp_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_var_samp_order_by {counter?: (order_by | null)}


/** aggregate variance on columns */
export interface authUserSecurityKeys_variance_fieldsGenqlSelection{
    counter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "auth.user_security_keys" */
export interface authUserSecurityKeys_variance_order_by {counter?: (order_by | null)}


/** Internal table for tracking migrations. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface auth_migrationsGenqlSelection{
    executed_at?: boolean | number
    hash?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.migrations" */
export interface auth_migrations_aggregateGenqlSelection{
    aggregate?: auth_migrations_aggregate_fieldsGenqlSelection
    nodes?: auth_migrationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "auth.migrations" */
export interface auth_migrations_aggregate_fieldsGenqlSelection{
    avg?: auth_migrations_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (auth_migrations_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: auth_migrations_max_fieldsGenqlSelection
    min?: auth_migrations_min_fieldsGenqlSelection
    stddev?: auth_migrations_stddev_fieldsGenqlSelection
    stddev_pop?: auth_migrations_stddev_pop_fieldsGenqlSelection
    stddev_samp?: auth_migrations_stddev_samp_fieldsGenqlSelection
    sum?: auth_migrations_sum_fieldsGenqlSelection
    var_pop?: auth_migrations_var_pop_fieldsGenqlSelection
    var_samp?: auth_migrations_var_samp_fieldsGenqlSelection
    variance?: auth_migrations_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface auth_migrations_avg_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "auth.migrations". All fields are combined with a logical 'AND'. */
export interface auth_migrations_bool_exp {_and?: (auth_migrations_bool_exp[] | null),_not?: (auth_migrations_bool_exp | null),_or?: (auth_migrations_bool_exp[] | null),executed_at?: (timestamp_comparison_exp | null),hash?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "auth.migrations" */
export interface auth_migrations_inc_input {id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "auth.migrations" */
export interface auth_migrations_insert_input {executed_at?: (Scalars['timestamp'] | null),hash?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface auth_migrations_max_fieldsGenqlSelection{
    executed_at?: boolean | number
    hash?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface auth_migrations_min_fieldsGenqlSelection{
    executed_at?: boolean | number
    hash?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "auth.migrations" */
export interface auth_migrations_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: auth_migrationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "auth.migrations" */
export interface auth_migrations_on_conflict {constraint: auth_migrations_constraint,update_columns?: auth_migrations_update_column[],where?: (auth_migrations_bool_exp | null)}


/** Ordering options when selecting data from "auth.migrations". */
export interface auth_migrations_order_by {executed_at?: (order_by | null),hash?: (order_by | null),id?: (order_by | null),name?: (order_by | null)}


/** primary key columns input for table: auth.migrations */
export interface auth_migrations_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "auth.migrations" */
export interface auth_migrations_set_input {executed_at?: (Scalars['timestamp'] | null),hash?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface auth_migrations_stddev_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface auth_migrations_stddev_pop_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface auth_migrations_stddev_samp_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "auth_migrations" */
export interface auth_migrations_stream_cursor_input {
/** Stream column input with initial value */
initial_value: auth_migrations_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface auth_migrations_stream_cursor_value_input {executed_at?: (Scalars['timestamp'] | null),hash?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface auth_migrations_sum_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface auth_migrations_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (auth_migrations_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (auth_migrations_set_input | null),
/** filter the rows which have to be updated */
where: auth_migrations_bool_exp}


/** aggregate var_pop on columns */
export interface auth_migrations_var_pop_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface auth_migrations_var_samp_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface auth_migrations_variance_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "storage.buckets" */
export interface bucketsGenqlSelection{
    cacheControl?: boolean | number
    createdAt?: boolean | number
    downloadExpiration?: boolean | number
    /** An array relationship */
    files?: (filesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (files_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (files_order_by[] | null), 
    /** filter the rows returned */
    where?: (files_bool_exp | null)} })
    /** An aggregate relationship */
    files_aggregate?: (files_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (files_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (files_order_by[] | null), 
    /** filter the rows returned */
    where?: (files_bool_exp | null)} })
    id?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    presignedUrlsEnabled?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "storage.buckets" */
export interface buckets_aggregateGenqlSelection{
    aggregate?: buckets_aggregate_fieldsGenqlSelection
    nodes?: bucketsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "storage.buckets" */
export interface buckets_aggregate_fieldsGenqlSelection{
    avg?: buckets_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (buckets_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: buckets_max_fieldsGenqlSelection
    min?: buckets_min_fieldsGenqlSelection
    stddev?: buckets_stddev_fieldsGenqlSelection
    stddev_pop?: buckets_stddev_pop_fieldsGenqlSelection
    stddev_samp?: buckets_stddev_samp_fieldsGenqlSelection
    sum?: buckets_sum_fieldsGenqlSelection
    var_pop?: buckets_var_pop_fieldsGenqlSelection
    var_samp?: buckets_var_samp_fieldsGenqlSelection
    variance?: buckets_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface buckets_avg_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export interface buckets_bool_exp {_and?: (buckets_bool_exp[] | null),_not?: (buckets_bool_exp | null),_or?: (buckets_bool_exp[] | null),cacheControl?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),downloadExpiration?: (Int_comparison_exp | null),files?: (files_bool_exp | null),files_aggregate?: (files_aggregate_bool_exp | null),id?: (String_comparison_exp | null),maxUploadFileSize?: (Int_comparison_exp | null),minUploadFileSize?: (Int_comparison_exp | null),presignedUrlsEnabled?: (Boolean_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "storage.buckets" */
export interface buckets_inc_input {downloadExpiration?: (Scalars['Int'] | null),maxUploadFileSize?: (Scalars['Int'] | null),minUploadFileSize?: (Scalars['Int'] | null)}


/** input type for inserting data into table "storage.buckets" */
export interface buckets_insert_input {cacheControl?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),downloadExpiration?: (Scalars['Int'] | null),files?: (files_arr_rel_insert_input | null),id?: (Scalars['String'] | null),maxUploadFileSize?: (Scalars['Int'] | null),minUploadFileSize?: (Scalars['Int'] | null),presignedUrlsEnabled?: (Scalars['Boolean'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface buckets_max_fieldsGenqlSelection{
    cacheControl?: boolean | number
    createdAt?: boolean | number
    downloadExpiration?: boolean | number
    id?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface buckets_min_fieldsGenqlSelection{
    cacheControl?: boolean | number
    createdAt?: boolean | number
    downloadExpiration?: boolean | number
    id?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "storage.buckets" */
export interface buckets_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: bucketsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "storage.buckets" */
export interface buckets_obj_rel_insert_input {data: buckets_insert_input,
/** upsert condition */
on_conflict?: (buckets_on_conflict | null)}


/** on_conflict condition type for table "storage.buckets" */
export interface buckets_on_conflict {constraint: buckets_constraint,update_columns?: buckets_update_column[],where?: (buckets_bool_exp | null)}


/** Ordering options when selecting data from "storage.buckets". */
export interface buckets_order_by {cacheControl?: (order_by | null),createdAt?: (order_by | null),downloadExpiration?: (order_by | null),files_aggregate?: (files_aggregate_order_by | null),id?: (order_by | null),maxUploadFileSize?: (order_by | null),minUploadFileSize?: (order_by | null),presignedUrlsEnabled?: (order_by | null),updatedAt?: (order_by | null)}


/** primary key columns input for table: storage.buckets */
export interface buckets_pk_columns_input {id: Scalars['String']}


/** input type for updating data in table "storage.buckets" */
export interface buckets_set_input {cacheControl?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),downloadExpiration?: (Scalars['Int'] | null),id?: (Scalars['String'] | null),maxUploadFileSize?: (Scalars['Int'] | null),minUploadFileSize?: (Scalars['Int'] | null),presignedUrlsEnabled?: (Scalars['Boolean'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface buckets_stddev_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface buckets_stddev_pop_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface buckets_stddev_samp_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "buckets" */
export interface buckets_stream_cursor_input {
/** Stream column input with initial value */
initial_value: buckets_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface buckets_stream_cursor_value_input {cacheControl?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),downloadExpiration?: (Scalars['Int'] | null),id?: (Scalars['String'] | null),maxUploadFileSize?: (Scalars['Int'] | null),minUploadFileSize?: (Scalars['Int'] | null),presignedUrlsEnabled?: (Scalars['Boolean'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface buckets_sum_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface buckets_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (buckets_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (buckets_set_input | null),
/** filter the rows which have to be updated */
where: buckets_bool_exp}


/** aggregate var_pop on columns */
export interface buckets_var_pop_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface buckets_var_samp_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface buckets_variance_fieldsGenqlSelection{
    downloadExpiration?: boolean | number
    maxUploadFileSize?: boolean | number
    minUploadFileSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export interface bytea_comparison_exp {_eq?: (Scalars['bytea'] | null),_gt?: (Scalars['bytea'] | null),_gte?: (Scalars['bytea'] | null),_in?: (Scalars['bytea'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bytea'] | null),_lte?: (Scalars['bytea'] | null),_neq?: (Scalars['bytea'] | null),_nin?: (Scalars['bytea'][] | null)}


/** columns and relationships of "campaign_file" */
export interface campaign_fileGenqlSelection{
    campaign_id?: boolean | number
    created_at?: boolean | number
    /** An object relationship */
    file?: filesGenqlSelection
    file_id?: boolean | number
    id?: boolean | number
    /** An object relationship */
    partner?: partnerGenqlSelection
    /** An object relationship */
    partner_campaign?: partner_campaignGenqlSelection
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "campaign_file" */
export interface campaign_file_aggregateGenqlSelection{
    aggregate?: campaign_file_aggregate_fieldsGenqlSelection
    nodes?: campaign_fileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface campaign_file_aggregate_bool_exp {count?: (campaign_file_aggregate_bool_exp_count | null)}

export interface campaign_file_aggregate_bool_exp_count {arguments?: (campaign_file_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (campaign_file_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "campaign_file" */
export interface campaign_file_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (campaign_file_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: campaign_file_max_fieldsGenqlSelection
    min?: campaign_file_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "campaign_file" */
export interface campaign_file_aggregate_order_by {count?: (order_by | null),max?: (campaign_file_max_order_by | null),min?: (campaign_file_min_order_by | null)}


/** input type for inserting array relation for remote table "campaign_file" */
export interface campaign_file_arr_rel_insert_input {data: campaign_file_insert_input[],
/** upsert condition */
on_conflict?: (campaign_file_on_conflict | null)}


/** Boolean expression to filter rows from the table "campaign_file". All fields are combined with a logical 'AND'. */
export interface campaign_file_bool_exp {_and?: (campaign_file_bool_exp[] | null),_not?: (campaign_file_bool_exp | null),_or?: (campaign_file_bool_exp[] | null),campaign_id?: (uuid_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),file?: (files_bool_exp | null),file_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),partner?: (partner_bool_exp | null),partner_campaign?: (partner_campaign_bool_exp | null),partner_id?: (uuid_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "campaign_file" */
export interface campaign_file_insert_input {campaign_id?: (Scalars['uuid'] | null),created_at?: (Scalars['timestamptz'] | null),file?: (files_obj_rel_insert_input | null),file_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),partner?: (partner_obj_rel_insert_input | null),partner_campaign?: (partner_campaign_obj_rel_insert_input | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface campaign_file_max_fieldsGenqlSelection{
    campaign_id?: boolean | number
    created_at?: boolean | number
    file_id?: boolean | number
    id?: boolean | number
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "campaign_file" */
export interface campaign_file_max_order_by {campaign_id?: (order_by | null),created_at?: (order_by | null),file_id?: (order_by | null),id?: (order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface campaign_file_min_fieldsGenqlSelection{
    campaign_id?: boolean | number
    created_at?: boolean | number
    file_id?: boolean | number
    id?: boolean | number
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "campaign_file" */
export interface campaign_file_min_order_by {campaign_id?: (order_by | null),created_at?: (order_by | null),file_id?: (order_by | null),id?: (order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "campaign_file" */
export interface campaign_file_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: campaign_fileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "campaign_file" */
export interface campaign_file_on_conflict {constraint: campaign_file_constraint,update_columns?: campaign_file_update_column[],where?: (campaign_file_bool_exp | null)}


/** Ordering options when selecting data from "campaign_file". */
export interface campaign_file_order_by {campaign_id?: (order_by | null),created_at?: (order_by | null),file?: (files_order_by | null),file_id?: (order_by | null),id?: (order_by | null),partner?: (partner_order_by | null),partner_campaign?: (partner_campaign_order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: campaign_file */
export interface campaign_file_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "campaign_file" */
export interface campaign_file_set_input {campaign_id?: (Scalars['uuid'] | null),created_at?: (Scalars['timestamptz'] | null),file_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "campaign_file" */
export interface campaign_file_stream_cursor_input {
/** Stream column input with initial value */
initial_value: campaign_file_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface campaign_file_stream_cursor_value_input {campaign_id?: (Scalars['uuid'] | null),created_at?: (Scalars['timestamptz'] | null),file_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface campaign_file_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (campaign_file_set_input | null),
/** filter the rows which have to be updated */
where: campaign_file_bool_exp}


/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export interface citext_comparison_exp {_eq?: (Scalars['citext'] | null),_gt?: (Scalars['citext'] | null),_gte?: (Scalars['citext'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['citext'] | null),_in?: (Scalars['citext'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['citext'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['citext'] | null),_lt?: (Scalars['citext'] | null),_lte?: (Scalars['citext'] | null),_neq?: (Scalars['citext'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['citext'] | null),_nin?: (Scalars['citext'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['citext'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['citext'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['citext'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['citext'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['citext'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['citext'] | null)}


/** columns and relationships of "en_currencies" */
export interface en_currenciesGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    payments?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An aggregate relationship */
    payments_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_currencies" */
export interface en_currencies_aggregateGenqlSelection{
    aggregate?: en_currencies_aggregate_fieldsGenqlSelection
    nodes?: en_currenciesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_currencies" */
export interface en_currencies_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_currencies_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_currencies_max_fieldsGenqlSelection
    min?: en_currencies_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_currencies". All fields are combined with a logical 'AND'. */
export interface en_currencies_bool_exp {_and?: (en_currencies_bool_exp[] | null),_not?: (en_currencies_bool_exp | null),_or?: (en_currencies_bool_exp[] | null),description?: (String_comparison_exp | null),payments?: (payment_bool_exp | null),payments_aggregate?: (payment_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_currencies_enum". All fields are combined with logical 'AND'. */
export interface en_currencies_enum_comparison_exp {_eq?: (en_currencies_enum | null),_in?: (en_currencies_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_currencies_enum | null),_nin?: (en_currencies_enum[] | null)}


/** input type for inserting data into table "en_currencies" */
export interface en_currencies_insert_input {description?: (Scalars['String'] | null),payments?: (payment_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_currencies_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_currencies_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_currencies" */
export interface en_currencies_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_currenciesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_currencies" */
export interface en_currencies_obj_rel_insert_input {data: en_currencies_insert_input,
/** upsert condition */
on_conflict?: (en_currencies_on_conflict | null)}


/** on_conflict condition type for table "en_currencies" */
export interface en_currencies_on_conflict {constraint: en_currencies_constraint,update_columns?: en_currencies_update_column[],where?: (en_currencies_bool_exp | null)}


/** Ordering options when selecting data from "en_currencies". */
export interface en_currencies_order_by {description?: (order_by | null),payments_aggregate?: (payment_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_currencies */
export interface en_currencies_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_currencies" */
export interface en_currencies_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_currencies" */
export interface en_currencies_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_currencies_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_currencies_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_currencies_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_currencies_set_input | null),
/** filter the rows which have to be updated */
where: en_currencies_bool_exp}


/** columns and relationships of "en_notifications" */
export interface en_notificationsGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    invites?: (invitationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An aggregate relationship */
    invites_aggregate?: (invitation_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An array relationship */
    notifications?: (notificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** An aggregate relationship */
    notifications_aggregate?: (notification_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_notifications" */
export interface en_notifications_aggregateGenqlSelection{
    aggregate?: en_notifications_aggregate_fieldsGenqlSelection
    nodes?: en_notificationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_notifications" */
export interface en_notifications_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_notifications_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_notifications_max_fieldsGenqlSelection
    min?: en_notifications_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_notifications". All fields are combined with a logical 'AND'. */
export interface en_notifications_bool_exp {_and?: (en_notifications_bool_exp[] | null),_not?: (en_notifications_bool_exp | null),_or?: (en_notifications_bool_exp[] | null),description?: (String_comparison_exp | null),invites?: (invitation_bool_exp | null),invites_aggregate?: (invitation_aggregate_bool_exp | null),notifications?: (notification_bool_exp | null),notifications_aggregate?: (notification_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_notifications_enum". All fields are combined with logical 'AND'. */
export interface en_notifications_enum_comparison_exp {_eq?: (en_notifications_enum | null),_in?: (en_notifications_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_notifications_enum | null),_nin?: (en_notifications_enum[] | null)}


/** input type for inserting data into table "en_notifications" */
export interface en_notifications_insert_input {description?: (Scalars['String'] | null),invites?: (invitation_arr_rel_insert_input | null),notifications?: (notification_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_notifications_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_notifications_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_notifications" */
export interface en_notifications_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_notificationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_notifications" */
export interface en_notifications_obj_rel_insert_input {data: en_notifications_insert_input,
/** upsert condition */
on_conflict?: (en_notifications_on_conflict | null)}


/** on_conflict condition type for table "en_notifications" */
export interface en_notifications_on_conflict {constraint: en_notifications_constraint,update_columns?: en_notifications_update_column[],where?: (en_notifications_bool_exp | null)}


/** Ordering options when selecting data from "en_notifications". */
export interface en_notifications_order_by {description?: (order_by | null),invites_aggregate?: (invitation_aggregate_order_by | null),notifications_aggregate?: (notification_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_notifications */
export interface en_notifications_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_notifications" */
export interface en_notifications_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_notifications" */
export interface en_notifications_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_notifications_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_notifications_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_notifications_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_notifications_set_input | null),
/** filter the rows which have to be updated */
where: en_notifications_bool_exp}


/** columns and relationships of "en_partner_steps" */
export interface en_partner_stepsGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    partners?: (partnerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_bool_exp | null)} })
    /** An aggregate relationship */
    partners_aggregate?: (partner_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_partner_steps" */
export interface en_partner_steps_aggregateGenqlSelection{
    aggregate?: en_partner_steps_aggregate_fieldsGenqlSelection
    nodes?: en_partner_stepsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_partner_steps" */
export interface en_partner_steps_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_partner_steps_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_partner_steps_max_fieldsGenqlSelection
    min?: en_partner_steps_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_partner_steps". All fields are combined with a logical 'AND'. */
export interface en_partner_steps_bool_exp {_and?: (en_partner_steps_bool_exp[] | null),_not?: (en_partner_steps_bool_exp | null),_or?: (en_partner_steps_bool_exp[] | null),description?: (String_comparison_exp | null),partners?: (partner_bool_exp | null),partners_aggregate?: (partner_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_partner_steps_enum". All fields are combined with logical 'AND'. */
export interface en_partner_steps_enum_comparison_exp {_eq?: (en_partner_steps_enum | null),_in?: (en_partner_steps_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_partner_steps_enum | null),_nin?: (en_partner_steps_enum[] | null)}


/** input type for inserting data into table "en_partner_steps" */
export interface en_partner_steps_insert_input {description?: (Scalars['String'] | null),partners?: (partner_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_partner_steps_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_partner_steps_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_partner_steps" */
export interface en_partner_steps_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_partner_stepsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_partner_steps" */
export interface en_partner_steps_obj_rel_insert_input {data: en_partner_steps_insert_input,
/** upsert condition */
on_conflict?: (en_partner_steps_on_conflict | null)}


/** on_conflict condition type for table "en_partner_steps" */
export interface en_partner_steps_on_conflict {constraint: en_partner_steps_constraint,update_columns?: en_partner_steps_update_column[],where?: (en_partner_steps_bool_exp | null)}


/** Ordering options when selecting data from "en_partner_steps". */
export interface en_partner_steps_order_by {description?: (order_by | null),partners_aggregate?: (partner_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_partner_steps */
export interface en_partner_steps_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_partner_steps" */
export interface en_partner_steps_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_partner_steps" */
export interface en_partner_steps_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_partner_steps_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_partner_steps_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_partner_steps_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_partner_steps_set_input | null),
/** filter the rows which have to be updated */
where: en_partner_steps_bool_exp}


/** columns and relationships of "en_payment_providers" */
export interface en_payment_providersGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    payments?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An aggregate relationship */
    payments_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_payment_providers" */
export interface en_payment_providers_aggregateGenqlSelection{
    aggregate?: en_payment_providers_aggregate_fieldsGenqlSelection
    nodes?: en_payment_providersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_payment_providers" */
export interface en_payment_providers_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_payment_providers_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_payment_providers_max_fieldsGenqlSelection
    min?: en_payment_providers_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_payment_providers". All fields are combined with a logical 'AND'. */
export interface en_payment_providers_bool_exp {_and?: (en_payment_providers_bool_exp[] | null),_not?: (en_payment_providers_bool_exp | null),_or?: (en_payment_providers_bool_exp[] | null),description?: (String_comparison_exp | null),payments?: (payment_bool_exp | null),payments_aggregate?: (payment_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_payment_providers_enum". All fields are combined with logical 'AND'. */
export interface en_payment_providers_enum_comparison_exp {_eq?: (en_payment_providers_enum | null),_in?: (en_payment_providers_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_payment_providers_enum | null),_nin?: (en_payment_providers_enum[] | null)}


/** input type for inserting data into table "en_payment_providers" */
export interface en_payment_providers_insert_input {description?: (Scalars['String'] | null),payments?: (payment_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_payment_providers_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_payment_providers_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_payment_providers" */
export interface en_payment_providers_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_payment_providersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_payment_providers" */
export interface en_payment_providers_obj_rel_insert_input {data: en_payment_providers_insert_input,
/** upsert condition */
on_conflict?: (en_payment_providers_on_conflict | null)}


/** on_conflict condition type for table "en_payment_providers" */
export interface en_payment_providers_on_conflict {constraint: en_payment_providers_constraint,update_columns?: en_payment_providers_update_column[],where?: (en_payment_providers_bool_exp | null)}


/** Ordering options when selecting data from "en_payment_providers". */
export interface en_payment_providers_order_by {description?: (order_by | null),payments_aggregate?: (payment_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_payment_providers */
export interface en_payment_providers_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_payment_providers" */
export interface en_payment_providers_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_payment_providers" */
export interface en_payment_providers_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_payment_providers_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_payment_providers_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_payment_providers_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_payment_providers_set_input | null),
/** filter the rows which have to be updated */
where: en_payment_providers_bool_exp}


/** columns and relationships of "en_permissions" */
export interface en_permissionsGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    payment_permissions?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An aggregate relationship */
    payment_permissions_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_permissions" */
export interface en_permissions_aggregateGenqlSelection{
    aggregate?: en_permissions_aggregate_fieldsGenqlSelection
    nodes?: en_permissionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_permissions" */
export interface en_permissions_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_permissions_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_permissions_max_fieldsGenqlSelection
    min?: en_permissions_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_permissions". All fields are combined with a logical 'AND'. */
export interface en_permissions_bool_exp {_and?: (en_permissions_bool_exp[] | null),_not?: (en_permissions_bool_exp | null),_or?: (en_permissions_bool_exp[] | null),description?: (String_comparison_exp | null),payment_permissions?: (payment_review_bool_exp | null),payment_permissions_aggregate?: (payment_review_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_permissions_enum". All fields are combined with logical 'AND'. */
export interface en_permissions_enum_comparison_exp {_eq?: (en_permissions_enum | null),_in?: (en_permissions_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_permissions_enum | null),_nin?: (en_permissions_enum[] | null)}


/** input type for inserting data into table "en_permissions" */
export interface en_permissions_insert_input {description?: (Scalars['String'] | null),payment_permissions?: (payment_review_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_permissions_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_permissions_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_permissions" */
export interface en_permissions_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_permissionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_permissions" */
export interface en_permissions_obj_rel_insert_input {data: en_permissions_insert_input,
/** upsert condition */
on_conflict?: (en_permissions_on_conflict | null)}


/** on_conflict condition type for table "en_permissions" */
export interface en_permissions_on_conflict {constraint: en_permissions_constraint,update_columns?: en_permissions_update_column[],where?: (en_permissions_bool_exp | null)}


/** Ordering options when selecting data from "en_permissions". */
export interface en_permissions_order_by {description?: (order_by | null),payment_permissions_aggregate?: (payment_review_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_permissions */
export interface en_permissions_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_permissions" */
export interface en_permissions_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_permissions" */
export interface en_permissions_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_permissions_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_permissions_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_permissions_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_permissions_set_input | null),
/** filter the rows which have to be updated */
where: en_permissions_bool_exp}


/** columns and relationships of "en_recurrencies" */
export interface en_recurrenciesGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    groups?: (groupGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** An aggregate relationship */
    groups_aggregate?: (group_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** An array relationship */
    members?: (memberGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** An aggregate relationship */
    members_aggregate?: (member_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_recurrencies" */
export interface en_recurrencies_aggregateGenqlSelection{
    aggregate?: en_recurrencies_aggregate_fieldsGenqlSelection
    nodes?: en_recurrenciesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_recurrencies" */
export interface en_recurrencies_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_recurrencies_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_recurrencies_max_fieldsGenqlSelection
    min?: en_recurrencies_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_recurrencies". All fields are combined with a logical 'AND'. */
export interface en_recurrencies_bool_exp {_and?: (en_recurrencies_bool_exp[] | null),_not?: (en_recurrencies_bool_exp | null),_or?: (en_recurrencies_bool_exp[] | null),description?: (String_comparison_exp | null),groups?: (group_bool_exp | null),groups_aggregate?: (group_aggregate_bool_exp | null),members?: (member_bool_exp | null),members_aggregate?: (member_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_recurrencies_enum". All fields are combined with logical 'AND'. */
export interface en_recurrencies_enum_comparison_exp {_eq?: (en_recurrencies_enum | null),_in?: (en_recurrencies_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_recurrencies_enum | null),_nin?: (en_recurrencies_enum[] | null)}


/** input type for inserting data into table "en_recurrencies" */
export interface en_recurrencies_insert_input {description?: (Scalars['String'] | null),groups?: (group_arr_rel_insert_input | null),members?: (member_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_recurrencies_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_recurrencies_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_recurrencies" */
export interface en_recurrencies_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_recurrenciesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_recurrencies" */
export interface en_recurrencies_obj_rel_insert_input {data: en_recurrencies_insert_input,
/** upsert condition */
on_conflict?: (en_recurrencies_on_conflict | null)}


/** on_conflict condition type for table "en_recurrencies" */
export interface en_recurrencies_on_conflict {constraint: en_recurrencies_constraint,update_columns?: en_recurrencies_update_column[],where?: (en_recurrencies_bool_exp | null)}


/** Ordering options when selecting data from "en_recurrencies". */
export interface en_recurrencies_order_by {description?: (order_by | null),groups_aggregate?: (group_aggregate_order_by | null),members_aggregate?: (member_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_recurrencies */
export interface en_recurrencies_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_recurrencies" */
export interface en_recurrencies_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_recurrencies" */
export interface en_recurrencies_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_recurrencies_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_recurrencies_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_recurrencies_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_recurrencies_set_input | null),
/** filter the rows which have to be updated */
where: en_recurrencies_bool_exp}


/** columns and relationships of "en_statuses" */
export interface en_statusesGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    invites?: (invitationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An aggregate relationship */
    invites_aggregate?: (invitation_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An array relationship */
    notifications?: (notificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** An aggregate relationship */
    notifications_aggregate?: (notification_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** An array relationship */
    payments?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An aggregate relationship */
    payments_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_statuses" */
export interface en_statuses_aggregateGenqlSelection{
    aggregate?: en_statuses_aggregate_fieldsGenqlSelection
    nodes?: en_statusesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_statuses" */
export interface en_statuses_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_statuses_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_statuses_max_fieldsGenqlSelection
    min?: en_statuses_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_statuses". All fields are combined with a logical 'AND'. */
export interface en_statuses_bool_exp {_and?: (en_statuses_bool_exp[] | null),_not?: (en_statuses_bool_exp | null),_or?: (en_statuses_bool_exp[] | null),description?: (String_comparison_exp | null),invites?: (invitation_bool_exp | null),invites_aggregate?: (invitation_aggregate_bool_exp | null),notifications?: (notification_bool_exp | null),notifications_aggregate?: (notification_aggregate_bool_exp | null),payments?: (payment_bool_exp | null),payments_aggregate?: (payment_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_statuses_enum". All fields are combined with logical 'AND'. */
export interface en_statuses_enum_comparison_exp {_eq?: (en_statuses_enum | null),_in?: (en_statuses_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_statuses_enum | null),_nin?: (en_statuses_enum[] | null)}


/** input type for inserting data into table "en_statuses" */
export interface en_statuses_insert_input {description?: (Scalars['String'] | null),invites?: (invitation_arr_rel_insert_input | null),notifications?: (notification_arr_rel_insert_input | null),payments?: (payment_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_statuses_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_statuses_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_statuses" */
export interface en_statuses_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_statusesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_statuses" */
export interface en_statuses_obj_rel_insert_input {data: en_statuses_insert_input,
/** upsert condition */
on_conflict?: (en_statuses_on_conflict | null)}


/** on_conflict condition type for table "en_statuses" */
export interface en_statuses_on_conflict {constraint: en_statuses_constraint,update_columns?: en_statuses_update_column[],where?: (en_statuses_bool_exp | null)}


/** Ordering options when selecting data from "en_statuses". */
export interface en_statuses_order_by {description?: (order_by | null),invites_aggregate?: (invitation_aggregate_order_by | null),notifications_aggregate?: (notification_aggregate_order_by | null),payments_aggregate?: (payment_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_statuses */
export interface en_statuses_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_statuses" */
export interface en_statuses_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_statuses" */
export interface en_statuses_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_statuses_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_statuses_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_statuses_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_statuses_set_input | null),
/** filter the rows which have to be updated */
where: en_statuses_bool_exp}


/** columns and relationships of "en_trans_types" */
export interface en_trans_typesGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    payments?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An aggregate relationship */
    payments_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "en_trans_types" */
export interface en_trans_types_aggregateGenqlSelection{
    aggregate?: en_trans_types_aggregate_fieldsGenqlSelection
    nodes?: en_trans_typesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "en_trans_types" */
export interface en_trans_types_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (en_trans_types_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: en_trans_types_max_fieldsGenqlSelection
    min?: en_trans_types_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "en_trans_types". All fields are combined with a logical 'AND'. */
export interface en_trans_types_bool_exp {_and?: (en_trans_types_bool_exp[] | null),_not?: (en_trans_types_bool_exp | null),_or?: (en_trans_types_bool_exp[] | null),description?: (String_comparison_exp | null),payments?: (payment_bool_exp | null),payments_aggregate?: (payment_aggregate_bool_exp | null),value?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "en_trans_types_enum". All fields are combined with logical 'AND'. */
export interface en_trans_types_enum_comparison_exp {_eq?: (en_trans_types_enum | null),_in?: (en_trans_types_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (en_trans_types_enum | null),_nin?: (en_trans_types_enum[] | null)}


/** input type for inserting data into table "en_trans_types" */
export interface en_trans_types_insert_input {description?: (Scalars['String'] | null),payments?: (payment_arr_rel_insert_input | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface en_trans_types_max_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface en_trans_types_min_fieldsGenqlSelection{
    description?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "en_trans_types" */
export interface en_trans_types_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: en_trans_typesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "en_trans_types" */
export interface en_trans_types_obj_rel_insert_input {data: en_trans_types_insert_input,
/** upsert condition */
on_conflict?: (en_trans_types_on_conflict | null)}


/** on_conflict condition type for table "en_trans_types" */
export interface en_trans_types_on_conflict {constraint: en_trans_types_constraint,update_columns?: en_trans_types_update_column[],where?: (en_trans_types_bool_exp | null)}


/** Ordering options when selecting data from "en_trans_types". */
export interface en_trans_types_order_by {description?: (order_by | null),payments_aggregate?: (payment_aggregate_order_by | null),value?: (order_by | null)}


/** primary key columns input for table: en_trans_types */
export interface en_trans_types_pk_columns_input {value: Scalars['String']}


/** input type for updating data in table "en_trans_types" */
export interface en_trans_types_set_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "en_trans_types" */
export interface en_trans_types_stream_cursor_input {
/** Stream column input with initial value */
initial_value: en_trans_types_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface en_trans_types_stream_cursor_value_input {description?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface en_trans_types_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (en_trans_types_set_input | null),
/** filter the rows which have to be updated */
where: en_trans_types_bool_exp}


/** columns and relationships of "storage.files" */
export interface filesGenqlSelection{
    /** An object relationship */
    bucket?: bucketsGenqlSelection
    bucketId?: boolean | number
    /** An array relationship */
    campaign_files?: (campaign_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** An aggregate relationship */
    campaign_files_aggregate?: (campaign_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    createdAt?: boolean | number
    etag?: boolean | number
    id?: boolean | number
    isUploaded?: boolean | number
    mimeType?: boolean | number
    name?: boolean | number
    /** An array relationship */
    partner_files?: (partner_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    /** An aggregate relationship */
    partner_files_aggregate?: (partner_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    size?: boolean | number
    updatedAt?: boolean | number
    uploadedByUserId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "storage.files" */
export interface files_aggregateGenqlSelection{
    aggregate?: files_aggregate_fieldsGenqlSelection
    nodes?: filesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface files_aggregate_bool_exp {bool_and?: (files_aggregate_bool_exp_bool_and | null),bool_or?: (files_aggregate_bool_exp_bool_or | null),count?: (files_aggregate_bool_exp_count | null)}

export interface files_aggregate_bool_exp_bool_and {arguments: files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (files_bool_exp | null),predicate: Boolean_comparison_exp}

export interface files_aggregate_bool_exp_bool_or {arguments: files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (files_bool_exp | null),predicate: Boolean_comparison_exp}

export interface files_aggregate_bool_exp_count {arguments?: (files_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (files_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "storage.files" */
export interface files_aggregate_fieldsGenqlSelection{
    avg?: files_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (files_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: files_max_fieldsGenqlSelection
    min?: files_min_fieldsGenqlSelection
    stddev?: files_stddev_fieldsGenqlSelection
    stddev_pop?: files_stddev_pop_fieldsGenqlSelection
    stddev_samp?: files_stddev_samp_fieldsGenqlSelection
    sum?: files_sum_fieldsGenqlSelection
    var_pop?: files_var_pop_fieldsGenqlSelection
    var_samp?: files_var_samp_fieldsGenqlSelection
    variance?: files_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "storage.files" */
export interface files_aggregate_order_by {avg?: (files_avg_order_by | null),count?: (order_by | null),max?: (files_max_order_by | null),min?: (files_min_order_by | null),stddev?: (files_stddev_order_by | null),stddev_pop?: (files_stddev_pop_order_by | null),stddev_samp?: (files_stddev_samp_order_by | null),sum?: (files_sum_order_by | null),var_pop?: (files_var_pop_order_by | null),var_samp?: (files_var_samp_order_by | null),variance?: (files_variance_order_by | null)}


/** input type for inserting array relation for remote table "storage.files" */
export interface files_arr_rel_insert_input {data: files_insert_input[],
/** upsert condition */
on_conflict?: (files_on_conflict | null)}


/** aggregate avg on columns */
export interface files_avg_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "storage.files" */
export interface files_avg_order_by {size?: (order_by | null)}


/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export interface files_bool_exp {_and?: (files_bool_exp[] | null),_not?: (files_bool_exp | null),_or?: (files_bool_exp[] | null),bucket?: (buckets_bool_exp | null),bucketId?: (String_comparison_exp | null),campaign_files?: (campaign_file_bool_exp | null),campaign_files_aggregate?: (campaign_file_aggregate_bool_exp | null),createdAt?: (timestamptz_comparison_exp | null),etag?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null),isUploaded?: (Boolean_comparison_exp | null),mimeType?: (String_comparison_exp | null),name?: (String_comparison_exp | null),partner_files?: (partner_file_bool_exp | null),partner_files_aggregate?: (partner_file_aggregate_bool_exp | null),size?: (Int_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null),uploadedByUserId?: (uuid_comparison_exp | null)}


/** input type for incrementing numeric columns in table "storage.files" */
export interface files_inc_input {size?: (Scalars['Int'] | null)}


/** input type for inserting data into table "storage.files" */
export interface files_insert_input {bucket?: (buckets_obj_rel_insert_input | null),bucketId?: (Scalars['String'] | null),campaign_files?: (campaign_file_arr_rel_insert_input | null),createdAt?: (Scalars['timestamptz'] | null),etag?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),isUploaded?: (Scalars['Boolean'] | null),mimeType?: (Scalars['String'] | null),name?: (Scalars['String'] | null),partner_files?: (partner_file_arr_rel_insert_input | null),size?: (Scalars['Int'] | null),updatedAt?: (Scalars['timestamptz'] | null),uploadedByUserId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface files_max_fieldsGenqlSelection{
    bucketId?: boolean | number
    createdAt?: boolean | number
    etag?: boolean | number
    id?: boolean | number
    mimeType?: boolean | number
    name?: boolean | number
    size?: boolean | number
    updatedAt?: boolean | number
    uploadedByUserId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "storage.files" */
export interface files_max_order_by {bucketId?: (order_by | null),createdAt?: (order_by | null),etag?: (order_by | null),id?: (order_by | null),mimeType?: (order_by | null),name?: (order_by | null),size?: (order_by | null),updatedAt?: (order_by | null),uploadedByUserId?: (order_by | null)}


/** aggregate min on columns */
export interface files_min_fieldsGenqlSelection{
    bucketId?: boolean | number
    createdAt?: boolean | number
    etag?: boolean | number
    id?: boolean | number
    mimeType?: boolean | number
    name?: boolean | number
    size?: boolean | number
    updatedAt?: boolean | number
    uploadedByUserId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "storage.files" */
export interface files_min_order_by {bucketId?: (order_by | null),createdAt?: (order_by | null),etag?: (order_by | null),id?: (order_by | null),mimeType?: (order_by | null),name?: (order_by | null),size?: (order_by | null),updatedAt?: (order_by | null),uploadedByUserId?: (order_by | null)}


/** response of any mutation on the table "storage.files" */
export interface files_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: filesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "storage.files" */
export interface files_obj_rel_insert_input {data: files_insert_input,
/** upsert condition */
on_conflict?: (files_on_conflict | null)}


/** on_conflict condition type for table "storage.files" */
export interface files_on_conflict {constraint: files_constraint,update_columns?: files_update_column[],where?: (files_bool_exp | null)}


/** Ordering options when selecting data from "storage.files". */
export interface files_order_by {bucket?: (buckets_order_by | null),bucketId?: (order_by | null),campaign_files_aggregate?: (campaign_file_aggregate_order_by | null),createdAt?: (order_by | null),etag?: (order_by | null),id?: (order_by | null),isUploaded?: (order_by | null),mimeType?: (order_by | null),name?: (order_by | null),partner_files_aggregate?: (partner_file_aggregate_order_by | null),size?: (order_by | null),updatedAt?: (order_by | null),uploadedByUserId?: (order_by | null)}


/** primary key columns input for table: storage.files */
export interface files_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "storage.files" */
export interface files_set_input {bucketId?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),etag?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),isUploaded?: (Scalars['Boolean'] | null),mimeType?: (Scalars['String'] | null),name?: (Scalars['String'] | null),size?: (Scalars['Int'] | null),updatedAt?: (Scalars['timestamptz'] | null),uploadedByUserId?: (Scalars['uuid'] | null)}


/** aggregate stddev on columns */
export interface files_stddev_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "storage.files" */
export interface files_stddev_order_by {size?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface files_stddev_pop_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "storage.files" */
export interface files_stddev_pop_order_by {size?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface files_stddev_samp_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "storage.files" */
export interface files_stddev_samp_order_by {size?: (order_by | null)}


/** Streaming cursor of the table "files" */
export interface files_stream_cursor_input {
/** Stream column input with initial value */
initial_value: files_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface files_stream_cursor_value_input {bucketId?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),etag?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),isUploaded?: (Scalars['Boolean'] | null),mimeType?: (Scalars['String'] | null),name?: (Scalars['String'] | null),size?: (Scalars['Int'] | null),updatedAt?: (Scalars['timestamptz'] | null),uploadedByUserId?: (Scalars['uuid'] | null)}


/** aggregate sum on columns */
export interface files_sum_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "storage.files" */
export interface files_sum_order_by {size?: (order_by | null)}

export interface files_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (files_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (files_set_input | null),
/** filter the rows which have to be updated */
where: files_bool_exp}


/** aggregate var_pop on columns */
export interface files_var_pop_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "storage.files" */
export interface files_var_pop_order_by {size?: (order_by | null)}


/** aggregate var_samp on columns */
export interface files_var_samp_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "storage.files" */
export interface files_var_samp_order_by {size?: (order_by | null)}


/** aggregate variance on columns */
export interface files_variance_fieldsGenqlSelection{
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "storage.files" */
export interface files_variance_order_by {size?: (order_by | null)}


/** columns and relationships of "group" */
export interface groupGenqlSelection{
    admin_id?: boolean | number
    contribution?: boolean | number
    contribution_for_all?: boolean | number
    created_at?: boolean | number
    dummy?: boolean | number
    dummy_2?: boolean | number
    /** An object relationship */
    enum_recurrency?: en_recurrenciesGenqlSelection
    /** A computed field, executes function "group_balance" */
    group_balance?: boolean | number
    group_name?: boolean | number
    id?: boolean | number
    /** An array relationship */
    invitations?: (invitationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An aggregate relationship */
    invitations_aggregate?: (invitation_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An array relationship */
    members?: (memberGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** An aggregate relationship */
    members_aggregate?: (member_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** An object relationship */
    partner?: partnerGenqlSelection
    /** An object relationship */
    partner_campaign?: partner_campaignGenqlSelection
    partner_campaign_id?: boolean | number
    partner_id?: boolean | number
    /** An array relationship */
    payment_reviews?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An aggregate relationship */
    payment_reviews_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An array relationship */
    payments?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An aggregate relationship */
    payments_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An array relationship */
    periods?: (periodGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** An aggregate relationship */
    periods_aggregate?: (period_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    recurrency?: boolean | number
    recurrency_day?: boolean | number
    recurrency_for_all?: boolean | number
    updated_at?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "group" */
export interface group_aggregateGenqlSelection{
    aggregate?: group_aggregate_fieldsGenqlSelection
    nodes?: groupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface group_aggregate_bool_exp {bool_and?: (group_aggregate_bool_exp_bool_and | null),bool_or?: (group_aggregate_bool_exp_bool_or | null),count?: (group_aggregate_bool_exp_count | null)}

export interface group_aggregate_bool_exp_bool_and {arguments: group_select_column_group_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (group_bool_exp | null),predicate: Boolean_comparison_exp}

export interface group_aggregate_bool_exp_bool_or {arguments: group_select_column_group_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (group_bool_exp | null),predicate: Boolean_comparison_exp}

export interface group_aggregate_bool_exp_count {arguments?: (group_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (group_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "group" */
export interface group_aggregate_fieldsGenqlSelection{
    avg?: group_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (group_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: group_max_fieldsGenqlSelection
    min?: group_min_fieldsGenqlSelection
    stddev?: group_stddev_fieldsGenqlSelection
    stddev_pop?: group_stddev_pop_fieldsGenqlSelection
    stddev_samp?: group_stddev_samp_fieldsGenqlSelection
    sum?: group_sum_fieldsGenqlSelection
    var_pop?: group_var_pop_fieldsGenqlSelection
    var_samp?: group_var_samp_fieldsGenqlSelection
    variance?: group_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "group" */
export interface group_aggregate_order_by {avg?: (group_avg_order_by | null),count?: (order_by | null),max?: (group_max_order_by | null),min?: (group_min_order_by | null),stddev?: (group_stddev_order_by | null),stddev_pop?: (group_stddev_pop_order_by | null),stddev_samp?: (group_stddev_samp_order_by | null),sum?: (group_sum_order_by | null),var_pop?: (group_var_pop_order_by | null),var_samp?: (group_var_samp_order_by | null),variance?: (group_variance_order_by | null)}


/** input type for inserting array relation for remote table "group" */
export interface group_arr_rel_insert_input {data: group_insert_input[],
/** upsert condition */
on_conflict?: (group_on_conflict | null)}


/** aggregate avg on columns */
export interface group_avg_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "group" */
export interface group_avg_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export interface group_bool_exp {_and?: (group_bool_exp[] | null),_not?: (group_bool_exp | null),_or?: (group_bool_exp[] | null),admin_id?: (uuid_comparison_exp | null),contribution?: (numeric_comparison_exp | null),contribution_for_all?: (Boolean_comparison_exp | null),created_at?: (timestamp_comparison_exp | null),dummy?: (String_comparison_exp | null),dummy_2?: (String_comparison_exp | null),enum_recurrency?: (en_recurrencies_bool_exp | null),group_balance?: (numeric_comparison_exp | null),group_name?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null),invitations?: (invitation_bool_exp | null),invitations_aggregate?: (invitation_aggregate_bool_exp | null),members?: (member_bool_exp | null),members_aggregate?: (member_aggregate_bool_exp | null),partner?: (partner_bool_exp | null),partner_campaign?: (partner_campaign_bool_exp | null),partner_campaign_id?: (uuid_comparison_exp | null),partner_id?: (uuid_comparison_exp | null),payment_reviews?: (payment_review_bool_exp | null),payment_reviews_aggregate?: (payment_review_aggregate_bool_exp | null),payments?: (payment_bool_exp | null),payments_aggregate?: (payment_aggregate_bool_exp | null),periods?: (period_bool_exp | null),periods_aggregate?: (period_aggregate_bool_exp | null),recurrency?: (en_recurrencies_enum_comparison_exp | null),recurrency_day?: (Int_comparison_exp | null),recurrency_for_all?: (Boolean_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null)}


/** input type for incrementing numeric columns in table "group" */
export interface group_inc_input {contribution?: (Scalars['numeric'] | null),recurrency_day?: (Scalars['Int'] | null)}


/** input type for inserting data into table "group" */
export interface group_insert_input {admin_id?: (Scalars['uuid'] | null),contribution?: (Scalars['numeric'] | null),contribution_for_all?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamp'] | null),dummy?: (Scalars['String'] | null),dummy_2?: (Scalars['String'] | null),enum_recurrency?: (en_recurrencies_obj_rel_insert_input | null),group_name?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),invitations?: (invitation_arr_rel_insert_input | null),members?: (member_arr_rel_insert_input | null),partner?: (partner_obj_rel_insert_input | null),partner_campaign?: (partner_campaign_obj_rel_insert_input | null),partner_campaign_id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),payment_reviews?: (payment_review_arr_rel_insert_input | null),payments?: (payment_arr_rel_insert_input | null),periods?: (period_arr_rel_insert_input | null),recurrency?: (en_recurrencies_enum | null),recurrency_day?: (Scalars['Int'] | null),recurrency_for_all?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null)}


/** aggregate max on columns */
export interface group_max_fieldsGenqlSelection{
    admin_id?: boolean | number
    contribution?: boolean | number
    created_at?: boolean | number
    dummy?: boolean | number
    dummy_2?: boolean | number
    group_name?: boolean | number
    id?: boolean | number
    partner_campaign_id?: boolean | number
    partner_id?: boolean | number
    recurrency_day?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "group" */
export interface group_max_order_by {admin_id?: (order_by | null),contribution?: (order_by | null),created_at?: (order_by | null),dummy?: (order_by | null),dummy_2?: (order_by | null),group_name?: (order_by | null),id?: (order_by | null),partner_campaign_id?: (order_by | null),partner_id?: (order_by | null),recurrency_day?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface group_min_fieldsGenqlSelection{
    admin_id?: boolean | number
    contribution?: boolean | number
    created_at?: boolean | number
    dummy?: boolean | number
    dummy_2?: boolean | number
    group_name?: boolean | number
    id?: boolean | number
    partner_campaign_id?: boolean | number
    partner_id?: boolean | number
    recurrency_day?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "group" */
export interface group_min_order_by {admin_id?: (order_by | null),contribution?: (order_by | null),created_at?: (order_by | null),dummy?: (order_by | null),dummy_2?: (order_by | null),group_name?: (order_by | null),id?: (order_by | null),partner_campaign_id?: (order_by | null),partner_id?: (order_by | null),recurrency_day?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "group" */
export interface group_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: groupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "group" */
export interface group_obj_rel_insert_input {data: group_insert_input,
/** upsert condition */
on_conflict?: (group_on_conflict | null)}


/** on_conflict condition type for table "group" */
export interface group_on_conflict {constraint: group_constraint,update_columns?: group_update_column[],where?: (group_bool_exp | null)}


/** Ordering options when selecting data from "group". */
export interface group_order_by {admin_id?: (order_by | null),contribution?: (order_by | null),contribution_for_all?: (order_by | null),created_at?: (order_by | null),dummy?: (order_by | null),dummy_2?: (order_by | null),enum_recurrency?: (en_recurrencies_order_by | null),group_balance?: (order_by | null),group_name?: (order_by | null),id?: (order_by | null),invitations_aggregate?: (invitation_aggregate_order_by | null),members_aggregate?: (member_aggregate_order_by | null),partner?: (partner_order_by | null),partner_campaign?: (partner_campaign_order_by | null),partner_campaign_id?: (order_by | null),partner_id?: (order_by | null),payment_reviews_aggregate?: (payment_review_aggregate_order_by | null),payments_aggregate?: (payment_aggregate_order_by | null),periods_aggregate?: (period_aggregate_order_by | null),recurrency?: (order_by | null),recurrency_day?: (order_by | null),recurrency_for_all?: (order_by | null),updated_at?: (order_by | null),user?: (users_order_by | null)}


/** primary key columns input for table: group */
export interface group_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "group" */
export interface group_set_input {admin_id?: (Scalars['uuid'] | null),contribution?: (Scalars['numeric'] | null),contribution_for_all?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamp'] | null),dummy?: (Scalars['String'] | null),dummy_2?: (Scalars['String'] | null),group_name?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),partner_campaign_id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),recurrency?: (en_recurrencies_enum | null),recurrency_day?: (Scalars['Int'] | null),recurrency_for_all?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface group_stddev_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "group" */
export interface group_stddev_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface group_stddev_pop_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "group" */
export interface group_stddev_pop_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface group_stddev_samp_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "group" */
export interface group_stddev_samp_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** Streaming cursor of the table "group" */
export interface group_stream_cursor_input {
/** Stream column input with initial value */
initial_value: group_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface group_stream_cursor_value_input {admin_id?: (Scalars['uuid'] | null),contribution?: (Scalars['numeric'] | null),contribution_for_all?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamp'] | null),dummy?: (Scalars['String'] | null),dummy_2?: (Scalars['String'] | null),group_name?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),partner_campaign_id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),recurrency?: (en_recurrencies_enum | null),recurrency_day?: (Scalars['Int'] | null),recurrency_for_all?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface group_sum_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "group" */
export interface group_sum_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}

export interface group_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (group_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (group_set_input | null),
/** filter the rows which have to be updated */
where: group_bool_exp}


/** aggregate var_pop on columns */
export interface group_var_pop_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "group" */
export interface group_var_pop_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate var_samp on columns */
export interface group_var_samp_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "group" */
export interface group_var_samp_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate variance on columns */
export interface group_variance_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "group" */
export interface group_variance_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** columns and relationships of "invitation" */
export interface invitationGenqlSelection{
    created_at?: boolean | number
    dummy?: boolean | number
    /** An object relationship */
    en_notification?: en_notificationsGenqlSelection
    /** An object relationship */
    en_status?: en_statusesGenqlSelection
    /** An object relationship */
    group?: groupGenqlSelection
    group_id?: boolean | number
    id?: boolean | number
    invite_status?: boolean | number
    invite_type?: boolean | number
    /** An array relationship */
    members?: (memberGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** An aggregate relationship */
    members_aggregate?: (member_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** An array relationship */
    notifications?: (notificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** An aggregate relationship */
    notifications_aggregate?: (notification_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    receiver_id?: boolean | number
    receiver_phone?: boolean | number
    sender_id?: boolean | number
    updated_at?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    /** An object relationship */
    userBySenderId?: usersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "invitation" */
export interface invitation_aggregateGenqlSelection{
    aggregate?: invitation_aggregate_fieldsGenqlSelection
    nodes?: invitationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface invitation_aggregate_bool_exp {count?: (invitation_aggregate_bool_exp_count | null)}

export interface invitation_aggregate_bool_exp_count {arguments?: (invitation_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (invitation_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "invitation" */
export interface invitation_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (invitation_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: invitation_max_fieldsGenqlSelection
    min?: invitation_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "invitation" */
export interface invitation_aggregate_order_by {count?: (order_by | null),max?: (invitation_max_order_by | null),min?: (invitation_min_order_by | null)}


/** input type for inserting array relation for remote table "invitation" */
export interface invitation_arr_rel_insert_input {data: invitation_insert_input[],
/** upsert condition */
on_conflict?: (invitation_on_conflict | null)}


/** Boolean expression to filter rows from the table "invitation". All fields are combined with a logical 'AND'. */
export interface invitation_bool_exp {_and?: (invitation_bool_exp[] | null),_not?: (invitation_bool_exp | null),_or?: (invitation_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),dummy?: (String_comparison_exp | null),en_notification?: (en_notifications_bool_exp | null),en_status?: (en_statuses_bool_exp | null),group?: (group_bool_exp | null),group_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),invite_status?: (en_statuses_enum_comparison_exp | null),invite_type?: (en_notifications_enum_comparison_exp | null),members?: (member_bool_exp | null),members_aggregate?: (member_aggregate_bool_exp | null),notifications?: (notification_bool_exp | null),notifications_aggregate?: (notification_aggregate_bool_exp | null),receiver_id?: (uuid_comparison_exp | null),receiver_phone?: (String_comparison_exp | null),sender_id?: (uuid_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null),userBySenderId?: (users_bool_exp | null)}


/** input type for inserting data into table "invitation" */
export interface invitation_insert_input {created_at?: (Scalars['timestamptz'] | null),dummy?: (Scalars['String'] | null),en_notification?: (en_notifications_obj_rel_insert_input | null),en_status?: (en_statuses_obj_rel_insert_input | null),group?: (group_obj_rel_insert_input | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),invite_status?: (en_statuses_enum | null),invite_type?: (en_notifications_enum | null),members?: (member_arr_rel_insert_input | null),notifications?: (notification_arr_rel_insert_input | null),receiver_id?: (Scalars['uuid'] | null),receiver_phone?: (Scalars['String'] | null),sender_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null),userBySenderId?: (users_obj_rel_insert_input | null)}


/** aggregate max on columns */
export interface invitation_max_fieldsGenqlSelection{
    created_at?: boolean | number
    dummy?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    receiver_id?: boolean | number
    receiver_phone?: boolean | number
    sender_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "invitation" */
export interface invitation_max_order_by {created_at?: (order_by | null),dummy?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),receiver_id?: (order_by | null),receiver_phone?: (order_by | null),sender_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface invitation_min_fieldsGenqlSelection{
    created_at?: boolean | number
    dummy?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    receiver_id?: boolean | number
    receiver_phone?: boolean | number
    sender_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "invitation" */
export interface invitation_min_order_by {created_at?: (order_by | null),dummy?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),receiver_id?: (order_by | null),receiver_phone?: (order_by | null),sender_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "invitation" */
export interface invitation_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: invitationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "invitation" */
export interface invitation_obj_rel_insert_input {data: invitation_insert_input,
/** upsert condition */
on_conflict?: (invitation_on_conflict | null)}


/** on_conflict condition type for table "invitation" */
export interface invitation_on_conflict {constraint: invitation_constraint,update_columns?: invitation_update_column[],where?: (invitation_bool_exp | null)}


/** Ordering options when selecting data from "invitation". */
export interface invitation_order_by {created_at?: (order_by | null),dummy?: (order_by | null),en_notification?: (en_notifications_order_by | null),en_status?: (en_statuses_order_by | null),group?: (group_order_by | null),group_id?: (order_by | null),id?: (order_by | null),invite_status?: (order_by | null),invite_type?: (order_by | null),members_aggregate?: (member_aggregate_order_by | null),notifications_aggregate?: (notification_aggregate_order_by | null),receiver_id?: (order_by | null),receiver_phone?: (order_by | null),sender_id?: (order_by | null),updated_at?: (order_by | null),user?: (users_order_by | null),userBySenderId?: (users_order_by | null)}


/** primary key columns input for table: invitation */
export interface invitation_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "invitation" */
export interface invitation_set_input {created_at?: (Scalars['timestamptz'] | null),dummy?: (Scalars['String'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),invite_status?: (en_statuses_enum | null),invite_type?: (en_notifications_enum | null),receiver_id?: (Scalars['uuid'] | null),receiver_phone?: (Scalars['String'] | null),sender_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "invitation" */
export interface invitation_stream_cursor_input {
/** Stream column input with initial value */
initial_value: invitation_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface invitation_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),dummy?: (Scalars['String'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),invite_status?: (en_statuses_enum | null),invite_type?: (en_notifications_enum | null),receiver_id?: (Scalars['uuid'] | null),receiver_phone?: (Scalars['String'] | null),sender_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface invitation_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (invitation_set_input | null),
/** filter the rows which have to be updated */
where: invitation_bool_exp}


/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export interface json_comparison_exp {_eq?: (Scalars['json'] | null),_gt?: (Scalars['json'] | null),_gte?: (Scalars['json'] | null),_in?: (Scalars['json'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['json'] | null),_lte?: (Scalars['json'] | null),_neq?: (Scalars['json'] | null),_nin?: (Scalars['json'][] | null)}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "member" */
export interface memberGenqlSelection{
    contribution?: boolean | number
    created_at?: boolean | number
    /** An object relationship */
    enum_recurrency?: en_recurrenciesGenqlSelection
    /** A computed field, executes function "member_expense" */
    expense?: boolean | number
    /** An object relationship */
    group?: groupGenqlSelection
    group_id?: boolean | number
    id?: boolean | number
    /** A computed field, executes function "member_income" */
    income?: boolean | number
    /** An object relationship */
    invitation?: invitationGenqlSelection
    invitation_id?: boolean | number
    /** An array relationship */
    paymentReviewsByRequesterId?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An aggregate relationship */
    paymentReviewsByRequesterId_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An array relationship */
    payment_reviews?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An aggregate relationship */
    payment_reviews_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An array relationship */
    payments?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An aggregate relationship */
    payments_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An array relationship */
    periods?: (periodGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** An aggregate relationship */
    periods_aggregate?: (period_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    recurrency?: boolean | number
    recurrency_day?: boolean | number
    reminder_days?: boolean | number
    reminder_id?: boolean | number
    reminder_next?: boolean | number
    updated_at?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "member" */
export interface member_aggregateGenqlSelection{
    aggregate?: member_aggregate_fieldsGenqlSelection
    nodes?: memberGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface member_aggregate_bool_exp {count?: (member_aggregate_bool_exp_count | null)}

export interface member_aggregate_bool_exp_count {arguments?: (member_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (member_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "member" */
export interface member_aggregate_fieldsGenqlSelection{
    avg?: member_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (member_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: member_max_fieldsGenqlSelection
    min?: member_min_fieldsGenqlSelection
    stddev?: member_stddev_fieldsGenqlSelection
    stddev_pop?: member_stddev_pop_fieldsGenqlSelection
    stddev_samp?: member_stddev_samp_fieldsGenqlSelection
    sum?: member_sum_fieldsGenqlSelection
    var_pop?: member_var_pop_fieldsGenqlSelection
    var_samp?: member_var_samp_fieldsGenqlSelection
    variance?: member_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "member" */
export interface member_aggregate_order_by {avg?: (member_avg_order_by | null),count?: (order_by | null),max?: (member_max_order_by | null),min?: (member_min_order_by | null),stddev?: (member_stddev_order_by | null),stddev_pop?: (member_stddev_pop_order_by | null),stddev_samp?: (member_stddev_samp_order_by | null),sum?: (member_sum_order_by | null),var_pop?: (member_var_pop_order_by | null),var_samp?: (member_var_samp_order_by | null),variance?: (member_variance_order_by | null)}


/** input type for inserting array relation for remote table "member" */
export interface member_arr_rel_insert_input {data: member_insert_input[],
/** upsert condition */
on_conflict?: (member_on_conflict | null)}


/** aggregate avg on columns */
export interface member_avg_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "member" */
export interface member_avg_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export interface member_bool_exp {_and?: (member_bool_exp[] | null),_not?: (member_bool_exp | null),_or?: (member_bool_exp[] | null),contribution?: (numeric_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),enum_recurrency?: (en_recurrencies_bool_exp | null),expense?: (numeric_comparison_exp | null),group?: (group_bool_exp | null),group_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),income?: (numeric_comparison_exp | null),invitation?: (invitation_bool_exp | null),invitation_id?: (uuid_comparison_exp | null),paymentReviewsByRequesterId?: (payment_review_bool_exp | null),paymentReviewsByRequesterId_aggregate?: (payment_review_aggregate_bool_exp | null),payment_reviews?: (payment_review_bool_exp | null),payment_reviews_aggregate?: (payment_review_aggregate_bool_exp | null),payments?: (payment_bool_exp | null),payments_aggregate?: (payment_aggregate_bool_exp | null),periods?: (period_bool_exp | null),periods_aggregate?: (period_aggregate_bool_exp | null),recurrency?: (en_recurrencies_enum_comparison_exp | null),recurrency_day?: (Int_comparison_exp | null),reminder_days?: (String_comparison_exp | null),reminder_id?: (uuid_comparison_exp | null),reminder_next?: (timestamptz_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null),user_id?: (uuid_comparison_exp | null)}


/** input type for incrementing numeric columns in table "member" */
export interface member_inc_input {contribution?: (Scalars['numeric'] | null),recurrency_day?: (Scalars['Int'] | null)}


/** input type for inserting data into table "member" */
export interface member_insert_input {contribution?: (Scalars['numeric'] | null),created_at?: (Scalars['timestamptz'] | null),enum_recurrency?: (en_recurrencies_obj_rel_insert_input | null),group?: (group_obj_rel_insert_input | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),invitation?: (invitation_obj_rel_insert_input | null),invitation_id?: (Scalars['uuid'] | null),paymentReviewsByRequesterId?: (payment_review_arr_rel_insert_input | null),payment_reviews?: (payment_review_arr_rel_insert_input | null),payments?: (payment_arr_rel_insert_input | null),periods?: (period_arr_rel_insert_input | null),recurrency?: (en_recurrencies_enum | null),recurrency_day?: (Scalars['Int'] | null),reminder_days?: (Scalars['String'] | null),reminder_id?: (Scalars['uuid'] | null),reminder_next?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface member_max_fieldsGenqlSelection{
    contribution?: boolean | number
    created_at?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    invitation_id?: boolean | number
    recurrency_day?: boolean | number
    reminder_days?: boolean | number
    reminder_id?: boolean | number
    reminder_next?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "member" */
export interface member_max_order_by {contribution?: (order_by | null),created_at?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),invitation_id?: (order_by | null),recurrency_day?: (order_by | null),reminder_days?: (order_by | null),reminder_id?: (order_by | null),reminder_next?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface member_min_fieldsGenqlSelection{
    contribution?: boolean | number
    created_at?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    invitation_id?: boolean | number
    recurrency_day?: boolean | number
    reminder_days?: boolean | number
    reminder_id?: boolean | number
    reminder_next?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "member" */
export interface member_min_order_by {contribution?: (order_by | null),created_at?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),invitation_id?: (order_by | null),recurrency_day?: (order_by | null),reminder_days?: (order_by | null),reminder_id?: (order_by | null),reminder_next?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** response of any mutation on the table "member" */
export interface member_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: memberGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "member" */
export interface member_obj_rel_insert_input {data: member_insert_input,
/** upsert condition */
on_conflict?: (member_on_conflict | null)}


/** on_conflict condition type for table "member" */
export interface member_on_conflict {constraint: member_constraint,update_columns?: member_update_column[],where?: (member_bool_exp | null)}


/** Ordering options when selecting data from "member". */
export interface member_order_by {contribution?: (order_by | null),created_at?: (order_by | null),enum_recurrency?: (en_recurrencies_order_by | null),expense?: (order_by | null),group?: (group_order_by | null),group_id?: (order_by | null),id?: (order_by | null),income?: (order_by | null),invitation?: (invitation_order_by | null),invitation_id?: (order_by | null),paymentReviewsByRequesterId_aggregate?: (payment_review_aggregate_order_by | null),payment_reviews_aggregate?: (payment_review_aggregate_order_by | null),payments_aggregate?: (payment_aggregate_order_by | null),periods_aggregate?: (period_aggregate_order_by | null),recurrency?: (order_by | null),recurrency_day?: (order_by | null),reminder_days?: (order_by | null),reminder_id?: (order_by | null),reminder_next?: (order_by | null),updated_at?: (order_by | null),user?: (users_order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: member */
export interface member_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "member" */
export interface member_set_input {contribution?: (Scalars['numeric'] | null),created_at?: (Scalars['timestamptz'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),invitation_id?: (Scalars['uuid'] | null),recurrency?: (en_recurrencies_enum | null),recurrency_day?: (Scalars['Int'] | null),reminder_days?: (Scalars['String'] | null),reminder_id?: (Scalars['uuid'] | null),reminder_next?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate stddev on columns */
export interface member_stddev_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "member" */
export interface member_stddev_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface member_stddev_pop_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "member" */
export interface member_stddev_pop_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface member_stddev_samp_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "member" */
export interface member_stddev_samp_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** Streaming cursor of the table "member" */
export interface member_stream_cursor_input {
/** Stream column input with initial value */
initial_value: member_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface member_stream_cursor_value_input {contribution?: (Scalars['numeric'] | null),created_at?: (Scalars['timestamptz'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),invitation_id?: (Scalars['uuid'] | null),recurrency?: (en_recurrencies_enum | null),recurrency_day?: (Scalars['Int'] | null),reminder_days?: (Scalars['String'] | null),reminder_id?: (Scalars['uuid'] | null),reminder_next?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate sum on columns */
export interface member_sum_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "member" */
export interface member_sum_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}

export interface member_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (member_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (member_set_input | null),
/** filter the rows which have to be updated */
where: member_bool_exp}


/** aggregate var_pop on columns */
export interface member_var_pop_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "member" */
export interface member_var_pop_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate var_samp on columns */
export interface member_var_samp_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "member" */
export interface member_var_samp_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** aggregate variance on columns */
export interface member_variance_fieldsGenqlSelection{
    contribution?: boolean | number
    recurrency_day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "member" */
export interface member_variance_order_by {contribution?: (order_by | null),recurrency_day?: (order_by | null)}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete single row from the table: "auth.providers" */
    deleteAuthProvider?: (authProvidersGenqlSelection & { __args: {id: Scalars['String']} })
    /** delete single row from the table: "auth.provider_requests" */
    deleteAuthProviderRequest?: (authProviderRequestsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "auth.provider_requests" */
    deleteAuthProviderRequests?: (authProviderRequests_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authProviderRequests_bool_exp} })
    /** delete data from the table: "auth.providers" */
    deleteAuthProviders?: (authProviders_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authProviders_bool_exp} })
    /** delete single row from the table: "auth.refresh_tokens" */
    deleteAuthRefreshToken?: (authRefreshTokensGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete single row from the table: "auth.refresh_token_types" */
    deleteAuthRefreshTokenType?: (authRefreshTokenTypesGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "auth.refresh_token_types" */
    deleteAuthRefreshTokenTypes?: (authRefreshTokenTypes_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authRefreshTokenTypes_bool_exp} })
    /** delete data from the table: "auth.refresh_tokens" */
    deleteAuthRefreshTokens?: (authRefreshTokens_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authRefreshTokens_bool_exp} })
    /** delete single row from the table: "auth.roles" */
    deleteAuthRole?: (authRolesGenqlSelection & { __args: {role: Scalars['String']} })
    /** delete data from the table: "auth.roles" */
    deleteAuthRoles?: (authRoles_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authRoles_bool_exp} })
    /** delete single row from the table: "auth.user_providers" */
    deleteAuthUserProvider?: (authUserProvidersGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "auth.user_providers" */
    deleteAuthUserProviders?: (authUserProviders_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authUserProviders_bool_exp} })
    /** delete single row from the table: "auth.user_roles" */
    deleteAuthUserRole?: (authUserRolesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "auth.user_roles" */
    deleteAuthUserRoles?: (authUserRoles_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authUserRoles_bool_exp} })
    /** delete single row from the table: "auth.user_security_keys" */
    deleteAuthUserSecurityKey?: (authUserSecurityKeysGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "auth.user_security_keys" */
    deleteAuthUserSecurityKeys?: (authUserSecurityKeys_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: authUserSecurityKeys_bool_exp} })
    /** delete single row from the table: "storage.buckets" */
    deleteBucket?: (bucketsGenqlSelection & { __args: {id: Scalars['String']} })
    /** delete data from the table: "storage.buckets" */
    deleteBuckets?: (buckets_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: buckets_bool_exp} })
    /** delete single row from the table: "storage.files" */
    deleteFile?: (filesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "storage.files" */
    deleteFiles?: (files_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: files_bool_exp} })
    /** delete single row from the table: "auth.users" */
    deleteUser?: (usersGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "auth.users" */
    deleteUsers?: (users_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp} })
    /** delete data from the table: "auth.migrations" */
    delete_auth_migrations?: (auth_migrations_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: auth_migrations_bool_exp} })
    /** delete single row from the table: "auth.migrations" */
    delete_auth_migrations_by_pk?: (auth_migrationsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** delete data from the table: "campaign_file" */
    delete_campaign_file?: (campaign_file_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: campaign_file_bool_exp} })
    /** delete single row from the table: "campaign_file" */
    delete_campaign_file_by_pk?: (campaign_fileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "en_currencies" */
    delete_en_currencies?: (en_currencies_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_currencies_bool_exp} })
    /** delete single row from the table: "en_currencies" */
    delete_en_currencies_by_pk?: (en_currenciesGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "en_notifications" */
    delete_en_notifications?: (en_notifications_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_notifications_bool_exp} })
    /** delete single row from the table: "en_notifications" */
    delete_en_notifications_by_pk?: (en_notificationsGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "en_partner_steps" */
    delete_en_partner_steps?: (en_partner_steps_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_partner_steps_bool_exp} })
    /** delete single row from the table: "en_partner_steps" */
    delete_en_partner_steps_by_pk?: (en_partner_stepsGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "en_payment_providers" */
    delete_en_payment_providers?: (en_payment_providers_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_payment_providers_bool_exp} })
    /** delete single row from the table: "en_payment_providers" */
    delete_en_payment_providers_by_pk?: (en_payment_providersGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "en_permissions" */
    delete_en_permissions?: (en_permissions_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_permissions_bool_exp} })
    /** delete single row from the table: "en_permissions" */
    delete_en_permissions_by_pk?: (en_permissionsGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "en_recurrencies" */
    delete_en_recurrencies?: (en_recurrencies_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_recurrencies_bool_exp} })
    /** delete single row from the table: "en_recurrencies" */
    delete_en_recurrencies_by_pk?: (en_recurrenciesGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "en_statuses" */
    delete_en_statuses?: (en_statuses_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_statuses_bool_exp} })
    /** delete single row from the table: "en_statuses" */
    delete_en_statuses_by_pk?: (en_statusesGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "en_trans_types" */
    delete_en_trans_types?: (en_trans_types_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: en_trans_types_bool_exp} })
    /** delete single row from the table: "en_trans_types" */
    delete_en_trans_types_by_pk?: (en_trans_typesGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "group" */
    delete_group?: (group_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: group_bool_exp} })
    /** delete single row from the table: "group" */
    delete_group_by_pk?: (groupGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "invitation" */
    delete_invitation?: (invitation_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: invitation_bool_exp} })
    /** delete single row from the table: "invitation" */
    delete_invitation_by_pk?: (invitationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "member" */
    delete_member?: (member_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: member_bool_exp} })
    /** delete single row from the table: "member" */
    delete_member_by_pk?: (memberGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "notification" */
    delete_notification?: (notification_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: notification_bool_exp} })
    /** delete single row from the table: "notification" */
    delete_notification_by_pk?: (notificationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "notification_item" */
    delete_notification_item?: (notification_item_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: notification_item_bool_exp} })
    /** delete single row from the table: "notification_item" */
    delete_notification_item_by_pk?: (notification_itemGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "partner" */
    delete_partner?: (partner_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: partner_bool_exp} })
    /** delete single row from the table: "partner" */
    delete_partner_by_pk?: (partnerGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "partner_campaign" */
    delete_partner_campaign?: (partner_campaign_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: partner_campaign_bool_exp} })
    /** delete single row from the table: "partner_campaign" */
    delete_partner_campaign_by_pk?: (partner_campaignGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "partner_file" */
    delete_partner_file?: (partner_file_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: partner_file_bool_exp} })
    /** delete single row from the table: "partner_file" */
    delete_partner_file_by_pk?: (partner_fileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "partner_operator" */
    delete_partner_operator?: (partner_operator_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: partner_operator_bool_exp} })
    /** delete single row from the table: "partner_operator" */
    delete_partner_operator_by_pk?: (partner_operatorGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "payment" */
    delete_payment?: (payment_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: payment_bool_exp} })
    /** delete single row from the table: "payment" */
    delete_payment_by_pk?: (paymentGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "payment_review" */
    delete_payment_review?: (payment_review_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: payment_review_bool_exp} })
    /** delete single row from the table: "payment_review" */
    delete_payment_review_by_pk?: (payment_reviewGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "period" */
    delete_period?: (period_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: period_bool_exp} })
    /** delete single row from the table: "period" */
    delete_period_by_pk?: (periodGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "scheduled_event" */
    delete_scheduled_event?: (scheduled_event_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: scheduled_event_bool_exp} })
    /** delete single row from the table: "scheduled_event" */
    delete_scheduled_event_by_pk?: (scheduled_eventGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "state_cache" */
    delete_state_cache?: (state_cache_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: state_cache_bool_exp} })
    /** delete single row from the table: "state_cache" */
    delete_state_cache_by_pk?: (state_cacheGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "storage.schema_migrations" */
    delete_storage_schema_migrations?: (storage_schema_migrations_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: storage_schema_migrations_bool_exp} })
    /** delete single row from the table: "storage.schema_migrations" */
    delete_storage_schema_migrations_by_pk?: (storage_schema_migrationsGenqlSelection & { __args: {version: Scalars['bigint']} })
    /** delete data from the table: "user_profile" */
    delete_user_profile?: (user_profile_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: user_profile_bool_exp} })
    /** delete single row from the table: "user_profile" */
    delete_user_profile_by_pk?: (user_profileGenqlSelection & { __args: {id: Scalars['uuid']} })
    fix_period_completions?: FixPeriodCompletionsOutputGenqlSelection
    group_reports?: (GroupReportsOutputGenqlSelection & { __args: {arg: GroupReportsInput} })
    /** initialise e2e tests */
    initialiseE2E?: InitialiseE2EOutputGenqlSelection
    /** insert a single row into the table: "auth.providers" */
    insertAuthProvider?: (authProvidersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authProviders_insert_input, 
    /** upsert condition */
    on_conflict?: (authProviders_on_conflict | null)} })
    /** insert a single row into the table: "auth.provider_requests" */
    insertAuthProviderRequest?: (authProviderRequestsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authProviderRequests_insert_input, 
    /** upsert condition */
    on_conflict?: (authProviderRequests_on_conflict | null)} })
    /** insert data into the table: "auth.provider_requests" */
    insertAuthProviderRequests?: (authProviderRequests_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authProviderRequests_insert_input[], 
    /** upsert condition */
    on_conflict?: (authProviderRequests_on_conflict | null)} })
    /** insert data into the table: "auth.providers" */
    insertAuthProviders?: (authProviders_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authProviders_insert_input[], 
    /** upsert condition */
    on_conflict?: (authProviders_on_conflict | null)} })
    /** insert a single row into the table: "auth.refresh_tokens" */
    insertAuthRefreshToken?: (authRefreshTokensGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authRefreshTokens_insert_input, 
    /** upsert condition */
    on_conflict?: (authRefreshTokens_on_conflict | null)} })
    /** insert a single row into the table: "auth.refresh_token_types" */
    insertAuthRefreshTokenType?: (authRefreshTokenTypesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authRefreshTokenTypes_insert_input, 
    /** upsert condition */
    on_conflict?: (authRefreshTokenTypes_on_conflict | null)} })
    /** insert data into the table: "auth.refresh_token_types" */
    insertAuthRefreshTokenTypes?: (authRefreshTokenTypes_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authRefreshTokenTypes_insert_input[], 
    /** upsert condition */
    on_conflict?: (authRefreshTokenTypes_on_conflict | null)} })
    /** insert data into the table: "auth.refresh_tokens" */
    insertAuthRefreshTokens?: (authRefreshTokens_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authRefreshTokens_insert_input[], 
    /** upsert condition */
    on_conflict?: (authRefreshTokens_on_conflict | null)} })
    /** insert a single row into the table: "auth.roles" */
    insertAuthRole?: (authRolesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authRoles_insert_input, 
    /** upsert condition */
    on_conflict?: (authRoles_on_conflict | null)} })
    /** insert data into the table: "auth.roles" */
    insertAuthRoles?: (authRoles_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authRoles_insert_input[], 
    /** upsert condition */
    on_conflict?: (authRoles_on_conflict | null)} })
    /** insert a single row into the table: "auth.user_providers" */
    insertAuthUserProvider?: (authUserProvidersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authUserProviders_insert_input, 
    /** upsert condition */
    on_conflict?: (authUserProviders_on_conflict | null)} })
    /** insert data into the table: "auth.user_providers" */
    insertAuthUserProviders?: (authUserProviders_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authUserProviders_insert_input[], 
    /** upsert condition */
    on_conflict?: (authUserProviders_on_conflict | null)} })
    /** insert a single row into the table: "auth.user_roles" */
    insertAuthUserRole?: (authUserRolesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authUserRoles_insert_input, 
    /** upsert condition */
    on_conflict?: (authUserRoles_on_conflict | null)} })
    /** insert data into the table: "auth.user_roles" */
    insertAuthUserRoles?: (authUserRoles_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authUserRoles_insert_input[], 
    /** upsert condition */
    on_conflict?: (authUserRoles_on_conflict | null)} })
    /** insert a single row into the table: "auth.user_security_keys" */
    insertAuthUserSecurityKey?: (authUserSecurityKeysGenqlSelection & { __args: {
    /** the row to be inserted */
    object: authUserSecurityKeys_insert_input, 
    /** upsert condition */
    on_conflict?: (authUserSecurityKeys_on_conflict | null)} })
    /** insert data into the table: "auth.user_security_keys" */
    insertAuthUserSecurityKeys?: (authUserSecurityKeys_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: authUserSecurityKeys_insert_input[], 
    /** upsert condition */
    on_conflict?: (authUserSecurityKeys_on_conflict | null)} })
    /** insert a single row into the table: "storage.buckets" */
    insertBucket?: (bucketsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: buckets_insert_input, 
    /** upsert condition */
    on_conflict?: (buckets_on_conflict | null)} })
    /** insert data into the table: "storage.buckets" */
    insertBuckets?: (buckets_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: buckets_insert_input[], 
    /** upsert condition */
    on_conflict?: (buckets_on_conflict | null)} })
    /** insert a single row into the table: "storage.files" */
    insertFile?: (filesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: files_insert_input, 
    /** upsert condition */
    on_conflict?: (files_on_conflict | null)} })
    /** insert data into the table: "storage.files" */
    insertFiles?: (files_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: files_insert_input[], 
    /** upsert condition */
    on_conflict?: (files_on_conflict | null)} })
    /** insert a single row into the table: "auth.users" */
    insertUser?: (usersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: users_insert_input, 
    /** upsert condition */
    on_conflict?: (users_on_conflict | null)} })
    /** insert data into the table: "auth.users" */
    insertUsers?: (users_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: users_insert_input[], 
    /** upsert condition */
    on_conflict?: (users_on_conflict | null)} })
    /** insert data into the table: "auth.migrations" */
    insert_auth_migrations?: (auth_migrations_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: auth_migrations_insert_input[], 
    /** upsert condition */
    on_conflict?: (auth_migrations_on_conflict | null)} })
    /** insert a single row into the table: "auth.migrations" */
    insert_auth_migrations_one?: (auth_migrationsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: auth_migrations_insert_input, 
    /** upsert condition */
    on_conflict?: (auth_migrations_on_conflict | null)} })
    /** insert data into the table: "campaign_file" */
    insert_campaign_file?: (campaign_file_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: campaign_file_insert_input[], 
    /** upsert condition */
    on_conflict?: (campaign_file_on_conflict | null)} })
    /** insert a single row into the table: "campaign_file" */
    insert_campaign_file_one?: (campaign_fileGenqlSelection & { __args: {
    /** the row to be inserted */
    object: campaign_file_insert_input, 
    /** upsert condition */
    on_conflict?: (campaign_file_on_conflict | null)} })
    /** insert data into the table: "en_currencies" */
    insert_en_currencies?: (en_currencies_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_currencies_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_currencies_on_conflict | null)} })
    /** insert a single row into the table: "en_currencies" */
    insert_en_currencies_one?: (en_currenciesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_currencies_insert_input, 
    /** upsert condition */
    on_conflict?: (en_currencies_on_conflict | null)} })
    /** insert data into the table: "en_notifications" */
    insert_en_notifications?: (en_notifications_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_notifications_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_notifications_on_conflict | null)} })
    /** insert a single row into the table: "en_notifications" */
    insert_en_notifications_one?: (en_notificationsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_notifications_insert_input, 
    /** upsert condition */
    on_conflict?: (en_notifications_on_conflict | null)} })
    /** insert data into the table: "en_partner_steps" */
    insert_en_partner_steps?: (en_partner_steps_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_partner_steps_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_partner_steps_on_conflict | null)} })
    /** insert a single row into the table: "en_partner_steps" */
    insert_en_partner_steps_one?: (en_partner_stepsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_partner_steps_insert_input, 
    /** upsert condition */
    on_conflict?: (en_partner_steps_on_conflict | null)} })
    /** insert data into the table: "en_payment_providers" */
    insert_en_payment_providers?: (en_payment_providers_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_payment_providers_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_payment_providers_on_conflict | null)} })
    /** insert a single row into the table: "en_payment_providers" */
    insert_en_payment_providers_one?: (en_payment_providersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_payment_providers_insert_input, 
    /** upsert condition */
    on_conflict?: (en_payment_providers_on_conflict | null)} })
    /** insert data into the table: "en_permissions" */
    insert_en_permissions?: (en_permissions_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_permissions_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_permissions_on_conflict | null)} })
    /** insert a single row into the table: "en_permissions" */
    insert_en_permissions_one?: (en_permissionsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_permissions_insert_input, 
    /** upsert condition */
    on_conflict?: (en_permissions_on_conflict | null)} })
    /** insert data into the table: "en_recurrencies" */
    insert_en_recurrencies?: (en_recurrencies_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_recurrencies_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_recurrencies_on_conflict | null)} })
    /** insert a single row into the table: "en_recurrencies" */
    insert_en_recurrencies_one?: (en_recurrenciesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_recurrencies_insert_input, 
    /** upsert condition */
    on_conflict?: (en_recurrencies_on_conflict | null)} })
    /** insert data into the table: "en_statuses" */
    insert_en_statuses?: (en_statuses_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_statuses_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_statuses_on_conflict | null)} })
    /** insert a single row into the table: "en_statuses" */
    insert_en_statuses_one?: (en_statusesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_statuses_insert_input, 
    /** upsert condition */
    on_conflict?: (en_statuses_on_conflict | null)} })
    /** insert data into the table: "en_trans_types" */
    insert_en_trans_types?: (en_trans_types_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: en_trans_types_insert_input[], 
    /** upsert condition */
    on_conflict?: (en_trans_types_on_conflict | null)} })
    /** insert a single row into the table: "en_trans_types" */
    insert_en_trans_types_one?: (en_trans_typesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: en_trans_types_insert_input, 
    /** upsert condition */
    on_conflict?: (en_trans_types_on_conflict | null)} })
    /** insert data into the table: "group" */
    insert_group?: (group_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: group_insert_input[], 
    /** upsert condition */
    on_conflict?: (group_on_conflict | null)} })
    /** insert a single row into the table: "group" */
    insert_group_one?: (groupGenqlSelection & { __args: {
    /** the row to be inserted */
    object: group_insert_input, 
    /** upsert condition */
    on_conflict?: (group_on_conflict | null)} })
    /** insert data into the table: "invitation" */
    insert_invitation?: (invitation_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: invitation_insert_input[], 
    /** upsert condition */
    on_conflict?: (invitation_on_conflict | null)} })
    /** insert a single row into the table: "invitation" */
    insert_invitation_one?: (invitationGenqlSelection & { __args: {
    /** the row to be inserted */
    object: invitation_insert_input, 
    /** upsert condition */
    on_conflict?: (invitation_on_conflict | null)} })
    /** insert data into the table: "member" */
    insert_member?: (member_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: member_insert_input[], 
    /** upsert condition */
    on_conflict?: (member_on_conflict | null)} })
    /** insert a single row into the table: "member" */
    insert_member_one?: (memberGenqlSelection & { __args: {
    /** the row to be inserted */
    object: member_insert_input, 
    /** upsert condition */
    on_conflict?: (member_on_conflict | null)} })
    /** insert data into the table: "notification" */
    insert_notification?: (notification_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: notification_insert_input[], 
    /** upsert condition */
    on_conflict?: (notification_on_conflict | null)} })
    /** insert data into the table: "notification_item" */
    insert_notification_item?: (notification_item_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: notification_item_insert_input[], 
    /** upsert condition */
    on_conflict?: (notification_item_on_conflict | null)} })
    /** insert a single row into the table: "notification_item" */
    insert_notification_item_one?: (notification_itemGenqlSelection & { __args: {
    /** the row to be inserted */
    object: notification_item_insert_input, 
    /** upsert condition */
    on_conflict?: (notification_item_on_conflict | null)} })
    /** insert a single row into the table: "notification" */
    insert_notification_one?: (notificationGenqlSelection & { __args: {
    /** the row to be inserted */
    object: notification_insert_input, 
    /** upsert condition */
    on_conflict?: (notification_on_conflict | null)} })
    /** insert data into the table: "partner" */
    insert_partner?: (partner_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: partner_insert_input[], 
    /** upsert condition */
    on_conflict?: (partner_on_conflict | null)} })
    /** insert data into the table: "partner_campaign" */
    insert_partner_campaign?: (partner_campaign_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: partner_campaign_insert_input[], 
    /** upsert condition */
    on_conflict?: (partner_campaign_on_conflict | null)} })
    /** insert a single row into the table: "partner_campaign" */
    insert_partner_campaign_one?: (partner_campaignGenqlSelection & { __args: {
    /** the row to be inserted */
    object: partner_campaign_insert_input, 
    /** upsert condition */
    on_conflict?: (partner_campaign_on_conflict | null)} })
    /** insert data into the table: "partner_file" */
    insert_partner_file?: (partner_file_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: partner_file_insert_input[], 
    /** upsert condition */
    on_conflict?: (partner_file_on_conflict | null)} })
    /** insert a single row into the table: "partner_file" */
    insert_partner_file_one?: (partner_fileGenqlSelection & { __args: {
    /** the row to be inserted */
    object: partner_file_insert_input, 
    /** upsert condition */
    on_conflict?: (partner_file_on_conflict | null)} })
    /** insert a single row into the table: "partner" */
    insert_partner_one?: (partnerGenqlSelection & { __args: {
    /** the row to be inserted */
    object: partner_insert_input, 
    /** upsert condition */
    on_conflict?: (partner_on_conflict | null)} })
    /** insert data into the table: "partner_operator" */
    insert_partner_operator?: (partner_operator_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: partner_operator_insert_input[], 
    /** upsert condition */
    on_conflict?: (partner_operator_on_conflict | null)} })
    /** insert a single row into the table: "partner_operator" */
    insert_partner_operator_one?: (partner_operatorGenqlSelection & { __args: {
    /** the row to be inserted */
    object: partner_operator_insert_input, 
    /** upsert condition */
    on_conflict?: (partner_operator_on_conflict | null)} })
    /** insert data into the table: "payment" */
    insert_payment?: (payment_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: payment_insert_input[], 
    /** upsert condition */
    on_conflict?: (payment_on_conflict | null)} })
    /** insert a single row into the table: "payment" */
    insert_payment_one?: (paymentGenqlSelection & { __args: {
    /** the row to be inserted */
    object: payment_insert_input, 
    /** upsert condition */
    on_conflict?: (payment_on_conflict | null)} })
    /** insert data into the table: "payment_review" */
    insert_payment_review?: (payment_review_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: payment_review_insert_input[], 
    /** upsert condition */
    on_conflict?: (payment_review_on_conflict | null)} })
    /** insert a single row into the table: "payment_review" */
    insert_payment_review_one?: (payment_reviewGenqlSelection & { __args: {
    /** the row to be inserted */
    object: payment_review_insert_input, 
    /** upsert condition */
    on_conflict?: (payment_review_on_conflict | null)} })
    /** insert data into the table: "period" */
    insert_period?: (period_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: period_insert_input[], 
    /** upsert condition */
    on_conflict?: (period_on_conflict | null)} })
    /** insert a single row into the table: "period" */
    insert_period_one?: (periodGenqlSelection & { __args: {
    /** the row to be inserted */
    object: period_insert_input, 
    /** upsert condition */
    on_conflict?: (period_on_conflict | null)} })
    /** insert data into the table: "scheduled_event" */
    insert_scheduled_event?: (scheduled_event_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: scheduled_event_insert_input[], 
    /** upsert condition */
    on_conflict?: (scheduled_event_on_conflict | null)} })
    /** insert a single row into the table: "scheduled_event" */
    insert_scheduled_event_one?: (scheduled_eventGenqlSelection & { __args: {
    /** the row to be inserted */
    object: scheduled_event_insert_input, 
    /** upsert condition */
    on_conflict?: (scheduled_event_on_conflict | null)} })
    /** insert data into the table: "state_cache" */
    insert_state_cache?: (state_cache_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: state_cache_insert_input[], 
    /** upsert condition */
    on_conflict?: (state_cache_on_conflict | null)} })
    /** insert a single row into the table: "state_cache" */
    insert_state_cache_one?: (state_cacheGenqlSelection & { __args: {
    /** the row to be inserted */
    object: state_cache_insert_input, 
    /** upsert condition */
    on_conflict?: (state_cache_on_conflict | null)} })
    /** insert data into the table: "storage.schema_migrations" */
    insert_storage_schema_migrations?: (storage_schema_migrations_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: storage_schema_migrations_insert_input[], 
    /** upsert condition */
    on_conflict?: (storage_schema_migrations_on_conflict | null)} })
    /** insert a single row into the table: "storage.schema_migrations" */
    insert_storage_schema_migrations_one?: (storage_schema_migrationsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: storage_schema_migrations_insert_input, 
    /** upsert condition */
    on_conflict?: (storage_schema_migrations_on_conflict | null)} })
    /** insert data into the table: "user_profile" */
    insert_user_profile?: (user_profile_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: user_profile_insert_input[], 
    /** upsert condition */
    on_conflict?: (user_profile_on_conflict | null)} })
    /** insert a single row into the table: "user_profile" */
    insert_user_profile_one?: (user_profileGenqlSelection & { __args: {
    /** the row to be inserted */
    object: user_profile_insert_input, 
    /** upsert condition */
    on_conflict?: (user_profile_on_conflict | null)} })
    /** update single row of the table: "auth.providers" */
    updateAuthProvider?: (authProvidersGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authProviders_set_input | null), pk_columns: authProviders_pk_columns_input} })
    /** update single row of the table: "auth.provider_requests" */
    updateAuthProviderRequest?: (authProviderRequestsGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (authProviderRequests_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (authProviderRequests_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (authProviderRequests_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (authProviderRequests_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (authProviderRequests_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (authProviderRequests_set_input | null), pk_columns: authProviderRequests_pk_columns_input} })
    /** update data of the table: "auth.provider_requests" */
    updateAuthProviderRequests?: (authProviderRequests_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (authProviderRequests_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (authProviderRequests_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (authProviderRequests_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (authProviderRequests_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (authProviderRequests_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (authProviderRequests_set_input | null), 
    /** filter the rows which have to be updated */
    where: authProviderRequests_bool_exp} })
    /** update data of the table: "auth.providers" */
    updateAuthProviders?: (authProviders_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authProviders_set_input | null), 
    /** filter the rows which have to be updated */
    where: authProviders_bool_exp} })
    /** update single row of the table: "auth.refresh_tokens" */
    updateAuthRefreshToken?: (authRefreshTokensGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (authRefreshTokens_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (authRefreshTokens_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (authRefreshTokens_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (authRefreshTokens_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (authRefreshTokens_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (authRefreshTokens_set_input | null), pk_columns: authRefreshTokens_pk_columns_input} })
    /** update single row of the table: "auth.refresh_token_types" */
    updateAuthRefreshTokenType?: (authRefreshTokenTypesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authRefreshTokenTypes_set_input | null), pk_columns: authRefreshTokenTypes_pk_columns_input} })
    /** update data of the table: "auth.refresh_token_types" */
    updateAuthRefreshTokenTypes?: (authRefreshTokenTypes_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authRefreshTokenTypes_set_input | null), 
    /** filter the rows which have to be updated */
    where: authRefreshTokenTypes_bool_exp} })
    /** update data of the table: "auth.refresh_tokens" */
    updateAuthRefreshTokens?: (authRefreshTokens_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (authRefreshTokens_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (authRefreshTokens_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (authRefreshTokens_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (authRefreshTokens_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (authRefreshTokens_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (authRefreshTokens_set_input | null), 
    /** filter the rows which have to be updated */
    where: authRefreshTokens_bool_exp} })
    /** update single row of the table: "auth.roles" */
    updateAuthRole?: (authRolesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authRoles_set_input | null), pk_columns: authRoles_pk_columns_input} })
    /** update data of the table: "auth.roles" */
    updateAuthRoles?: (authRoles_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authRoles_set_input | null), 
    /** filter the rows which have to be updated */
    where: authRoles_bool_exp} })
    /** update single row of the table: "auth.user_providers" */
    updateAuthUserProvider?: (authUserProvidersGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authUserProviders_set_input | null), pk_columns: authUserProviders_pk_columns_input} })
    /** update data of the table: "auth.user_providers" */
    updateAuthUserProviders?: (authUserProviders_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authUserProviders_set_input | null), 
    /** filter the rows which have to be updated */
    where: authUserProviders_bool_exp} })
    /** update single row of the table: "auth.user_roles" */
    updateAuthUserRole?: (authUserRolesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authUserRoles_set_input | null), pk_columns: authUserRoles_pk_columns_input} })
    /** update data of the table: "auth.user_roles" */
    updateAuthUserRoles?: (authUserRoles_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (authUserRoles_set_input | null), 
    /** filter the rows which have to be updated */
    where: authUserRoles_bool_exp} })
    /** update single row of the table: "auth.user_security_keys" */
    updateAuthUserSecurityKey?: (authUserSecurityKeysGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (authUserSecurityKeys_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (authUserSecurityKeys_set_input | null), pk_columns: authUserSecurityKeys_pk_columns_input} })
    /** update data of the table: "auth.user_security_keys" */
    updateAuthUserSecurityKeys?: (authUserSecurityKeys_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (authUserSecurityKeys_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (authUserSecurityKeys_set_input | null), 
    /** filter the rows which have to be updated */
    where: authUserSecurityKeys_bool_exp} })
    /** update single row of the table: "storage.buckets" */
    updateBucket?: (bucketsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (buckets_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (buckets_set_input | null), pk_columns: buckets_pk_columns_input} })
    /** update data of the table: "storage.buckets" */
    updateBuckets?: (buckets_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (buckets_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (buckets_set_input | null), 
    /** filter the rows which have to be updated */
    where: buckets_bool_exp} })
    /** update single row of the table: "storage.files" */
    updateFile?: (filesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (files_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (files_set_input | null), pk_columns: files_pk_columns_input} })
    /** update data of the table: "storage.files" */
    updateFiles?: (files_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (files_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (files_set_input | null), 
    /** filter the rows which have to be updated */
    where: files_bool_exp} })
    /** update single row of the table: "auth.users" */
    updateUser?: (usersGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (users_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (users_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (users_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (users_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (users_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (users_set_input | null), pk_columns: users_pk_columns_input} })
    /** update data of the table: "auth.users" */
    updateUsers?: (users_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (users_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (users_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (users_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (users_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (users_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (users_set_input | null), 
    /** filter the rows which have to be updated */
    where: users_bool_exp} })
    /** update multiples rows of table: "auth.provider_requests" */
    update_authProviderRequests_many?: (authProviderRequests_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authProviderRequests_updates[]} })
    /** update multiples rows of table: "auth.providers" */
    update_authProviders_many?: (authProviders_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authProviders_updates[]} })
    /** update multiples rows of table: "auth.refresh_token_types" */
    update_authRefreshTokenTypes_many?: (authRefreshTokenTypes_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authRefreshTokenTypes_updates[]} })
    /** update multiples rows of table: "auth.refresh_tokens" */
    update_authRefreshTokens_many?: (authRefreshTokens_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authRefreshTokens_updates[]} })
    /** update multiples rows of table: "auth.roles" */
    update_authRoles_many?: (authRoles_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authRoles_updates[]} })
    /** update multiples rows of table: "auth.user_providers" */
    update_authUserProviders_many?: (authUserProviders_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authUserProviders_updates[]} })
    /** update multiples rows of table: "auth.user_roles" */
    update_authUserRoles_many?: (authUserRoles_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authUserRoles_updates[]} })
    /** update multiples rows of table: "auth.user_security_keys" */
    update_authUserSecurityKeys_many?: (authUserSecurityKeys_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: authUserSecurityKeys_updates[]} })
    /** update data of the table: "auth.migrations" */
    update_auth_migrations?: (auth_migrations_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (auth_migrations_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (auth_migrations_set_input | null), 
    /** filter the rows which have to be updated */
    where: auth_migrations_bool_exp} })
    /** update single row of the table: "auth.migrations" */
    update_auth_migrations_by_pk?: (auth_migrationsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (auth_migrations_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (auth_migrations_set_input | null), pk_columns: auth_migrations_pk_columns_input} })
    /** update multiples rows of table: "auth.migrations" */
    update_auth_migrations_many?: (auth_migrations_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: auth_migrations_updates[]} })
    /** update multiples rows of table: "storage.buckets" */
    update_buckets_many?: (buckets_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: buckets_updates[]} })
    /** update data of the table: "campaign_file" */
    update_campaign_file?: (campaign_file_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (campaign_file_set_input | null), 
    /** filter the rows which have to be updated */
    where: campaign_file_bool_exp} })
    /** update single row of the table: "campaign_file" */
    update_campaign_file_by_pk?: (campaign_fileGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (campaign_file_set_input | null), pk_columns: campaign_file_pk_columns_input} })
    /** update multiples rows of table: "campaign_file" */
    update_campaign_file_many?: (campaign_file_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: campaign_file_updates[]} })
    /** update data of the table: "en_currencies" */
    update_en_currencies?: (en_currencies_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_currencies_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_currencies_bool_exp} })
    /** update single row of the table: "en_currencies" */
    update_en_currencies_by_pk?: (en_currenciesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_currencies_set_input | null), pk_columns: en_currencies_pk_columns_input} })
    /** update multiples rows of table: "en_currencies" */
    update_en_currencies_many?: (en_currencies_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_currencies_updates[]} })
    /** update data of the table: "en_notifications" */
    update_en_notifications?: (en_notifications_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_notifications_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_notifications_bool_exp} })
    /** update single row of the table: "en_notifications" */
    update_en_notifications_by_pk?: (en_notificationsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_notifications_set_input | null), pk_columns: en_notifications_pk_columns_input} })
    /** update multiples rows of table: "en_notifications" */
    update_en_notifications_many?: (en_notifications_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_notifications_updates[]} })
    /** update data of the table: "en_partner_steps" */
    update_en_partner_steps?: (en_partner_steps_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_partner_steps_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_partner_steps_bool_exp} })
    /** update single row of the table: "en_partner_steps" */
    update_en_partner_steps_by_pk?: (en_partner_stepsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_partner_steps_set_input | null), pk_columns: en_partner_steps_pk_columns_input} })
    /** update multiples rows of table: "en_partner_steps" */
    update_en_partner_steps_many?: (en_partner_steps_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_partner_steps_updates[]} })
    /** update data of the table: "en_payment_providers" */
    update_en_payment_providers?: (en_payment_providers_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_payment_providers_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_payment_providers_bool_exp} })
    /** update single row of the table: "en_payment_providers" */
    update_en_payment_providers_by_pk?: (en_payment_providersGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_payment_providers_set_input | null), pk_columns: en_payment_providers_pk_columns_input} })
    /** update multiples rows of table: "en_payment_providers" */
    update_en_payment_providers_many?: (en_payment_providers_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_payment_providers_updates[]} })
    /** update data of the table: "en_permissions" */
    update_en_permissions?: (en_permissions_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_permissions_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_permissions_bool_exp} })
    /** update single row of the table: "en_permissions" */
    update_en_permissions_by_pk?: (en_permissionsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_permissions_set_input | null), pk_columns: en_permissions_pk_columns_input} })
    /** update multiples rows of table: "en_permissions" */
    update_en_permissions_many?: (en_permissions_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_permissions_updates[]} })
    /** update data of the table: "en_recurrencies" */
    update_en_recurrencies?: (en_recurrencies_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_recurrencies_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_recurrencies_bool_exp} })
    /** update single row of the table: "en_recurrencies" */
    update_en_recurrencies_by_pk?: (en_recurrenciesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_recurrencies_set_input | null), pk_columns: en_recurrencies_pk_columns_input} })
    /** update multiples rows of table: "en_recurrencies" */
    update_en_recurrencies_many?: (en_recurrencies_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_recurrencies_updates[]} })
    /** update data of the table: "en_statuses" */
    update_en_statuses?: (en_statuses_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_statuses_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_statuses_bool_exp} })
    /** update single row of the table: "en_statuses" */
    update_en_statuses_by_pk?: (en_statusesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_statuses_set_input | null), pk_columns: en_statuses_pk_columns_input} })
    /** update multiples rows of table: "en_statuses" */
    update_en_statuses_many?: (en_statuses_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_statuses_updates[]} })
    /** update data of the table: "en_trans_types" */
    update_en_trans_types?: (en_trans_types_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_trans_types_set_input | null), 
    /** filter the rows which have to be updated */
    where: en_trans_types_bool_exp} })
    /** update single row of the table: "en_trans_types" */
    update_en_trans_types_by_pk?: (en_trans_typesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (en_trans_types_set_input | null), pk_columns: en_trans_types_pk_columns_input} })
    /** update multiples rows of table: "en_trans_types" */
    update_en_trans_types_many?: (en_trans_types_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: en_trans_types_updates[]} })
    /** update multiples rows of table: "storage.files" */
    update_files_many?: (files_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: files_updates[]} })
    /** update data of the table: "group" */
    update_group?: (group_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (group_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (group_set_input | null), 
    /** filter the rows which have to be updated */
    where: group_bool_exp} })
    /** update single row of the table: "group" */
    update_group_by_pk?: (groupGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (group_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (group_set_input | null), pk_columns: group_pk_columns_input} })
    /** update multiples rows of table: "group" */
    update_group_many?: (group_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: group_updates[]} })
    /** update data of the table: "invitation" */
    update_invitation?: (invitation_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (invitation_set_input | null), 
    /** filter the rows which have to be updated */
    where: invitation_bool_exp} })
    /** update single row of the table: "invitation" */
    update_invitation_by_pk?: (invitationGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (invitation_set_input | null), pk_columns: invitation_pk_columns_input} })
    /** update multiples rows of table: "invitation" */
    update_invitation_many?: (invitation_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: invitation_updates[]} })
    /** update data of the table: "member" */
    update_member?: (member_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (member_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (member_set_input | null), 
    /** filter the rows which have to be updated */
    where: member_bool_exp} })
    /** update single row of the table: "member" */
    update_member_by_pk?: (memberGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (member_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (member_set_input | null), pk_columns: member_pk_columns_input} })
    /** update multiples rows of table: "member" */
    update_member_many?: (member_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: member_updates[]} })
    /** update data of the table: "notification" */
    update_notification?: (notification_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (notification_set_input | null), 
    /** filter the rows which have to be updated */
    where: notification_bool_exp} })
    /** update single row of the table: "notification" */
    update_notification_by_pk?: (notificationGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (notification_set_input | null), pk_columns: notification_pk_columns_input} })
    /** update data of the table: "notification_item" */
    update_notification_item?: (notification_item_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (notification_item_set_input | null), 
    /** filter the rows which have to be updated */
    where: notification_item_bool_exp} })
    /** update single row of the table: "notification_item" */
    update_notification_item_by_pk?: (notification_itemGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (notification_item_set_input | null), pk_columns: notification_item_pk_columns_input} })
    /** update multiples rows of table: "notification_item" */
    update_notification_item_many?: (notification_item_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: notification_item_updates[]} })
    /** update multiples rows of table: "notification" */
    update_notification_many?: (notification_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: notification_updates[]} })
    /** update data of the table: "partner" */
    update_partner?: (partner_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_set_input | null), 
    /** filter the rows which have to be updated */
    where: partner_bool_exp} })
    /** update single row of the table: "partner" */
    update_partner_by_pk?: (partnerGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_set_input | null), pk_columns: partner_pk_columns_input} })
    /** update data of the table: "partner_campaign" */
    update_partner_campaign?: (partner_campaign_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (partner_campaign_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_campaign_set_input | null), 
    /** filter the rows which have to be updated */
    where: partner_campaign_bool_exp} })
    /** update single row of the table: "partner_campaign" */
    update_partner_campaign_by_pk?: (partner_campaignGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (partner_campaign_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_campaign_set_input | null), pk_columns: partner_campaign_pk_columns_input} })
    /** update multiples rows of table: "partner_campaign" */
    update_partner_campaign_many?: (partner_campaign_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: partner_campaign_updates[]} })
    /** update data of the table: "partner_file" */
    update_partner_file?: (partner_file_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_file_set_input | null), 
    /** filter the rows which have to be updated */
    where: partner_file_bool_exp} })
    /** update single row of the table: "partner_file" */
    update_partner_file_by_pk?: (partner_fileGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_file_set_input | null), pk_columns: partner_file_pk_columns_input} })
    /** update multiples rows of table: "partner_file" */
    update_partner_file_many?: (partner_file_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: partner_file_updates[]} })
    /** update multiples rows of table: "partner" */
    update_partner_many?: (partner_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: partner_updates[]} })
    /** update data of the table: "partner_operator" */
    update_partner_operator?: (partner_operator_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_operator_set_input | null), 
    /** filter the rows which have to be updated */
    where: partner_operator_bool_exp} })
    /** update single row of the table: "partner_operator" */
    update_partner_operator_by_pk?: (partner_operatorGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (partner_operator_set_input | null), pk_columns: partner_operator_pk_columns_input} })
    /** update multiples rows of table: "partner_operator" */
    update_partner_operator_many?: (partner_operator_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: partner_operator_updates[]} })
    /** update data of the table: "payment" */
    update_payment?: (payment_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (payment_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (payment_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (payment_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (payment_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (payment_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (payment_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (payment_set_input | null), 
    /** filter the rows which have to be updated */
    where: payment_bool_exp} })
    /** update single row of the table: "payment" */
    update_payment_by_pk?: (paymentGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (payment_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (payment_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (payment_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (payment_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (payment_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (payment_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (payment_set_input | null), pk_columns: payment_pk_columns_input} })
    /** update multiples rows of table: "payment" */
    update_payment_many?: (payment_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: payment_updates[]} })
    /** update data of the table: "payment_review" */
    update_payment_review?: (payment_review_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (payment_review_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (payment_review_set_input | null), 
    /** filter the rows which have to be updated */
    where: payment_review_bool_exp} })
    /** update single row of the table: "payment_review" */
    update_payment_review_by_pk?: (payment_reviewGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (payment_review_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (payment_review_set_input | null), pk_columns: payment_review_pk_columns_input} })
    /** update multiples rows of table: "payment_review" */
    update_payment_review_many?: (payment_review_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: payment_review_updates[]} })
    /** update data of the table: "period" */
    update_period?: (period_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (period_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (period_set_input | null), 
    /** filter the rows which have to be updated */
    where: period_bool_exp} })
    /** update single row of the table: "period" */
    update_period_by_pk?: (periodGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (period_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (period_set_input | null), pk_columns: period_pk_columns_input} })
    /** update multiples rows of table: "period" */
    update_period_many?: (period_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: period_updates[]} })
    /** update data of the table: "scheduled_event" */
    update_scheduled_event?: (scheduled_event_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (scheduled_event_set_input | null), 
    /** filter the rows which have to be updated */
    where: scheduled_event_bool_exp} })
    /** update single row of the table: "scheduled_event" */
    update_scheduled_event_by_pk?: (scheduled_eventGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (scheduled_event_set_input | null), pk_columns: scheduled_event_pk_columns_input} })
    /** update multiples rows of table: "scheduled_event" */
    update_scheduled_event_many?: (scheduled_event_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: scheduled_event_updates[]} })
    /** update data of the table: "state_cache" */
    update_state_cache?: (state_cache_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (state_cache_set_input | null), 
    /** filter the rows which have to be updated */
    where: state_cache_bool_exp} })
    /** update single row of the table: "state_cache" */
    update_state_cache_by_pk?: (state_cacheGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (state_cache_set_input | null), pk_columns: state_cache_pk_columns_input} })
    /** update multiples rows of table: "state_cache" */
    update_state_cache_many?: (state_cache_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: state_cache_updates[]} })
    /** update data of the table: "storage.schema_migrations" */
    update_storage_schema_migrations?: (storage_schema_migrations_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (storage_schema_migrations_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (storage_schema_migrations_set_input | null), 
    /** filter the rows which have to be updated */
    where: storage_schema_migrations_bool_exp} })
    /** update single row of the table: "storage.schema_migrations" */
    update_storage_schema_migrations_by_pk?: (storage_schema_migrationsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (storage_schema_migrations_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (storage_schema_migrations_set_input | null), pk_columns: storage_schema_migrations_pk_columns_input} })
    /** update multiples rows of table: "storage.schema_migrations" */
    update_storage_schema_migrations_many?: (storage_schema_migrations_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: storage_schema_migrations_updates[]} })
    /** update data of the table: "user_profile" */
    update_user_profile?: (user_profile_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_profile_set_input | null), 
    /** filter the rows which have to be updated */
    where: user_profile_bool_exp} })
    /** update single row of the table: "user_profile" */
    update_user_profile_by_pk?: (user_profileGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_profile_set_input | null), pk_columns: user_profile_pk_columns_input} })
    /** update multiples rows of table: "user_profile" */
    update_user_profile_many?: (user_profile_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: user_profile_updates[]} })
    /** update multiples rows of table: "auth.users" */
    update_users_many?: (users_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: users_updates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "notification" */
export interface notificationGenqlSelection{
    created_at?: boolean | number
    data?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    /** An object relationship */
    en_notification?: en_notificationsGenqlSelection
    /** An object relationship */
    en_status?: en_statusesGenqlSelection
    id?: boolean | number
    /** An object relationship */
    invitation?: invitationGenqlSelection
    invitation_id?: boolean | number
    message?: boolean | number
    notifiable?: boolean | number
    /** An array relationship */
    notification_items?: (notification_itemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** An aggregate relationship */
    notification_items_aggregate?: (notification_item_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    payment_review_id?: boolean | number
    /** An object relationship */
    payment_reviews?: payment_reviewGenqlSelection
    status?: boolean | number
    title?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    user_id?: boolean | number
    viewed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "notification" */
export interface notification_aggregateGenqlSelection{
    aggregate?: notification_aggregate_fieldsGenqlSelection
    nodes?: notificationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface notification_aggregate_bool_exp {bool_and?: (notification_aggregate_bool_exp_bool_and | null),bool_or?: (notification_aggregate_bool_exp_bool_or | null),count?: (notification_aggregate_bool_exp_count | null)}

export interface notification_aggregate_bool_exp_bool_and {arguments: notification_select_column_notification_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (notification_bool_exp | null),predicate: Boolean_comparison_exp}

export interface notification_aggregate_bool_exp_bool_or {arguments: notification_select_column_notification_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (notification_bool_exp | null),predicate: Boolean_comparison_exp}

export interface notification_aggregate_bool_exp_count {arguments?: (notification_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (notification_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "notification" */
export interface notification_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (notification_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: notification_max_fieldsGenqlSelection
    min?: notification_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "notification" */
export interface notification_aggregate_order_by {count?: (order_by | null),max?: (notification_max_order_by | null),min?: (notification_min_order_by | null)}


/** input type for inserting array relation for remote table "notification" */
export interface notification_arr_rel_insert_input {data: notification_insert_input[],
/** upsert condition */
on_conflict?: (notification_on_conflict | null)}


/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export interface notification_bool_exp {_and?: (notification_bool_exp[] | null),_not?: (notification_bool_exp | null),_or?: (notification_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),data?: (json_comparison_exp | null),en_notification?: (en_notifications_bool_exp | null),en_status?: (en_statuses_bool_exp | null),id?: (uuid_comparison_exp | null),invitation?: (invitation_bool_exp | null),invitation_id?: (uuid_comparison_exp | null),message?: (String_comparison_exp | null),notifiable?: (Boolean_comparison_exp | null),notification_items?: (notification_item_bool_exp | null),notification_items_aggregate?: (notification_item_aggregate_bool_exp | null),payment_review_id?: (uuid_comparison_exp | null),payment_reviews?: (payment_review_bool_exp | null),status?: (en_statuses_enum_comparison_exp | null),title?: (String_comparison_exp | null),type?: (en_notifications_enum_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null),user_id?: (uuid_comparison_exp | null),viewed?: (Boolean_comparison_exp | null)}


/** input type for inserting data into table "notification" */
export interface notification_insert_input {created_at?: (Scalars['timestamptz'] | null),data?: (Scalars['json'] | null),en_notification?: (en_notifications_obj_rel_insert_input | null),en_status?: (en_statuses_obj_rel_insert_input | null),id?: (Scalars['uuid'] | null),invitation?: (invitation_obj_rel_insert_input | null),invitation_id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),notifiable?: (Scalars['Boolean'] | null),notification_items?: (notification_item_arr_rel_insert_input | null),payment_review_id?: (Scalars['uuid'] | null),payment_reviews?: (payment_review_obj_rel_insert_input | null),status?: (en_statuses_enum | null),title?: (Scalars['String'] | null),type?: (en_notifications_enum | null),updated_at?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null),user_id?: (Scalars['uuid'] | null),viewed?: (Scalars['Boolean'] | null)}


/** columns and relationships of "notification_item" */
export interface notification_itemGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    /** An object relationship */
    notification?: notificationGenqlSelection
    notification_id?: boolean | number
    notification_message?: boolean | number
    notification_title?: boolean | number
    /** An object relationship */
    period?: periodGenqlSelection
    period_id?: boolean | number
    seen?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "notification_item" */
export interface notification_item_aggregateGenqlSelection{
    aggregate?: notification_item_aggregate_fieldsGenqlSelection
    nodes?: notification_itemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface notification_item_aggregate_bool_exp {bool_and?: (notification_item_aggregate_bool_exp_bool_and | null),bool_or?: (notification_item_aggregate_bool_exp_bool_or | null),count?: (notification_item_aggregate_bool_exp_count | null)}

export interface notification_item_aggregate_bool_exp_bool_and {arguments: notification_item_select_column_notification_item_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (notification_item_bool_exp | null),predicate: Boolean_comparison_exp}

export interface notification_item_aggregate_bool_exp_bool_or {arguments: notification_item_select_column_notification_item_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (notification_item_bool_exp | null),predicate: Boolean_comparison_exp}

export interface notification_item_aggregate_bool_exp_count {arguments?: (notification_item_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (notification_item_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "notification_item" */
export interface notification_item_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (notification_item_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: notification_item_max_fieldsGenqlSelection
    min?: notification_item_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "notification_item" */
export interface notification_item_aggregate_order_by {count?: (order_by | null),max?: (notification_item_max_order_by | null),min?: (notification_item_min_order_by | null)}


/** input type for inserting array relation for remote table "notification_item" */
export interface notification_item_arr_rel_insert_input {data: notification_item_insert_input[],
/** upsert condition */
on_conflict?: (notification_item_on_conflict | null)}


/** Boolean expression to filter rows from the table "notification_item". All fields are combined with a logical 'AND'. */
export interface notification_item_bool_exp {_and?: (notification_item_bool_exp[] | null),_not?: (notification_item_bool_exp | null),_or?: (notification_item_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),notification?: (notification_bool_exp | null),notification_id?: (uuid_comparison_exp | null),notification_message?: (String_comparison_exp | null),notification_title?: (String_comparison_exp | null),period?: (period_bool_exp | null),period_id?: (uuid_comparison_exp | null),seen?: (Boolean_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "notification_item" */
export interface notification_item_insert_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),notification?: (notification_obj_rel_insert_input | null),notification_id?: (Scalars['uuid'] | null),notification_message?: (Scalars['String'] | null),notification_title?: (Scalars['String'] | null),period?: (period_obj_rel_insert_input | null),period_id?: (Scalars['uuid'] | null),seen?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface notification_item_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    notification_id?: boolean | number
    notification_message?: boolean | number
    notification_title?: boolean | number
    period_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "notification_item" */
export interface notification_item_max_order_by {created_at?: (order_by | null),id?: (order_by | null),notification_id?: (order_by | null),notification_message?: (order_by | null),notification_title?: (order_by | null),period_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface notification_item_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    notification_id?: boolean | number
    notification_message?: boolean | number
    notification_title?: boolean | number
    period_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "notification_item" */
export interface notification_item_min_order_by {created_at?: (order_by | null),id?: (order_by | null),notification_id?: (order_by | null),notification_message?: (order_by | null),notification_title?: (order_by | null),period_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "notification_item" */
export interface notification_item_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: notification_itemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "notification_item" */
export interface notification_item_on_conflict {constraint: notification_item_constraint,update_columns?: notification_item_update_column[],where?: (notification_item_bool_exp | null)}


/** Ordering options when selecting data from "notification_item". */
export interface notification_item_order_by {created_at?: (order_by | null),id?: (order_by | null),notification?: (notification_order_by | null),notification_id?: (order_by | null),notification_message?: (order_by | null),notification_title?: (order_by | null),period?: (period_order_by | null),period_id?: (order_by | null),seen?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: notification_item */
export interface notification_item_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "notification_item" */
export interface notification_item_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),notification_id?: (Scalars['uuid'] | null),notification_message?: (Scalars['String'] | null),notification_title?: (Scalars['String'] | null),period_id?: (Scalars['uuid'] | null),seen?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "notification_item" */
export interface notification_item_stream_cursor_input {
/** Stream column input with initial value */
initial_value: notification_item_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface notification_item_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),notification_id?: (Scalars['uuid'] | null),notification_message?: (Scalars['String'] | null),notification_title?: (Scalars['String'] | null),period_id?: (Scalars['uuid'] | null),seen?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface notification_item_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (notification_item_set_input | null),
/** filter the rows which have to be updated */
where: notification_item_bool_exp}


/** aggregate max on columns */
export interface notification_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    invitation_id?: boolean | number
    message?: boolean | number
    payment_review_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "notification" */
export interface notification_max_order_by {created_at?: (order_by | null),id?: (order_by | null),invitation_id?: (order_by | null),message?: (order_by | null),payment_review_id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface notification_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    invitation_id?: boolean | number
    message?: boolean | number
    payment_review_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "notification" */
export interface notification_min_order_by {created_at?: (order_by | null),id?: (order_by | null),invitation_id?: (order_by | null),message?: (order_by | null),payment_review_id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** response of any mutation on the table "notification" */
export interface notification_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: notificationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "notification" */
export interface notification_obj_rel_insert_input {data: notification_insert_input,
/** upsert condition */
on_conflict?: (notification_on_conflict | null)}


/** on_conflict condition type for table "notification" */
export interface notification_on_conflict {constraint: notification_constraint,update_columns?: notification_update_column[],where?: (notification_bool_exp | null)}


/** Ordering options when selecting data from "notification". */
export interface notification_order_by {created_at?: (order_by | null),data?: (order_by | null),en_notification?: (en_notifications_order_by | null),en_status?: (en_statuses_order_by | null),id?: (order_by | null),invitation?: (invitation_order_by | null),invitation_id?: (order_by | null),message?: (order_by | null),notifiable?: (order_by | null),notification_items_aggregate?: (notification_item_aggregate_order_by | null),payment_review_id?: (order_by | null),payment_reviews?: (payment_review_order_by | null),status?: (order_by | null),title?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null),user?: (users_order_by | null),user_id?: (order_by | null),viewed?: (order_by | null)}


/** primary key columns input for table: notification */
export interface notification_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "notification" */
export interface notification_set_input {created_at?: (Scalars['timestamptz'] | null),data?: (Scalars['json'] | null),id?: (Scalars['uuid'] | null),invitation_id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),notifiable?: (Scalars['Boolean'] | null),payment_review_id?: (Scalars['uuid'] | null),status?: (en_statuses_enum | null),title?: (Scalars['String'] | null),type?: (en_notifications_enum | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null),viewed?: (Scalars['Boolean'] | null)}


/** Streaming cursor of the table "notification" */
export interface notification_stream_cursor_input {
/** Stream column input with initial value */
initial_value: notification_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface notification_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),data?: (Scalars['json'] | null),id?: (Scalars['uuid'] | null),invitation_id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),notifiable?: (Scalars['Boolean'] | null),payment_review_id?: (Scalars['uuid'] | null),status?: (en_statuses_enum | null),title?: (Scalars['String'] | null),type?: (en_notifications_enum | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null),viewed?: (Scalars['Boolean'] | null)}

export interface notification_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (notification_set_input | null),
/** filter the rows which have to be updated */
where: notification_bool_exp}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}


/** columns and relationships of "partner" */
export interface partnerGenqlSelection{
    /** An array relationship */
    campaign_files?: (campaign_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** An aggregate relationship */
    campaign_files_aggregate?: (campaign_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    created_at?: boolean | number
    /** An object relationship */
    en_partner_step?: en_partner_stepsGenqlSelection
    /** An array relationship */
    groups?: (groupGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** An aggregate relationship */
    groups_aggregate?: (group_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    id?: boolean | number
    partner_address?: boolean | number
    /** An array relationship */
    partner_campaigns?: (partner_campaignGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_campaign_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_campaign_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_campaign_bool_exp | null)} })
    /** An aggregate relationship */
    partner_campaigns_aggregate?: (partner_campaign_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_campaign_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_campaign_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_campaign_bool_exp | null)} })
    partner_description?: boolean | number
    partner_email?: boolean | number
    /** An array relationship */
    partner_files?: (partner_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    /** An aggregate relationship */
    partner_files_aggregate?: (partner_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    partner_name?: boolean | number
    /** An array relationship */
    partner_operators?: (partner_operatorGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    /** An aggregate relationship */
    partner_operators_aggregate?: (partner_operator_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    partner_phone?: boolean | number
    partner_step?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "partner" */
export interface partner_aggregateGenqlSelection{
    aggregate?: partner_aggregate_fieldsGenqlSelection
    nodes?: partnerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface partner_aggregate_bool_exp {count?: (partner_aggregate_bool_exp_count | null)}

export interface partner_aggregate_bool_exp_count {arguments?: (partner_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (partner_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "partner" */
export interface partner_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (partner_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: partner_max_fieldsGenqlSelection
    min?: partner_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "partner" */
export interface partner_aggregate_order_by {count?: (order_by | null),max?: (partner_max_order_by | null),min?: (partner_min_order_by | null)}


/** input type for inserting array relation for remote table "partner" */
export interface partner_arr_rel_insert_input {data: partner_insert_input[],
/** upsert condition */
on_conflict?: (partner_on_conflict | null)}


/** Boolean expression to filter rows from the table "partner". All fields are combined with a logical 'AND'. */
export interface partner_bool_exp {_and?: (partner_bool_exp[] | null),_not?: (partner_bool_exp | null),_or?: (partner_bool_exp[] | null),campaign_files?: (campaign_file_bool_exp | null),campaign_files_aggregate?: (campaign_file_aggregate_bool_exp | null),created_at?: (timestamptz_comparison_exp | null),en_partner_step?: (en_partner_steps_bool_exp | null),groups?: (group_bool_exp | null),groups_aggregate?: (group_aggregate_bool_exp | null),id?: (uuid_comparison_exp | null),partner_address?: (String_comparison_exp | null),partner_campaigns?: (partner_campaign_bool_exp | null),partner_campaigns_aggregate?: (partner_campaign_aggregate_bool_exp | null),partner_description?: (String_comparison_exp | null),partner_email?: (String_comparison_exp | null),partner_files?: (partner_file_bool_exp | null),partner_files_aggregate?: (partner_file_aggregate_bool_exp | null),partner_name?: (String_comparison_exp | null),partner_operators?: (partner_operator_bool_exp | null),partner_operators_aggregate?: (partner_operator_aggregate_bool_exp | null),partner_phone?: (String_comparison_exp | null),partner_step?: (en_partner_steps_enum_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** columns and relationships of "partner_campaign" */
export interface partner_campaignGenqlSelection{
    active?: boolean | number
    campaign_code?: boolean | number
    campaign_description?: boolean | number
    campaign_ending_date?: boolean | number
    /** An array relationship */
    campaign_files?: (campaign_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** An aggregate relationship */
    campaign_files_aggregate?: (campaign_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    campaign_starting_date?: boolean | number
    campaign_title?: boolean | number
    contribution_amount?: boolean | number
    created_at?: boolean | number
    /** An array relationship */
    groups?: (groupGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** An aggregate relationship */
    groups_aggregate?: (group_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    id?: boolean | number
    /** An object relationship */
    partner?: partnerGenqlSelection
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "partner_campaign" */
export interface partner_campaign_aggregateGenqlSelection{
    aggregate?: partner_campaign_aggregate_fieldsGenqlSelection
    nodes?: partner_campaignGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface partner_campaign_aggregate_bool_exp {bool_and?: (partner_campaign_aggregate_bool_exp_bool_and | null),bool_or?: (partner_campaign_aggregate_bool_exp_bool_or | null),count?: (partner_campaign_aggregate_bool_exp_count | null)}

export interface partner_campaign_aggregate_bool_exp_bool_and {arguments: partner_campaign_select_column_partner_campaign_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (partner_campaign_bool_exp | null),predicate: Boolean_comparison_exp}

export interface partner_campaign_aggregate_bool_exp_bool_or {arguments: partner_campaign_select_column_partner_campaign_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (partner_campaign_bool_exp | null),predicate: Boolean_comparison_exp}

export interface partner_campaign_aggregate_bool_exp_count {arguments?: (partner_campaign_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (partner_campaign_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "partner_campaign" */
export interface partner_campaign_aggregate_fieldsGenqlSelection{
    avg?: partner_campaign_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (partner_campaign_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: partner_campaign_max_fieldsGenqlSelection
    min?: partner_campaign_min_fieldsGenqlSelection
    stddev?: partner_campaign_stddev_fieldsGenqlSelection
    stddev_pop?: partner_campaign_stddev_pop_fieldsGenqlSelection
    stddev_samp?: partner_campaign_stddev_samp_fieldsGenqlSelection
    sum?: partner_campaign_sum_fieldsGenqlSelection
    var_pop?: partner_campaign_var_pop_fieldsGenqlSelection
    var_samp?: partner_campaign_var_samp_fieldsGenqlSelection
    variance?: partner_campaign_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "partner_campaign" */
export interface partner_campaign_aggregate_order_by {avg?: (partner_campaign_avg_order_by | null),count?: (order_by | null),max?: (partner_campaign_max_order_by | null),min?: (partner_campaign_min_order_by | null),stddev?: (partner_campaign_stddev_order_by | null),stddev_pop?: (partner_campaign_stddev_pop_order_by | null),stddev_samp?: (partner_campaign_stddev_samp_order_by | null),sum?: (partner_campaign_sum_order_by | null),var_pop?: (partner_campaign_var_pop_order_by | null),var_samp?: (partner_campaign_var_samp_order_by | null),variance?: (partner_campaign_variance_order_by | null)}


/** input type for inserting array relation for remote table "partner_campaign" */
export interface partner_campaign_arr_rel_insert_input {data: partner_campaign_insert_input[],
/** upsert condition */
on_conflict?: (partner_campaign_on_conflict | null)}


/** aggregate avg on columns */
export interface partner_campaign_avg_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "partner_campaign" */
export interface partner_campaign_avg_order_by {contribution_amount?: (order_by | null)}


/** Boolean expression to filter rows from the table "partner_campaign". All fields are combined with a logical 'AND'. */
export interface partner_campaign_bool_exp {_and?: (partner_campaign_bool_exp[] | null),_not?: (partner_campaign_bool_exp | null),_or?: (partner_campaign_bool_exp[] | null),active?: (Boolean_comparison_exp | null),campaign_code?: (String_comparison_exp | null),campaign_description?: (String_comparison_exp | null),campaign_ending_date?: (timestamptz_comparison_exp | null),campaign_files?: (campaign_file_bool_exp | null),campaign_files_aggregate?: (campaign_file_aggregate_bool_exp | null),campaign_starting_date?: (timestamptz_comparison_exp | null),campaign_title?: (String_comparison_exp | null),contribution_amount?: (numeric_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),groups?: (group_bool_exp | null),groups_aggregate?: (group_aggregate_bool_exp | null),id?: (uuid_comparison_exp | null),partner?: (partner_bool_exp | null),partner_id?: (uuid_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "partner_campaign" */
export interface partner_campaign_inc_input {contribution_amount?: (Scalars['numeric'] | null)}


/** input type for inserting data into table "partner_campaign" */
export interface partner_campaign_insert_input {active?: (Scalars['Boolean'] | null),campaign_code?: (Scalars['String'] | null),campaign_description?: (Scalars['String'] | null),campaign_ending_date?: (Scalars['timestamptz'] | null),campaign_files?: (campaign_file_arr_rel_insert_input | null),campaign_starting_date?: (Scalars['timestamptz'] | null),campaign_title?: (Scalars['String'] | null),contribution_amount?: (Scalars['numeric'] | null),created_at?: (Scalars['timestamptz'] | null),groups?: (group_arr_rel_insert_input | null),id?: (Scalars['uuid'] | null),partner?: (partner_obj_rel_insert_input | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface partner_campaign_max_fieldsGenqlSelection{
    campaign_code?: boolean | number
    campaign_description?: boolean | number
    campaign_ending_date?: boolean | number
    campaign_starting_date?: boolean | number
    campaign_title?: boolean | number
    contribution_amount?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "partner_campaign" */
export interface partner_campaign_max_order_by {campaign_code?: (order_by | null),campaign_description?: (order_by | null),campaign_ending_date?: (order_by | null),campaign_starting_date?: (order_by | null),campaign_title?: (order_by | null),contribution_amount?: (order_by | null),created_at?: (order_by | null),id?: (order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface partner_campaign_min_fieldsGenqlSelection{
    campaign_code?: boolean | number
    campaign_description?: boolean | number
    campaign_ending_date?: boolean | number
    campaign_starting_date?: boolean | number
    campaign_title?: boolean | number
    contribution_amount?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "partner_campaign" */
export interface partner_campaign_min_order_by {campaign_code?: (order_by | null),campaign_description?: (order_by | null),campaign_ending_date?: (order_by | null),campaign_starting_date?: (order_by | null),campaign_title?: (order_by | null),contribution_amount?: (order_by | null),created_at?: (order_by | null),id?: (order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "partner_campaign" */
export interface partner_campaign_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: partner_campaignGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "partner_campaign" */
export interface partner_campaign_obj_rel_insert_input {data: partner_campaign_insert_input,
/** upsert condition */
on_conflict?: (partner_campaign_on_conflict | null)}


/** on_conflict condition type for table "partner_campaign" */
export interface partner_campaign_on_conflict {constraint: partner_campaign_constraint,update_columns?: partner_campaign_update_column[],where?: (partner_campaign_bool_exp | null)}


/** Ordering options when selecting data from "partner_campaign". */
export interface partner_campaign_order_by {active?: (order_by | null),campaign_code?: (order_by | null),campaign_description?: (order_by | null),campaign_ending_date?: (order_by | null),campaign_files_aggregate?: (campaign_file_aggregate_order_by | null),campaign_starting_date?: (order_by | null),campaign_title?: (order_by | null),contribution_amount?: (order_by | null),created_at?: (order_by | null),groups_aggregate?: (group_aggregate_order_by | null),id?: (order_by | null),partner?: (partner_order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: partner_campaign */
export interface partner_campaign_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "partner_campaign" */
export interface partner_campaign_set_input {active?: (Scalars['Boolean'] | null),campaign_code?: (Scalars['String'] | null),campaign_description?: (Scalars['String'] | null),campaign_ending_date?: (Scalars['timestamptz'] | null),campaign_starting_date?: (Scalars['timestamptz'] | null),campaign_title?: (Scalars['String'] | null),contribution_amount?: (Scalars['numeric'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface partner_campaign_stddev_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "partner_campaign" */
export interface partner_campaign_stddev_order_by {contribution_amount?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface partner_campaign_stddev_pop_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "partner_campaign" */
export interface partner_campaign_stddev_pop_order_by {contribution_amount?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface partner_campaign_stddev_samp_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "partner_campaign" */
export interface partner_campaign_stddev_samp_order_by {contribution_amount?: (order_by | null)}


/** Streaming cursor of the table "partner_campaign" */
export interface partner_campaign_stream_cursor_input {
/** Stream column input with initial value */
initial_value: partner_campaign_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface partner_campaign_stream_cursor_value_input {active?: (Scalars['Boolean'] | null),campaign_code?: (Scalars['String'] | null),campaign_description?: (Scalars['String'] | null),campaign_ending_date?: (Scalars['timestamptz'] | null),campaign_starting_date?: (Scalars['timestamptz'] | null),campaign_title?: (Scalars['String'] | null),contribution_amount?: (Scalars['numeric'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface partner_campaign_sum_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "partner_campaign" */
export interface partner_campaign_sum_order_by {contribution_amount?: (order_by | null)}

export interface partner_campaign_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (partner_campaign_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (partner_campaign_set_input | null),
/** filter the rows which have to be updated */
where: partner_campaign_bool_exp}


/** aggregate var_pop on columns */
export interface partner_campaign_var_pop_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "partner_campaign" */
export interface partner_campaign_var_pop_order_by {contribution_amount?: (order_by | null)}


/** aggregate var_samp on columns */
export interface partner_campaign_var_samp_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "partner_campaign" */
export interface partner_campaign_var_samp_order_by {contribution_amount?: (order_by | null)}


/** aggregate variance on columns */
export interface partner_campaign_variance_fieldsGenqlSelection{
    contribution_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "partner_campaign" */
export interface partner_campaign_variance_order_by {contribution_amount?: (order_by | null)}


/** columns and relationships of "partner_file" */
export interface partner_fileGenqlSelection{
    created_at?: boolean | number
    /** An object relationship */
    file?: filesGenqlSelection
    file_id?: boolean | number
    id?: boolean | number
    /** An object relationship */
    partner?: partnerGenqlSelection
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "partner_file" */
export interface partner_file_aggregateGenqlSelection{
    aggregate?: partner_file_aggregate_fieldsGenqlSelection
    nodes?: partner_fileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface partner_file_aggregate_bool_exp {count?: (partner_file_aggregate_bool_exp_count | null)}

export interface partner_file_aggregate_bool_exp_count {arguments?: (partner_file_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (partner_file_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "partner_file" */
export interface partner_file_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (partner_file_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: partner_file_max_fieldsGenqlSelection
    min?: partner_file_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "partner_file" */
export interface partner_file_aggregate_order_by {count?: (order_by | null),max?: (partner_file_max_order_by | null),min?: (partner_file_min_order_by | null)}


/** input type for inserting array relation for remote table "partner_file" */
export interface partner_file_arr_rel_insert_input {data: partner_file_insert_input[],
/** upsert condition */
on_conflict?: (partner_file_on_conflict | null)}


/** Boolean expression to filter rows from the table "partner_file". All fields are combined with a logical 'AND'. */
export interface partner_file_bool_exp {_and?: (partner_file_bool_exp[] | null),_not?: (partner_file_bool_exp | null),_or?: (partner_file_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),file?: (files_bool_exp | null),file_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),partner?: (partner_bool_exp | null),partner_id?: (uuid_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "partner_file" */
export interface partner_file_insert_input {created_at?: (Scalars['timestamptz'] | null),file?: (files_obj_rel_insert_input | null),file_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),partner?: (partner_obj_rel_insert_input | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface partner_file_max_fieldsGenqlSelection{
    created_at?: boolean | number
    file_id?: boolean | number
    id?: boolean | number
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "partner_file" */
export interface partner_file_max_order_by {created_at?: (order_by | null),file_id?: (order_by | null),id?: (order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface partner_file_min_fieldsGenqlSelection{
    created_at?: boolean | number
    file_id?: boolean | number
    id?: boolean | number
    partner_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "partner_file" */
export interface partner_file_min_order_by {created_at?: (order_by | null),file_id?: (order_by | null),id?: (order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "partner_file" */
export interface partner_file_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: partner_fileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "partner_file" */
export interface partner_file_on_conflict {constraint: partner_file_constraint,update_columns?: partner_file_update_column[],where?: (partner_file_bool_exp | null)}


/** Ordering options when selecting data from "partner_file". */
export interface partner_file_order_by {created_at?: (order_by | null),file?: (files_order_by | null),file_id?: (order_by | null),id?: (order_by | null),partner?: (partner_order_by | null),partner_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: partner_file */
export interface partner_file_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "partner_file" */
export interface partner_file_set_input {created_at?: (Scalars['timestamptz'] | null),file_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "partner_file" */
export interface partner_file_stream_cursor_input {
/** Stream column input with initial value */
initial_value: partner_file_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface partner_file_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),file_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),partner_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface partner_file_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (partner_file_set_input | null),
/** filter the rows which have to be updated */
where: partner_file_bool_exp}


/** input type for inserting data into table "partner" */
export interface partner_insert_input {campaign_files?: (campaign_file_arr_rel_insert_input | null),created_at?: (Scalars['timestamptz'] | null),en_partner_step?: (en_partner_steps_obj_rel_insert_input | null),groups?: (group_arr_rel_insert_input | null),id?: (Scalars['uuid'] | null),partner_address?: (Scalars['String'] | null),partner_campaigns?: (partner_campaign_arr_rel_insert_input | null),partner_description?: (Scalars['String'] | null),partner_email?: (Scalars['String'] | null),partner_files?: (partner_file_arr_rel_insert_input | null),partner_name?: (Scalars['String'] | null),partner_operators?: (partner_operator_arr_rel_insert_input | null),partner_phone?: (Scalars['String'] | null),partner_step?: (en_partner_steps_enum | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface partner_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    partner_address?: boolean | number
    partner_description?: boolean | number
    partner_email?: boolean | number
    partner_name?: boolean | number
    partner_phone?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "partner" */
export interface partner_max_order_by {created_at?: (order_by | null),id?: (order_by | null),partner_address?: (order_by | null),partner_description?: (order_by | null),partner_email?: (order_by | null),partner_name?: (order_by | null),partner_phone?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface partner_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    partner_address?: boolean | number
    partner_description?: boolean | number
    partner_email?: boolean | number
    partner_name?: boolean | number
    partner_phone?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "partner" */
export interface partner_min_order_by {created_at?: (order_by | null),id?: (order_by | null),partner_address?: (order_by | null),partner_description?: (order_by | null),partner_email?: (order_by | null),partner_name?: (order_by | null),partner_phone?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "partner" */
export interface partner_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: partnerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "partner" */
export interface partner_obj_rel_insert_input {data: partner_insert_input,
/** upsert condition */
on_conflict?: (partner_on_conflict | null)}


/** on_conflict condition type for table "partner" */
export interface partner_on_conflict {constraint: partner_constraint,update_columns?: partner_update_column[],where?: (partner_bool_exp | null)}


/** columns and relationships of "partner_operator" */
export interface partner_operatorGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    /** An object relationship */
    partner?: partnerGenqlSelection
    partnerid?: boolean | number
    updated_at?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    userid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "partner_operator" */
export interface partner_operator_aggregateGenqlSelection{
    aggregate?: partner_operator_aggregate_fieldsGenqlSelection
    nodes?: partner_operatorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface partner_operator_aggregate_bool_exp {count?: (partner_operator_aggregate_bool_exp_count | null)}

export interface partner_operator_aggregate_bool_exp_count {arguments?: (partner_operator_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (partner_operator_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "partner_operator" */
export interface partner_operator_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (partner_operator_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: partner_operator_max_fieldsGenqlSelection
    min?: partner_operator_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "partner_operator" */
export interface partner_operator_aggregate_order_by {count?: (order_by | null),max?: (partner_operator_max_order_by | null),min?: (partner_operator_min_order_by | null)}


/** input type for inserting array relation for remote table "partner_operator" */
export interface partner_operator_arr_rel_insert_input {data: partner_operator_insert_input[],
/** upsert condition */
on_conflict?: (partner_operator_on_conflict | null)}


/** Boolean expression to filter rows from the table "partner_operator". All fields are combined with a logical 'AND'. */
export interface partner_operator_bool_exp {_and?: (partner_operator_bool_exp[] | null),_not?: (partner_operator_bool_exp | null),_or?: (partner_operator_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),partner?: (partner_bool_exp | null),partnerid?: (uuid_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null),userid?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "partner_operator" */
export interface partner_operator_insert_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),partner?: (partner_obj_rel_insert_input | null),partnerid?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null),userid?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface partner_operator_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    partnerid?: boolean | number
    updated_at?: boolean | number
    userid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "partner_operator" */
export interface partner_operator_max_order_by {created_at?: (order_by | null),id?: (order_by | null),partnerid?: (order_by | null),updated_at?: (order_by | null),userid?: (order_by | null)}


/** aggregate min on columns */
export interface partner_operator_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    partnerid?: boolean | number
    updated_at?: boolean | number
    userid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "partner_operator" */
export interface partner_operator_min_order_by {created_at?: (order_by | null),id?: (order_by | null),partnerid?: (order_by | null),updated_at?: (order_by | null),userid?: (order_by | null)}


/** response of any mutation on the table "partner_operator" */
export interface partner_operator_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: partner_operatorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "partner_operator" */
export interface partner_operator_on_conflict {constraint: partner_operator_constraint,update_columns?: partner_operator_update_column[],where?: (partner_operator_bool_exp | null)}


/** Ordering options when selecting data from "partner_operator". */
export interface partner_operator_order_by {created_at?: (order_by | null),id?: (order_by | null),partner?: (partner_order_by | null),partnerid?: (order_by | null),updated_at?: (order_by | null),user?: (users_order_by | null),userid?: (order_by | null)}


/** primary key columns input for table: partner_operator */
export interface partner_operator_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "partner_operator" */
export interface partner_operator_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),partnerid?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null),userid?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "partner_operator" */
export interface partner_operator_stream_cursor_input {
/** Stream column input with initial value */
initial_value: partner_operator_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface partner_operator_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),partnerid?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null),userid?: (Scalars['uuid'] | null)}

export interface partner_operator_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (partner_operator_set_input | null),
/** filter the rows which have to be updated */
where: partner_operator_bool_exp}


/** Ordering options when selecting data from "partner". */
export interface partner_order_by {campaign_files_aggregate?: (campaign_file_aggregate_order_by | null),created_at?: (order_by | null),en_partner_step?: (en_partner_steps_order_by | null),groups_aggregate?: (group_aggregate_order_by | null),id?: (order_by | null),partner_address?: (order_by | null),partner_campaigns_aggregate?: (partner_campaign_aggregate_order_by | null),partner_description?: (order_by | null),partner_email?: (order_by | null),partner_files_aggregate?: (partner_file_aggregate_order_by | null),partner_name?: (order_by | null),partner_operators_aggregate?: (partner_operator_aggregate_order_by | null),partner_phone?: (order_by | null),partner_step?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: partner */
export interface partner_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "partner" */
export interface partner_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),partner_address?: (Scalars['String'] | null),partner_description?: (Scalars['String'] | null),partner_email?: (Scalars['String'] | null),partner_name?: (Scalars['String'] | null),partner_phone?: (Scalars['String'] | null),partner_step?: (en_partner_steps_enum | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "partner" */
export interface partner_stream_cursor_input {
/** Stream column input with initial value */
initial_value: partner_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface partner_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),partner_address?: (Scalars['String'] | null),partner_description?: (Scalars['String'] | null),partner_email?: (Scalars['String'] | null),partner_name?: (Scalars['String'] | null),partner_phone?: (Scalars['String'] | null),partner_step?: (en_partner_steps_enum | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface partner_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (partner_set_input | null),
/** filter the rows which have to be updated */
where: partner_bool_exp}


/** columns and relationships of "payment" */
export interface paymentGenqlSelection{
    amount?: boolean | number
    cardinfo?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    created_at?: boolean | number
    customer_id?: boolean | number
    dest_customer_name?: boolean | number
    dest_customer_phone?: boolean | number
    /** An object relationship */
    en_currency?: en_currenciesGenqlSelection
    /** An object relationship */
    enum_status?: en_statusesGenqlSelection
    /** An object relationship */
    enum_trans_type?: en_trans_typesGenqlSelection
    from_ci?: boolean | number
    /** An object relationship */
    group?: groupGenqlSelection
    group_id?: boolean | number
    id?: boolean | number
    /** An object relationship */
    member?: memberGenqlSelection
    member_id?: boolean | number
    narration?: boolean | number
    operation_exception?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    order_id?: boolean | number
    payload_gateway?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    payload_request?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    payload_response?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    /** An array relationship */
    paymentReviewsByPaymentId?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An aggregate relationship */
    paymentReviewsByPaymentId_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    payment_currency?: boolean | number
    /** An object relationship */
    payment_provider?: en_payment_providersGenqlSelection
    payment_provider_id?: boolean | number
    /** An array relationship */
    payment_reviews?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An aggregate relationship */
    payment_reviews_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An object relationship */
    period?: periodGenqlSelection
    period_id?: boolean | number
    scheduled_at?: boolean | number
    source_customer_name?: boolean | number
    source_customer_phone?: boolean | number
    temp?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    transaction_status?: boolean | number
    transaction_type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "payment" */
export interface payment_aggregateGenqlSelection{
    aggregate?: payment_aggregate_fieldsGenqlSelection
    nodes?: paymentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface payment_aggregate_bool_exp {bool_and?: (payment_aggregate_bool_exp_bool_and | null),bool_or?: (payment_aggregate_bool_exp_bool_or | null),count?: (payment_aggregate_bool_exp_count | null)}

export interface payment_aggregate_bool_exp_bool_and {arguments: payment_select_column_payment_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (payment_bool_exp | null),predicate: Boolean_comparison_exp}

export interface payment_aggregate_bool_exp_bool_or {arguments: payment_select_column_payment_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (payment_bool_exp | null),predicate: Boolean_comparison_exp}

export interface payment_aggregate_bool_exp_count {arguments?: (payment_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (payment_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "payment" */
export interface payment_aggregate_fieldsGenqlSelection{
    avg?: payment_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (payment_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: payment_max_fieldsGenqlSelection
    min?: payment_min_fieldsGenqlSelection
    stddev?: payment_stddev_fieldsGenqlSelection
    stddev_pop?: payment_stddev_pop_fieldsGenqlSelection
    stddev_samp?: payment_stddev_samp_fieldsGenqlSelection
    sum?: payment_sum_fieldsGenqlSelection
    var_pop?: payment_var_pop_fieldsGenqlSelection
    var_samp?: payment_var_samp_fieldsGenqlSelection
    variance?: payment_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "payment" */
export interface payment_aggregate_order_by {avg?: (payment_avg_order_by | null),count?: (order_by | null),max?: (payment_max_order_by | null),min?: (payment_min_order_by | null),stddev?: (payment_stddev_order_by | null),stddev_pop?: (payment_stddev_pop_order_by | null),stddev_samp?: (payment_stddev_samp_order_by | null),sum?: (payment_sum_order_by | null),var_pop?: (payment_var_pop_order_by | null),var_samp?: (payment_var_samp_order_by | null),variance?: (payment_variance_order_by | null)}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface payment_append_input {cardinfo?: (Scalars['jsonb'] | null),operation_exception?: (Scalars['jsonb'] | null),payload_gateway?: (Scalars['jsonb'] | null),payload_request?: (Scalars['jsonb'] | null),payload_response?: (Scalars['jsonb'] | null),temp?: (Scalars['jsonb'] | null)}


/** input type for inserting array relation for remote table "payment" */
export interface payment_arr_rel_insert_input {data: payment_insert_input[],
/** upsert condition */
on_conflict?: (payment_on_conflict | null)}


/** aggregate avg on columns */
export interface payment_avg_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "payment" */
export interface payment_avg_order_by {amount?: (order_by | null)}


/** Boolean expression to filter rows from the table "payment". All fields are combined with a logical 'AND'. */
export interface payment_bool_exp {_and?: (payment_bool_exp[] | null),_not?: (payment_bool_exp | null),_or?: (payment_bool_exp[] | null),amount?: (numeric_comparison_exp | null),cardinfo?: (jsonb_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),customer_id?: (String_comparison_exp | null),dest_customer_name?: (String_comparison_exp | null),dest_customer_phone?: (String_comparison_exp | null),en_currency?: (en_currencies_bool_exp | null),enum_status?: (en_statuses_bool_exp | null),enum_trans_type?: (en_trans_types_bool_exp | null),from_ci?: (Boolean_comparison_exp | null),group?: (group_bool_exp | null),group_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),member?: (member_bool_exp | null),member_id?: (uuid_comparison_exp | null),narration?: (String_comparison_exp | null),operation_exception?: (jsonb_comparison_exp | null),order_id?: (uuid_comparison_exp | null),payload_gateway?: (jsonb_comparison_exp | null),payload_request?: (jsonb_comparison_exp | null),payload_response?: (jsonb_comparison_exp | null),paymentReviewsByPaymentId?: (payment_review_bool_exp | null),paymentReviewsByPaymentId_aggregate?: (payment_review_aggregate_bool_exp | null),payment_currency?: (en_currencies_enum_comparison_exp | null),payment_provider?: (en_payment_providers_bool_exp | null),payment_provider_id?: (en_payment_providers_enum_comparison_exp | null),payment_reviews?: (payment_review_bool_exp | null),payment_reviews_aggregate?: (payment_review_aggregate_bool_exp | null),period?: (period_bool_exp | null),period_id?: (uuid_comparison_exp | null),scheduled_at?: (timestamptz_comparison_exp | null),source_customer_name?: (String_comparison_exp | null),source_customer_phone?: (String_comparison_exp | null),temp?: (jsonb_comparison_exp | null),transaction_status?: (en_statuses_enum_comparison_exp | null),transaction_type?: (en_trans_types_enum_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface payment_delete_at_path_input {cardinfo?: (Scalars['String'][] | null),operation_exception?: (Scalars['String'][] | null),payload_gateway?: (Scalars['String'][] | null),payload_request?: (Scalars['String'][] | null),payload_response?: (Scalars['String'][] | null),temp?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface payment_delete_elem_input {cardinfo?: (Scalars['Int'] | null),operation_exception?: (Scalars['Int'] | null),payload_gateway?: (Scalars['Int'] | null),payload_request?: (Scalars['Int'] | null),payload_response?: (Scalars['Int'] | null),temp?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface payment_delete_key_input {cardinfo?: (Scalars['String'] | null),operation_exception?: (Scalars['String'] | null),payload_gateway?: (Scalars['String'] | null),payload_request?: (Scalars['String'] | null),payload_response?: (Scalars['String'] | null),temp?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "payment" */
export interface payment_inc_input {amount?: (Scalars['numeric'] | null)}


/** input type for inserting data into table "payment" */
export interface payment_insert_input {amount?: (Scalars['numeric'] | null),cardinfo?: (Scalars['jsonb'] | null),created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['String'] | null),dest_customer_name?: (Scalars['String'] | null),dest_customer_phone?: (Scalars['String'] | null),en_currency?: (en_currencies_obj_rel_insert_input | null),enum_status?: (en_statuses_obj_rel_insert_input | null),enum_trans_type?: (en_trans_types_obj_rel_insert_input | null),from_ci?: (Scalars['Boolean'] | null),group?: (group_obj_rel_insert_input | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),member?: (member_obj_rel_insert_input | null),member_id?: (Scalars['uuid'] | null),narration?: (Scalars['String'] | null),operation_exception?: (Scalars['jsonb'] | null),order_id?: (Scalars['uuid'] | null),payload_gateway?: (Scalars['jsonb'] | null),payload_request?: (Scalars['jsonb'] | null),payload_response?: (Scalars['jsonb'] | null),paymentReviewsByPaymentId?: (payment_review_arr_rel_insert_input | null),payment_currency?: (en_currencies_enum | null),payment_provider?: (en_payment_providers_obj_rel_insert_input | null),payment_provider_id?: (en_payment_providers_enum | null),payment_reviews?: (payment_review_arr_rel_insert_input | null),period?: (period_obj_rel_insert_input | null),period_id?: (Scalars['uuid'] | null),scheduled_at?: (Scalars['timestamptz'] | null),source_customer_name?: (Scalars['String'] | null),source_customer_phone?: (Scalars['String'] | null),temp?: (Scalars['jsonb'] | null),transaction_status?: (en_statuses_enum | null),transaction_type?: (en_trans_types_enum | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface payment_max_fieldsGenqlSelection{
    amount?: boolean | number
    created_at?: boolean | number
    customer_id?: boolean | number
    dest_customer_name?: boolean | number
    dest_customer_phone?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    member_id?: boolean | number
    narration?: boolean | number
    order_id?: boolean | number
    period_id?: boolean | number
    scheduled_at?: boolean | number
    source_customer_name?: boolean | number
    source_customer_phone?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "payment" */
export interface payment_max_order_by {amount?: (order_by | null),created_at?: (order_by | null),customer_id?: (order_by | null),dest_customer_name?: (order_by | null),dest_customer_phone?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),member_id?: (order_by | null),narration?: (order_by | null),order_id?: (order_by | null),period_id?: (order_by | null),scheduled_at?: (order_by | null),source_customer_name?: (order_by | null),source_customer_phone?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface payment_min_fieldsGenqlSelection{
    amount?: boolean | number
    created_at?: boolean | number
    customer_id?: boolean | number
    dest_customer_name?: boolean | number
    dest_customer_phone?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    member_id?: boolean | number
    narration?: boolean | number
    order_id?: boolean | number
    period_id?: boolean | number
    scheduled_at?: boolean | number
    source_customer_name?: boolean | number
    source_customer_phone?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "payment" */
export interface payment_min_order_by {amount?: (order_by | null),created_at?: (order_by | null),customer_id?: (order_by | null),dest_customer_name?: (order_by | null),dest_customer_phone?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),member_id?: (order_by | null),narration?: (order_by | null),order_id?: (order_by | null),period_id?: (order_by | null),scheduled_at?: (order_by | null),source_customer_name?: (order_by | null),source_customer_phone?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "payment" */
export interface payment_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: paymentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "payment" */
export interface payment_obj_rel_insert_input {data: payment_insert_input,
/** upsert condition */
on_conflict?: (payment_on_conflict | null)}


/** on_conflict condition type for table "payment" */
export interface payment_on_conflict {constraint: payment_constraint,update_columns?: payment_update_column[],where?: (payment_bool_exp | null)}


/** Ordering options when selecting data from "payment". */
export interface payment_order_by {amount?: (order_by | null),cardinfo?: (order_by | null),created_at?: (order_by | null),customer_id?: (order_by | null),dest_customer_name?: (order_by | null),dest_customer_phone?: (order_by | null),en_currency?: (en_currencies_order_by | null),enum_status?: (en_statuses_order_by | null),enum_trans_type?: (en_trans_types_order_by | null),from_ci?: (order_by | null),group?: (group_order_by | null),group_id?: (order_by | null),id?: (order_by | null),member?: (member_order_by | null),member_id?: (order_by | null),narration?: (order_by | null),operation_exception?: (order_by | null),order_id?: (order_by | null),payload_gateway?: (order_by | null),payload_request?: (order_by | null),payload_response?: (order_by | null),paymentReviewsByPaymentId_aggregate?: (payment_review_aggregate_order_by | null),payment_currency?: (order_by | null),payment_provider?: (en_payment_providers_order_by | null),payment_provider_id?: (order_by | null),payment_reviews_aggregate?: (payment_review_aggregate_order_by | null),period?: (period_order_by | null),period_id?: (order_by | null),scheduled_at?: (order_by | null),source_customer_name?: (order_by | null),source_customer_phone?: (order_by | null),temp?: (order_by | null),transaction_status?: (order_by | null),transaction_type?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: payment */
export interface payment_pk_columns_input {id: Scalars['uuid']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface payment_prepend_input {cardinfo?: (Scalars['jsonb'] | null),operation_exception?: (Scalars['jsonb'] | null),payload_gateway?: (Scalars['jsonb'] | null),payload_request?: (Scalars['jsonb'] | null),payload_response?: (Scalars['jsonb'] | null),temp?: (Scalars['jsonb'] | null)}


/** columns and relationships of "payment_review" */
export interface payment_reviewGenqlSelection{
    created_at?: boolean | number
    /** An object relationship */
    en_permission?: en_permissionsGenqlSelection
    /** An object relationship */
    group?: groupGenqlSelection
    group_id?: boolean | number
    id?: boolean | number
    index?: boolean | number
    notes?: boolean | number
    /** An array relationship */
    notifications?: (notificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** An aggregate relationship */
    notifications_aggregate?: (notification_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** An object relationship */
    payment?: paymentGenqlSelection
    payment_id?: boolean | number
    /** An object relationship */
    period?: periodGenqlSelection
    period_id?: boolean | number
    /** An object relationship */
    requester?: memberGenqlSelection
    requester_id?: boolean | number
    response?: boolean | number
    /** An object relationship */
    reviewer?: memberGenqlSelection
    reviewer_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "payment_review" */
export interface payment_review_aggregateGenqlSelection{
    aggregate?: payment_review_aggregate_fieldsGenqlSelection
    nodes?: payment_reviewGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface payment_review_aggregate_bool_exp {count?: (payment_review_aggregate_bool_exp_count | null)}

export interface payment_review_aggregate_bool_exp_count {arguments?: (payment_review_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (payment_review_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "payment_review" */
export interface payment_review_aggregate_fieldsGenqlSelection{
    avg?: payment_review_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (payment_review_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: payment_review_max_fieldsGenqlSelection
    min?: payment_review_min_fieldsGenqlSelection
    stddev?: payment_review_stddev_fieldsGenqlSelection
    stddev_pop?: payment_review_stddev_pop_fieldsGenqlSelection
    stddev_samp?: payment_review_stddev_samp_fieldsGenqlSelection
    sum?: payment_review_sum_fieldsGenqlSelection
    var_pop?: payment_review_var_pop_fieldsGenqlSelection
    var_samp?: payment_review_var_samp_fieldsGenqlSelection
    variance?: payment_review_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "payment_review" */
export interface payment_review_aggregate_order_by {avg?: (payment_review_avg_order_by | null),count?: (order_by | null),max?: (payment_review_max_order_by | null),min?: (payment_review_min_order_by | null),stddev?: (payment_review_stddev_order_by | null),stddev_pop?: (payment_review_stddev_pop_order_by | null),stddev_samp?: (payment_review_stddev_samp_order_by | null),sum?: (payment_review_sum_order_by | null),var_pop?: (payment_review_var_pop_order_by | null),var_samp?: (payment_review_var_samp_order_by | null),variance?: (payment_review_variance_order_by | null)}


/** input type for inserting array relation for remote table "payment_review" */
export interface payment_review_arr_rel_insert_input {data: payment_review_insert_input[],
/** upsert condition */
on_conflict?: (payment_review_on_conflict | null)}


/** aggregate avg on columns */
export interface payment_review_avg_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "payment_review" */
export interface payment_review_avg_order_by {index?: (order_by | null)}


/** Boolean expression to filter rows from the table "payment_review". All fields are combined with a logical 'AND'. */
export interface payment_review_bool_exp {_and?: (payment_review_bool_exp[] | null),_not?: (payment_review_bool_exp | null),_or?: (payment_review_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),en_permission?: (en_permissions_bool_exp | null),group?: (group_bool_exp | null),group_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),index?: (Int_comparison_exp | null),notes?: (String_comparison_exp | null),notifications?: (notification_bool_exp | null),notifications_aggregate?: (notification_aggregate_bool_exp | null),payment?: (payment_bool_exp | null),payment_id?: (uuid_comparison_exp | null),period?: (period_bool_exp | null),period_id?: (uuid_comparison_exp | null),requester?: (member_bool_exp | null),requester_id?: (uuid_comparison_exp | null),response?: (en_permissions_enum_comparison_exp | null),reviewer?: (member_bool_exp | null),reviewer_id?: (uuid_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "payment_review" */
export interface payment_review_inc_input {index?: (Scalars['Int'] | null)}


/** input type for inserting data into table "payment_review" */
export interface payment_review_insert_input {created_at?: (Scalars['timestamptz'] | null),en_permission?: (en_permissions_obj_rel_insert_input | null),group?: (group_obj_rel_insert_input | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),index?: (Scalars['Int'] | null),notes?: (Scalars['String'] | null),notifications?: (notification_arr_rel_insert_input | null),payment?: (payment_obj_rel_insert_input | null),payment_id?: (Scalars['uuid'] | null),period?: (period_obj_rel_insert_input | null),period_id?: (Scalars['uuid'] | null),requester?: (member_obj_rel_insert_input | null),requester_id?: (Scalars['uuid'] | null),response?: (en_permissions_enum | null),reviewer?: (member_obj_rel_insert_input | null),reviewer_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface payment_review_max_fieldsGenqlSelection{
    created_at?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    index?: boolean | number
    notes?: boolean | number
    payment_id?: boolean | number
    period_id?: boolean | number
    requester_id?: boolean | number
    reviewer_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "payment_review" */
export interface payment_review_max_order_by {created_at?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),index?: (order_by | null),notes?: (order_by | null),payment_id?: (order_by | null),period_id?: (order_by | null),requester_id?: (order_by | null),reviewer_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface payment_review_min_fieldsGenqlSelection{
    created_at?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    index?: boolean | number
    notes?: boolean | number
    payment_id?: boolean | number
    period_id?: boolean | number
    requester_id?: boolean | number
    reviewer_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "payment_review" */
export interface payment_review_min_order_by {created_at?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),index?: (order_by | null),notes?: (order_by | null),payment_id?: (order_by | null),period_id?: (order_by | null),requester_id?: (order_by | null),reviewer_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "payment_review" */
export interface payment_review_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: payment_reviewGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "payment_review" */
export interface payment_review_obj_rel_insert_input {data: payment_review_insert_input,
/** upsert condition */
on_conflict?: (payment_review_on_conflict | null)}


/** on_conflict condition type for table "payment_review" */
export interface payment_review_on_conflict {constraint: payment_review_constraint,update_columns?: payment_review_update_column[],where?: (payment_review_bool_exp | null)}


/** Ordering options when selecting data from "payment_review". */
export interface payment_review_order_by {created_at?: (order_by | null),en_permission?: (en_permissions_order_by | null),group?: (group_order_by | null),group_id?: (order_by | null),id?: (order_by | null),index?: (order_by | null),notes?: (order_by | null),notifications_aggregate?: (notification_aggregate_order_by | null),payment?: (payment_order_by | null),payment_id?: (order_by | null),period?: (period_order_by | null),period_id?: (order_by | null),requester?: (member_order_by | null),requester_id?: (order_by | null),response?: (order_by | null),reviewer?: (member_order_by | null),reviewer_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: payment_review */
export interface payment_review_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "payment_review" */
export interface payment_review_set_input {created_at?: (Scalars['timestamptz'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),index?: (Scalars['Int'] | null),notes?: (Scalars['String'] | null),payment_id?: (Scalars['uuid'] | null),period_id?: (Scalars['uuid'] | null),requester_id?: (Scalars['uuid'] | null),response?: (en_permissions_enum | null),reviewer_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface payment_review_stddev_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "payment_review" */
export interface payment_review_stddev_order_by {index?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface payment_review_stddev_pop_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "payment_review" */
export interface payment_review_stddev_pop_order_by {index?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface payment_review_stddev_samp_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "payment_review" */
export interface payment_review_stddev_samp_order_by {index?: (order_by | null)}


/** Streaming cursor of the table "payment_review" */
export interface payment_review_stream_cursor_input {
/** Stream column input with initial value */
initial_value: payment_review_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface payment_review_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),index?: (Scalars['Int'] | null),notes?: (Scalars['String'] | null),payment_id?: (Scalars['uuid'] | null),period_id?: (Scalars['uuid'] | null),requester_id?: (Scalars['uuid'] | null),response?: (en_permissions_enum | null),reviewer_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface payment_review_sum_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "payment_review" */
export interface payment_review_sum_order_by {index?: (order_by | null)}

export interface payment_review_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (payment_review_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (payment_review_set_input | null),
/** filter the rows which have to be updated */
where: payment_review_bool_exp}


/** aggregate var_pop on columns */
export interface payment_review_var_pop_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "payment_review" */
export interface payment_review_var_pop_order_by {index?: (order_by | null)}


/** aggregate var_samp on columns */
export interface payment_review_var_samp_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "payment_review" */
export interface payment_review_var_samp_order_by {index?: (order_by | null)}


/** aggregate variance on columns */
export interface payment_review_variance_fieldsGenqlSelection{
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "payment_review" */
export interface payment_review_variance_order_by {index?: (order_by | null)}


/** input type for updating data in table "payment" */
export interface payment_set_input {amount?: (Scalars['numeric'] | null),cardinfo?: (Scalars['jsonb'] | null),created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['String'] | null),dest_customer_name?: (Scalars['String'] | null),dest_customer_phone?: (Scalars['String'] | null),from_ci?: (Scalars['Boolean'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),member_id?: (Scalars['uuid'] | null),narration?: (Scalars['String'] | null),operation_exception?: (Scalars['jsonb'] | null),order_id?: (Scalars['uuid'] | null),payload_gateway?: (Scalars['jsonb'] | null),payload_request?: (Scalars['jsonb'] | null),payload_response?: (Scalars['jsonb'] | null),payment_currency?: (en_currencies_enum | null),payment_provider_id?: (en_payment_providers_enum | null),period_id?: (Scalars['uuid'] | null),scheduled_at?: (Scalars['timestamptz'] | null),source_customer_name?: (Scalars['String'] | null),source_customer_phone?: (Scalars['String'] | null),temp?: (Scalars['jsonb'] | null),transaction_status?: (en_statuses_enum | null),transaction_type?: (en_trans_types_enum | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface payment_stddev_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "payment" */
export interface payment_stddev_order_by {amount?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface payment_stddev_pop_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "payment" */
export interface payment_stddev_pop_order_by {amount?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface payment_stddev_samp_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "payment" */
export interface payment_stddev_samp_order_by {amount?: (order_by | null)}


/** Streaming cursor of the table "payment" */
export interface payment_stream_cursor_input {
/** Stream column input with initial value */
initial_value: payment_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface payment_stream_cursor_value_input {amount?: (Scalars['numeric'] | null),cardinfo?: (Scalars['jsonb'] | null),created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['String'] | null),dest_customer_name?: (Scalars['String'] | null),dest_customer_phone?: (Scalars['String'] | null),from_ci?: (Scalars['Boolean'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),member_id?: (Scalars['uuid'] | null),narration?: (Scalars['String'] | null),operation_exception?: (Scalars['jsonb'] | null),order_id?: (Scalars['uuid'] | null),payload_gateway?: (Scalars['jsonb'] | null),payload_request?: (Scalars['jsonb'] | null),payload_response?: (Scalars['jsonb'] | null),payment_currency?: (en_currencies_enum | null),payment_provider_id?: (en_payment_providers_enum | null),period_id?: (Scalars['uuid'] | null),scheduled_at?: (Scalars['timestamptz'] | null),source_customer_name?: (Scalars['String'] | null),source_customer_phone?: (Scalars['String'] | null),temp?: (Scalars['jsonb'] | null),transaction_status?: (en_statuses_enum | null),transaction_type?: (en_trans_types_enum | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface payment_sum_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "payment" */
export interface payment_sum_order_by {amount?: (order_by | null)}

export interface payment_updates {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (payment_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (payment_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (payment_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (payment_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (payment_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (payment_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (payment_set_input | null),
/** filter the rows which have to be updated */
where: payment_bool_exp}


/** aggregate var_pop on columns */
export interface payment_var_pop_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "payment" */
export interface payment_var_pop_order_by {amount?: (order_by | null)}


/** aggregate var_samp on columns */
export interface payment_var_samp_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "payment" */
export interface payment_var_samp_order_by {amount?: (order_by | null)}


/** aggregate variance on columns */
export interface payment_variance_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "payment" */
export interface payment_variance_order_by {amount?: (order_by | null)}


/** columns and relationships of "period" */
export interface periodGenqlSelection{
    completed_at?: boolean | number
    created_at?: boolean | number
    event_id?: boolean | number
    /** An object relationship */
    group?: groupGenqlSelection
    group_id?: boolean | number
    id?: boolean | number
    /** An object relationship */
    member?: memberGenqlSelection
    member_id?: boolean | number
    /** An array relationship */
    notification_items?: (notification_itemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** An aggregate relationship */
    notification_items_aggregate?: (notification_item_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** An array relationship */
    payment_requests?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An aggregate relationship */
    payment_requests_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** An array relationship */
    payments?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** An aggregate relationship */
    payments_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    period_index?: boolean | number
    processed?: boolean | number
    reminder_index?: boolean | number
    /** An object relationship */
    scheduled_event?: scheduled_eventGenqlSelection
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "period" */
export interface period_aggregateGenqlSelection{
    aggregate?: period_aggregate_fieldsGenqlSelection
    nodes?: periodGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface period_aggregate_bool_exp {bool_and?: (period_aggregate_bool_exp_bool_and | null),bool_or?: (period_aggregate_bool_exp_bool_or | null),count?: (period_aggregate_bool_exp_count | null)}

export interface period_aggregate_bool_exp_bool_and {arguments: period_select_column_period_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (period_bool_exp | null),predicate: Boolean_comparison_exp}

export interface period_aggregate_bool_exp_bool_or {arguments: period_select_column_period_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (period_bool_exp | null),predicate: Boolean_comparison_exp}

export interface period_aggregate_bool_exp_count {arguments?: (period_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (period_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "period" */
export interface period_aggregate_fieldsGenqlSelection{
    avg?: period_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (period_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: period_max_fieldsGenqlSelection
    min?: period_min_fieldsGenqlSelection
    stddev?: period_stddev_fieldsGenqlSelection
    stddev_pop?: period_stddev_pop_fieldsGenqlSelection
    stddev_samp?: period_stddev_samp_fieldsGenqlSelection
    sum?: period_sum_fieldsGenqlSelection
    var_pop?: period_var_pop_fieldsGenqlSelection
    var_samp?: period_var_samp_fieldsGenqlSelection
    variance?: period_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "period" */
export interface period_aggregate_order_by {avg?: (period_avg_order_by | null),count?: (order_by | null),max?: (period_max_order_by | null),min?: (period_min_order_by | null),stddev?: (period_stddev_order_by | null),stddev_pop?: (period_stddev_pop_order_by | null),stddev_samp?: (period_stddev_samp_order_by | null),sum?: (period_sum_order_by | null),var_pop?: (period_var_pop_order_by | null),var_samp?: (period_var_samp_order_by | null),variance?: (period_variance_order_by | null)}


/** input type for inserting array relation for remote table "period" */
export interface period_arr_rel_insert_input {data: period_insert_input[],
/** upsert condition */
on_conflict?: (period_on_conflict | null)}


/** aggregate avg on columns */
export interface period_avg_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "period" */
export interface period_avg_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}


/** Boolean expression to filter rows from the table "period". All fields are combined with a logical 'AND'. */
export interface period_bool_exp {_and?: (period_bool_exp[] | null),_not?: (period_bool_exp | null),_or?: (period_bool_exp[] | null),completed_at?: (timestamptz_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),event_id?: (uuid_comparison_exp | null),group?: (group_bool_exp | null),group_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),member?: (member_bool_exp | null),member_id?: (uuid_comparison_exp | null),notification_items?: (notification_item_bool_exp | null),notification_items_aggregate?: (notification_item_aggregate_bool_exp | null),payment_requests?: (payment_review_bool_exp | null),payment_requests_aggregate?: (payment_review_aggregate_bool_exp | null),payments?: (payment_bool_exp | null),payments_aggregate?: (payment_aggregate_bool_exp | null),period_index?: (Int_comparison_exp | null),processed?: (Boolean_comparison_exp | null),reminder_index?: (Int_comparison_exp | null),scheduled_event?: (scheduled_event_bool_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "period" */
export interface period_inc_input {period_index?: (Scalars['Int'] | null),reminder_index?: (Scalars['Int'] | null)}


/** input type for inserting data into table "period" */
export interface period_insert_input {completed_at?: (Scalars['timestamptz'] | null),created_at?: (Scalars['timestamptz'] | null),event_id?: (Scalars['uuid'] | null),group?: (group_obj_rel_insert_input | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),member?: (member_obj_rel_insert_input | null),member_id?: (Scalars['uuid'] | null),notification_items?: (notification_item_arr_rel_insert_input | null),payment_requests?: (payment_review_arr_rel_insert_input | null),payments?: (payment_arr_rel_insert_input | null),period_index?: (Scalars['Int'] | null),processed?: (Scalars['Boolean'] | null),reminder_index?: (Scalars['Int'] | null),scheduled_event?: (scheduled_event_obj_rel_insert_input | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface period_max_fieldsGenqlSelection{
    completed_at?: boolean | number
    created_at?: boolean | number
    event_id?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    member_id?: boolean | number
    period_index?: boolean | number
    reminder_index?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "period" */
export interface period_max_order_by {completed_at?: (order_by | null),created_at?: (order_by | null),event_id?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),member_id?: (order_by | null),period_index?: (order_by | null),reminder_index?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface period_min_fieldsGenqlSelection{
    completed_at?: boolean | number
    created_at?: boolean | number
    event_id?: boolean | number
    group_id?: boolean | number
    id?: boolean | number
    member_id?: boolean | number
    period_index?: boolean | number
    reminder_index?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "period" */
export interface period_min_order_by {completed_at?: (order_by | null),created_at?: (order_by | null),event_id?: (order_by | null),group_id?: (order_by | null),id?: (order_by | null),member_id?: (order_by | null),period_index?: (order_by | null),reminder_index?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "period" */
export interface period_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: periodGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "period" */
export interface period_obj_rel_insert_input {data: period_insert_input,
/** upsert condition */
on_conflict?: (period_on_conflict | null)}


/** on_conflict condition type for table "period" */
export interface period_on_conflict {constraint: period_constraint,update_columns?: period_update_column[],where?: (period_bool_exp | null)}


/** Ordering options when selecting data from "period". */
export interface period_order_by {completed_at?: (order_by | null),created_at?: (order_by | null),event_id?: (order_by | null),group?: (group_order_by | null),group_id?: (order_by | null),id?: (order_by | null),member?: (member_order_by | null),member_id?: (order_by | null),notification_items_aggregate?: (notification_item_aggregate_order_by | null),payment_requests_aggregate?: (payment_review_aggregate_order_by | null),payments_aggregate?: (payment_aggregate_order_by | null),period_index?: (order_by | null),processed?: (order_by | null),reminder_index?: (order_by | null),scheduled_event?: (scheduled_event_order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: period */
export interface period_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "period" */
export interface period_set_input {completed_at?: (Scalars['timestamptz'] | null),created_at?: (Scalars['timestamptz'] | null),event_id?: (Scalars['uuid'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),member_id?: (Scalars['uuid'] | null),period_index?: (Scalars['Int'] | null),processed?: (Scalars['Boolean'] | null),reminder_index?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface period_stddev_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "period" */
export interface period_stddev_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface period_stddev_pop_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "period" */
export interface period_stddev_pop_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface period_stddev_samp_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "period" */
export interface period_stddev_samp_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}


/** Streaming cursor of the table "period" */
export interface period_stream_cursor_input {
/** Stream column input with initial value */
initial_value: period_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface period_stream_cursor_value_input {completed_at?: (Scalars['timestamptz'] | null),created_at?: (Scalars['timestamptz'] | null),event_id?: (Scalars['uuid'] | null),group_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),member_id?: (Scalars['uuid'] | null),period_index?: (Scalars['Int'] | null),processed?: (Scalars['Boolean'] | null),reminder_index?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface period_sum_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "period" */
export interface period_sum_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}

export interface period_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (period_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (period_set_input | null),
/** filter the rows which have to be updated */
where: period_bool_exp}


/** aggregate var_pop on columns */
export interface period_var_pop_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "period" */
export interface period_var_pop_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}


/** aggregate var_samp on columns */
export interface period_var_samp_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "period" */
export interface period_var_samp_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}


/** aggregate variance on columns */
export interface period_variance_fieldsGenqlSelection{
    period_index?: boolean | number
    reminder_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "period" */
export interface period_variance_order_by {period_index?: (order_by | null),reminder_index?: (order_by | null)}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "auth.providers" using primary key columns */
    authProvider?: (authProvidersGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "auth.provider_requests" using primary key columns */
    authProviderRequest?: (authProviderRequestsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.provider_requests" */
    authProviderRequests?: (authProviderRequestsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviderRequests_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviderRequests_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviderRequests_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.provider_requests" */
    authProviderRequestsAggregate?: (authProviderRequests_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviderRequests_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviderRequests_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviderRequests_bool_exp | null)} })
    /** fetch data from the table: "auth.providers" */
    authProviders?: (authProvidersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviders_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.providers" */
    authProvidersAggregate?: (authProviders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviders_bool_exp | null)} })
    /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
    authRefreshToken?: (authRefreshTokensGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
    authRefreshTokenType?: (authRefreshTokenTypesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "auth.refresh_token_types" */
    authRefreshTokenTypes?: (authRefreshTokenTypesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokenTypes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokenTypes_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokenTypes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.refresh_token_types" */
    authRefreshTokenTypesAggregate?: (authRefreshTokenTypes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokenTypes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokenTypes_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokenTypes_bool_exp | null)} })
    /** fetch data from the table: "auth.refresh_tokens" */
    authRefreshTokens?: (authRefreshTokensGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.refresh_tokens" */
    authRefreshTokensAggregate?: (authRefreshTokens_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** fetch data from the table: "auth.roles" using primary key columns */
    authRole?: (authRolesGenqlSelection & { __args: {role: Scalars['String']} })
    /** fetch data from the table: "auth.roles" */
    authRoles?: (authRolesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRoles_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.roles" */
    authRolesAggregate?: (authRoles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRoles_bool_exp | null)} })
    /** fetch data from the table: "auth.user_providers" using primary key columns */
    authUserProvider?: (authUserProvidersGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.user_providers" */
    authUserProviders?: (authUserProvidersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.user_providers" */
    authUserProvidersAggregate?: (authUserProviders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** fetch data from the table: "auth.user_roles" using primary key columns */
    authUserRole?: (authUserRolesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.user_roles" */
    authUserRoles?: (authUserRolesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.user_roles" */
    authUserRolesAggregate?: (authUserRoles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** fetch data from the table: "auth.user_security_keys" using primary key columns */
    authUserSecurityKey?: (authUserSecurityKeysGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.user_security_keys" */
    authUserSecurityKeys?: (authUserSecurityKeysGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserSecurityKeys_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserSecurityKeys_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserSecurityKeys_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.user_security_keys" */
    authUserSecurityKeysAggregate?: (authUserSecurityKeys_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserSecurityKeys_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserSecurityKeys_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserSecurityKeys_bool_exp | null)} })
    /** fetch data from the table: "auth.migrations" */
    auth_migrations?: (auth_migrationsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (auth_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (auth_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (auth_migrations_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.migrations" */
    auth_migrations_aggregate?: (auth_migrations_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (auth_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (auth_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (auth_migrations_bool_exp | null)} })
    /** fetch data from the table: "auth.migrations" using primary key columns */
    auth_migrations_by_pk?: (auth_migrationsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "storage.buckets" using primary key columns */
    bucket?: (bucketsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "storage.buckets" */
    buckets?: (bucketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (buckets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (buckets_order_by[] | null), 
    /** filter the rows returned */
    where?: (buckets_bool_exp | null)} })
    /** fetch aggregated fields from the table: "storage.buckets" */
    bucketsAggregate?: (buckets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (buckets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (buckets_order_by[] | null), 
    /** filter the rows returned */
    where?: (buckets_bool_exp | null)} })
    /** fetch data from the table: "campaign_file" */
    campaign_file?: (campaign_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** fetch aggregated fields from the table: "campaign_file" */
    campaign_file_aggregate?: (campaign_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** fetch data from the table: "campaign_file" using primary key columns */
    campaign_file_by_pk?: (campaign_fileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "en_currencies" */
    en_currencies?: (en_currenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_currencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_currencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_currencies_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_currencies" */
    en_currencies_aggregate?: (en_currencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_currencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_currencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_currencies_bool_exp | null)} })
    /** fetch data from the table: "en_currencies" using primary key columns */
    en_currencies_by_pk?: (en_currenciesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "en_notifications" */
    en_notifications?: (en_notificationsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_notifications_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_notifications_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_notifications_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_notifications" */
    en_notifications_aggregate?: (en_notifications_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_notifications_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_notifications_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_notifications_bool_exp | null)} })
    /** fetch data from the table: "en_notifications" using primary key columns */
    en_notifications_by_pk?: (en_notificationsGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "en_partner_steps" */
    en_partner_steps?: (en_partner_stepsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_partner_steps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_partner_steps_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_partner_steps_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_partner_steps" */
    en_partner_steps_aggregate?: (en_partner_steps_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_partner_steps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_partner_steps_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_partner_steps_bool_exp | null)} })
    /** fetch data from the table: "en_partner_steps" using primary key columns */
    en_partner_steps_by_pk?: (en_partner_stepsGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "en_payment_providers" */
    en_payment_providers?: (en_payment_providersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_payment_providers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_payment_providers_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_payment_providers_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_payment_providers" */
    en_payment_providers_aggregate?: (en_payment_providers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_payment_providers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_payment_providers_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_payment_providers_bool_exp | null)} })
    /** fetch data from the table: "en_payment_providers" using primary key columns */
    en_payment_providers_by_pk?: (en_payment_providersGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "en_permissions" */
    en_permissions?: (en_permissionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_permissions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_permissions_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_permissions_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_permissions" */
    en_permissions_aggregate?: (en_permissions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_permissions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_permissions_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_permissions_bool_exp | null)} })
    /** fetch data from the table: "en_permissions" using primary key columns */
    en_permissions_by_pk?: (en_permissionsGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "en_recurrencies" */
    en_recurrencies?: (en_recurrenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_recurrencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_recurrencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_recurrencies_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_recurrencies" */
    en_recurrencies_aggregate?: (en_recurrencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_recurrencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_recurrencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_recurrencies_bool_exp | null)} })
    /** fetch data from the table: "en_recurrencies" using primary key columns */
    en_recurrencies_by_pk?: (en_recurrenciesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "en_statuses" */
    en_statuses?: (en_statusesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_statuses_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_statuses_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_statuses_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_statuses" */
    en_statuses_aggregate?: (en_statuses_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_statuses_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_statuses_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_statuses_bool_exp | null)} })
    /** fetch data from the table: "en_statuses" using primary key columns */
    en_statuses_by_pk?: (en_statusesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "en_trans_types" */
    en_trans_types?: (en_trans_typesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_trans_types_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_trans_types_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_trans_types_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_trans_types" */
    en_trans_types_aggregate?: (en_trans_types_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_trans_types_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_trans_types_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_trans_types_bool_exp | null)} })
    /** fetch data from the table: "en_trans_types" using primary key columns */
    en_trans_types_by_pk?: (en_trans_typesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "storage.files" using primary key columns */
    file?: (filesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** An array relationship */
    files?: (filesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (files_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (files_order_by[] | null), 
    /** filter the rows returned */
    where?: (files_bool_exp | null)} })
    /** fetch aggregated fields from the table: "storage.files" */
    filesAggregate?: (files_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (files_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (files_order_by[] | null), 
    /** filter the rows returned */
    where?: (files_bool_exp | null)} })
    /** fetch data from the table: "group" */
    group?: (groupGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** fetch aggregated fields from the table: "group" */
    group_aggregate?: (group_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** fetch data from the table: "group" using primary key columns */
    group_by_pk?: (groupGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "invitation" */
    invitation?: (invitationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** fetch aggregated fields from the table: "invitation" */
    invitation_aggregate?: (invitation_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** fetch data from the table: "invitation" using primary key columns */
    invitation_by_pk?: (invitationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "member" */
    member?: (memberGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** fetch aggregated fields from the table: "member" */
    member_aggregate?: (member_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** fetch data from the table: "member" using primary key columns */
    member_by_pk?: (memberGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "notification" */
    notification?: (notificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** fetch aggregated fields from the table: "notification" */
    notification_aggregate?: (notification_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** fetch data from the table: "notification" using primary key columns */
    notification_by_pk?: (notificationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "notification_item" */
    notification_item?: (notification_itemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** fetch aggregated fields from the table: "notification_item" */
    notification_item_aggregate?: (notification_item_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** fetch data from the table: "notification_item" using primary key columns */
    notification_item_by_pk?: (notification_itemGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "partner" */
    partner?: (partnerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner" */
    partner_aggregate?: (partner_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_bool_exp | null)} })
    /** fetch data from the table: "partner" using primary key columns */
    partner_by_pk?: (partnerGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "partner_campaign" */
    partner_campaign?: (partner_campaignGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_campaign_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_campaign_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_campaign_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner_campaign" */
    partner_campaign_aggregate?: (partner_campaign_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_campaign_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_campaign_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_campaign_bool_exp | null)} })
    /** fetch data from the table: "partner_campaign" using primary key columns */
    partner_campaign_by_pk?: (partner_campaignGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "partner_file" */
    partner_file?: (partner_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner_file" */
    partner_file_aggregate?: (partner_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    /** fetch data from the table: "partner_file" using primary key columns */
    partner_file_by_pk?: (partner_fileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "partner_operator" */
    partner_operator?: (partner_operatorGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner_operator" */
    partner_operator_aggregate?: (partner_operator_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    /** fetch data from the table: "partner_operator" using primary key columns */
    partner_operator_by_pk?: (partner_operatorGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "payment" */
    payment?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** fetch aggregated fields from the table: "payment" */
    payment_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** fetch data from the table: "payment" using primary key columns */
    payment_by_pk?: (paymentGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "payment_review" */
    payment_review?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** fetch aggregated fields from the table: "payment_review" */
    payment_review_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** fetch data from the table: "payment_review" using primary key columns */
    payment_review_by_pk?: (payment_reviewGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "period" */
    period?: (periodGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** fetch aggregated fields from the table: "period" */
    period_aggregate?: (period_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** fetch data from the table: "period" using primary key columns */
    period_by_pk?: (periodGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "scheduled_event" */
    scheduled_event?: (scheduled_eventGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scheduled_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scheduled_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (scheduled_event_bool_exp | null)} })
    /** fetch aggregated fields from the table: "scheduled_event" */
    scheduled_event_aggregate?: (scheduled_event_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scheduled_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scheduled_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (scheduled_event_bool_exp | null)} })
    /** fetch data from the table: "scheduled_event" using primary key columns */
    scheduled_event_by_pk?: (scheduled_eventGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "state_cache" */
    state_cache?: (state_cacheGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (state_cache_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (state_cache_order_by[] | null), 
    /** filter the rows returned */
    where?: (state_cache_bool_exp | null)} })
    /** fetch aggregated fields from the table: "state_cache" */
    state_cache_aggregate?: (state_cache_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (state_cache_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (state_cache_order_by[] | null), 
    /** filter the rows returned */
    where?: (state_cache_bool_exp | null)} })
    /** fetch data from the table: "state_cache" using primary key columns */
    state_cache_by_pk?: (state_cacheGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "storage.schema_migrations" */
    storage_schema_migrations?: (storage_schema_migrationsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (storage_schema_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (storage_schema_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (storage_schema_migrations_bool_exp | null)} })
    /** fetch aggregated fields from the table: "storage.schema_migrations" */
    storage_schema_migrations_aggregate?: (storage_schema_migrations_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (storage_schema_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (storage_schema_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (storage_schema_migrations_bool_exp | null)} })
    /** fetch data from the table: "storage.schema_migrations" using primary key columns */
    storage_schema_migrations_by_pk?: (storage_schema_migrationsGenqlSelection & { __args: {version: Scalars['bigint']} })
    /** fetch data from the table: "auth.users" using primary key columns */
    user?: (usersGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "user_profile" */
    user_profile?: (user_profileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_profile_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_profile_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_profile_bool_exp | null)} })
    /** fetch aggregated fields from the table: "user_profile" */
    user_profile_aggregate?: (user_profile_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_profile_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_profile_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_profile_bool_exp | null)} })
    /** fetch data from the table: "user_profile" using primary key columns */
    user_profile_by_pk?: (user_profileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.users" */
    users?: (usersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.users" */
    usersAggregate?: (users_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** records of scheduled events */
export interface scheduled_eventGenqlSelection{
    created_at?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    period_ids?: boolean | number
    /** An array relationship */
    periods?: (periodGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** An aggregate relationship */
    periods_aggregate?: (period_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    scheduled_at?: boolean | number
    updated_at?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "scheduled_event" */
export interface scheduled_event_aggregateGenqlSelection{
    aggregate?: scheduled_event_aggregate_fieldsGenqlSelection
    nodes?: scheduled_eventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface scheduled_event_aggregate_bool_exp {count?: (scheduled_event_aggregate_bool_exp_count | null)}

export interface scheduled_event_aggregate_bool_exp_count {arguments?: (scheduled_event_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (scheduled_event_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "scheduled_event" */
export interface scheduled_event_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (scheduled_event_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: scheduled_event_max_fieldsGenqlSelection
    min?: scheduled_event_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "scheduled_event" */
export interface scheduled_event_aggregate_order_by {count?: (order_by | null),max?: (scheduled_event_max_order_by | null),min?: (scheduled_event_min_order_by | null)}


/** input type for inserting array relation for remote table "scheduled_event" */
export interface scheduled_event_arr_rel_insert_input {data: scheduled_event_insert_input[],
/** upsert condition */
on_conflict?: (scheduled_event_on_conflict | null)}


/** Boolean expression to filter rows from the table "scheduled_event". All fields are combined with a logical 'AND'. */
export interface scheduled_event_bool_exp {_and?: (scheduled_event_bool_exp[] | null),_not?: (scheduled_event_bool_exp | null),_or?: (scheduled_event_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),event_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),period_ids?: (String_comparison_exp | null),periods?: (period_bool_exp | null),periods_aggregate?: (period_aggregate_bool_exp | null),scheduled_at?: (timestamptz_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null),user_id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "scheduled_event" */
export interface scheduled_event_insert_input {created_at?: (Scalars['timestamptz'] | null),event_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),period_ids?: (Scalars['String'] | null),periods?: (period_arr_rel_insert_input | null),scheduled_at?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface scheduled_event_max_fieldsGenqlSelection{
    created_at?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    period_ids?: boolean | number
    scheduled_at?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "scheduled_event" */
export interface scheduled_event_max_order_by {created_at?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),period_ids?: (order_by | null),scheduled_at?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface scheduled_event_min_fieldsGenqlSelection{
    created_at?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    period_ids?: boolean | number
    scheduled_at?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "scheduled_event" */
export interface scheduled_event_min_order_by {created_at?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),period_ids?: (order_by | null),scheduled_at?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** response of any mutation on the table "scheduled_event" */
export interface scheduled_event_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: scheduled_eventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "scheduled_event" */
export interface scheduled_event_obj_rel_insert_input {data: scheduled_event_insert_input,
/** upsert condition */
on_conflict?: (scheduled_event_on_conflict | null)}


/** on_conflict condition type for table "scheduled_event" */
export interface scheduled_event_on_conflict {constraint: scheduled_event_constraint,update_columns?: scheduled_event_update_column[],where?: (scheduled_event_bool_exp | null)}


/** Ordering options when selecting data from "scheduled_event". */
export interface scheduled_event_order_by {created_at?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),period_ids?: (order_by | null),periods_aggregate?: (period_aggregate_order_by | null),scheduled_at?: (order_by | null),updated_at?: (order_by | null),user?: (users_order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: scheduled_event */
export interface scheduled_event_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "scheduled_event" */
export interface scheduled_event_set_input {created_at?: (Scalars['timestamptz'] | null),event_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),period_ids?: (Scalars['String'] | null),scheduled_at?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "scheduled_event" */
export interface scheduled_event_stream_cursor_input {
/** Stream column input with initial value */
initial_value: scheduled_event_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface scheduled_event_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),event_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),period_ids?: (Scalars['String'] | null),scheduled_at?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}

export interface scheduled_event_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (scheduled_event_set_input | null),
/** filter the rows which have to be updated */
where: scheduled_event_bool_exp}


/** columns and relationships of "state_cache" */
export interface state_cacheGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    ref_id?: boolean | number
    state?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "state_cache" */
export interface state_cache_aggregateGenqlSelection{
    aggregate?: state_cache_aggregate_fieldsGenqlSelection
    nodes?: state_cacheGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "state_cache" */
export interface state_cache_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (state_cache_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: state_cache_max_fieldsGenqlSelection
    min?: state_cache_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "state_cache". All fields are combined with a logical 'AND'. */
export interface state_cache_bool_exp {_and?: (state_cache_bool_exp[] | null),_not?: (state_cache_bool_exp | null),_or?: (state_cache_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),ref_id?: (uuid_comparison_exp | null),state?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "state_cache" */
export interface state_cache_insert_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),ref_id?: (Scalars['uuid'] | null),state?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface state_cache_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    ref_id?: boolean | number
    state?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface state_cache_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    ref_id?: boolean | number
    state?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "state_cache" */
export interface state_cache_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: state_cacheGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "state_cache" */
export interface state_cache_on_conflict {constraint: state_cache_constraint,update_columns?: state_cache_update_column[],where?: (state_cache_bool_exp | null)}


/** Ordering options when selecting data from "state_cache". */
export interface state_cache_order_by {created_at?: (order_by | null),id?: (order_by | null),ref_id?: (order_by | null),state?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: state_cache */
export interface state_cache_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "state_cache" */
export interface state_cache_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),ref_id?: (Scalars['uuid'] | null),state?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "state_cache" */
export interface state_cache_stream_cursor_input {
/** Stream column input with initial value */
initial_value: state_cache_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface state_cache_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),ref_id?: (Scalars['uuid'] | null),state?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface state_cache_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (state_cache_set_input | null),
/** filter the rows which have to be updated */
where: state_cache_bool_exp}


/** columns and relationships of "storage.schema_migrations" */
export interface storage_schema_migrationsGenqlSelection{
    dirty?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "storage.schema_migrations" */
export interface storage_schema_migrations_aggregateGenqlSelection{
    aggregate?: storage_schema_migrations_aggregate_fieldsGenqlSelection
    nodes?: storage_schema_migrationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "storage.schema_migrations" */
export interface storage_schema_migrations_aggregate_fieldsGenqlSelection{
    avg?: storage_schema_migrations_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (storage_schema_migrations_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: storage_schema_migrations_max_fieldsGenqlSelection
    min?: storage_schema_migrations_min_fieldsGenqlSelection
    stddev?: storage_schema_migrations_stddev_fieldsGenqlSelection
    stddev_pop?: storage_schema_migrations_stddev_pop_fieldsGenqlSelection
    stddev_samp?: storage_schema_migrations_stddev_samp_fieldsGenqlSelection
    sum?: storage_schema_migrations_sum_fieldsGenqlSelection
    var_pop?: storage_schema_migrations_var_pop_fieldsGenqlSelection
    var_samp?: storage_schema_migrations_var_samp_fieldsGenqlSelection
    variance?: storage_schema_migrations_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface storage_schema_migrations_avg_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "storage.schema_migrations". All fields are combined with a logical 'AND'. */
export interface storage_schema_migrations_bool_exp {_and?: (storage_schema_migrations_bool_exp[] | null),_not?: (storage_schema_migrations_bool_exp | null),_or?: (storage_schema_migrations_bool_exp[] | null),dirty?: (Boolean_comparison_exp | null),version?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "storage.schema_migrations" */
export interface storage_schema_migrations_inc_input {version?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "storage.schema_migrations" */
export interface storage_schema_migrations_insert_input {dirty?: (Scalars['Boolean'] | null),version?: (Scalars['bigint'] | null)}


/** aggregate max on columns */
export interface storage_schema_migrations_max_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface storage_schema_migrations_min_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "storage.schema_migrations" */
export interface storage_schema_migrations_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: storage_schema_migrationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "storage.schema_migrations" */
export interface storage_schema_migrations_on_conflict {constraint: storage_schema_migrations_constraint,update_columns?: storage_schema_migrations_update_column[],where?: (storage_schema_migrations_bool_exp | null)}


/** Ordering options when selecting data from "storage.schema_migrations". */
export interface storage_schema_migrations_order_by {dirty?: (order_by | null),version?: (order_by | null)}


/** primary key columns input for table: storage.schema_migrations */
export interface storage_schema_migrations_pk_columns_input {version: Scalars['bigint']}


/** input type for updating data in table "storage.schema_migrations" */
export interface storage_schema_migrations_set_input {dirty?: (Scalars['Boolean'] | null),version?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface storage_schema_migrations_stddev_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface storage_schema_migrations_stddev_pop_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface storage_schema_migrations_stddev_samp_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "storage_schema_migrations" */
export interface storage_schema_migrations_stream_cursor_input {
/** Stream column input with initial value */
initial_value: storage_schema_migrations_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface storage_schema_migrations_stream_cursor_value_input {dirty?: (Scalars['Boolean'] | null),version?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface storage_schema_migrations_sum_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface storage_schema_migrations_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (storage_schema_migrations_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (storage_schema_migrations_set_input | null),
/** filter the rows which have to be updated */
where: storage_schema_migrations_bool_exp}


/** aggregate var_pop on columns */
export interface storage_schema_migrations_var_pop_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface storage_schema_migrations_var_samp_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface storage_schema_migrations_variance_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "auth.providers" using primary key columns */
    authProvider?: (authProvidersGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "auth.provider_requests" using primary key columns */
    authProviderRequest?: (authProviderRequestsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.provider_requests" */
    authProviderRequests?: (authProviderRequestsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviderRequests_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviderRequests_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviderRequests_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.provider_requests" */
    authProviderRequestsAggregate?: (authProviderRequests_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviderRequests_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviderRequests_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviderRequests_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.provider_requests" */
    authProviderRequests_stream?: (authProviderRequestsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authProviderRequests_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authProviderRequests_bool_exp | null)} })
    /** fetch data from the table: "auth.providers" */
    authProviders?: (authProvidersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviders_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.providers" */
    authProvidersAggregate?: (authProviders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authProviders_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.providers" */
    authProviders_stream?: (authProvidersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authProviders_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authProviders_bool_exp | null)} })
    /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
    authRefreshToken?: (authRefreshTokensGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
    authRefreshTokenType?: (authRefreshTokenTypesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "auth.refresh_token_types" */
    authRefreshTokenTypes?: (authRefreshTokenTypesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokenTypes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokenTypes_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokenTypes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.refresh_token_types" */
    authRefreshTokenTypesAggregate?: (authRefreshTokenTypes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokenTypes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokenTypes_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokenTypes_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
    authRefreshTokenTypes_stream?: (authRefreshTokenTypesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authRefreshTokenTypes_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authRefreshTokenTypes_bool_exp | null)} })
    /** fetch data from the table: "auth.refresh_tokens" */
    authRefreshTokens?: (authRefreshTokensGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.refresh_tokens" */
    authRefreshTokensAggregate?: (authRefreshTokens_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
    authRefreshTokens_stream?: (authRefreshTokensGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authRefreshTokens_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** fetch data from the table: "auth.roles" using primary key columns */
    authRole?: (authRolesGenqlSelection & { __args: {role: Scalars['String']} })
    /** fetch data from the table: "auth.roles" */
    authRoles?: (authRolesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRoles_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.roles" */
    authRolesAggregate?: (authRoles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRoles_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.roles" */
    authRoles_stream?: (authRolesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authRoles_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authRoles_bool_exp | null)} })
    /** fetch data from the table: "auth.user_providers" using primary key columns */
    authUserProvider?: (authUserProvidersGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.user_providers" */
    authUserProviders?: (authUserProvidersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.user_providers" */
    authUserProvidersAggregate?: (authUserProviders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.user_providers" */
    authUserProviders_stream?: (authUserProvidersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authUserProviders_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** fetch data from the table: "auth.user_roles" using primary key columns */
    authUserRole?: (authUserRolesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.user_roles" */
    authUserRoles?: (authUserRolesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.user_roles" */
    authUserRolesAggregate?: (authUserRoles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.user_roles" */
    authUserRoles_stream?: (authUserRolesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authUserRoles_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** fetch data from the table: "auth.user_security_keys" using primary key columns */
    authUserSecurityKey?: (authUserSecurityKeysGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "auth.user_security_keys" */
    authUserSecurityKeys?: (authUserSecurityKeysGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserSecurityKeys_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserSecurityKeys_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserSecurityKeys_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.user_security_keys" */
    authUserSecurityKeysAggregate?: (authUserSecurityKeys_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserSecurityKeys_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserSecurityKeys_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserSecurityKeys_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
    authUserSecurityKeys_stream?: (authUserSecurityKeysGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (authUserSecurityKeys_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (authUserSecurityKeys_bool_exp | null)} })
    /** fetch data from the table: "auth.migrations" */
    auth_migrations?: (auth_migrationsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (auth_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (auth_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (auth_migrations_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.migrations" */
    auth_migrations_aggregate?: (auth_migrations_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (auth_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (auth_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (auth_migrations_bool_exp | null)} })
    /** fetch data from the table: "auth.migrations" using primary key columns */
    auth_migrations_by_pk?: (auth_migrationsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "auth.migrations" */
    auth_migrations_stream?: (auth_migrationsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (auth_migrations_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (auth_migrations_bool_exp | null)} })
    /** fetch data from the table: "storage.buckets" using primary key columns */
    bucket?: (bucketsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "storage.buckets" */
    buckets?: (bucketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (buckets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (buckets_order_by[] | null), 
    /** filter the rows returned */
    where?: (buckets_bool_exp | null)} })
    /** fetch aggregated fields from the table: "storage.buckets" */
    bucketsAggregate?: (buckets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (buckets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (buckets_order_by[] | null), 
    /** filter the rows returned */
    where?: (buckets_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "storage.buckets" */
    buckets_stream?: (bucketsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (buckets_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (buckets_bool_exp | null)} })
    /** fetch data from the table: "campaign_file" */
    campaign_file?: (campaign_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** fetch aggregated fields from the table: "campaign_file" */
    campaign_file_aggregate?: (campaign_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** fetch data from the table: "campaign_file" using primary key columns */
    campaign_file_by_pk?: (campaign_fileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "campaign_file" */
    campaign_file_stream?: (campaign_fileGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (campaign_file_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (campaign_file_bool_exp | null)} })
    /** fetch data from the table: "en_currencies" */
    en_currencies?: (en_currenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_currencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_currencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_currencies_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_currencies" */
    en_currencies_aggregate?: (en_currencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_currencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_currencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_currencies_bool_exp | null)} })
    /** fetch data from the table: "en_currencies" using primary key columns */
    en_currencies_by_pk?: (en_currenciesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_currencies" */
    en_currencies_stream?: (en_currenciesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_currencies_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_currencies_bool_exp | null)} })
    /** fetch data from the table: "en_notifications" */
    en_notifications?: (en_notificationsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_notifications_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_notifications_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_notifications_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_notifications" */
    en_notifications_aggregate?: (en_notifications_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_notifications_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_notifications_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_notifications_bool_exp | null)} })
    /** fetch data from the table: "en_notifications" using primary key columns */
    en_notifications_by_pk?: (en_notificationsGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_notifications" */
    en_notifications_stream?: (en_notificationsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_notifications_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_notifications_bool_exp | null)} })
    /** fetch data from the table: "en_partner_steps" */
    en_partner_steps?: (en_partner_stepsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_partner_steps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_partner_steps_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_partner_steps_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_partner_steps" */
    en_partner_steps_aggregate?: (en_partner_steps_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_partner_steps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_partner_steps_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_partner_steps_bool_exp | null)} })
    /** fetch data from the table: "en_partner_steps" using primary key columns */
    en_partner_steps_by_pk?: (en_partner_stepsGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_partner_steps" */
    en_partner_steps_stream?: (en_partner_stepsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_partner_steps_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_partner_steps_bool_exp | null)} })
    /** fetch data from the table: "en_payment_providers" */
    en_payment_providers?: (en_payment_providersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_payment_providers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_payment_providers_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_payment_providers_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_payment_providers" */
    en_payment_providers_aggregate?: (en_payment_providers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_payment_providers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_payment_providers_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_payment_providers_bool_exp | null)} })
    /** fetch data from the table: "en_payment_providers" using primary key columns */
    en_payment_providers_by_pk?: (en_payment_providersGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_payment_providers" */
    en_payment_providers_stream?: (en_payment_providersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_payment_providers_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_payment_providers_bool_exp | null)} })
    /** fetch data from the table: "en_permissions" */
    en_permissions?: (en_permissionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_permissions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_permissions_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_permissions_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_permissions" */
    en_permissions_aggregate?: (en_permissions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_permissions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_permissions_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_permissions_bool_exp | null)} })
    /** fetch data from the table: "en_permissions" using primary key columns */
    en_permissions_by_pk?: (en_permissionsGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_permissions" */
    en_permissions_stream?: (en_permissionsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_permissions_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_permissions_bool_exp | null)} })
    /** fetch data from the table: "en_recurrencies" */
    en_recurrencies?: (en_recurrenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_recurrencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_recurrencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_recurrencies_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_recurrencies" */
    en_recurrencies_aggregate?: (en_recurrencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_recurrencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_recurrencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_recurrencies_bool_exp | null)} })
    /** fetch data from the table: "en_recurrencies" using primary key columns */
    en_recurrencies_by_pk?: (en_recurrenciesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_recurrencies" */
    en_recurrencies_stream?: (en_recurrenciesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_recurrencies_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_recurrencies_bool_exp | null)} })
    /** fetch data from the table: "en_statuses" */
    en_statuses?: (en_statusesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_statuses_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_statuses_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_statuses_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_statuses" */
    en_statuses_aggregate?: (en_statuses_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_statuses_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_statuses_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_statuses_bool_exp | null)} })
    /** fetch data from the table: "en_statuses" using primary key columns */
    en_statuses_by_pk?: (en_statusesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_statuses" */
    en_statuses_stream?: (en_statusesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_statuses_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_statuses_bool_exp | null)} })
    /** fetch data from the table: "en_trans_types" */
    en_trans_types?: (en_trans_typesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_trans_types_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_trans_types_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_trans_types_bool_exp | null)} })
    /** fetch aggregated fields from the table: "en_trans_types" */
    en_trans_types_aggregate?: (en_trans_types_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (en_trans_types_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (en_trans_types_order_by[] | null), 
    /** filter the rows returned */
    where?: (en_trans_types_bool_exp | null)} })
    /** fetch data from the table: "en_trans_types" using primary key columns */
    en_trans_types_by_pk?: (en_trans_typesGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "en_trans_types" */
    en_trans_types_stream?: (en_trans_typesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (en_trans_types_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (en_trans_types_bool_exp | null)} })
    /** fetch data from the table: "storage.files" using primary key columns */
    file?: (filesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** An array relationship */
    files?: (filesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (files_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (files_order_by[] | null), 
    /** filter the rows returned */
    where?: (files_bool_exp | null)} })
    /** fetch aggregated fields from the table: "storage.files" */
    filesAggregate?: (files_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (files_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (files_order_by[] | null), 
    /** filter the rows returned */
    where?: (files_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "storage.files" */
    files_stream?: (filesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (files_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (files_bool_exp | null)} })
    /** fetch data from the table: "group" */
    group?: (groupGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** fetch aggregated fields from the table: "group" */
    group_aggregate?: (group_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** fetch data from the table: "group" using primary key columns */
    group_by_pk?: (groupGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "group" */
    group_stream?: (groupGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (group_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** fetch data from the table: "invitation" */
    invitation?: (invitationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** fetch aggregated fields from the table: "invitation" */
    invitation_aggregate?: (invitation_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** fetch data from the table: "invitation" using primary key columns */
    invitation_by_pk?: (invitationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "invitation" */
    invitation_stream?: (invitationGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (invitation_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** fetch data from the table: "member" */
    member?: (memberGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** fetch aggregated fields from the table: "member" */
    member_aggregate?: (member_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** fetch data from the table: "member" using primary key columns */
    member_by_pk?: (memberGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "member" */
    member_stream?: (memberGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (member_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** fetch data from the table: "notification" */
    notification?: (notificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** fetch aggregated fields from the table: "notification" */
    notification_aggregate?: (notification_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** fetch data from the table: "notification" using primary key columns */
    notification_by_pk?: (notificationGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "notification_item" */
    notification_item?: (notification_itemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** fetch aggregated fields from the table: "notification_item" */
    notification_item_aggregate?: (notification_item_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_item_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_item_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** fetch data from the table: "notification_item" using primary key columns */
    notification_item_by_pk?: (notification_itemGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "notification_item" */
    notification_item_stream?: (notification_itemGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (notification_item_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (notification_item_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "notification" */
    notification_stream?: (notificationGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (notification_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** fetch data from the table: "partner" */
    partner?: (partnerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner" */
    partner_aggregate?: (partner_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_bool_exp | null)} })
    /** fetch data from the table: "partner" using primary key columns */
    partner_by_pk?: (partnerGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "partner_campaign" */
    partner_campaign?: (partner_campaignGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_campaign_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_campaign_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_campaign_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner_campaign" */
    partner_campaign_aggregate?: (partner_campaign_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_campaign_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_campaign_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_campaign_bool_exp | null)} })
    /** fetch data from the table: "partner_campaign" using primary key columns */
    partner_campaign_by_pk?: (partner_campaignGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "partner_campaign" */
    partner_campaign_stream?: (partner_campaignGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (partner_campaign_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (partner_campaign_bool_exp | null)} })
    /** fetch data from the table: "partner_file" */
    partner_file?: (partner_fileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner_file" */
    partner_file_aggregate?: (partner_file_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_file_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_file_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    /** fetch data from the table: "partner_file" using primary key columns */
    partner_file_by_pk?: (partner_fileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "partner_file" */
    partner_file_stream?: (partner_fileGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (partner_file_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (partner_file_bool_exp | null)} })
    /** fetch data from the table: "partner_operator" */
    partner_operator?: (partner_operatorGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    /** fetch aggregated fields from the table: "partner_operator" */
    partner_operator_aggregate?: (partner_operator_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    /** fetch data from the table: "partner_operator" using primary key columns */
    partner_operator_by_pk?: (partner_operatorGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "partner_operator" */
    partner_operator_stream?: (partner_operatorGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (partner_operator_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "partner" */
    partner_stream?: (partnerGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (partner_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (partner_bool_exp | null)} })
    /** fetch data from the table: "payment" */
    payment?: (paymentGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** fetch aggregated fields from the table: "payment" */
    payment_aggregate?: (payment_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** fetch data from the table: "payment" using primary key columns */
    payment_by_pk?: (paymentGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "payment_review" */
    payment_review?: (payment_reviewGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** fetch aggregated fields from the table: "payment_review" */
    payment_review_aggregate?: (payment_review_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (payment_review_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (payment_review_order_by[] | null), 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** fetch data from the table: "payment_review" using primary key columns */
    payment_review_by_pk?: (payment_reviewGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "payment_review" */
    payment_review_stream?: (payment_reviewGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (payment_review_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (payment_review_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "payment" */
    payment_stream?: (paymentGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (payment_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (payment_bool_exp | null)} })
    /** fetch data from the table: "period" */
    period?: (periodGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** fetch aggregated fields from the table: "period" */
    period_aggregate?: (period_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (period_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (period_order_by[] | null), 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** fetch data from the table: "period" using primary key columns */
    period_by_pk?: (periodGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "period" */
    period_stream?: (periodGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (period_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (period_bool_exp | null)} })
    /** fetch data from the table: "scheduled_event" */
    scheduled_event?: (scheduled_eventGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scheduled_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scheduled_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (scheduled_event_bool_exp | null)} })
    /** fetch aggregated fields from the table: "scheduled_event" */
    scheduled_event_aggregate?: (scheduled_event_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scheduled_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scheduled_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (scheduled_event_bool_exp | null)} })
    /** fetch data from the table: "scheduled_event" using primary key columns */
    scheduled_event_by_pk?: (scheduled_eventGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "scheduled_event" */
    scheduled_event_stream?: (scheduled_eventGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (scheduled_event_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (scheduled_event_bool_exp | null)} })
    /** fetch data from the table: "state_cache" */
    state_cache?: (state_cacheGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (state_cache_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (state_cache_order_by[] | null), 
    /** filter the rows returned */
    where?: (state_cache_bool_exp | null)} })
    /** fetch aggregated fields from the table: "state_cache" */
    state_cache_aggregate?: (state_cache_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (state_cache_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (state_cache_order_by[] | null), 
    /** filter the rows returned */
    where?: (state_cache_bool_exp | null)} })
    /** fetch data from the table: "state_cache" using primary key columns */
    state_cache_by_pk?: (state_cacheGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "state_cache" */
    state_cache_stream?: (state_cacheGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (state_cache_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (state_cache_bool_exp | null)} })
    /** fetch data from the table: "storage.schema_migrations" */
    storage_schema_migrations?: (storage_schema_migrationsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (storage_schema_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (storage_schema_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (storage_schema_migrations_bool_exp | null)} })
    /** fetch aggregated fields from the table: "storage.schema_migrations" */
    storage_schema_migrations_aggregate?: (storage_schema_migrations_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (storage_schema_migrations_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (storage_schema_migrations_order_by[] | null), 
    /** filter the rows returned */
    where?: (storage_schema_migrations_bool_exp | null)} })
    /** fetch data from the table: "storage.schema_migrations" using primary key columns */
    storage_schema_migrations_by_pk?: (storage_schema_migrationsGenqlSelection & { __args: {version: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "storage.schema_migrations" */
    storage_schema_migrations_stream?: (storage_schema_migrationsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (storage_schema_migrations_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (storage_schema_migrations_bool_exp | null)} })
    /** fetch data from the table: "auth.users" using primary key columns */
    user?: (usersGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "user_profile" */
    user_profile?: (user_profileGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_profile_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_profile_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_profile_bool_exp | null)} })
    /** fetch aggregated fields from the table: "user_profile" */
    user_profile_aggregate?: (user_profile_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_profile_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_profile_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_profile_bool_exp | null)} })
    /** fetch data from the table: "user_profile" using primary key columns */
    user_profile_by_pk?: (user_profileGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "user_profile" */
    user_profile_stream?: (user_profileGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (user_profile_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (user_profile_bool_exp | null)} })
    /** fetch data from the table: "auth.users" */
    users?: (usersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** fetch aggregated fields from the table: "auth.users" */
    usersAggregate?: (users_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "auth.users" */
    users_stream?: (usersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (users_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export interface time_comparison_exp {_eq?: (Scalars['time'] | null),_gt?: (Scalars['time'] | null),_gte?: (Scalars['time'] | null),_in?: (Scalars['time'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['time'] | null),_lte?: (Scalars['time'] | null),_neq?: (Scalars['time'] | null),_nin?: (Scalars['time'][] | null)}


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {_eq?: (Scalars['timestamp'] | null),_gt?: (Scalars['timestamp'] | null),_gte?: (Scalars['timestamp'] | null),_in?: (Scalars['timestamp'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamp'] | null),_lte?: (Scalars['timestamp'] | null),_neq?: (Scalars['timestamp'] | null),_nin?: (Scalars['timestamp'][] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "user_profile" */
export interface user_profileGenqlSelection{
    clerk_id?: boolean | number
    country_code?: boolean | number
    created_at?: boolean | number
    expo_push_token?: boolean | number
    from_ci?: boolean | number
    from_ussd?: boolean | number
    has_email?: boolean | number
    id?: boolean | number
    invitation_url?: boolean | number
    personal_access_token?: boolean | number
    personal_access_token_expires_at?: boolean | number
    updated_at?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "user_profile" */
export interface user_profile_aggregateGenqlSelection{
    aggregate?: user_profile_aggregate_fieldsGenqlSelection
    nodes?: user_profileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "user_profile" */
export interface user_profile_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (user_profile_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: user_profile_max_fieldsGenqlSelection
    min?: user_profile_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "user_profile". All fields are combined with a logical 'AND'. */
export interface user_profile_bool_exp {_and?: (user_profile_bool_exp[] | null),_not?: (user_profile_bool_exp | null),_or?: (user_profile_bool_exp[] | null),clerk_id?: (String_comparison_exp | null),country_code?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),expo_push_token?: (String_comparison_exp | null),from_ci?: (Boolean_comparison_exp | null),from_ussd?: (Boolean_comparison_exp | null),has_email?: (Boolean_comparison_exp | null),id?: (uuid_comparison_exp | null),invitation_url?: (String_comparison_exp | null),personal_access_token?: (String_comparison_exp | null),personal_access_token_expires_at?: (time_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user?: (users_bool_exp | null),user_id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "user_profile" */
export interface user_profile_insert_input {clerk_id?: (Scalars['String'] | null),country_code?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),expo_push_token?: (Scalars['String'] | null),from_ci?: (Scalars['Boolean'] | null),from_ussd?: (Scalars['Boolean'] | null),has_email?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),invitation_url?: (Scalars['String'] | null),personal_access_token?: (Scalars['String'] | null),personal_access_token_expires_at?: (Scalars['time'] | null),updated_at?: (Scalars['timestamptz'] | null),user?: (users_obj_rel_insert_input | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface user_profile_max_fieldsGenqlSelection{
    clerk_id?: boolean | number
    country_code?: boolean | number
    created_at?: boolean | number
    expo_push_token?: boolean | number
    id?: boolean | number
    invitation_url?: boolean | number
    personal_access_token?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface user_profile_min_fieldsGenqlSelection{
    clerk_id?: boolean | number
    country_code?: boolean | number
    created_at?: boolean | number
    expo_push_token?: boolean | number
    id?: boolean | number
    invitation_url?: boolean | number
    personal_access_token?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "user_profile" */
export interface user_profile_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: user_profileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "user_profile" */
export interface user_profile_obj_rel_insert_input {data: user_profile_insert_input,
/** upsert condition */
on_conflict?: (user_profile_on_conflict | null)}


/** on_conflict condition type for table "user_profile" */
export interface user_profile_on_conflict {constraint: user_profile_constraint,update_columns?: user_profile_update_column[],where?: (user_profile_bool_exp | null)}


/** Ordering options when selecting data from "user_profile". */
export interface user_profile_order_by {clerk_id?: (order_by | null),country_code?: (order_by | null),created_at?: (order_by | null),expo_push_token?: (order_by | null),from_ci?: (order_by | null),from_ussd?: (order_by | null),has_email?: (order_by | null),id?: (order_by | null),invitation_url?: (order_by | null),personal_access_token?: (order_by | null),personal_access_token_expires_at?: (order_by | null),updated_at?: (order_by | null),user?: (users_order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: user_profile */
export interface user_profile_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "user_profile" */
export interface user_profile_set_input {clerk_id?: (Scalars['String'] | null),country_code?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),expo_push_token?: (Scalars['String'] | null),from_ci?: (Scalars['Boolean'] | null),from_ussd?: (Scalars['Boolean'] | null),has_email?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),invitation_url?: (Scalars['String'] | null),personal_access_token?: (Scalars['String'] | null),personal_access_token_expires_at?: (Scalars['time'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "user_profile" */
export interface user_profile_stream_cursor_input {
/** Stream column input with initial value */
initial_value: user_profile_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface user_profile_stream_cursor_value_input {clerk_id?: (Scalars['String'] | null),country_code?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),expo_push_token?: (Scalars['String'] | null),from_ci?: (Scalars['Boolean'] | null),from_ussd?: (Scalars['Boolean'] | null),has_email?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),invitation_url?: (Scalars['String'] | null),personal_access_token?: (Scalars['String'] | null),personal_access_token_expires_at?: (Scalars['time'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}

export interface user_profile_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (user_profile_set_input | null),
/** filter the rows which have to be updated */
where: user_profile_bool_exp}


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface usersGenqlSelection{
    activeMfaType?: boolean | number
    avatarUrl?: boolean | number
    createdAt?: boolean | number
    currentChallenge?: boolean | number
    defaultRole?: boolean | number
    /** An object relationship */
    defaultRoleByRole?: authRolesGenqlSelection
    disabled?: boolean | number
    displayName?: boolean | number
    email?: boolean | number
    emailVerified?: boolean | number
    /** An array relationship */
    groups?: (groupGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    /** An aggregate relationship */
    groups_aggregate?: (group_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (group_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (group_order_by[] | null), 
    /** filter the rows returned */
    where?: (group_bool_exp | null)} })
    id?: boolean | number
    /** An array relationship */
    invitations?: (invitationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An array relationship */
    invitationsBySenderId?: (invitationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An aggregate relationship */
    invitationsBySenderId_aggregate?: (invitation_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    /** An aggregate relationship */
    invitations_aggregate?: (invitation_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (invitation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (invitation_order_by[] | null), 
    /** filter the rows returned */
    where?: (invitation_bool_exp | null)} })
    isAnonymous?: boolean | number
    lastSeen?: boolean | number
    locale?: boolean | number
    /** An array relationship */
    members?: (memberGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    /** An aggregate relationship */
    members_aggregate?: (member_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (member_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (member_order_by[] | null), 
    /** filter the rows returned */
    where?: (member_bool_exp | null)} })
    metadata?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    newEmail?: boolean | number
    /** An array relationship */
    notifications?: (notificationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    /** An aggregate relationship */
    notifications_aggregate?: (notification_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notification_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notification_order_by[] | null), 
    /** filter the rows returned */
    where?: (notification_bool_exp | null)} })
    otpHash?: boolean | number
    otpHashExpiresAt?: boolean | number
    otpMethodLastUsed?: boolean | number
    /** An array relationship */
    partner_operators?: (partner_operatorGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    /** An aggregate relationship */
    partner_operators_aggregate?: (partner_operator_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (partner_operator_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (partner_operator_order_by[] | null), 
    /** filter the rows returned */
    where?: (partner_operator_bool_exp | null)} })
    passwordHash?: boolean | number
    phoneNumber?: boolean | number
    phoneNumberVerified?: boolean | number
    /** An array relationship */
    refreshTokens?: (authRefreshTokensGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** An aggregate relationship */
    refreshTokens_aggregate?: (authRefreshTokens_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authRefreshTokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authRefreshTokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (authRefreshTokens_bool_exp | null)} })
    /** An array relationship */
    roles?: (authUserRolesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** An aggregate relationship */
    roles_aggregate?: (authUserRoles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserRoles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserRoles_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserRoles_bool_exp | null)} })
    /** An array relationship */
    scheduled_events?: (scheduled_eventGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scheduled_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scheduled_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (scheduled_event_bool_exp | null)} })
    /** An aggregate relationship */
    scheduled_events_aggregate?: (scheduled_event_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scheduled_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scheduled_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (scheduled_event_bool_exp | null)} })
    /** An array relationship */
    securityKeys?: (authUserSecurityKeysGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserSecurityKeys_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserSecurityKeys_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserSecurityKeys_bool_exp | null)} })
    /** An aggregate relationship */
    securityKeys_aggregate?: (authUserSecurityKeys_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserSecurityKeys_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserSecurityKeys_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserSecurityKeys_bool_exp | null)} })
    ticket?: boolean | number
    ticketExpiresAt?: boolean | number
    totpSecret?: boolean | number
    updatedAt?: boolean | number
    /** An array relationship */
    userProviders?: (authUserProvidersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** An aggregate relationship */
    userProviders_aggregate?: (authUserProviders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (authUserProviders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (authUserProviders_order_by[] | null), 
    /** filter the rows returned */
    where?: (authUserProviders_bool_exp | null)} })
    /** An object relationship */
    user_profile?: user_profileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auth.users" */
export interface users_aggregateGenqlSelection{
    aggregate?: users_aggregate_fieldsGenqlSelection
    nodes?: usersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface users_aggregate_bool_exp {bool_and?: (users_aggregate_bool_exp_bool_and | null),bool_or?: (users_aggregate_bool_exp_bool_or | null),count?: (users_aggregate_bool_exp_count | null)}

export interface users_aggregate_bool_exp_bool_and {arguments: users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (users_bool_exp | null),predicate: Boolean_comparison_exp}

export interface users_aggregate_bool_exp_bool_or {arguments: users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (users_bool_exp | null),predicate: Boolean_comparison_exp}

export interface users_aggregate_bool_exp_count {arguments?: (users_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (users_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "auth.users" */
export interface users_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (users_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: users_max_fieldsGenqlSelection
    min?: users_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "auth.users" */
export interface users_aggregate_order_by {count?: (order_by | null),max?: (users_max_order_by | null),min?: (users_min_order_by | null)}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface users_append_input {metadata?: (Scalars['jsonb'] | null)}


/** input type for inserting array relation for remote table "auth.users" */
export interface users_arr_rel_insert_input {data: users_insert_input[],
/** upsert condition */
on_conflict?: (users_on_conflict | null)}


/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {_and?: (users_bool_exp[] | null),_not?: (users_bool_exp | null),_or?: (users_bool_exp[] | null),activeMfaType?: (String_comparison_exp | null),avatarUrl?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),currentChallenge?: (String_comparison_exp | null),defaultRole?: (String_comparison_exp | null),defaultRoleByRole?: (authRoles_bool_exp | null),disabled?: (Boolean_comparison_exp | null),displayName?: (String_comparison_exp | null),email?: (citext_comparison_exp | null),emailVerified?: (Boolean_comparison_exp | null),groups?: (group_bool_exp | null),groups_aggregate?: (group_aggregate_bool_exp | null),id?: (uuid_comparison_exp | null),invitations?: (invitation_bool_exp | null),invitationsBySenderId?: (invitation_bool_exp | null),invitationsBySenderId_aggregate?: (invitation_aggregate_bool_exp | null),invitations_aggregate?: (invitation_aggregate_bool_exp | null),isAnonymous?: (Boolean_comparison_exp | null),lastSeen?: (timestamptz_comparison_exp | null),locale?: (String_comparison_exp | null),members?: (member_bool_exp | null),members_aggregate?: (member_aggregate_bool_exp | null),metadata?: (jsonb_comparison_exp | null),newEmail?: (citext_comparison_exp | null),notifications?: (notification_bool_exp | null),notifications_aggregate?: (notification_aggregate_bool_exp | null),otpHash?: (String_comparison_exp | null),otpHashExpiresAt?: (timestamptz_comparison_exp | null),otpMethodLastUsed?: (String_comparison_exp | null),partner_operators?: (partner_operator_bool_exp | null),partner_operators_aggregate?: (partner_operator_aggregate_bool_exp | null),passwordHash?: (String_comparison_exp | null),phoneNumber?: (String_comparison_exp | null),phoneNumberVerified?: (Boolean_comparison_exp | null),refreshTokens?: (authRefreshTokens_bool_exp | null),refreshTokens_aggregate?: (authRefreshTokens_aggregate_bool_exp | null),roles?: (authUserRoles_bool_exp | null),roles_aggregate?: (authUserRoles_aggregate_bool_exp | null),scheduled_events?: (scheduled_event_bool_exp | null),scheduled_events_aggregate?: (scheduled_event_aggregate_bool_exp | null),securityKeys?: (authUserSecurityKeys_bool_exp | null),securityKeys_aggregate?: (authUserSecurityKeys_aggregate_bool_exp | null),ticket?: (String_comparison_exp | null),ticketExpiresAt?: (timestamptz_comparison_exp | null),totpSecret?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null),userProviders?: (authUserProviders_bool_exp | null),userProviders_aggregate?: (authUserProviders_aggregate_bool_exp | null),user_profile?: (user_profile_bool_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface users_delete_at_path_input {metadata?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface users_delete_elem_input {metadata?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface users_delete_key_input {metadata?: (Scalars['String'] | null)}


/** input type for inserting data into table "auth.users" */
export interface users_insert_input {activeMfaType?: (Scalars['String'] | null),avatarUrl?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),currentChallenge?: (Scalars['String'] | null),defaultRole?: (Scalars['String'] | null),defaultRoleByRole?: (authRoles_obj_rel_insert_input | null),disabled?: (Scalars['Boolean'] | null),displayName?: (Scalars['String'] | null),email?: (Scalars['citext'] | null),emailVerified?: (Scalars['Boolean'] | null),groups?: (group_arr_rel_insert_input | null),id?: (Scalars['uuid'] | null),invitations?: (invitation_arr_rel_insert_input | null),invitationsBySenderId?: (invitation_arr_rel_insert_input | null),isAnonymous?: (Scalars['Boolean'] | null),lastSeen?: (Scalars['timestamptz'] | null),locale?: (Scalars['String'] | null),members?: (member_arr_rel_insert_input | null),metadata?: (Scalars['jsonb'] | null),newEmail?: (Scalars['citext'] | null),notifications?: (notification_arr_rel_insert_input | null),otpHash?: (Scalars['String'] | null),otpHashExpiresAt?: (Scalars['timestamptz'] | null),otpMethodLastUsed?: (Scalars['String'] | null),partner_operators?: (partner_operator_arr_rel_insert_input | null),passwordHash?: (Scalars['String'] | null),phoneNumber?: (Scalars['String'] | null),phoneNumberVerified?: (Scalars['Boolean'] | null),refreshTokens?: (authRefreshTokens_arr_rel_insert_input | null),roles?: (authUserRoles_arr_rel_insert_input | null),scheduled_events?: (scheduled_event_arr_rel_insert_input | null),securityKeys?: (authUserSecurityKeys_arr_rel_insert_input | null),ticket?: (Scalars['String'] | null),ticketExpiresAt?: (Scalars['timestamptz'] | null),totpSecret?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),userProviders?: (authUserProviders_arr_rel_insert_input | null),user_profile?: (user_profile_obj_rel_insert_input | null)}


/** aggregate max on columns */
export interface users_max_fieldsGenqlSelection{
    activeMfaType?: boolean | number
    avatarUrl?: boolean | number
    createdAt?: boolean | number
    currentChallenge?: boolean | number
    defaultRole?: boolean | number
    displayName?: boolean | number
    email?: boolean | number
    id?: boolean | number
    lastSeen?: boolean | number
    locale?: boolean | number
    newEmail?: boolean | number
    otpHash?: boolean | number
    otpHashExpiresAt?: boolean | number
    otpMethodLastUsed?: boolean | number
    passwordHash?: boolean | number
    phoneNumber?: boolean | number
    ticket?: boolean | number
    ticketExpiresAt?: boolean | number
    totpSecret?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "auth.users" */
export interface users_max_order_by {activeMfaType?: (order_by | null),avatarUrl?: (order_by | null),createdAt?: (order_by | null),currentChallenge?: (order_by | null),defaultRole?: (order_by | null),displayName?: (order_by | null),email?: (order_by | null),id?: (order_by | null),lastSeen?: (order_by | null),locale?: (order_by | null),newEmail?: (order_by | null),otpHash?: (order_by | null),otpHashExpiresAt?: (order_by | null),otpMethodLastUsed?: (order_by | null),passwordHash?: (order_by | null),phoneNumber?: (order_by | null),ticket?: (order_by | null),ticketExpiresAt?: (order_by | null),totpSecret?: (order_by | null),updatedAt?: (order_by | null)}


/** aggregate min on columns */
export interface users_min_fieldsGenqlSelection{
    activeMfaType?: boolean | number
    avatarUrl?: boolean | number
    createdAt?: boolean | number
    currentChallenge?: boolean | number
    defaultRole?: boolean | number
    displayName?: boolean | number
    email?: boolean | number
    id?: boolean | number
    lastSeen?: boolean | number
    locale?: boolean | number
    newEmail?: boolean | number
    otpHash?: boolean | number
    otpHashExpiresAt?: boolean | number
    otpMethodLastUsed?: boolean | number
    passwordHash?: boolean | number
    phoneNumber?: boolean | number
    ticket?: boolean | number
    ticketExpiresAt?: boolean | number
    totpSecret?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "auth.users" */
export interface users_min_order_by {activeMfaType?: (order_by | null),avatarUrl?: (order_by | null),createdAt?: (order_by | null),currentChallenge?: (order_by | null),defaultRole?: (order_by | null),displayName?: (order_by | null),email?: (order_by | null),id?: (order_by | null),lastSeen?: (order_by | null),locale?: (order_by | null),newEmail?: (order_by | null),otpHash?: (order_by | null),otpHashExpiresAt?: (order_by | null),otpMethodLastUsed?: (order_by | null),passwordHash?: (order_by | null),phoneNumber?: (order_by | null),ticket?: (order_by | null),ticketExpiresAt?: (order_by | null),totpSecret?: (order_by | null),updatedAt?: (order_by | null)}


/** response of any mutation on the table "auth.users" */
export interface users_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: usersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "auth.users" */
export interface users_obj_rel_insert_input {data: users_insert_input,
/** upsert condition */
on_conflict?: (users_on_conflict | null)}


/** on_conflict condition type for table "auth.users" */
export interface users_on_conflict {constraint: users_constraint,update_columns?: users_update_column[],where?: (users_bool_exp | null)}


/** Ordering options when selecting data from "auth.users". */
export interface users_order_by {activeMfaType?: (order_by | null),avatarUrl?: (order_by | null),createdAt?: (order_by | null),currentChallenge?: (order_by | null),defaultRole?: (order_by | null),defaultRoleByRole?: (authRoles_order_by | null),disabled?: (order_by | null),displayName?: (order_by | null),email?: (order_by | null),emailVerified?: (order_by | null),groups_aggregate?: (group_aggregate_order_by | null),id?: (order_by | null),invitationsBySenderId_aggregate?: (invitation_aggregate_order_by | null),invitations_aggregate?: (invitation_aggregate_order_by | null),isAnonymous?: (order_by | null),lastSeen?: (order_by | null),locale?: (order_by | null),members_aggregate?: (member_aggregate_order_by | null),metadata?: (order_by | null),newEmail?: (order_by | null),notifications_aggregate?: (notification_aggregate_order_by | null),otpHash?: (order_by | null),otpHashExpiresAt?: (order_by | null),otpMethodLastUsed?: (order_by | null),partner_operators_aggregate?: (partner_operator_aggregate_order_by | null),passwordHash?: (order_by | null),phoneNumber?: (order_by | null),phoneNumberVerified?: (order_by | null),refreshTokens_aggregate?: (authRefreshTokens_aggregate_order_by | null),roles_aggregate?: (authUserRoles_aggregate_order_by | null),scheduled_events_aggregate?: (scheduled_event_aggregate_order_by | null),securityKeys_aggregate?: (authUserSecurityKeys_aggregate_order_by | null),ticket?: (order_by | null),ticketExpiresAt?: (order_by | null),totpSecret?: (order_by | null),updatedAt?: (order_by | null),userProviders_aggregate?: (authUserProviders_aggregate_order_by | null),user_profile?: (user_profile_order_by | null)}


/** primary key columns input for table: auth.users */
export interface users_pk_columns_input {id: Scalars['uuid']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface users_prepend_input {metadata?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "auth.users" */
export interface users_set_input {activeMfaType?: (Scalars['String'] | null),avatarUrl?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),currentChallenge?: (Scalars['String'] | null),defaultRole?: (Scalars['String'] | null),disabled?: (Scalars['Boolean'] | null),displayName?: (Scalars['String'] | null),email?: (Scalars['citext'] | null),emailVerified?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),isAnonymous?: (Scalars['Boolean'] | null),lastSeen?: (Scalars['timestamptz'] | null),locale?: (Scalars['String'] | null),metadata?: (Scalars['jsonb'] | null),newEmail?: (Scalars['citext'] | null),otpHash?: (Scalars['String'] | null),otpHashExpiresAt?: (Scalars['timestamptz'] | null),otpMethodLastUsed?: (Scalars['String'] | null),passwordHash?: (Scalars['String'] | null),phoneNumber?: (Scalars['String'] | null),phoneNumberVerified?: (Scalars['Boolean'] | null),ticket?: (Scalars['String'] | null),ticketExpiresAt?: (Scalars['timestamptz'] | null),totpSecret?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "users" */
export interface users_stream_cursor_input {
/** Stream column input with initial value */
initial_value: users_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface users_stream_cursor_value_input {activeMfaType?: (Scalars['String'] | null),avatarUrl?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),currentChallenge?: (Scalars['String'] | null),defaultRole?: (Scalars['String'] | null),disabled?: (Scalars['Boolean'] | null),displayName?: (Scalars['String'] | null),email?: (Scalars['citext'] | null),emailVerified?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),isAnonymous?: (Scalars['Boolean'] | null),lastSeen?: (Scalars['timestamptz'] | null),locale?: (Scalars['String'] | null),metadata?: (Scalars['jsonb'] | null),newEmail?: (Scalars['citext'] | null),otpHash?: (Scalars['String'] | null),otpHashExpiresAt?: (Scalars['timestamptz'] | null),otpMethodLastUsed?: (Scalars['String'] | null),passwordHash?: (Scalars['String'] | null),phoneNumber?: (Scalars['String'] | null),phoneNumberVerified?: (Scalars['Boolean'] | null),ticket?: (Scalars['String'] | null),ticketExpiresAt?: (Scalars['timestamptz'] | null),totpSecret?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}

export interface users_updates {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (users_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (users_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (users_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (users_delete_key_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (users_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (users_set_input | null),
/** filter the rows which have to be updated */
where: users_bool_exp}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const FixPeriodCompletionsOutput_possibleTypes: string[] = ['FixPeriodCompletionsOutput']
    export const isFixPeriodCompletionsOutput = (obj?: { __typename?: any } | null): obj is FixPeriodCompletionsOutput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFixPeriodCompletionsOutput"')
      return FixPeriodCompletionsOutput_possibleTypes.includes(obj.__typename)
    }
    


    const GroupReportsOutput_possibleTypes: string[] = ['GroupReportsOutput']
    export const isGroupReportsOutput = (obj?: { __typename?: any } | null): obj is GroupReportsOutput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupReportsOutput"')
      return GroupReportsOutput_possibleTypes.includes(obj.__typename)
    }
    


    const InitialiseE2EOutput_possibleTypes: string[] = ['InitialiseE2EOutput']
    export const isInitialiseE2EOutput = (obj?: { __typename?: any } | null): obj is InitialiseE2EOutput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInitialiseE2EOutput"')
      return InitialiseE2EOutput_possibleTypes.includes(obj.__typename)
    }
    


    const PeriodReport_possibleTypes: string[] = ['PeriodReport']
    export const isPeriodReport = (obj?: { __typename?: any } | null): obj is PeriodReport => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPeriodReport"')
      return PeriodReport_possibleTypes.includes(obj.__typename)
    }
    


    const PeriodReportMember_possibleTypes: string[] = ['PeriodReportMember']
    export const isPeriodReportMember = (obj?: { __typename?: any } | null): obj is PeriodReportMember => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPeriodReportMember"')
      return PeriodReportMember_possibleTypes.includes(obj.__typename)
    }
    


    const PeriodReportPayment_possibleTypes: string[] = ['PeriodReportPayment']
    export const isPeriodReportPayment = (obj?: { __typename?: any } | null): obj is PeriodReportPayment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPeriodReportPayment"')
      return PeriodReportPayment_possibleTypes.includes(obj.__typename)
    }
    


    const PeriodReportUser_possibleTypes: string[] = ['PeriodReportUser']
    export const isPeriodReportUser = (obj?: { __typename?: any } | null): obj is PeriodReportUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPeriodReportUser"')
      return PeriodReportUser_possibleTypes.includes(obj.__typename)
    }
    


    const authProviderRequests_possibleTypes: string[] = ['authProviderRequests']
    export const isauthProviderRequests = (obj?: { __typename?: any } | null): obj is authProviderRequests => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviderRequests"')
      return authProviderRequests_possibleTypes.includes(obj.__typename)
    }
    


    const authProviderRequests_aggregate_possibleTypes: string[] = ['authProviderRequests_aggregate']
    export const isauthProviderRequests_aggregate = (obj?: { __typename?: any } | null): obj is authProviderRequests_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviderRequests_aggregate"')
      return authProviderRequests_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authProviderRequests_aggregate_fields_possibleTypes: string[] = ['authProviderRequests_aggregate_fields']
    export const isauthProviderRequests_aggregate_fields = (obj?: { __typename?: any } | null): obj is authProviderRequests_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviderRequests_aggregate_fields"')
      return authProviderRequests_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authProviderRequests_max_fields_possibleTypes: string[] = ['authProviderRequests_max_fields']
    export const isauthProviderRequests_max_fields = (obj?: { __typename?: any } | null): obj is authProviderRequests_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviderRequests_max_fields"')
      return authProviderRequests_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authProviderRequests_min_fields_possibleTypes: string[] = ['authProviderRequests_min_fields']
    export const isauthProviderRequests_min_fields = (obj?: { __typename?: any } | null): obj is authProviderRequests_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviderRequests_min_fields"')
      return authProviderRequests_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authProviderRequests_mutation_response_possibleTypes: string[] = ['authProviderRequests_mutation_response']
    export const isauthProviderRequests_mutation_response = (obj?: { __typename?: any } | null): obj is authProviderRequests_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviderRequests_mutation_response"')
      return authProviderRequests_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authProviders_possibleTypes: string[] = ['authProviders']
    export const isauthProviders = (obj?: { __typename?: any } | null): obj is authProviders => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviders"')
      return authProviders_possibleTypes.includes(obj.__typename)
    }
    


    const authProviders_aggregate_possibleTypes: string[] = ['authProviders_aggregate']
    export const isauthProviders_aggregate = (obj?: { __typename?: any } | null): obj is authProviders_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviders_aggregate"')
      return authProviders_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authProviders_aggregate_fields_possibleTypes: string[] = ['authProviders_aggregate_fields']
    export const isauthProviders_aggregate_fields = (obj?: { __typename?: any } | null): obj is authProviders_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviders_aggregate_fields"')
      return authProviders_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authProviders_max_fields_possibleTypes: string[] = ['authProviders_max_fields']
    export const isauthProviders_max_fields = (obj?: { __typename?: any } | null): obj is authProviders_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviders_max_fields"')
      return authProviders_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authProviders_min_fields_possibleTypes: string[] = ['authProviders_min_fields']
    export const isauthProviders_min_fields = (obj?: { __typename?: any } | null): obj is authProviders_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviders_min_fields"')
      return authProviders_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authProviders_mutation_response_possibleTypes: string[] = ['authProviders_mutation_response']
    export const isauthProviders_mutation_response = (obj?: { __typename?: any } | null): obj is authProviders_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthProviders_mutation_response"')
      return authProviders_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokenTypes_possibleTypes: string[] = ['authRefreshTokenTypes']
    export const isauthRefreshTokenTypes = (obj?: { __typename?: any } | null): obj is authRefreshTokenTypes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokenTypes"')
      return authRefreshTokenTypes_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokenTypes_aggregate_possibleTypes: string[] = ['authRefreshTokenTypes_aggregate']
    export const isauthRefreshTokenTypes_aggregate = (obj?: { __typename?: any } | null): obj is authRefreshTokenTypes_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokenTypes_aggregate"')
      return authRefreshTokenTypes_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokenTypes_aggregate_fields_possibleTypes: string[] = ['authRefreshTokenTypes_aggregate_fields']
    export const isauthRefreshTokenTypes_aggregate_fields = (obj?: { __typename?: any } | null): obj is authRefreshTokenTypes_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokenTypes_aggregate_fields"')
      return authRefreshTokenTypes_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokenTypes_max_fields_possibleTypes: string[] = ['authRefreshTokenTypes_max_fields']
    export const isauthRefreshTokenTypes_max_fields = (obj?: { __typename?: any } | null): obj is authRefreshTokenTypes_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokenTypes_max_fields"')
      return authRefreshTokenTypes_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokenTypes_min_fields_possibleTypes: string[] = ['authRefreshTokenTypes_min_fields']
    export const isauthRefreshTokenTypes_min_fields = (obj?: { __typename?: any } | null): obj is authRefreshTokenTypes_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokenTypes_min_fields"')
      return authRefreshTokenTypes_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokenTypes_mutation_response_possibleTypes: string[] = ['authRefreshTokenTypes_mutation_response']
    export const isauthRefreshTokenTypes_mutation_response = (obj?: { __typename?: any } | null): obj is authRefreshTokenTypes_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokenTypes_mutation_response"')
      return authRefreshTokenTypes_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokens_possibleTypes: string[] = ['authRefreshTokens']
    export const isauthRefreshTokens = (obj?: { __typename?: any } | null): obj is authRefreshTokens => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokens"')
      return authRefreshTokens_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokens_aggregate_possibleTypes: string[] = ['authRefreshTokens_aggregate']
    export const isauthRefreshTokens_aggregate = (obj?: { __typename?: any } | null): obj is authRefreshTokens_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_aggregate"')
      return authRefreshTokens_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokens_aggregate_fields_possibleTypes: string[] = ['authRefreshTokens_aggregate_fields']
    export const isauthRefreshTokens_aggregate_fields = (obj?: { __typename?: any } | null): obj is authRefreshTokens_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_aggregate_fields"')
      return authRefreshTokens_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokens_max_fields_possibleTypes: string[] = ['authRefreshTokens_max_fields']
    export const isauthRefreshTokens_max_fields = (obj?: { __typename?: any } | null): obj is authRefreshTokens_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_max_fields"')
      return authRefreshTokens_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokens_min_fields_possibleTypes: string[] = ['authRefreshTokens_min_fields']
    export const isauthRefreshTokens_min_fields = (obj?: { __typename?: any } | null): obj is authRefreshTokens_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_min_fields"')
      return authRefreshTokens_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRefreshTokens_mutation_response_possibleTypes: string[] = ['authRefreshTokens_mutation_response']
    export const isauthRefreshTokens_mutation_response = (obj?: { __typename?: any } | null): obj is authRefreshTokens_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_mutation_response"')
      return authRefreshTokens_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authRoles_possibleTypes: string[] = ['authRoles']
    export const isauthRoles = (obj?: { __typename?: any } | null): obj is authRoles => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRoles"')
      return authRoles_possibleTypes.includes(obj.__typename)
    }
    


    const authRoles_aggregate_possibleTypes: string[] = ['authRoles_aggregate']
    export const isauthRoles_aggregate = (obj?: { __typename?: any } | null): obj is authRoles_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRoles_aggregate"')
      return authRoles_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authRoles_aggregate_fields_possibleTypes: string[] = ['authRoles_aggregate_fields']
    export const isauthRoles_aggregate_fields = (obj?: { __typename?: any } | null): obj is authRoles_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRoles_aggregate_fields"')
      return authRoles_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRoles_max_fields_possibleTypes: string[] = ['authRoles_max_fields']
    export const isauthRoles_max_fields = (obj?: { __typename?: any } | null): obj is authRoles_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRoles_max_fields"')
      return authRoles_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRoles_min_fields_possibleTypes: string[] = ['authRoles_min_fields']
    export const isauthRoles_min_fields = (obj?: { __typename?: any } | null): obj is authRoles_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRoles_min_fields"')
      return authRoles_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authRoles_mutation_response_possibleTypes: string[] = ['authRoles_mutation_response']
    export const isauthRoles_mutation_response = (obj?: { __typename?: any } | null): obj is authRoles_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthRoles_mutation_response"')
      return authRoles_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authUserProviders_possibleTypes: string[] = ['authUserProviders']
    export const isauthUserProviders = (obj?: { __typename?: any } | null): obj is authUserProviders => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserProviders"')
      return authUserProviders_possibleTypes.includes(obj.__typename)
    }
    


    const authUserProviders_aggregate_possibleTypes: string[] = ['authUserProviders_aggregate']
    export const isauthUserProviders_aggregate = (obj?: { __typename?: any } | null): obj is authUserProviders_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserProviders_aggregate"')
      return authUserProviders_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authUserProviders_aggregate_fields_possibleTypes: string[] = ['authUserProviders_aggregate_fields']
    export const isauthUserProviders_aggregate_fields = (obj?: { __typename?: any } | null): obj is authUserProviders_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserProviders_aggregate_fields"')
      return authUserProviders_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserProviders_max_fields_possibleTypes: string[] = ['authUserProviders_max_fields']
    export const isauthUserProviders_max_fields = (obj?: { __typename?: any } | null): obj is authUserProviders_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserProviders_max_fields"')
      return authUserProviders_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserProviders_min_fields_possibleTypes: string[] = ['authUserProviders_min_fields']
    export const isauthUserProviders_min_fields = (obj?: { __typename?: any } | null): obj is authUserProviders_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserProviders_min_fields"')
      return authUserProviders_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserProviders_mutation_response_possibleTypes: string[] = ['authUserProviders_mutation_response']
    export const isauthUserProviders_mutation_response = (obj?: { __typename?: any } | null): obj is authUserProviders_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserProviders_mutation_response"')
      return authUserProviders_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authUserRoles_possibleTypes: string[] = ['authUserRoles']
    export const isauthUserRoles = (obj?: { __typename?: any } | null): obj is authUserRoles => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserRoles"')
      return authUserRoles_possibleTypes.includes(obj.__typename)
    }
    


    const authUserRoles_aggregate_possibleTypes: string[] = ['authUserRoles_aggregate']
    export const isauthUserRoles_aggregate = (obj?: { __typename?: any } | null): obj is authUserRoles_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserRoles_aggregate"')
      return authUserRoles_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authUserRoles_aggregate_fields_possibleTypes: string[] = ['authUserRoles_aggregate_fields']
    export const isauthUserRoles_aggregate_fields = (obj?: { __typename?: any } | null): obj is authUserRoles_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserRoles_aggregate_fields"')
      return authUserRoles_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserRoles_max_fields_possibleTypes: string[] = ['authUserRoles_max_fields']
    export const isauthUserRoles_max_fields = (obj?: { __typename?: any } | null): obj is authUserRoles_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserRoles_max_fields"')
      return authUserRoles_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserRoles_min_fields_possibleTypes: string[] = ['authUserRoles_min_fields']
    export const isauthUserRoles_min_fields = (obj?: { __typename?: any } | null): obj is authUserRoles_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserRoles_min_fields"')
      return authUserRoles_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserRoles_mutation_response_possibleTypes: string[] = ['authUserRoles_mutation_response']
    export const isauthUserRoles_mutation_response = (obj?: { __typename?: any } | null): obj is authUserRoles_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserRoles_mutation_response"')
      return authUserRoles_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_possibleTypes: string[] = ['authUserSecurityKeys']
    export const isauthUserSecurityKeys = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys"')
      return authUserSecurityKeys_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_aggregate_possibleTypes: string[] = ['authUserSecurityKeys_aggregate']
    export const isauthUserSecurityKeys_aggregate = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_aggregate"')
      return authUserSecurityKeys_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_aggregate_fields_possibleTypes: string[] = ['authUserSecurityKeys_aggregate_fields']
    export const isauthUserSecurityKeys_aggregate_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_aggregate_fields"')
      return authUserSecurityKeys_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_avg_fields_possibleTypes: string[] = ['authUserSecurityKeys_avg_fields']
    export const isauthUserSecurityKeys_avg_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_avg_fields"')
      return authUserSecurityKeys_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_max_fields_possibleTypes: string[] = ['authUserSecurityKeys_max_fields']
    export const isauthUserSecurityKeys_max_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_max_fields"')
      return authUserSecurityKeys_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_min_fields_possibleTypes: string[] = ['authUserSecurityKeys_min_fields']
    export const isauthUserSecurityKeys_min_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_min_fields"')
      return authUserSecurityKeys_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_mutation_response_possibleTypes: string[] = ['authUserSecurityKeys_mutation_response']
    export const isauthUserSecurityKeys_mutation_response = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_mutation_response"')
      return authUserSecurityKeys_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_stddev_fields_possibleTypes: string[] = ['authUserSecurityKeys_stddev_fields']
    export const isauthUserSecurityKeys_stddev_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_stddev_fields"')
      return authUserSecurityKeys_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_stddev_pop_fields_possibleTypes: string[] = ['authUserSecurityKeys_stddev_pop_fields']
    export const isauthUserSecurityKeys_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_stddev_pop_fields"')
      return authUserSecurityKeys_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_stddev_samp_fields_possibleTypes: string[] = ['authUserSecurityKeys_stddev_samp_fields']
    export const isauthUserSecurityKeys_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_stddev_samp_fields"')
      return authUserSecurityKeys_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_sum_fields_possibleTypes: string[] = ['authUserSecurityKeys_sum_fields']
    export const isauthUserSecurityKeys_sum_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_sum_fields"')
      return authUserSecurityKeys_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_var_pop_fields_possibleTypes: string[] = ['authUserSecurityKeys_var_pop_fields']
    export const isauthUserSecurityKeys_var_pop_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_var_pop_fields"')
      return authUserSecurityKeys_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_var_samp_fields_possibleTypes: string[] = ['authUserSecurityKeys_var_samp_fields']
    export const isauthUserSecurityKeys_var_samp_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_var_samp_fields"')
      return authUserSecurityKeys_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const authUserSecurityKeys_variance_fields_possibleTypes: string[] = ['authUserSecurityKeys_variance_fields']
    export const isauthUserSecurityKeys_variance_fields = (obj?: { __typename?: any } | null): obj is authUserSecurityKeys_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthUserSecurityKeys_variance_fields"')
      return authUserSecurityKeys_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_possibleTypes: string[] = ['auth_migrations']
    export const isauth_migrations = (obj?: { __typename?: any } | null): obj is auth_migrations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations"')
      return auth_migrations_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_aggregate_possibleTypes: string[] = ['auth_migrations_aggregate']
    export const isauth_migrations_aggregate = (obj?: { __typename?: any } | null): obj is auth_migrations_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_aggregate"')
      return auth_migrations_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_aggregate_fields_possibleTypes: string[] = ['auth_migrations_aggregate_fields']
    export const isauth_migrations_aggregate_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_aggregate_fields"')
      return auth_migrations_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_avg_fields_possibleTypes: string[] = ['auth_migrations_avg_fields']
    export const isauth_migrations_avg_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_avg_fields"')
      return auth_migrations_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_max_fields_possibleTypes: string[] = ['auth_migrations_max_fields']
    export const isauth_migrations_max_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_max_fields"')
      return auth_migrations_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_min_fields_possibleTypes: string[] = ['auth_migrations_min_fields']
    export const isauth_migrations_min_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_min_fields"')
      return auth_migrations_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_mutation_response_possibleTypes: string[] = ['auth_migrations_mutation_response']
    export const isauth_migrations_mutation_response = (obj?: { __typename?: any } | null): obj is auth_migrations_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_mutation_response"')
      return auth_migrations_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_stddev_fields_possibleTypes: string[] = ['auth_migrations_stddev_fields']
    export const isauth_migrations_stddev_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_stddev_fields"')
      return auth_migrations_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_stddev_pop_fields_possibleTypes: string[] = ['auth_migrations_stddev_pop_fields']
    export const isauth_migrations_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_stddev_pop_fields"')
      return auth_migrations_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_stddev_samp_fields_possibleTypes: string[] = ['auth_migrations_stddev_samp_fields']
    export const isauth_migrations_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_stddev_samp_fields"')
      return auth_migrations_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_sum_fields_possibleTypes: string[] = ['auth_migrations_sum_fields']
    export const isauth_migrations_sum_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_sum_fields"')
      return auth_migrations_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_var_pop_fields_possibleTypes: string[] = ['auth_migrations_var_pop_fields']
    export const isauth_migrations_var_pop_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_var_pop_fields"')
      return auth_migrations_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_var_samp_fields_possibleTypes: string[] = ['auth_migrations_var_samp_fields']
    export const isauth_migrations_var_samp_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_var_samp_fields"')
      return auth_migrations_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const auth_migrations_variance_fields_possibleTypes: string[] = ['auth_migrations_variance_fields']
    export const isauth_migrations_variance_fields = (obj?: { __typename?: any } | null): obj is auth_migrations_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauth_migrations_variance_fields"')
      return auth_migrations_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_possibleTypes: string[] = ['buckets']
    export const isbuckets = (obj?: { __typename?: any } | null): obj is buckets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets"')
      return buckets_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_aggregate_possibleTypes: string[] = ['buckets_aggregate']
    export const isbuckets_aggregate = (obj?: { __typename?: any } | null): obj is buckets_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_aggregate"')
      return buckets_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_aggregate_fields_possibleTypes: string[] = ['buckets_aggregate_fields']
    export const isbuckets_aggregate_fields = (obj?: { __typename?: any } | null): obj is buckets_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_aggregate_fields"')
      return buckets_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_avg_fields_possibleTypes: string[] = ['buckets_avg_fields']
    export const isbuckets_avg_fields = (obj?: { __typename?: any } | null): obj is buckets_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_avg_fields"')
      return buckets_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_max_fields_possibleTypes: string[] = ['buckets_max_fields']
    export const isbuckets_max_fields = (obj?: { __typename?: any } | null): obj is buckets_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_max_fields"')
      return buckets_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_min_fields_possibleTypes: string[] = ['buckets_min_fields']
    export const isbuckets_min_fields = (obj?: { __typename?: any } | null): obj is buckets_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_min_fields"')
      return buckets_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_mutation_response_possibleTypes: string[] = ['buckets_mutation_response']
    export const isbuckets_mutation_response = (obj?: { __typename?: any } | null): obj is buckets_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_mutation_response"')
      return buckets_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_stddev_fields_possibleTypes: string[] = ['buckets_stddev_fields']
    export const isbuckets_stddev_fields = (obj?: { __typename?: any } | null): obj is buckets_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_stddev_fields"')
      return buckets_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_stddev_pop_fields_possibleTypes: string[] = ['buckets_stddev_pop_fields']
    export const isbuckets_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is buckets_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_stddev_pop_fields"')
      return buckets_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_stddev_samp_fields_possibleTypes: string[] = ['buckets_stddev_samp_fields']
    export const isbuckets_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is buckets_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_stddev_samp_fields"')
      return buckets_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_sum_fields_possibleTypes: string[] = ['buckets_sum_fields']
    export const isbuckets_sum_fields = (obj?: { __typename?: any } | null): obj is buckets_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_sum_fields"')
      return buckets_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_var_pop_fields_possibleTypes: string[] = ['buckets_var_pop_fields']
    export const isbuckets_var_pop_fields = (obj?: { __typename?: any } | null): obj is buckets_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_var_pop_fields"')
      return buckets_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_var_samp_fields_possibleTypes: string[] = ['buckets_var_samp_fields']
    export const isbuckets_var_samp_fields = (obj?: { __typename?: any } | null): obj is buckets_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_var_samp_fields"')
      return buckets_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const buckets_variance_fields_possibleTypes: string[] = ['buckets_variance_fields']
    export const isbuckets_variance_fields = (obj?: { __typename?: any } | null): obj is buckets_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuckets_variance_fields"')
      return buckets_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_file_possibleTypes: string[] = ['campaign_file']
    export const iscampaign_file = (obj?: { __typename?: any } | null): obj is campaign_file => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_file"')
      return campaign_file_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_file_aggregate_possibleTypes: string[] = ['campaign_file_aggregate']
    export const iscampaign_file_aggregate = (obj?: { __typename?: any } | null): obj is campaign_file_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_file_aggregate"')
      return campaign_file_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_file_aggregate_fields_possibleTypes: string[] = ['campaign_file_aggregate_fields']
    export const iscampaign_file_aggregate_fields = (obj?: { __typename?: any } | null): obj is campaign_file_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_file_aggregate_fields"')
      return campaign_file_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_file_max_fields_possibleTypes: string[] = ['campaign_file_max_fields']
    export const iscampaign_file_max_fields = (obj?: { __typename?: any } | null): obj is campaign_file_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_file_max_fields"')
      return campaign_file_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_file_min_fields_possibleTypes: string[] = ['campaign_file_min_fields']
    export const iscampaign_file_min_fields = (obj?: { __typename?: any } | null): obj is campaign_file_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_file_min_fields"')
      return campaign_file_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_file_mutation_response_possibleTypes: string[] = ['campaign_file_mutation_response']
    export const iscampaign_file_mutation_response = (obj?: { __typename?: any } | null): obj is campaign_file_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_file_mutation_response"')
      return campaign_file_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_currencies_possibleTypes: string[] = ['en_currencies']
    export const isen_currencies = (obj?: { __typename?: any } | null): obj is en_currencies => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_currencies"')
      return en_currencies_possibleTypes.includes(obj.__typename)
    }
    


    const en_currencies_aggregate_possibleTypes: string[] = ['en_currencies_aggregate']
    export const isen_currencies_aggregate = (obj?: { __typename?: any } | null): obj is en_currencies_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_currencies_aggregate"')
      return en_currencies_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_currencies_aggregate_fields_possibleTypes: string[] = ['en_currencies_aggregate_fields']
    export const isen_currencies_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_currencies_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_currencies_aggregate_fields"')
      return en_currencies_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_currencies_max_fields_possibleTypes: string[] = ['en_currencies_max_fields']
    export const isen_currencies_max_fields = (obj?: { __typename?: any } | null): obj is en_currencies_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_currencies_max_fields"')
      return en_currencies_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_currencies_min_fields_possibleTypes: string[] = ['en_currencies_min_fields']
    export const isen_currencies_min_fields = (obj?: { __typename?: any } | null): obj is en_currencies_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_currencies_min_fields"')
      return en_currencies_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_currencies_mutation_response_possibleTypes: string[] = ['en_currencies_mutation_response']
    export const isen_currencies_mutation_response = (obj?: { __typename?: any } | null): obj is en_currencies_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_currencies_mutation_response"')
      return en_currencies_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_notifications_possibleTypes: string[] = ['en_notifications']
    export const isen_notifications = (obj?: { __typename?: any } | null): obj is en_notifications => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_notifications"')
      return en_notifications_possibleTypes.includes(obj.__typename)
    }
    


    const en_notifications_aggregate_possibleTypes: string[] = ['en_notifications_aggregate']
    export const isen_notifications_aggregate = (obj?: { __typename?: any } | null): obj is en_notifications_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_notifications_aggregate"')
      return en_notifications_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_notifications_aggregate_fields_possibleTypes: string[] = ['en_notifications_aggregate_fields']
    export const isen_notifications_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_notifications_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_notifications_aggregate_fields"')
      return en_notifications_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_notifications_max_fields_possibleTypes: string[] = ['en_notifications_max_fields']
    export const isen_notifications_max_fields = (obj?: { __typename?: any } | null): obj is en_notifications_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_notifications_max_fields"')
      return en_notifications_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_notifications_min_fields_possibleTypes: string[] = ['en_notifications_min_fields']
    export const isen_notifications_min_fields = (obj?: { __typename?: any } | null): obj is en_notifications_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_notifications_min_fields"')
      return en_notifications_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_notifications_mutation_response_possibleTypes: string[] = ['en_notifications_mutation_response']
    export const isen_notifications_mutation_response = (obj?: { __typename?: any } | null): obj is en_notifications_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_notifications_mutation_response"')
      return en_notifications_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_partner_steps_possibleTypes: string[] = ['en_partner_steps']
    export const isen_partner_steps = (obj?: { __typename?: any } | null): obj is en_partner_steps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_partner_steps"')
      return en_partner_steps_possibleTypes.includes(obj.__typename)
    }
    


    const en_partner_steps_aggregate_possibleTypes: string[] = ['en_partner_steps_aggregate']
    export const isen_partner_steps_aggregate = (obj?: { __typename?: any } | null): obj is en_partner_steps_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_partner_steps_aggregate"')
      return en_partner_steps_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_partner_steps_aggregate_fields_possibleTypes: string[] = ['en_partner_steps_aggregate_fields']
    export const isen_partner_steps_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_partner_steps_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_partner_steps_aggregate_fields"')
      return en_partner_steps_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_partner_steps_max_fields_possibleTypes: string[] = ['en_partner_steps_max_fields']
    export const isen_partner_steps_max_fields = (obj?: { __typename?: any } | null): obj is en_partner_steps_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_partner_steps_max_fields"')
      return en_partner_steps_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_partner_steps_min_fields_possibleTypes: string[] = ['en_partner_steps_min_fields']
    export const isen_partner_steps_min_fields = (obj?: { __typename?: any } | null): obj is en_partner_steps_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_partner_steps_min_fields"')
      return en_partner_steps_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_partner_steps_mutation_response_possibleTypes: string[] = ['en_partner_steps_mutation_response']
    export const isen_partner_steps_mutation_response = (obj?: { __typename?: any } | null): obj is en_partner_steps_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_partner_steps_mutation_response"')
      return en_partner_steps_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_payment_providers_possibleTypes: string[] = ['en_payment_providers']
    export const isen_payment_providers = (obj?: { __typename?: any } | null): obj is en_payment_providers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_payment_providers"')
      return en_payment_providers_possibleTypes.includes(obj.__typename)
    }
    


    const en_payment_providers_aggregate_possibleTypes: string[] = ['en_payment_providers_aggregate']
    export const isen_payment_providers_aggregate = (obj?: { __typename?: any } | null): obj is en_payment_providers_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_payment_providers_aggregate"')
      return en_payment_providers_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_payment_providers_aggregate_fields_possibleTypes: string[] = ['en_payment_providers_aggregate_fields']
    export const isen_payment_providers_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_payment_providers_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_payment_providers_aggregate_fields"')
      return en_payment_providers_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_payment_providers_max_fields_possibleTypes: string[] = ['en_payment_providers_max_fields']
    export const isen_payment_providers_max_fields = (obj?: { __typename?: any } | null): obj is en_payment_providers_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_payment_providers_max_fields"')
      return en_payment_providers_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_payment_providers_min_fields_possibleTypes: string[] = ['en_payment_providers_min_fields']
    export const isen_payment_providers_min_fields = (obj?: { __typename?: any } | null): obj is en_payment_providers_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_payment_providers_min_fields"')
      return en_payment_providers_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_payment_providers_mutation_response_possibleTypes: string[] = ['en_payment_providers_mutation_response']
    export const isen_payment_providers_mutation_response = (obj?: { __typename?: any } | null): obj is en_payment_providers_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_payment_providers_mutation_response"')
      return en_payment_providers_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_permissions_possibleTypes: string[] = ['en_permissions']
    export const isen_permissions = (obj?: { __typename?: any } | null): obj is en_permissions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_permissions"')
      return en_permissions_possibleTypes.includes(obj.__typename)
    }
    


    const en_permissions_aggregate_possibleTypes: string[] = ['en_permissions_aggregate']
    export const isen_permissions_aggregate = (obj?: { __typename?: any } | null): obj is en_permissions_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_permissions_aggregate"')
      return en_permissions_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_permissions_aggregate_fields_possibleTypes: string[] = ['en_permissions_aggregate_fields']
    export const isen_permissions_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_permissions_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_permissions_aggregate_fields"')
      return en_permissions_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_permissions_max_fields_possibleTypes: string[] = ['en_permissions_max_fields']
    export const isen_permissions_max_fields = (obj?: { __typename?: any } | null): obj is en_permissions_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_permissions_max_fields"')
      return en_permissions_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_permissions_min_fields_possibleTypes: string[] = ['en_permissions_min_fields']
    export const isen_permissions_min_fields = (obj?: { __typename?: any } | null): obj is en_permissions_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_permissions_min_fields"')
      return en_permissions_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_permissions_mutation_response_possibleTypes: string[] = ['en_permissions_mutation_response']
    export const isen_permissions_mutation_response = (obj?: { __typename?: any } | null): obj is en_permissions_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_permissions_mutation_response"')
      return en_permissions_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_recurrencies_possibleTypes: string[] = ['en_recurrencies']
    export const isen_recurrencies = (obj?: { __typename?: any } | null): obj is en_recurrencies => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_recurrencies"')
      return en_recurrencies_possibleTypes.includes(obj.__typename)
    }
    


    const en_recurrencies_aggregate_possibleTypes: string[] = ['en_recurrencies_aggregate']
    export const isen_recurrencies_aggregate = (obj?: { __typename?: any } | null): obj is en_recurrencies_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_recurrencies_aggregate"')
      return en_recurrencies_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_recurrencies_aggregate_fields_possibleTypes: string[] = ['en_recurrencies_aggregate_fields']
    export const isen_recurrencies_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_recurrencies_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_recurrencies_aggregate_fields"')
      return en_recurrencies_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_recurrencies_max_fields_possibleTypes: string[] = ['en_recurrencies_max_fields']
    export const isen_recurrencies_max_fields = (obj?: { __typename?: any } | null): obj is en_recurrencies_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_recurrencies_max_fields"')
      return en_recurrencies_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_recurrencies_min_fields_possibleTypes: string[] = ['en_recurrencies_min_fields']
    export const isen_recurrencies_min_fields = (obj?: { __typename?: any } | null): obj is en_recurrencies_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_recurrencies_min_fields"')
      return en_recurrencies_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_recurrencies_mutation_response_possibleTypes: string[] = ['en_recurrencies_mutation_response']
    export const isen_recurrencies_mutation_response = (obj?: { __typename?: any } | null): obj is en_recurrencies_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_recurrencies_mutation_response"')
      return en_recurrencies_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_statuses_possibleTypes: string[] = ['en_statuses']
    export const isen_statuses = (obj?: { __typename?: any } | null): obj is en_statuses => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_statuses"')
      return en_statuses_possibleTypes.includes(obj.__typename)
    }
    


    const en_statuses_aggregate_possibleTypes: string[] = ['en_statuses_aggregate']
    export const isen_statuses_aggregate = (obj?: { __typename?: any } | null): obj is en_statuses_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_statuses_aggregate"')
      return en_statuses_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_statuses_aggregate_fields_possibleTypes: string[] = ['en_statuses_aggregate_fields']
    export const isen_statuses_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_statuses_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_statuses_aggregate_fields"')
      return en_statuses_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_statuses_max_fields_possibleTypes: string[] = ['en_statuses_max_fields']
    export const isen_statuses_max_fields = (obj?: { __typename?: any } | null): obj is en_statuses_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_statuses_max_fields"')
      return en_statuses_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_statuses_min_fields_possibleTypes: string[] = ['en_statuses_min_fields']
    export const isen_statuses_min_fields = (obj?: { __typename?: any } | null): obj is en_statuses_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_statuses_min_fields"')
      return en_statuses_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_statuses_mutation_response_possibleTypes: string[] = ['en_statuses_mutation_response']
    export const isen_statuses_mutation_response = (obj?: { __typename?: any } | null): obj is en_statuses_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_statuses_mutation_response"')
      return en_statuses_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const en_trans_types_possibleTypes: string[] = ['en_trans_types']
    export const isen_trans_types = (obj?: { __typename?: any } | null): obj is en_trans_types => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_trans_types"')
      return en_trans_types_possibleTypes.includes(obj.__typename)
    }
    


    const en_trans_types_aggregate_possibleTypes: string[] = ['en_trans_types_aggregate']
    export const isen_trans_types_aggregate = (obj?: { __typename?: any } | null): obj is en_trans_types_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_trans_types_aggregate"')
      return en_trans_types_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const en_trans_types_aggregate_fields_possibleTypes: string[] = ['en_trans_types_aggregate_fields']
    export const isen_trans_types_aggregate_fields = (obj?: { __typename?: any } | null): obj is en_trans_types_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_trans_types_aggregate_fields"')
      return en_trans_types_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_trans_types_max_fields_possibleTypes: string[] = ['en_trans_types_max_fields']
    export const isen_trans_types_max_fields = (obj?: { __typename?: any } | null): obj is en_trans_types_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_trans_types_max_fields"')
      return en_trans_types_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_trans_types_min_fields_possibleTypes: string[] = ['en_trans_types_min_fields']
    export const isen_trans_types_min_fields = (obj?: { __typename?: any } | null): obj is en_trans_types_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_trans_types_min_fields"')
      return en_trans_types_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const en_trans_types_mutation_response_possibleTypes: string[] = ['en_trans_types_mutation_response']
    export const isen_trans_types_mutation_response = (obj?: { __typename?: any } | null): obj is en_trans_types_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isen_trans_types_mutation_response"')
      return en_trans_types_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const files_possibleTypes: string[] = ['files']
    export const isfiles = (obj?: { __typename?: any } | null): obj is files => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles"')
      return files_possibleTypes.includes(obj.__typename)
    }
    


    const files_aggregate_possibleTypes: string[] = ['files_aggregate']
    export const isfiles_aggregate = (obj?: { __typename?: any } | null): obj is files_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_aggregate"')
      return files_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const files_aggregate_fields_possibleTypes: string[] = ['files_aggregate_fields']
    export const isfiles_aggregate_fields = (obj?: { __typename?: any } | null): obj is files_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_aggregate_fields"')
      return files_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_avg_fields_possibleTypes: string[] = ['files_avg_fields']
    export const isfiles_avg_fields = (obj?: { __typename?: any } | null): obj is files_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_avg_fields"')
      return files_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_max_fields_possibleTypes: string[] = ['files_max_fields']
    export const isfiles_max_fields = (obj?: { __typename?: any } | null): obj is files_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_max_fields"')
      return files_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_min_fields_possibleTypes: string[] = ['files_min_fields']
    export const isfiles_min_fields = (obj?: { __typename?: any } | null): obj is files_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_min_fields"')
      return files_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_mutation_response_possibleTypes: string[] = ['files_mutation_response']
    export const isfiles_mutation_response = (obj?: { __typename?: any } | null): obj is files_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_mutation_response"')
      return files_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const files_stddev_fields_possibleTypes: string[] = ['files_stddev_fields']
    export const isfiles_stddev_fields = (obj?: { __typename?: any } | null): obj is files_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_stddev_fields"')
      return files_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_stddev_pop_fields_possibleTypes: string[] = ['files_stddev_pop_fields']
    export const isfiles_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is files_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_stddev_pop_fields"')
      return files_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_stddev_samp_fields_possibleTypes: string[] = ['files_stddev_samp_fields']
    export const isfiles_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is files_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_stddev_samp_fields"')
      return files_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_sum_fields_possibleTypes: string[] = ['files_sum_fields']
    export const isfiles_sum_fields = (obj?: { __typename?: any } | null): obj is files_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_sum_fields"')
      return files_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_var_pop_fields_possibleTypes: string[] = ['files_var_pop_fields']
    export const isfiles_var_pop_fields = (obj?: { __typename?: any } | null): obj is files_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_var_pop_fields"')
      return files_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_var_samp_fields_possibleTypes: string[] = ['files_var_samp_fields']
    export const isfiles_var_samp_fields = (obj?: { __typename?: any } | null): obj is files_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_var_samp_fields"')
      return files_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const files_variance_fields_possibleTypes: string[] = ['files_variance_fields']
    export const isfiles_variance_fields = (obj?: { __typename?: any } | null): obj is files_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfiles_variance_fields"')
      return files_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_possibleTypes: string[] = ['group']
    export const isgroup = (obj?: { __typename?: any } | null): obj is group => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup"')
      return group_possibleTypes.includes(obj.__typename)
    }
    


    const group_aggregate_possibleTypes: string[] = ['group_aggregate']
    export const isgroup_aggregate = (obj?: { __typename?: any } | null): obj is group_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_aggregate"')
      return group_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const group_aggregate_fields_possibleTypes: string[] = ['group_aggregate_fields']
    export const isgroup_aggregate_fields = (obj?: { __typename?: any } | null): obj is group_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_aggregate_fields"')
      return group_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_avg_fields_possibleTypes: string[] = ['group_avg_fields']
    export const isgroup_avg_fields = (obj?: { __typename?: any } | null): obj is group_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_avg_fields"')
      return group_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_max_fields_possibleTypes: string[] = ['group_max_fields']
    export const isgroup_max_fields = (obj?: { __typename?: any } | null): obj is group_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_max_fields"')
      return group_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_min_fields_possibleTypes: string[] = ['group_min_fields']
    export const isgroup_min_fields = (obj?: { __typename?: any } | null): obj is group_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_min_fields"')
      return group_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_mutation_response_possibleTypes: string[] = ['group_mutation_response']
    export const isgroup_mutation_response = (obj?: { __typename?: any } | null): obj is group_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_mutation_response"')
      return group_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const group_stddev_fields_possibleTypes: string[] = ['group_stddev_fields']
    export const isgroup_stddev_fields = (obj?: { __typename?: any } | null): obj is group_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_stddev_fields"')
      return group_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_stddev_pop_fields_possibleTypes: string[] = ['group_stddev_pop_fields']
    export const isgroup_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is group_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_stddev_pop_fields"')
      return group_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_stddev_samp_fields_possibleTypes: string[] = ['group_stddev_samp_fields']
    export const isgroup_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is group_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_stddev_samp_fields"')
      return group_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_sum_fields_possibleTypes: string[] = ['group_sum_fields']
    export const isgroup_sum_fields = (obj?: { __typename?: any } | null): obj is group_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_sum_fields"')
      return group_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_var_pop_fields_possibleTypes: string[] = ['group_var_pop_fields']
    export const isgroup_var_pop_fields = (obj?: { __typename?: any } | null): obj is group_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_var_pop_fields"')
      return group_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_var_samp_fields_possibleTypes: string[] = ['group_var_samp_fields']
    export const isgroup_var_samp_fields = (obj?: { __typename?: any } | null): obj is group_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_var_samp_fields"')
      return group_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const group_variance_fields_possibleTypes: string[] = ['group_variance_fields']
    export const isgroup_variance_fields = (obj?: { __typename?: any } | null): obj is group_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgroup_variance_fields"')
      return group_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const invitation_possibleTypes: string[] = ['invitation']
    export const isinvitation = (obj?: { __typename?: any } | null): obj is invitation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isinvitation"')
      return invitation_possibleTypes.includes(obj.__typename)
    }
    


    const invitation_aggregate_possibleTypes: string[] = ['invitation_aggregate']
    export const isinvitation_aggregate = (obj?: { __typename?: any } | null): obj is invitation_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isinvitation_aggregate"')
      return invitation_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const invitation_aggregate_fields_possibleTypes: string[] = ['invitation_aggregate_fields']
    export const isinvitation_aggregate_fields = (obj?: { __typename?: any } | null): obj is invitation_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isinvitation_aggregate_fields"')
      return invitation_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const invitation_max_fields_possibleTypes: string[] = ['invitation_max_fields']
    export const isinvitation_max_fields = (obj?: { __typename?: any } | null): obj is invitation_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isinvitation_max_fields"')
      return invitation_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const invitation_min_fields_possibleTypes: string[] = ['invitation_min_fields']
    export const isinvitation_min_fields = (obj?: { __typename?: any } | null): obj is invitation_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isinvitation_min_fields"')
      return invitation_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const invitation_mutation_response_possibleTypes: string[] = ['invitation_mutation_response']
    export const isinvitation_mutation_response = (obj?: { __typename?: any } | null): obj is invitation_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isinvitation_mutation_response"')
      return invitation_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const member_possibleTypes: string[] = ['member']
    export const ismember = (obj?: { __typename?: any } | null): obj is member => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember"')
      return member_possibleTypes.includes(obj.__typename)
    }
    


    const member_aggregate_possibleTypes: string[] = ['member_aggregate']
    export const ismember_aggregate = (obj?: { __typename?: any } | null): obj is member_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_aggregate"')
      return member_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const member_aggregate_fields_possibleTypes: string[] = ['member_aggregate_fields']
    export const ismember_aggregate_fields = (obj?: { __typename?: any } | null): obj is member_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_aggregate_fields"')
      return member_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_avg_fields_possibleTypes: string[] = ['member_avg_fields']
    export const ismember_avg_fields = (obj?: { __typename?: any } | null): obj is member_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_avg_fields"')
      return member_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_max_fields_possibleTypes: string[] = ['member_max_fields']
    export const ismember_max_fields = (obj?: { __typename?: any } | null): obj is member_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_max_fields"')
      return member_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_min_fields_possibleTypes: string[] = ['member_min_fields']
    export const ismember_min_fields = (obj?: { __typename?: any } | null): obj is member_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_min_fields"')
      return member_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_mutation_response_possibleTypes: string[] = ['member_mutation_response']
    export const ismember_mutation_response = (obj?: { __typename?: any } | null): obj is member_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_mutation_response"')
      return member_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const member_stddev_fields_possibleTypes: string[] = ['member_stddev_fields']
    export const ismember_stddev_fields = (obj?: { __typename?: any } | null): obj is member_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_stddev_fields"')
      return member_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_stddev_pop_fields_possibleTypes: string[] = ['member_stddev_pop_fields']
    export const ismember_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is member_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_stddev_pop_fields"')
      return member_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_stddev_samp_fields_possibleTypes: string[] = ['member_stddev_samp_fields']
    export const ismember_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is member_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_stddev_samp_fields"')
      return member_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_sum_fields_possibleTypes: string[] = ['member_sum_fields']
    export const ismember_sum_fields = (obj?: { __typename?: any } | null): obj is member_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_sum_fields"')
      return member_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_var_pop_fields_possibleTypes: string[] = ['member_var_pop_fields']
    export const ismember_var_pop_fields = (obj?: { __typename?: any } | null): obj is member_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_var_pop_fields"')
      return member_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_var_samp_fields_possibleTypes: string[] = ['member_var_samp_fields']
    export const ismember_var_samp_fields = (obj?: { __typename?: any } | null): obj is member_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_var_samp_fields"')
      return member_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const member_variance_fields_possibleTypes: string[] = ['member_variance_fields']
    export const ismember_variance_fields = (obj?: { __typename?: any } | null): obj is member_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismember_variance_fields"')
      return member_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const notification_possibleTypes: string[] = ['notification']
    export const isnotification = (obj?: { __typename?: any } | null): obj is notification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification"')
      return notification_possibleTypes.includes(obj.__typename)
    }
    


    const notification_aggregate_possibleTypes: string[] = ['notification_aggregate']
    export const isnotification_aggregate = (obj?: { __typename?: any } | null): obj is notification_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_aggregate"')
      return notification_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const notification_aggregate_fields_possibleTypes: string[] = ['notification_aggregate_fields']
    export const isnotification_aggregate_fields = (obj?: { __typename?: any } | null): obj is notification_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_aggregate_fields"')
      return notification_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notification_item_possibleTypes: string[] = ['notification_item']
    export const isnotification_item = (obj?: { __typename?: any } | null): obj is notification_item => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_item"')
      return notification_item_possibleTypes.includes(obj.__typename)
    }
    


    const notification_item_aggregate_possibleTypes: string[] = ['notification_item_aggregate']
    export const isnotification_item_aggregate = (obj?: { __typename?: any } | null): obj is notification_item_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_item_aggregate"')
      return notification_item_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const notification_item_aggregate_fields_possibleTypes: string[] = ['notification_item_aggregate_fields']
    export const isnotification_item_aggregate_fields = (obj?: { __typename?: any } | null): obj is notification_item_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_item_aggregate_fields"')
      return notification_item_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notification_item_max_fields_possibleTypes: string[] = ['notification_item_max_fields']
    export const isnotification_item_max_fields = (obj?: { __typename?: any } | null): obj is notification_item_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_item_max_fields"')
      return notification_item_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notification_item_min_fields_possibleTypes: string[] = ['notification_item_min_fields']
    export const isnotification_item_min_fields = (obj?: { __typename?: any } | null): obj is notification_item_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_item_min_fields"')
      return notification_item_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notification_item_mutation_response_possibleTypes: string[] = ['notification_item_mutation_response']
    export const isnotification_item_mutation_response = (obj?: { __typename?: any } | null): obj is notification_item_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_item_mutation_response"')
      return notification_item_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const notification_max_fields_possibleTypes: string[] = ['notification_max_fields']
    export const isnotification_max_fields = (obj?: { __typename?: any } | null): obj is notification_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_max_fields"')
      return notification_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notification_min_fields_possibleTypes: string[] = ['notification_min_fields']
    export const isnotification_min_fields = (obj?: { __typename?: any } | null): obj is notification_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_min_fields"')
      return notification_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notification_mutation_response_possibleTypes: string[] = ['notification_mutation_response']
    export const isnotification_mutation_response = (obj?: { __typename?: any } | null): obj is notification_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotification_mutation_response"')
      return notification_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const partner_possibleTypes: string[] = ['partner']
    export const ispartner = (obj?: { __typename?: any } | null): obj is partner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner"')
      return partner_possibleTypes.includes(obj.__typename)
    }
    


    const partner_aggregate_possibleTypes: string[] = ['partner_aggregate']
    export const ispartner_aggregate = (obj?: { __typename?: any } | null): obj is partner_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_aggregate"')
      return partner_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const partner_aggregate_fields_possibleTypes: string[] = ['partner_aggregate_fields']
    export const ispartner_aggregate_fields = (obj?: { __typename?: any } | null): obj is partner_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_aggregate_fields"')
      return partner_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_possibleTypes: string[] = ['partner_campaign']
    export const ispartner_campaign = (obj?: { __typename?: any } | null): obj is partner_campaign => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign"')
      return partner_campaign_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_aggregate_possibleTypes: string[] = ['partner_campaign_aggregate']
    export const ispartner_campaign_aggregate = (obj?: { __typename?: any } | null): obj is partner_campaign_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_aggregate"')
      return partner_campaign_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_aggregate_fields_possibleTypes: string[] = ['partner_campaign_aggregate_fields']
    export const ispartner_campaign_aggregate_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_aggregate_fields"')
      return partner_campaign_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_avg_fields_possibleTypes: string[] = ['partner_campaign_avg_fields']
    export const ispartner_campaign_avg_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_avg_fields"')
      return partner_campaign_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_max_fields_possibleTypes: string[] = ['partner_campaign_max_fields']
    export const ispartner_campaign_max_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_max_fields"')
      return partner_campaign_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_min_fields_possibleTypes: string[] = ['partner_campaign_min_fields']
    export const ispartner_campaign_min_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_min_fields"')
      return partner_campaign_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_mutation_response_possibleTypes: string[] = ['partner_campaign_mutation_response']
    export const ispartner_campaign_mutation_response = (obj?: { __typename?: any } | null): obj is partner_campaign_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_mutation_response"')
      return partner_campaign_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_stddev_fields_possibleTypes: string[] = ['partner_campaign_stddev_fields']
    export const ispartner_campaign_stddev_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_stddev_fields"')
      return partner_campaign_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_stddev_pop_fields_possibleTypes: string[] = ['partner_campaign_stddev_pop_fields']
    export const ispartner_campaign_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_stddev_pop_fields"')
      return partner_campaign_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_stddev_samp_fields_possibleTypes: string[] = ['partner_campaign_stddev_samp_fields']
    export const ispartner_campaign_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_stddev_samp_fields"')
      return partner_campaign_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_sum_fields_possibleTypes: string[] = ['partner_campaign_sum_fields']
    export const ispartner_campaign_sum_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_sum_fields"')
      return partner_campaign_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_var_pop_fields_possibleTypes: string[] = ['partner_campaign_var_pop_fields']
    export const ispartner_campaign_var_pop_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_var_pop_fields"')
      return partner_campaign_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_var_samp_fields_possibleTypes: string[] = ['partner_campaign_var_samp_fields']
    export const ispartner_campaign_var_samp_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_var_samp_fields"')
      return partner_campaign_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_campaign_variance_fields_possibleTypes: string[] = ['partner_campaign_variance_fields']
    export const ispartner_campaign_variance_fields = (obj?: { __typename?: any } | null): obj is partner_campaign_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_campaign_variance_fields"')
      return partner_campaign_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_file_possibleTypes: string[] = ['partner_file']
    export const ispartner_file = (obj?: { __typename?: any } | null): obj is partner_file => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_file"')
      return partner_file_possibleTypes.includes(obj.__typename)
    }
    


    const partner_file_aggregate_possibleTypes: string[] = ['partner_file_aggregate']
    export const ispartner_file_aggregate = (obj?: { __typename?: any } | null): obj is partner_file_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_file_aggregate"')
      return partner_file_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const partner_file_aggregate_fields_possibleTypes: string[] = ['partner_file_aggregate_fields']
    export const ispartner_file_aggregate_fields = (obj?: { __typename?: any } | null): obj is partner_file_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_file_aggregate_fields"')
      return partner_file_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_file_max_fields_possibleTypes: string[] = ['partner_file_max_fields']
    export const ispartner_file_max_fields = (obj?: { __typename?: any } | null): obj is partner_file_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_file_max_fields"')
      return partner_file_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_file_min_fields_possibleTypes: string[] = ['partner_file_min_fields']
    export const ispartner_file_min_fields = (obj?: { __typename?: any } | null): obj is partner_file_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_file_min_fields"')
      return partner_file_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_file_mutation_response_possibleTypes: string[] = ['partner_file_mutation_response']
    export const ispartner_file_mutation_response = (obj?: { __typename?: any } | null): obj is partner_file_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_file_mutation_response"')
      return partner_file_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const partner_max_fields_possibleTypes: string[] = ['partner_max_fields']
    export const ispartner_max_fields = (obj?: { __typename?: any } | null): obj is partner_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_max_fields"')
      return partner_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_min_fields_possibleTypes: string[] = ['partner_min_fields']
    export const ispartner_min_fields = (obj?: { __typename?: any } | null): obj is partner_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_min_fields"')
      return partner_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_mutation_response_possibleTypes: string[] = ['partner_mutation_response']
    export const ispartner_mutation_response = (obj?: { __typename?: any } | null): obj is partner_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_mutation_response"')
      return partner_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const partner_operator_possibleTypes: string[] = ['partner_operator']
    export const ispartner_operator = (obj?: { __typename?: any } | null): obj is partner_operator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_operator"')
      return partner_operator_possibleTypes.includes(obj.__typename)
    }
    


    const partner_operator_aggregate_possibleTypes: string[] = ['partner_operator_aggregate']
    export const ispartner_operator_aggregate = (obj?: { __typename?: any } | null): obj is partner_operator_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_operator_aggregate"')
      return partner_operator_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const partner_operator_aggregate_fields_possibleTypes: string[] = ['partner_operator_aggregate_fields']
    export const ispartner_operator_aggregate_fields = (obj?: { __typename?: any } | null): obj is partner_operator_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_operator_aggregate_fields"')
      return partner_operator_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_operator_max_fields_possibleTypes: string[] = ['partner_operator_max_fields']
    export const ispartner_operator_max_fields = (obj?: { __typename?: any } | null): obj is partner_operator_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_operator_max_fields"')
      return partner_operator_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_operator_min_fields_possibleTypes: string[] = ['partner_operator_min_fields']
    export const ispartner_operator_min_fields = (obj?: { __typename?: any } | null): obj is partner_operator_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_operator_min_fields"')
      return partner_operator_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const partner_operator_mutation_response_possibleTypes: string[] = ['partner_operator_mutation_response']
    export const ispartner_operator_mutation_response = (obj?: { __typename?: any } | null): obj is partner_operator_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispartner_operator_mutation_response"')
      return partner_operator_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const payment_possibleTypes: string[] = ['payment']
    export const ispayment = (obj?: { __typename?: any } | null): obj is payment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment"')
      return payment_possibleTypes.includes(obj.__typename)
    }
    


    const payment_aggregate_possibleTypes: string[] = ['payment_aggregate']
    export const ispayment_aggregate = (obj?: { __typename?: any } | null): obj is payment_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_aggregate"')
      return payment_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const payment_aggregate_fields_possibleTypes: string[] = ['payment_aggregate_fields']
    export const ispayment_aggregate_fields = (obj?: { __typename?: any } | null): obj is payment_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_aggregate_fields"')
      return payment_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_avg_fields_possibleTypes: string[] = ['payment_avg_fields']
    export const ispayment_avg_fields = (obj?: { __typename?: any } | null): obj is payment_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_avg_fields"')
      return payment_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_max_fields_possibleTypes: string[] = ['payment_max_fields']
    export const ispayment_max_fields = (obj?: { __typename?: any } | null): obj is payment_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_max_fields"')
      return payment_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_min_fields_possibleTypes: string[] = ['payment_min_fields']
    export const ispayment_min_fields = (obj?: { __typename?: any } | null): obj is payment_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_min_fields"')
      return payment_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_mutation_response_possibleTypes: string[] = ['payment_mutation_response']
    export const ispayment_mutation_response = (obj?: { __typename?: any } | null): obj is payment_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_mutation_response"')
      return payment_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_possibleTypes: string[] = ['payment_review']
    export const ispayment_review = (obj?: { __typename?: any } | null): obj is payment_review => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review"')
      return payment_review_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_aggregate_possibleTypes: string[] = ['payment_review_aggregate']
    export const ispayment_review_aggregate = (obj?: { __typename?: any } | null): obj is payment_review_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_aggregate"')
      return payment_review_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_aggregate_fields_possibleTypes: string[] = ['payment_review_aggregate_fields']
    export const ispayment_review_aggregate_fields = (obj?: { __typename?: any } | null): obj is payment_review_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_aggregate_fields"')
      return payment_review_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_avg_fields_possibleTypes: string[] = ['payment_review_avg_fields']
    export const ispayment_review_avg_fields = (obj?: { __typename?: any } | null): obj is payment_review_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_avg_fields"')
      return payment_review_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_max_fields_possibleTypes: string[] = ['payment_review_max_fields']
    export const ispayment_review_max_fields = (obj?: { __typename?: any } | null): obj is payment_review_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_max_fields"')
      return payment_review_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_min_fields_possibleTypes: string[] = ['payment_review_min_fields']
    export const ispayment_review_min_fields = (obj?: { __typename?: any } | null): obj is payment_review_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_min_fields"')
      return payment_review_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_mutation_response_possibleTypes: string[] = ['payment_review_mutation_response']
    export const ispayment_review_mutation_response = (obj?: { __typename?: any } | null): obj is payment_review_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_mutation_response"')
      return payment_review_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_stddev_fields_possibleTypes: string[] = ['payment_review_stddev_fields']
    export const ispayment_review_stddev_fields = (obj?: { __typename?: any } | null): obj is payment_review_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_stddev_fields"')
      return payment_review_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_stddev_pop_fields_possibleTypes: string[] = ['payment_review_stddev_pop_fields']
    export const ispayment_review_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is payment_review_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_stddev_pop_fields"')
      return payment_review_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_stddev_samp_fields_possibleTypes: string[] = ['payment_review_stddev_samp_fields']
    export const ispayment_review_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is payment_review_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_stddev_samp_fields"')
      return payment_review_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_sum_fields_possibleTypes: string[] = ['payment_review_sum_fields']
    export const ispayment_review_sum_fields = (obj?: { __typename?: any } | null): obj is payment_review_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_sum_fields"')
      return payment_review_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_var_pop_fields_possibleTypes: string[] = ['payment_review_var_pop_fields']
    export const ispayment_review_var_pop_fields = (obj?: { __typename?: any } | null): obj is payment_review_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_var_pop_fields"')
      return payment_review_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_var_samp_fields_possibleTypes: string[] = ['payment_review_var_samp_fields']
    export const ispayment_review_var_samp_fields = (obj?: { __typename?: any } | null): obj is payment_review_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_var_samp_fields"')
      return payment_review_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_review_variance_fields_possibleTypes: string[] = ['payment_review_variance_fields']
    export const ispayment_review_variance_fields = (obj?: { __typename?: any } | null): obj is payment_review_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_review_variance_fields"')
      return payment_review_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_stddev_fields_possibleTypes: string[] = ['payment_stddev_fields']
    export const ispayment_stddev_fields = (obj?: { __typename?: any } | null): obj is payment_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_stddev_fields"')
      return payment_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_stddev_pop_fields_possibleTypes: string[] = ['payment_stddev_pop_fields']
    export const ispayment_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is payment_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_stddev_pop_fields"')
      return payment_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_stddev_samp_fields_possibleTypes: string[] = ['payment_stddev_samp_fields']
    export const ispayment_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is payment_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_stddev_samp_fields"')
      return payment_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_sum_fields_possibleTypes: string[] = ['payment_sum_fields']
    export const ispayment_sum_fields = (obj?: { __typename?: any } | null): obj is payment_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_sum_fields"')
      return payment_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_var_pop_fields_possibleTypes: string[] = ['payment_var_pop_fields']
    export const ispayment_var_pop_fields = (obj?: { __typename?: any } | null): obj is payment_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_var_pop_fields"')
      return payment_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_var_samp_fields_possibleTypes: string[] = ['payment_var_samp_fields']
    export const ispayment_var_samp_fields = (obj?: { __typename?: any } | null): obj is payment_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_var_samp_fields"')
      return payment_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const payment_variance_fields_possibleTypes: string[] = ['payment_variance_fields']
    export const ispayment_variance_fields = (obj?: { __typename?: any } | null): obj is payment_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispayment_variance_fields"')
      return payment_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_possibleTypes: string[] = ['period']
    export const isperiod = (obj?: { __typename?: any } | null): obj is period => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod"')
      return period_possibleTypes.includes(obj.__typename)
    }
    


    const period_aggregate_possibleTypes: string[] = ['period_aggregate']
    export const isperiod_aggregate = (obj?: { __typename?: any } | null): obj is period_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_aggregate"')
      return period_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const period_aggregate_fields_possibleTypes: string[] = ['period_aggregate_fields']
    export const isperiod_aggregate_fields = (obj?: { __typename?: any } | null): obj is period_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_aggregate_fields"')
      return period_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_avg_fields_possibleTypes: string[] = ['period_avg_fields']
    export const isperiod_avg_fields = (obj?: { __typename?: any } | null): obj is period_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_avg_fields"')
      return period_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_max_fields_possibleTypes: string[] = ['period_max_fields']
    export const isperiod_max_fields = (obj?: { __typename?: any } | null): obj is period_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_max_fields"')
      return period_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_min_fields_possibleTypes: string[] = ['period_min_fields']
    export const isperiod_min_fields = (obj?: { __typename?: any } | null): obj is period_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_min_fields"')
      return period_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_mutation_response_possibleTypes: string[] = ['period_mutation_response']
    export const isperiod_mutation_response = (obj?: { __typename?: any } | null): obj is period_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_mutation_response"')
      return period_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const period_stddev_fields_possibleTypes: string[] = ['period_stddev_fields']
    export const isperiod_stddev_fields = (obj?: { __typename?: any } | null): obj is period_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_stddev_fields"')
      return period_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_stddev_pop_fields_possibleTypes: string[] = ['period_stddev_pop_fields']
    export const isperiod_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is period_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_stddev_pop_fields"')
      return period_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_stddev_samp_fields_possibleTypes: string[] = ['period_stddev_samp_fields']
    export const isperiod_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is period_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_stddev_samp_fields"')
      return period_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_sum_fields_possibleTypes: string[] = ['period_sum_fields']
    export const isperiod_sum_fields = (obj?: { __typename?: any } | null): obj is period_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_sum_fields"')
      return period_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_var_pop_fields_possibleTypes: string[] = ['period_var_pop_fields']
    export const isperiod_var_pop_fields = (obj?: { __typename?: any } | null): obj is period_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_var_pop_fields"')
      return period_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_var_samp_fields_possibleTypes: string[] = ['period_var_samp_fields']
    export const isperiod_var_samp_fields = (obj?: { __typename?: any } | null): obj is period_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_var_samp_fields"')
      return period_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const period_variance_fields_possibleTypes: string[] = ['period_variance_fields']
    export const isperiod_variance_fields = (obj?: { __typename?: any } | null): obj is period_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isperiod_variance_fields"')
      return period_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const scheduled_event_possibleTypes: string[] = ['scheduled_event']
    export const isscheduled_event = (obj?: { __typename?: any } | null): obj is scheduled_event => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscheduled_event"')
      return scheduled_event_possibleTypes.includes(obj.__typename)
    }
    


    const scheduled_event_aggregate_possibleTypes: string[] = ['scheduled_event_aggregate']
    export const isscheduled_event_aggregate = (obj?: { __typename?: any } | null): obj is scheduled_event_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscheduled_event_aggregate"')
      return scheduled_event_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const scheduled_event_aggregate_fields_possibleTypes: string[] = ['scheduled_event_aggregate_fields']
    export const isscheduled_event_aggregate_fields = (obj?: { __typename?: any } | null): obj is scheduled_event_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscheduled_event_aggregate_fields"')
      return scheduled_event_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const scheduled_event_max_fields_possibleTypes: string[] = ['scheduled_event_max_fields']
    export const isscheduled_event_max_fields = (obj?: { __typename?: any } | null): obj is scheduled_event_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscheduled_event_max_fields"')
      return scheduled_event_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const scheduled_event_min_fields_possibleTypes: string[] = ['scheduled_event_min_fields']
    export const isscheduled_event_min_fields = (obj?: { __typename?: any } | null): obj is scheduled_event_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscheduled_event_min_fields"')
      return scheduled_event_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const scheduled_event_mutation_response_possibleTypes: string[] = ['scheduled_event_mutation_response']
    export const isscheduled_event_mutation_response = (obj?: { __typename?: any } | null): obj is scheduled_event_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscheduled_event_mutation_response"')
      return scheduled_event_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const state_cache_possibleTypes: string[] = ['state_cache']
    export const isstate_cache = (obj?: { __typename?: any } | null): obj is state_cache => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstate_cache"')
      return state_cache_possibleTypes.includes(obj.__typename)
    }
    


    const state_cache_aggregate_possibleTypes: string[] = ['state_cache_aggregate']
    export const isstate_cache_aggregate = (obj?: { __typename?: any } | null): obj is state_cache_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstate_cache_aggregate"')
      return state_cache_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const state_cache_aggregate_fields_possibleTypes: string[] = ['state_cache_aggregate_fields']
    export const isstate_cache_aggregate_fields = (obj?: { __typename?: any } | null): obj is state_cache_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstate_cache_aggregate_fields"')
      return state_cache_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const state_cache_max_fields_possibleTypes: string[] = ['state_cache_max_fields']
    export const isstate_cache_max_fields = (obj?: { __typename?: any } | null): obj is state_cache_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstate_cache_max_fields"')
      return state_cache_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const state_cache_min_fields_possibleTypes: string[] = ['state_cache_min_fields']
    export const isstate_cache_min_fields = (obj?: { __typename?: any } | null): obj is state_cache_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstate_cache_min_fields"')
      return state_cache_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const state_cache_mutation_response_possibleTypes: string[] = ['state_cache_mutation_response']
    export const isstate_cache_mutation_response = (obj?: { __typename?: any } | null): obj is state_cache_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstate_cache_mutation_response"')
      return state_cache_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_possibleTypes: string[] = ['storage_schema_migrations']
    export const isstorage_schema_migrations = (obj?: { __typename?: any } | null): obj is storage_schema_migrations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations"')
      return storage_schema_migrations_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_aggregate_possibleTypes: string[] = ['storage_schema_migrations_aggregate']
    export const isstorage_schema_migrations_aggregate = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_aggregate"')
      return storage_schema_migrations_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_aggregate_fields_possibleTypes: string[] = ['storage_schema_migrations_aggregate_fields']
    export const isstorage_schema_migrations_aggregate_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_aggregate_fields"')
      return storage_schema_migrations_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_avg_fields_possibleTypes: string[] = ['storage_schema_migrations_avg_fields']
    export const isstorage_schema_migrations_avg_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_avg_fields"')
      return storage_schema_migrations_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_max_fields_possibleTypes: string[] = ['storage_schema_migrations_max_fields']
    export const isstorage_schema_migrations_max_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_max_fields"')
      return storage_schema_migrations_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_min_fields_possibleTypes: string[] = ['storage_schema_migrations_min_fields']
    export const isstorage_schema_migrations_min_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_min_fields"')
      return storage_schema_migrations_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_mutation_response_possibleTypes: string[] = ['storage_schema_migrations_mutation_response']
    export const isstorage_schema_migrations_mutation_response = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_mutation_response"')
      return storage_schema_migrations_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_stddev_fields_possibleTypes: string[] = ['storage_schema_migrations_stddev_fields']
    export const isstorage_schema_migrations_stddev_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_stddev_fields"')
      return storage_schema_migrations_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_stddev_pop_fields_possibleTypes: string[] = ['storage_schema_migrations_stddev_pop_fields']
    export const isstorage_schema_migrations_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_stddev_pop_fields"')
      return storage_schema_migrations_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_stddev_samp_fields_possibleTypes: string[] = ['storage_schema_migrations_stddev_samp_fields']
    export const isstorage_schema_migrations_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_stddev_samp_fields"')
      return storage_schema_migrations_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_sum_fields_possibleTypes: string[] = ['storage_schema_migrations_sum_fields']
    export const isstorage_schema_migrations_sum_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_sum_fields"')
      return storage_schema_migrations_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_var_pop_fields_possibleTypes: string[] = ['storage_schema_migrations_var_pop_fields']
    export const isstorage_schema_migrations_var_pop_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_var_pop_fields"')
      return storage_schema_migrations_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_var_samp_fields_possibleTypes: string[] = ['storage_schema_migrations_var_samp_fields']
    export const isstorage_schema_migrations_var_samp_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_var_samp_fields"')
      return storage_schema_migrations_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const storage_schema_migrations_variance_fields_possibleTypes: string[] = ['storage_schema_migrations_variance_fields']
    export const isstorage_schema_migrations_variance_fields = (obj?: { __typename?: any } | null): obj is storage_schema_migrations_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstorage_schema_migrations_variance_fields"')
      return storage_schema_migrations_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    


    const user_profile_possibleTypes: string[] = ['user_profile']
    export const isuser_profile = (obj?: { __typename?: any } | null): obj is user_profile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_profile"')
      return user_profile_possibleTypes.includes(obj.__typename)
    }
    


    const user_profile_aggregate_possibleTypes: string[] = ['user_profile_aggregate']
    export const isuser_profile_aggregate = (obj?: { __typename?: any } | null): obj is user_profile_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_profile_aggregate"')
      return user_profile_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const user_profile_aggregate_fields_possibleTypes: string[] = ['user_profile_aggregate_fields']
    export const isuser_profile_aggregate_fields = (obj?: { __typename?: any } | null): obj is user_profile_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_profile_aggregate_fields"')
      return user_profile_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const user_profile_max_fields_possibleTypes: string[] = ['user_profile_max_fields']
    export const isuser_profile_max_fields = (obj?: { __typename?: any } | null): obj is user_profile_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_profile_max_fields"')
      return user_profile_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const user_profile_min_fields_possibleTypes: string[] = ['user_profile_min_fields']
    export const isuser_profile_min_fields = (obj?: { __typename?: any } | null): obj is user_profile_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_profile_min_fields"')
      return user_profile_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const user_profile_mutation_response_possibleTypes: string[] = ['user_profile_mutation_response']
    export const isuser_profile_mutation_response = (obj?: { __typename?: any } | null): obj is user_profile_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_profile_mutation_response"')
      return user_profile_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const users_possibleTypes: string[] = ['users']
    export const isusers = (obj?: { __typename?: any } | null): obj is users => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers"')
      return users_possibleTypes.includes(obj.__typename)
    }
    


    const users_aggregate_possibleTypes: string[] = ['users_aggregate']
    export const isusers_aggregate = (obj?: { __typename?: any } | null): obj is users_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_aggregate"')
      return users_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const users_aggregate_fields_possibleTypes: string[] = ['users_aggregate_fields']
    export const isusers_aggregate_fields = (obj?: { __typename?: any } | null): obj is users_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_aggregate_fields"')
      return users_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const users_max_fields_possibleTypes: string[] = ['users_max_fields']
    export const isusers_max_fields = (obj?: { __typename?: any } | null): obj is users_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_max_fields"')
      return users_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const users_min_fields_possibleTypes: string[] = ['users_min_fields']
    export const isusers_min_fields = (obj?: { __typename?: any } | null): obj is users_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_min_fields"')
      return users_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const users_mutation_response_possibleTypes: string[] = ['users_mutation_response']
    export const isusers_mutation_response = (obj?: { __typename?: any } | null): obj is users_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_mutation_response"')
      return users_mutation_response_possibleTypes.includes(obj.__typename)
    }
    

export const enumPaymentStatus = {
   Cancelled: 'Cancelled' as const,
   Cancelled_Partially: 'Cancelled_Partially' as const,
   Completed: 'Completed' as const,
   Failed: 'Failed' as const,
   In_transit: 'In_transit' as const,
   Pending: 'Pending' as const,
   Processing: 'Processing' as const,
   Rejected: 'Rejected' as const,
   Success_hold: 'Success_hold' as const
}

export const enumPaymentType = {
   MoneyIn: 'MoneyIn' as const,
   MoneyOut: 'MoneyOut' as const
}

export const enumRecurrency = {
   Daily: 'Daily' as const,
   Monthly: 'Monthly' as const,
   Weekly: 'Weekly' as const
}

export const enumReportStatus = {
   Failure: 'Failure' as const,
   InProgress: 'InProgress' as const,
   Success: 'Success' as const
}

export const enumAuthProviderRequestsConstraint = {
   provider_requests_pkey: 'provider_requests_pkey' as const
}

export const enumAuthProviderRequestsSelectColumn = {
   id: 'id' as const,
   options: 'options' as const
}

export const enumAuthProviderRequestsUpdateColumn = {
   id: 'id' as const,
   options: 'options' as const
}

export const enumAuthProvidersConstraint = {
   providers_pkey: 'providers_pkey' as const
}

export const enumAuthProvidersSelectColumn = {
   id: 'id' as const
}

export const enumAuthProvidersUpdateColumn = {
   id: 'id' as const
}

export const enumAuthRefreshTokenTypesConstraint = {
   refresh_token_types_pkey: 'refresh_token_types_pkey' as const
}

export const enumAuthRefreshTokenTypesEnum = {
   pat: 'pat' as const,
   regular: 'regular' as const
}

export const enumAuthRefreshTokenTypesSelectColumn = {
   comment: 'comment' as const,
   value: 'value' as const
}

export const enumAuthRefreshTokenTypesUpdateColumn = {
   comment: 'comment' as const,
   value: 'value' as const
}

export const enumAuthRefreshTokensConstraint = {
   refresh_tokens_pkey: 'refresh_tokens_pkey' as const
}

export const enumAuthRefreshTokensSelectColumn = {
   createdAt: 'createdAt' as const,
   expiresAt: 'expiresAt' as const,
   id: 'id' as const,
   metadata: 'metadata' as const,
   refreshTokenHash: 'refreshTokenHash' as const,
   type: 'type' as const,
   userId: 'userId' as const
}

export const enumAuthRefreshTokensUpdateColumn = {
   createdAt: 'createdAt' as const,
   expiresAt: 'expiresAt' as const,
   id: 'id' as const,
   metadata: 'metadata' as const,
   refreshTokenHash: 'refreshTokenHash' as const,
   type: 'type' as const,
   userId: 'userId' as const
}

export const enumAuthRolesConstraint = {
   roles_pkey: 'roles_pkey' as const
}

export const enumAuthRolesSelectColumn = {
   role: 'role' as const
}

export const enumAuthRolesUpdateColumn = {
   role: 'role' as const
}

export const enumAuthUserProvidersConstraint = {
   user_providers_pkey: 'user_providers_pkey' as const,
   user_providers_provider_id_provider_user_id_key: 'user_providers_provider_id_provider_user_id_key' as const,
   user_providers_user_id_provider_id_key: 'user_providers_user_id_provider_id_key' as const
}

export const enumAuthUserProvidersSelectColumn = {
   accessToken: 'accessToken' as const,
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   providerId: 'providerId' as const,
   providerUserId: 'providerUserId' as const,
   refreshToken: 'refreshToken' as const,
   updatedAt: 'updatedAt' as const,
   userId: 'userId' as const
}

export const enumAuthUserProvidersUpdateColumn = {
   accessToken: 'accessToken' as const,
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   providerId: 'providerId' as const,
   providerUserId: 'providerUserId' as const,
   refreshToken: 'refreshToken' as const,
   updatedAt: 'updatedAt' as const,
   userId: 'userId' as const
}

export const enumAuthUserRolesConstraint = {
   user_roles_pkey: 'user_roles_pkey' as const,
   user_roles_user_id_role_key: 'user_roles_user_id_role_key' as const
}

export const enumAuthUserRolesSelectColumn = {
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   role: 'role' as const,
   userId: 'userId' as const
}

export const enumAuthUserRolesUpdateColumn = {
   createdAt: 'createdAt' as const,
   id: 'id' as const,
   role: 'role' as const,
   userId: 'userId' as const
}

export const enumAuthUserSecurityKeysConstraint = {
   user_security_key_credential_id_key: 'user_security_key_credential_id_key' as const,
   user_security_keys_pkey: 'user_security_keys_pkey' as const
}

export const enumAuthUserSecurityKeysSelectColumn = {
   counter: 'counter' as const,
   credentialId: 'credentialId' as const,
   credentialPublicKey: 'credentialPublicKey' as const,
   id: 'id' as const,
   nickname: 'nickname' as const,
   transports: 'transports' as const,
   userId: 'userId' as const
}

export const enumAuthUserSecurityKeysUpdateColumn = {
   counter: 'counter' as const,
   credentialId: 'credentialId' as const,
   credentialPublicKey: 'credentialPublicKey' as const,
   id: 'id' as const,
   nickname: 'nickname' as const,
   transports: 'transports' as const,
   userId: 'userId' as const
}

export const enumAuthMigrationsConstraint = {
   migrations_name_key: 'migrations_name_key' as const,
   migrations_pkey: 'migrations_pkey' as const
}

export const enumAuthMigrationsSelectColumn = {
   executed_at: 'executed_at' as const,
   hash: 'hash' as const,
   id: 'id' as const,
   name: 'name' as const
}

export const enumAuthMigrationsUpdateColumn = {
   executed_at: 'executed_at' as const,
   hash: 'hash' as const,
   id: 'id' as const,
   name: 'name' as const
}

export const enumBucketsConstraint = {
   buckets_pkey: 'buckets_pkey' as const
}

export const enumBucketsSelectColumn = {
   cacheControl: 'cacheControl' as const,
   createdAt: 'createdAt' as const,
   downloadExpiration: 'downloadExpiration' as const,
   id: 'id' as const,
   maxUploadFileSize: 'maxUploadFileSize' as const,
   minUploadFileSize: 'minUploadFileSize' as const,
   presignedUrlsEnabled: 'presignedUrlsEnabled' as const,
   updatedAt: 'updatedAt' as const
}

export const enumBucketsUpdateColumn = {
   cacheControl: 'cacheControl' as const,
   createdAt: 'createdAt' as const,
   downloadExpiration: 'downloadExpiration' as const,
   id: 'id' as const,
   maxUploadFileSize: 'maxUploadFileSize' as const,
   minUploadFileSize: 'minUploadFileSize' as const,
   presignedUrlsEnabled: 'presignedUrlsEnabled' as const,
   updatedAt: 'updatedAt' as const
}

export const enumCampaignFileConstraint = {
   campaign_file_partner_id_campaign_id_file_id_key: 'campaign_file_partner_id_campaign_id_file_id_key' as const,
   campaign_file_pkey: 'campaign_file_pkey' as const
}

export const enumCampaignFileSelectColumn = {
   campaign_id: 'campaign_id' as const,
   created_at: 'created_at' as const,
   file_id: 'file_id' as const,
   id: 'id' as const,
   partner_id: 'partner_id' as const,
   updated_at: 'updated_at' as const
}

export const enumCampaignFileUpdateColumn = {
   campaign_id: 'campaign_id' as const,
   created_at: 'created_at' as const,
   file_id: 'file_id' as const,
   id: 'id' as const,
   partner_id: 'partner_id' as const,
   updated_at: 'updated_at' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumEnCurrenciesConstraint = {
   en_currencies_pkey: 'en_currencies_pkey' as const
}

export const enumEnCurrenciesEnum = {
   CFD: 'CFD' as const,
   USD: 'USD' as const
}

export const enumEnCurrenciesSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnCurrenciesUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnNotificationsConstraint = {
   enum_notifications_pkey: 'enum_notifications_pkey' as const
}

export const enumEnNotificationsEnum = {
   internal: 'internal' as const,
   member_invitation: 'member_invitation' as const,
   member_joined: 'member_joined' as const,
   payment_reminder: 'payment_reminder' as const,
   payment_review: 'payment_review' as const,
   period_completion: 'period_completion' as const,
   whatsapp: 'whatsapp' as const
}

export const enumEnNotificationsSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnNotificationsUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnPartnerStepsConstraint = {
   en_partner_steps_pkey: 'en_partner_steps_pkey' as const
}

export const enumEnPartnerStepsEnum = {
   activated: 'activated' as const,
   activation: 'activation' as const,
   created: 'created' as const,
   document_verification: 'document_verification' as const,
   funds_destination: 'funds_destination' as const,
   operators_creation: 'operators_creation' as const
}

export const enumEnPartnerStepsSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnPartnerStepsUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnPaymentProvidersConstraint = {
   payment_providers_pkey: 'payment_providers_pkey' as const
}

export const enumEnPaymentProvidersEnum = {
   AFRICELL_CD: 'AFRICELL_CD' as const,
   AIRTEL_CD: 'AIRTEL_CD' as const,
   AIRTEL_KEY: 'AIRTEL_KEY' as const,
   ECOBANK_CD: 'ECOBANK_CD' as const,
   ECOCASH_BI: 'ECOCASH_BI' as const,
   EQUITY_CD: 'EQUITY_CD' as const,
   LUMICAHS_BI: 'LUMICAHS_BI' as const,
   ORANGE_MONEY_CD: 'ORANGE_MONEY_CD' as const,
   SAFARICOM_KE: 'SAFARICOM_KE' as const,
   UNIPESA_GATEWAY: 'UNIPESA_GATEWAY' as const,
   UNIPESA_SIM: 'UNIPESA_SIM' as const,
   VODACOM_CD: 'VODACOM_CD' as const
}

export const enumEnPaymentProvidersSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnPaymentProvidersUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnPermissionsConstraint = {
   en_permissions_pkey: 'en_permissions_pkey' as const
}

export const enumEnPermissionsEnum = {
   Accepted: 'Accepted' as const,
   Pending: 'Pending' as const,
   Rejected: 'Rejected' as const
}

export const enumEnPermissionsSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnPermissionsUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnRecurrenciesConstraint = {
   enum_period_recurrency_description_key: 'enum_period_recurrency_description_key' as const,
   enum_period_recurrency_pkey: 'enum_period_recurrency_pkey' as const
}

export const enumEnRecurrenciesEnum = {
   Daily: 'Daily' as const,
   Monthly: 'Monthly' as const,
   Weekly: 'Weekly' as const
}

export const enumEnRecurrenciesSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnRecurrenciesUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnStatusesConstraint = {
   enum_statuses_description_key: 'enum_statuses_description_key' as const,
   enum_statuses_pkey: 'enum_statuses_pkey' as const
}

export const enumEnStatusesEnum = {
   Cancelled: 'Cancelled' as const,
   Cancelled_Partially: 'Cancelled_Partially' as const,
   Completed: 'Completed' as const,
   Failed: 'Failed' as const,
   In_transit: 'In_transit' as const,
   Pending: 'Pending' as const,
   Processing: 'Processing' as const,
   Rejected: 'Rejected' as const,
   Success_hold: 'Success_hold' as const
}

export const enumEnStatusesSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnStatusesUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnTransTypesConstraint = {
   enum_trans_statuses_pkey: 'enum_trans_statuses_pkey' as const
}

export const enumEnTransTypesEnum = {
   MoneyIn: 'MoneyIn' as const,
   MoneyOut: 'MoneyOut' as const
}

export const enumEnTransTypesSelectColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumEnTransTypesUpdateColumn = {
   description: 'description' as const,
   value: 'value' as const
}

export const enumFilesConstraint = {
   files_pkey: 'files_pkey' as const
}

export const enumFilesSelectColumn = {
   bucketId: 'bucketId' as const,
   createdAt: 'createdAt' as const,
   etag: 'etag' as const,
   id: 'id' as const,
   isUploaded: 'isUploaded' as const,
   mimeType: 'mimeType' as const,
   name: 'name' as const,
   size: 'size' as const,
   updatedAt: 'updatedAt' as const,
   uploadedByUserId: 'uploadedByUserId' as const
}

export const enumFilesSelectColumnFilesAggregateBoolExpBoolAndArgumentsColumns = {
   isUploaded: 'isUploaded' as const
}

export const enumFilesSelectColumnFilesAggregateBoolExpBoolOrArgumentsColumns = {
   isUploaded: 'isUploaded' as const
}

export const enumFilesUpdateColumn = {
   bucketId: 'bucketId' as const,
   createdAt: 'createdAt' as const,
   etag: 'etag' as const,
   id: 'id' as const,
   isUploaded: 'isUploaded' as const,
   mimeType: 'mimeType' as const,
   name: 'name' as const,
   size: 'size' as const,
   updatedAt: 'updatedAt' as const,
   uploadedByUserId: 'uploadedByUserId' as const
}

export const enumGroupConstraint = {
   group_admin_id_group_name_key: 'group_admin_id_group_name_key' as const,
   group_group_name_partner_id_key: 'group_group_name_partner_id_key' as const,
   group_pkey: 'group_pkey' as const
}

export const enumGroupSelectColumn = {
   admin_id: 'admin_id' as const,
   contribution: 'contribution' as const,
   contribution_for_all: 'contribution_for_all' as const,
   created_at: 'created_at' as const,
   dummy: 'dummy' as const,
   dummy_2: 'dummy_2' as const,
   group_name: 'group_name' as const,
   id: 'id' as const,
   partner_campaign_id: 'partner_campaign_id' as const,
   partner_id: 'partner_id' as const,
   recurrency: 'recurrency' as const,
   recurrency_day: 'recurrency_day' as const,
   recurrency_for_all: 'recurrency_for_all' as const,
   updated_at: 'updated_at' as const
}

export const enumGroupSelectColumnGroupAggregateBoolExpBoolAndArgumentsColumns = {
   contribution_for_all: 'contribution_for_all' as const,
   recurrency_for_all: 'recurrency_for_all' as const
}

export const enumGroupSelectColumnGroupAggregateBoolExpBoolOrArgumentsColumns = {
   contribution_for_all: 'contribution_for_all' as const,
   recurrency_for_all: 'recurrency_for_all' as const
}

export const enumGroupUpdateColumn = {
   admin_id: 'admin_id' as const,
   contribution: 'contribution' as const,
   contribution_for_all: 'contribution_for_all' as const,
   created_at: 'created_at' as const,
   dummy: 'dummy' as const,
   dummy_2: 'dummy_2' as const,
   group_name: 'group_name' as const,
   id: 'id' as const,
   partner_campaign_id: 'partner_campaign_id' as const,
   partner_id: 'partner_id' as const,
   recurrency: 'recurrency' as const,
   recurrency_day: 'recurrency_day' as const,
   recurrency_for_all: 'recurrency_for_all' as const,
   updated_at: 'updated_at' as const
}

export const enumInvitationConstraint = {
   invite_pkey: 'invite_pkey' as const
}

export const enumInvitationSelectColumn = {
   created_at: 'created_at' as const,
   dummy: 'dummy' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   invite_status: 'invite_status' as const,
   invite_type: 'invite_type' as const,
   receiver_id: 'receiver_id' as const,
   receiver_phone: 'receiver_phone' as const,
   sender_id: 'sender_id' as const,
   updated_at: 'updated_at' as const
}

export const enumInvitationUpdateColumn = {
   created_at: 'created_at' as const,
   dummy: 'dummy' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   invite_status: 'invite_status' as const,
   invite_type: 'invite_type' as const,
   receiver_id: 'receiver_id' as const,
   receiver_phone: 'receiver_phone' as const,
   sender_id: 'sender_id' as const,
   updated_at: 'updated_at' as const
}

export const enumMemberConstraint = {
   member_group_id_user_id_key: 'member_group_id_user_id_key' as const,
   member_pkey: 'member_pkey' as const
}

export const enumMemberSelectColumn = {
   contribution: 'contribution' as const,
   created_at: 'created_at' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   invitation_id: 'invitation_id' as const,
   recurrency: 'recurrency' as const,
   recurrency_day: 'recurrency_day' as const,
   reminder_days: 'reminder_days' as const,
   reminder_id: 'reminder_id' as const,
   reminder_next: 'reminder_next' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const
}

export const enumMemberUpdateColumn = {
   contribution: 'contribution' as const,
   created_at: 'created_at' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   invitation_id: 'invitation_id' as const,
   recurrency: 'recurrency' as const,
   recurrency_day: 'recurrency_day' as const,
   reminder_days: 'reminder_days' as const,
   reminder_id: 'reminder_id' as const,
   reminder_next: 'reminder_next' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const
}

export const enumNotificationConstraint = {
   notification_pkey: 'notification_pkey' as const
}

export const enumNotificationItemConstraint = {
   notification_item_pkey: 'notification_item_pkey' as const
}

export const enumNotificationItemSelectColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   notification_id: 'notification_id' as const,
   notification_message: 'notification_message' as const,
   notification_title: 'notification_title' as const,
   period_id: 'period_id' as const,
   seen: 'seen' as const,
   updated_at: 'updated_at' as const
}

export const enumNotificationItemSelectColumnNotificationItemAggregateBoolExpBoolAndArgumentsColumns = {
   seen: 'seen' as const
}

export const enumNotificationItemSelectColumnNotificationItemAggregateBoolExpBoolOrArgumentsColumns = {
   seen: 'seen' as const
}

export const enumNotificationItemUpdateColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   notification_id: 'notification_id' as const,
   notification_message: 'notification_message' as const,
   notification_title: 'notification_title' as const,
   period_id: 'period_id' as const,
   seen: 'seen' as const,
   updated_at: 'updated_at' as const
}

export const enumNotificationSelectColumn = {
   created_at: 'created_at' as const,
   data: 'data' as const,
   id: 'id' as const,
   invitation_id: 'invitation_id' as const,
   message: 'message' as const,
   notifiable: 'notifiable' as const,
   payment_review_id: 'payment_review_id' as const,
   status: 'status' as const,
   title: 'title' as const,
   type: 'type' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const,
   viewed: 'viewed' as const
}

export const enumNotificationSelectColumnNotificationAggregateBoolExpBoolAndArgumentsColumns = {
   notifiable: 'notifiable' as const,
   viewed: 'viewed' as const
}

export const enumNotificationSelectColumnNotificationAggregateBoolExpBoolOrArgumentsColumns = {
   notifiable: 'notifiable' as const,
   viewed: 'viewed' as const
}

export const enumNotificationUpdateColumn = {
   created_at: 'created_at' as const,
   data: 'data' as const,
   id: 'id' as const,
   invitation_id: 'invitation_id' as const,
   message: 'message' as const,
   notifiable: 'notifiable' as const,
   payment_review_id: 'payment_review_id' as const,
   status: 'status' as const,
   title: 'title' as const,
   type: 'type' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const,
   viewed: 'viewed' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumPartnerCampaignConstraint = {
   partner_campaign_partner_id_campaign_title_key: 'partner_campaign_partner_id_campaign_title_key' as const,
   partner_campaign_pkey: 'partner_campaign_pkey' as const
}

export const enumPartnerCampaignSelectColumn = {
   active: 'active' as const,
   campaign_code: 'campaign_code' as const,
   campaign_description: 'campaign_description' as const,
   campaign_ending_date: 'campaign_ending_date' as const,
   campaign_starting_date: 'campaign_starting_date' as const,
   campaign_title: 'campaign_title' as const,
   contribution_amount: 'contribution_amount' as const,
   created_at: 'created_at' as const,
   id: 'id' as const,
   partner_id: 'partner_id' as const,
   updated_at: 'updated_at' as const
}

export const enumPartnerCampaignSelectColumnPartnerCampaignAggregateBoolExpBoolAndArgumentsColumns = {
   active: 'active' as const
}

export const enumPartnerCampaignSelectColumnPartnerCampaignAggregateBoolExpBoolOrArgumentsColumns = {
   active: 'active' as const
}

export const enumPartnerCampaignUpdateColumn = {
   active: 'active' as const,
   campaign_code: 'campaign_code' as const,
   campaign_description: 'campaign_description' as const,
   campaign_ending_date: 'campaign_ending_date' as const,
   campaign_starting_date: 'campaign_starting_date' as const,
   campaign_title: 'campaign_title' as const,
   contribution_amount: 'contribution_amount' as const,
   created_at: 'created_at' as const,
   id: 'id' as const,
   partner_id: 'partner_id' as const,
   updated_at: 'updated_at' as const
}

export const enumPartnerConstraint = {
   partner_partner_name_key: 'partner_partner_name_key' as const,
   partner_pkey: 'partner_pkey' as const
}

export const enumPartnerFileConstraint = {
   partner_file_pkey: 'partner_file_pkey' as const
}

export const enumPartnerFileSelectColumn = {
   created_at: 'created_at' as const,
   file_id: 'file_id' as const,
   id: 'id' as const,
   partner_id: 'partner_id' as const,
   updated_at: 'updated_at' as const
}

export const enumPartnerFileUpdateColumn = {
   created_at: 'created_at' as const,
   file_id: 'file_id' as const,
   id: 'id' as const,
   partner_id: 'partner_id' as const,
   updated_at: 'updated_at' as const
}

export const enumPartnerOperatorConstraint = {
   partner_operator_partnerid_userid_key: 'partner_operator_partnerid_userid_key' as const,
   partner_operator_pkey: 'partner_operator_pkey' as const
}

export const enumPartnerOperatorSelectColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   partnerid: 'partnerid' as const,
   updated_at: 'updated_at' as const,
   userid: 'userid' as const
}

export const enumPartnerOperatorUpdateColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   partnerid: 'partnerid' as const,
   updated_at: 'updated_at' as const,
   userid: 'userid' as const
}

export const enumPartnerSelectColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   partner_address: 'partner_address' as const,
   partner_description: 'partner_description' as const,
   partner_email: 'partner_email' as const,
   partner_name: 'partner_name' as const,
   partner_phone: 'partner_phone' as const,
   partner_step: 'partner_step' as const,
   updated_at: 'updated_at' as const
}

export const enumPartnerUpdateColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   partner_address: 'partner_address' as const,
   partner_description: 'partner_description' as const,
   partner_email: 'partner_email' as const,
   partner_name: 'partner_name' as const,
   partner_phone: 'partner_phone' as const,
   partner_step: 'partner_step' as const,
   updated_at: 'updated_at' as const
}

export const enumPaymentConstraint = {
   payment_pkey: 'payment_pkey' as const
}

export const enumPaymentReviewConstraint = {
   payment_permission_pkey: 'payment_permission_pkey' as const
}

export const enumPaymentReviewSelectColumn = {
   created_at: 'created_at' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   index: 'index' as const,
   notes: 'notes' as const,
   payment_id: 'payment_id' as const,
   period_id: 'period_id' as const,
   requester_id: 'requester_id' as const,
   response: 'response' as const,
   reviewer_id: 'reviewer_id' as const,
   updated_at: 'updated_at' as const
}

export const enumPaymentReviewUpdateColumn = {
   created_at: 'created_at' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   index: 'index' as const,
   notes: 'notes' as const,
   payment_id: 'payment_id' as const,
   period_id: 'period_id' as const,
   requester_id: 'requester_id' as const,
   response: 'response' as const,
   reviewer_id: 'reviewer_id' as const,
   updated_at: 'updated_at' as const
}

export const enumPaymentSelectColumn = {
   amount: 'amount' as const,
   cardinfo: 'cardinfo' as const,
   created_at: 'created_at' as const,
   customer_id: 'customer_id' as const,
   dest_customer_name: 'dest_customer_name' as const,
   dest_customer_phone: 'dest_customer_phone' as const,
   from_ci: 'from_ci' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   member_id: 'member_id' as const,
   narration: 'narration' as const,
   operation_exception: 'operation_exception' as const,
   order_id: 'order_id' as const,
   payload_gateway: 'payload_gateway' as const,
   payload_request: 'payload_request' as const,
   payload_response: 'payload_response' as const,
   payment_currency: 'payment_currency' as const,
   payment_provider_id: 'payment_provider_id' as const,
   period_id: 'period_id' as const,
   scheduled_at: 'scheduled_at' as const,
   source_customer_name: 'source_customer_name' as const,
   source_customer_phone: 'source_customer_phone' as const,
   temp: 'temp' as const,
   transaction_status: 'transaction_status' as const,
   transaction_type: 'transaction_type' as const,
   updated_at: 'updated_at' as const
}

export const enumPaymentSelectColumnPaymentAggregateBoolExpBoolAndArgumentsColumns = {
   from_ci: 'from_ci' as const
}

export const enumPaymentSelectColumnPaymentAggregateBoolExpBoolOrArgumentsColumns = {
   from_ci: 'from_ci' as const
}

export const enumPaymentUpdateColumn = {
   amount: 'amount' as const,
   cardinfo: 'cardinfo' as const,
   created_at: 'created_at' as const,
   customer_id: 'customer_id' as const,
   dest_customer_name: 'dest_customer_name' as const,
   dest_customer_phone: 'dest_customer_phone' as const,
   from_ci: 'from_ci' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   member_id: 'member_id' as const,
   narration: 'narration' as const,
   operation_exception: 'operation_exception' as const,
   order_id: 'order_id' as const,
   payload_gateway: 'payload_gateway' as const,
   payload_request: 'payload_request' as const,
   payload_response: 'payload_response' as const,
   payment_currency: 'payment_currency' as const,
   payment_provider_id: 'payment_provider_id' as const,
   period_id: 'period_id' as const,
   scheduled_at: 'scheduled_at' as const,
   source_customer_name: 'source_customer_name' as const,
   source_customer_phone: 'source_customer_phone' as const,
   temp: 'temp' as const,
   transaction_status: 'transaction_status' as const,
   transaction_type: 'transaction_type' as const,
   updated_at: 'updated_at' as const
}

export const enumPeriodConstraint = {
   period_group_id_member_id_period_index_key: 'period_group_id_member_id_period_index_key' as const,
   period_pkey: 'period_pkey' as const
}

export const enumPeriodSelectColumn = {
   completed_at: 'completed_at' as const,
   created_at: 'created_at' as const,
   event_id: 'event_id' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   member_id: 'member_id' as const,
   period_index: 'period_index' as const,
   processed: 'processed' as const,
   reminder_index: 'reminder_index' as const,
   updated_at: 'updated_at' as const
}

export const enumPeriodSelectColumnPeriodAggregateBoolExpBoolAndArgumentsColumns = {
   processed: 'processed' as const
}

export const enumPeriodSelectColumnPeriodAggregateBoolExpBoolOrArgumentsColumns = {
   processed: 'processed' as const
}

export const enumPeriodUpdateColumn = {
   completed_at: 'completed_at' as const,
   created_at: 'created_at' as const,
   event_id: 'event_id' as const,
   group_id: 'group_id' as const,
   id: 'id' as const,
   member_id: 'member_id' as const,
   period_index: 'period_index' as const,
   processed: 'processed' as const,
   reminder_index: 'reminder_index' as const,
   updated_at: 'updated_at' as const
}

export const enumScheduledEventConstraint = {
   scheduled_events_pkey: 'scheduled_events_pkey' as const
}

export const enumScheduledEventSelectColumn = {
   created_at: 'created_at' as const,
   event_id: 'event_id' as const,
   id: 'id' as const,
   period_ids: 'period_ids' as const,
   scheduled_at: 'scheduled_at' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const
}

export const enumScheduledEventUpdateColumn = {
   created_at: 'created_at' as const,
   event_id: 'event_id' as const,
   id: 'id' as const,
   period_ids: 'period_ids' as const,
   scheduled_at: 'scheduled_at' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const
}

export const enumStateCacheConstraint = {
   state_cache_pkey: 'state_cache_pkey' as const
}

export const enumStateCacheSelectColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   ref_id: 'ref_id' as const,
   state: 'state' as const,
   updated_at: 'updated_at' as const
}

export const enumStateCacheUpdateColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   ref_id: 'ref_id' as const,
   state: 'state' as const,
   updated_at: 'updated_at' as const
}

export const enumStorageSchemaMigrationsConstraint = {
   schema_migrations_pkey: 'schema_migrations_pkey' as const
}

export const enumStorageSchemaMigrationsSelectColumn = {
   dirty: 'dirty' as const,
   version: 'version' as const
}

export const enumStorageSchemaMigrationsUpdateColumn = {
   dirty: 'dirty' as const,
   version: 'version' as const
}

export const enumUserProfileConstraint = {
   user_profile_pkey: 'user_profile_pkey' as const,
   user_profile_user_id_key: 'user_profile_user_id_key' as const
}

export const enumUserProfileSelectColumn = {
   clerk_id: 'clerk_id' as const,
   country_code: 'country_code' as const,
   created_at: 'created_at' as const,
   expo_push_token: 'expo_push_token' as const,
   from_ci: 'from_ci' as const,
   from_ussd: 'from_ussd' as const,
   has_email: 'has_email' as const,
   id: 'id' as const,
   invitation_url: 'invitation_url' as const,
   personal_access_token: 'personal_access_token' as const,
   personal_access_token_expires_at: 'personal_access_token_expires_at' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const
}

export const enumUserProfileUpdateColumn = {
   clerk_id: 'clerk_id' as const,
   country_code: 'country_code' as const,
   created_at: 'created_at' as const,
   expo_push_token: 'expo_push_token' as const,
   from_ci: 'from_ci' as const,
   from_ussd: 'from_ussd' as const,
   has_email: 'has_email' as const,
   id: 'id' as const,
   invitation_url: 'invitation_url' as const,
   personal_access_token: 'personal_access_token' as const,
   personal_access_token_expires_at: 'personal_access_token_expires_at' as const,
   updated_at: 'updated_at' as const,
   user_id: 'user_id' as const
}

export const enumUsersConstraint = {
   users_email_key: 'users_email_key' as const,
   users_phone_number_key: 'users_phone_number_key' as const,
   users_pkey: 'users_pkey' as const
}

export const enumUsersSelectColumn = {
   activeMfaType: 'activeMfaType' as const,
   avatarUrl: 'avatarUrl' as const,
   createdAt: 'createdAt' as const,
   currentChallenge: 'currentChallenge' as const,
   defaultRole: 'defaultRole' as const,
   disabled: 'disabled' as const,
   displayName: 'displayName' as const,
   email: 'email' as const,
   emailVerified: 'emailVerified' as const,
   id: 'id' as const,
   isAnonymous: 'isAnonymous' as const,
   lastSeen: 'lastSeen' as const,
   locale: 'locale' as const,
   metadata: 'metadata' as const,
   newEmail: 'newEmail' as const,
   otpHash: 'otpHash' as const,
   otpHashExpiresAt: 'otpHashExpiresAt' as const,
   otpMethodLastUsed: 'otpMethodLastUsed' as const,
   passwordHash: 'passwordHash' as const,
   phoneNumber: 'phoneNumber' as const,
   phoneNumberVerified: 'phoneNumberVerified' as const,
   ticket: 'ticket' as const,
   ticketExpiresAt: 'ticketExpiresAt' as const,
   totpSecret: 'totpSecret' as const,
   updatedAt: 'updatedAt' as const
}

export const enumUsersSelectColumnUsersAggregateBoolExpBoolAndArgumentsColumns = {
   disabled: 'disabled' as const,
   emailVerified: 'emailVerified' as const,
   isAnonymous: 'isAnonymous' as const,
   phoneNumberVerified: 'phoneNumberVerified' as const
}

export const enumUsersSelectColumnUsersAggregateBoolExpBoolOrArgumentsColumns = {
   disabled: 'disabled' as const,
   emailVerified: 'emailVerified' as const,
   isAnonymous: 'isAnonymous' as const,
   phoneNumberVerified: 'phoneNumberVerified' as const
}

export const enumUsersUpdateColumn = {
   activeMfaType: 'activeMfaType' as const,
   avatarUrl: 'avatarUrl' as const,
   createdAt: 'createdAt' as const,
   currentChallenge: 'currentChallenge' as const,
   defaultRole: 'defaultRole' as const,
   disabled: 'disabled' as const,
   displayName: 'displayName' as const,
   email: 'email' as const,
   emailVerified: 'emailVerified' as const,
   id: 'id' as const,
   isAnonymous: 'isAnonymous' as const,
   lastSeen: 'lastSeen' as const,
   locale: 'locale' as const,
   metadata: 'metadata' as const,
   newEmail: 'newEmail' as const,
   otpHash: 'otpHash' as const,
   otpHashExpiresAt: 'otpHashExpiresAt' as const,
   otpMethodLastUsed: 'otpMethodLastUsed' as const,
   passwordHash: 'passwordHash' as const,
   phoneNumber: 'phoneNumber' as const,
   phoneNumberVerified: 'phoneNumberVerified' as const,
   ticket: 'ticket' as const,
   ticketExpiresAt: 'ticketExpiresAt' as const,
   totpSecret: 'totpSecret' as const,
   updatedAt: 'updatedAt' as const
}
