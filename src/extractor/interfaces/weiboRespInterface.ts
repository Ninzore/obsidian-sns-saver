interface WeiboBase {
    visible: Visible;
    created_at: string;
    id: number;
    idstr: string;
    mid: string;
    can_edit: boolean;
    show_additional_indication: number;
    text: string;
    longText?: LongText;
    source_allowclick: number;
    source_type: number;
    source: string;
    appid: number;
    favorited: boolean;
    truncated: boolean;
    in_reply_to_status_id: string;
    in_reply_to_user_id: string;
    in_reply_to_screen_name: string;
    pic_ids: any[];
    pic_types: string;
    is_paid: boolean;
    mblog_vip_type: number;
    user: User;
    annotations: Annotation[];
    reposts_count: number;
    comments_count: number;
    reprint_cmt_count: number;
    attitudes_count: number;
    pending_approval_count: number;
    isLongText: boolean;
    reward_exhibition_type: number;
    reward_scheme: string;
    show_mlevel: number;
    biz_feature: number;
    hasActionTypeCard: number;
    ad_marked: boolean;
    mblogtype: number;
    item_category: string;
    rid: string;
    userType: number;
    more_info_type: number;
    cardid: string;
    extern_safe: number;
    number_display_strategy: NumberDisplayStrategy;
    positive_recom_flag: number;
    enable_comment_guide: boolean;
    content_auth: number;
    gif_ids: string;
    is_show_bulletin: number;
    comment_manage_info: CommentManageInfo;
    repost_type: number;
    pic_num: number;
    alchemy_params: AlchemyParams;
    hot_page: HotPage;
    can_reprint: boolean;
    new_comment_style: number;
    author_type: number;
    ab_switcher: number;
    mlevel: number;
    region_name: string;
    region_opt: number;
    hide_flag: number;
    pic_infos?: PicInfos;
    mblogtypename: string;
    mblogid: string;
    scheme: string;
    attitudes_status: number;
    recom_state: number;
    weibo_position: number;
    show_attitude_bar: number;
    edit_config: EditConfig;
    is_fold: number;
    readtimetype: string;
    analysis_extra: string;
    attitudes_animation: number;
    comment_guide_placeholder: string;
    obj_ext?: string;
    url_struct?: URLStruct[];
    page_info?: PageInfo;
}

export interface Weibo extends WeiboBase {
    retweeted_status?: WeiboBase;
}

export interface LongText {
    created_at: string;
    appid: number;
    annotations: Annotation[];
    mblog_vip_type: number;
    user: User;
    weibo_position: number;
    show_attitude_bar: number;
    content: string;
}

export interface AlchemyParams {
    comment_guide_type: number;
    author_is_f3: boolean;
    is_gray_user: boolean;
    author_is_f012: boolean;
    ug_red_envelope: boolean;
    black_list_author: boolean;
    author_type_enable: boolean;
}

export interface Annotation {
    shooting?: number;
    client_mblogid?: string;
    mapi_request?: boolean;
    source_text?: string;
    phone_id?: string;
}

export interface CommentManageInfo {
    comment_permission_type: number;
    approval_comment_type: number;
    comment_sort_type: number;
    ai_play_picture_type?: number;
}

export interface EditConfig {
    edited: boolean;
}

export interface HotPage {
    fid: string;
    feed_detail_type: number;
}

export interface NumberDisplayStrategy {
    apply_scenario_flag: number;
    display_text_min_number: number;
    display_text: string;
}

export interface PageInfo {
    type: string;
    page_id: string;
    object_type: string;
    object_id: string;
    content1: string;
    content2: string;
    act_status: number;
    media_info: MediaInfo;
    page_pic: string;
    page_title: string;
    page_url: string;
    pic_info: PicInfo;
    oid: string;
    type_icon: string;
    author_id: string;
    authorid: string;
    warn: string;
    actionlog: PageInfoActionlog;
    short_url: string;
}

export interface PageInfoActionlog {
    act_type: number;
    act_code: number;
    lcardid: string;
    fid: string;
    mid: string;
    oid: string;
    uuid: number;
    source: string;
    ext: string;
}

export interface MediaInfo {
    name: string;
    stream_url: string;
    stream_url_hd: string;
    format: string;
    h5_url: string;
    mp4_sd_url: string;
    mp4_hd_url: string;
    h265_mp4_hd: string;
    h265_mp4_ld: string;
    inch_4_mp4_hd: string;
    inch_5_mp4_hd: string;
    inch_5_5_mp4_hd: string;
    mp4_720p_mp4: string;
    hevc_mp4_720p: string;
    prefetch_type: number;
    prefetch_size: number;
    act_status: number;
    protocol: string;
    media_id: string;
    origin_total_bitrate: number;
    video_orientation: string;
    duration: number;
    forward_strategy: number;
    search_scheme: string;
    is_short_video: number;
    vote_is_show: number;
    belong_collection: number;
    titles_display_time: string;
    show_progress_bar: number;
    show_mute_button: boolean;
    ext_info: EXTInfo;
    next_title: string;
    kol_title: string;
    play_completion_actions: PlayCompletionAction[];
    video_publish_time: number;
    play_loop_type: number;
    author_mid: string;
    author_name: string;
    extra_info: ExtraInfo;
    video_download_strategy: VideoDownloadStrategy;
    jump_to: number;
    big_pic_info: BigPicInfo;
    online_users: string;
    online_users_number: number;
    ttl: number;
    storage_type: string;
    is_keep_current_mblog: number;
    has_recommend_video: number;
}

export interface BigPicInfo {
    pic_big: BigPicInfoPicBig;
    pic_small: BigPicInfoPicBig;
    pic_middle: BigPicInfoPicBig;
}

export interface BigPicInfoPicBig {
    height: number;
    url: string;
    width: number;
}

export interface EXTInfo {
    video_orientation: string;
}

export interface ExtraInfo {
    sceneid: string;
}

export interface PlayCompletionAction {
    type: string;
    icon: string;
    text: string;
    link: string;
    btn_code: number;
    show_position: number;
    actionlog: PlayCompletionActionActionlog;
}

export interface PlayCompletionActionActionlog {
    oid: string;
    act_code: number;
    act_type: number;
    source: string;
}

export interface VideoDownloadStrategy {
    abandon_download: number;
}

export interface PicInfo {
    pic_big: PicInfoPicBig;
    pic_small: PicInfoPicBig;
    pic_middle: PicInfoPicBig;
}

export interface PicInfoPicBig {
    height: string;
    url: string;
    width: string;
}

export interface RetweetedStatus {
    visible: Visible;
    created_at: string;
    id: number;
    idstr: string;
    mid: string;
    can_edit: boolean;
    show_additional_indication: number;
    text: string;
    textLength: number;
    source_allowclick: number;
    source_type: number;
    source: string;
    appid: number;
    favorited: boolean;
    truncated: boolean;
    in_reply_to_status_id: string;
    in_reply_to_user_id: string;
    in_reply_to_screen_name: string;
    pic_ids: string[];
    pic_types: string;
    thumbnail_pic?: string;
    bmiddle_pic?: string;
    original_pic?: string;
    geo: null;
    is_paid: boolean;
    mblog_vip_type: number;
    user: User;
    annotations: Array<any[] | AnnotationAnnotation>;
    reposts_count: number;
    comments_count: number;
    reprint_cmt_count: number;
    attitudes_count: number;
    pending_approval_count: number;
    isLongText: boolean;
    reward_exhibition_type: number;
    show_mlevel: number;
    biz_feature: number;
    hasActionTypeCard: number;
    ad_marked: boolean;
    mblogtype: number;
    item_category: string;
    rid: string;
    userType: number;
    more_info_type: number;
    number_display_strategy: NumberDisplayStrategy;
    positive_recom_flag: number;
    content_auth: number;
    gif_ids: string;
    is_show_bulletin: number;
    comment_manage_info: CommentManageInfo;
    pic_num: number;
    hot_page: HotPage;
    can_reprint: boolean;
    new_comment_style: number;
    mlevel: number;
    region_name: string;
    region_opt: number;
    hide_flag: number;
    pic_infos?: PicInfos;
    mblogid: string;
    scheme: string;
    attitudes_status: number;
    recom_state: number;
    weibo_position: number;
    show_attitude_bar: number;
    edit_config: EditConfig;
    is_fold: number;
    version?: number;
    biz_ids?: number[];
    cardid?: string;
    safe_tags?: number;
    fid?: number;
}

export interface AnnotationAnnotation {
    photo_sub_type?: string;
    source_text?: string;
    phone_id?: string;
    mapi_request?: boolean;
}

export interface PicInfos {
    [key: string]: PicInfosInner;
}

export interface PicInfosInner {
    thumbnail: Bmiddle;
    bmiddle: Bmiddle;
    large: Bmiddle;
    original: Bmiddle;
    largest: Bmiddle;
    object_id: string;
    pic_id: string;
    photo_tag: number;
    type: string;
    pic_status: number;
}

export interface Bmiddle {
    url: string;
    width: number;
    height: number;
    cut_type: number;
    type: null;
}

export interface User {
    id: number;
    idstr: string;
    class: number;
    screen_name: string;
    name: string;
    province: string;
    city: string;
    location: string;
    description: string;
    url: string;
    profile_image_url: string;
    light_ring: boolean;
    cover_image: string;
    cover_image_phone: string;
    profile_url: string;
    domain: string;
    weihao: string;
    gender: string;
    followers_count: number;
    followers_count_str: string;
    friends_count: number;
    pagefriends_count: number;
    statuses_count: number;
    video_status_count: number;
    video_play_count: number;
    super_topic_not_syn_count: number;
    favourites_count: number;
    created_at: string;
    following: boolean;
    allow_all_act_msg: boolean;
    geo_enabled: boolean;
    verified: boolean;
    verified_type: number;
    remark: string;
    insecurity: Insecurity;
    ptype: number;
    allow_all_comment: boolean;
    avatar_large: string;
    avatar_hd: string;
    verified_reason: string;
    verified_trade: string;
    verified_reason_url: string;
    verified_source: string;
    verified_source_url: string;
    verified_state: number;
    verified_level: number;
    verified_type_ext: number;
    pay_remind?: number;
    pay_date?: string;
    has_service_tel: boolean;
    verified_reason_modified: string;
    verified_contact_name: string;
    verified_contact_email: string;
    verified_contact_mobile: string;
    follow_me: boolean;
    like: boolean;
    like_me: boolean;
    online_status: number;
    bi_followers_count: number;
    lang: string;
    star: number;
    mbtype: number;
    mbrank: number;
    svip: number;
    vvip: number;
    mb_expire_time: number;
    block_word: number;
    block_app: number;
    level: number;
    type: number;
    ulevel: number;
    user_limit: number;
    badge: { [key: string]: number };
    badge_top: string;
    has_ability_tag: number;
    extend: Extend;
    chaohua_ability: number;
    brand_ability: number;
    nft_ability: number;
    vplus_ability: number;
    wenda_ability: number;
    live_ability: number;
    gongyi_ability: number;
    paycolumn_ability: number;
    newbrand_ability: number;
    ecommerce_ability: number;
    hardfan_ability: number;
    wbcolumn_ability: number;
    interaction_user: number;
    audio_ability: number;
    place_ability: number;
    credit_score: number;
    user_ability: number;
    avatargj_id?: string;
    urank: number;
    story_read_state: number;
    vclub_member: number;
    is_teenager: number;
    is_guardian: number;
    is_teenager_list: number;
    pc_new: number;
    special_follow: boolean;
    planet_video: number;
    video_mark: number;
    live_status: number;
    user_ability_extend: number;
    status_total_counter: StatusTotalCounter;
    video_total_counter: VideoTotalCounter;
    brand_account: number;
    hongbaofei: number;
    tab_manage: string;
    reward_status: number;
    green_mode: number;
    urisk: number;
    unfollowing_recom_switch: number;
    avatar_type: number;
    is_big: number;
    auth_status: number;
    auth_realname: null;
    auth_career: null;
    auth_career_name: null;
    show_auth: number;
    is_auth: number;
    is_punish: number;
    cardid?: string;
    verified_detail?: VerifiedDetail;
    story_id?: string;
    story_scheme?: string;
    mask_type?: number;
}

export interface Extend {
    privacy: Privacy;
    mbprivilege: string;
}

export interface Privacy {
    mobile: number;
}

export interface Insecurity {
    sexual_content: boolean;
}

export interface StatusTotalCounter {
    total_cnt: number;
    repost_cnt: number;
    comment_cnt: number;
    like_cnt: number;
    comment_like_cnt: number;
}

export interface VerifiedDetail {
    custom: number;
    data: Datum[];
}

export interface Datum {
    key: number;
    sub_key: number;
    weight: number;
    desc: string;
    timestamp: number;
}

export interface VideoTotalCounter {
    play_cnt: number;
}

export interface Visible {
    type: number;
    list_id: number;
}

export interface URLStruct {
    url_title: string;
    url_type_pic: string;
    ori_url: string;
    page_id: string;
    short_url: string;
    long_url: string;
    url_type: number;
    result: boolean;
    actionlog: URLStructActionlog;
    storage_type: string;
    hide: number;
    object_type: string;
    ttl: number;
    need_save_obj: number;
}

export interface URLStructActionlog {
    act_type: number;
    act_code: number;
    oid: string;
    uuid: number;
    cardid: string;
    lcardid: string;
    uicode: string;
    luicode: string;
    fid: string;
    lfid: string;
    ext: string;
}
