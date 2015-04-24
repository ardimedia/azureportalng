


 


declare module Amx.Amms.Domain.LgtBc.Model {
	interface BusinessCard extends Am.Practices.Amms.Domain.Model.BaseEntity {
		BusinessCardPkId: number;
		CompanyId: number;
		LocationId: number;
		LanguageId: number;
		StreetAddressId: number;
		UserId: number;
		Company: Amx.Amms.Domain.LgtBc.Model.Company;
		Location: Amx.Amms.Domain.LgtBc.Model.Location;
		Language: Amx.Amms.Domain.LgtBc.Model.Language;
		StreetAddress: Amx.Amms.Domain.LgtBc.Model.StreetAddress;
		OrderQuantity: number;
		FirstName: string;
		LastName: string;
		Title1: string;
		Title2: string;
		Title3: string;
		PhoneNumberNoAreaCode: string;
		PhoneNumberDirectNoAreaCode: string;
		FaxNumberNoAreaCode: string;
		MobileNumberWithAreaCode: string;
		EmailAddressWithoutDomain: string;
		PrivateTitle1: string;
		PrivateLine1: string;
		PrivateLine2: string;
		PrivateLine3: string;
		PrivateLine4: string;
		PrivateLine5: string;
		PrivateLine6: string;
		HasChanged: boolean;
	}
	interface Company extends Am.Practices.Amms.Domain.Model.BaseEntity {
		CompanyPkId: number;
		Name: string;
		BusinessCards: Amx.Amms.Domain.LgtBc.Model.BusinessCard[];
		Locations: Amx.Amms.Domain.LgtBc.Model.Location[];
	}
	interface Location extends Am.Practices.Amms.Domain.Model.BaseEntity {
		LocationPkId: number;
		CompanyId: number;
		Company: Amx.Amms.Domain.LgtBc.Model.Company;
		Name: string;
		PrefixFaxNo: string;
		PrefixPhoneNo: string;
		PrefixPhoneNoDirect: string;
		EmailDomain: string;
		WebSiteUrl: string;
		BusinessCards: Amx.Amms.Domain.LgtBc.Model.BusinessCard[];
		StreetAddresses: Amx.Amms.Domain.LgtBc.Model.StreetAddress[];
		UserLocations: Amx.Amms.Domain.LgtBc.Model.UserLocation[];
	}
	interface StreetAddress extends Am.Practices.Amms.Domain.Model.BaseEntity {
		StreetAddressPkId: number;
		LanguageId: number;
		LocationId: number;
		Language: Amx.Amms.Domain.LgtBc.Model.Language;
		Location: Amx.Amms.Domain.LgtBc.Model.Location;
		AddressNameLine1: string;
		AddressNameLine2: string;
		AddressNameLine3: string;
		AddressStreetLine1: string;
		AddressStreetLine2: string;
		BusinessCards: Amx.Amms.Domain.LgtBc.Model.BusinessCard[];
	}
	interface Language extends Am.Practices.Amms.Domain.Model.BaseEntity {
		LanguagePkId: number;
		ExportPkId: string;
		Name: string;
		StreetAddresses: Amx.Amms.Domain.LgtBc.Model.StreetAddress[];
		BusinessCards: Amx.Amms.Domain.LgtBc.Model.BusinessCard[];
	}
	interface UserLocation extends Am.Practices.Amms.Domain.Model.BaseEntity {
		UserLocationPkId: number;
		LocationId: number;
		UserId: number;
		Location: Amx.Amms.Domain.LgtBc.Model.Location;
	}
}
declare module Am.Practices.Amms.Domain.Model {
	interface BaseEntity extends Amx.Base.Practices.Helper.ObservableBase {
		RecordModifiedBy: string;
		RecordModifiedAt: Date;
		RecordTimestamp: number[];
	}
}
declare module Amx.Base.Practices.Helper {
	interface ObservableBase {
	}
}


