export class Constants {
  public static readonly dataIds = {
    ENTER_DATA_PARK: 'enterDataPark',
    ENTER_DATA_SUB_AREA: 'enterDataSubArea',
    ACCORDION_FRONTCOUNTRY_CAMPING: 'accordion-Frontcountry Camping',
    ACCORDION_FRONTCOUNTRY_CABINS: 'accordion-Frontcountry Cabins',
    ACCORDION_DAY_USE: 'accordion-Day Use',
    ACCORDION_GROUP_CAMPING: 'accordion-Group Camping',
    ACCORDION_BOATING: 'accordion-Boating',
    ACCORDION_BACKCOUNTRY_CAMPING: 'accordion-Backcountry Camping',
    ACCORDION_BACKCOUNTRY_CABINS: 'accordion-Backcountry Cabins',
    ENTER_DATA_URL_PARAMS: 'enter-data-url-params',
    EXPORT_ALL_POLLING_DATA: 'export-all-polling-data',
    LOCK_RECORDS_FISCAL_YEARS_DATA: 'lock-records-fiscal-years-data',
  };

  public static readonly ApplicationRoles: any = {
    ADMIN: 'sysadmin',
  };

  // March
  public static readonly FiscalYearFinalMonth: number = 3;

  public static readonly iconUrls = {
    frontcountryCamping: '../../assets/images/walk-in-camping.svg',
    frontcountryCabins: '../../assets/images/shelter.svg',
    groupCamping: '../../assets/images/group-camping.svg',
    backcountryCamping: '../../assets/images/walk-in-camping.svg',
    backcountryCabins: '../../assets/images/shelter.svg',
    boating: '../../assets/images/sailing.svg',
    dayUse: '../../assets/images/hiking.svg',
  };

  public static readonly ToastTypes: any = {
    SUCCESS: 0,
    WARNING: 1,
    INFO: 2,
    ERROR: 3,
  };
}
