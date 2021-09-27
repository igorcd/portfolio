export default interface IPStackDTO {
    city: string;
    continent_code: string;
    continent_name: string;
    country_code: string;
    country_name: string;
    ip: string;
    latitude: number;
    location: {
        calling_code: string;
        capital: string;
        country_flag: string;
        country_flag_emoji: string;
        country_flag_emoji_unicode: string;
        geoname_id: number
        is_eu: boolean
        languages: {code: string, name: string, native: string}[]
    }
    longitude: number;
    region_code: string;
    region_name: string;
    type: string;
    zip: string;
}