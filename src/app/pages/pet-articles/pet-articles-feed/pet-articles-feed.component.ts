import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-pet-articles-feed',
  templateUrl: 'pet-articles-feed.component.html',
  styleUrls: ['pet-articles-feed.component.scss'],
})
export class PetArticlesFeedComponent implements OnInit {
	public masonryItems = [
		{ title: 'item 1' },
		{ title: 'item 2' },
		{ title: 'item 3' },
		{ title: 'item 4' },
		{ title: 'item 5' },
		{ title: 'item 6' }
	  ];

  	public masonryOptions: NgxMasonryOptions = {
		transitionDuration: '0.2s',
		gutter: 20,
		resize: true,
		initLayout: true,
		fitWidth: true
	};

	masonryImages;
	limit = 15;
	dummyPictures = [
		{	
			picture: 'https://source.unsplash.com/433x649/?Uruguay',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/530x572/?Jamaica',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/531x430/?Kuwait',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/586x1073/?Bermuda',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/500x571/?Ecuador',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/579x518/?Virgin Islands (British)',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/503x548/?Angola',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/511x630/?Mauritania',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/414x767/?Sri Lanka',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/443x704/?St. Helena',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/441x1145/?Namibia',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/491x1097/?Samoa',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/570x851/?Eritrea',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/560x1072/?Iraq',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/551x598/?Togo',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/518x813/?Romania',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/497x524/?Kenya',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/549x826/?Martinique',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/559x627/?Tokelau',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/594x513/?Belize',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/480x1181/?Virgin Islands (US)',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/526x552/?Chile',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/427x504/?Western Sahara',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/468x971/?St. Pierre and Miquelon',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/419x790/?Thailand',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/417x1125/?Myanmar',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/480x632/?Cocos (Keeling Islands)',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/416x900/?Belarus',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/408x837/?Panama',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/541x1021/?Slovak Republic',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/597x1107/?Malta',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/487x842/?Bahrain',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/403x904/?Somalia',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/544x515/?Morocco',
			id: 1
		},
		{
			picture: 'https://source.unsplash.com/577x1044/?Djibouti',
			id: 1
		},
		// {
		// 	picture: 'https://source.unsplash.com/404x437/?France, Metropolitan'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/482x1079/?Libya'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/473x887/?Bolivia'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/583x614/?Kazakhstan'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/592x838/?Guyana'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/422x731/?Switzerland'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/448x985/?Venezuela'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/494x936/?Uzbekistan'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/461x762/?Benin'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/550x676/?Palau'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/524x901/?Laos'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/594x1199/?French Southern Territories'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/557x662/?Malawi'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/428x1184/?Swaziland'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/433x631/?Lithuania'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/523x477/?Sweden'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/568x443/?Bahamas'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/434x448/?United Arab Emirates'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/566x740/?Puerto Rico'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/481x580/?Nicaragua'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/470x761/?Viet Nam'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/519x954/?Australia'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/405x1030/?Marshall Islands'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/587x1059/?Falkland Islands (Malvinas)'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/593x907/?Montserrat'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/462x729/?British Indian Ocean Territory'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/538x610/?Norway'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/506x1057/?Malaysia'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/588x756/?Anguilla'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/468x1047/?Senegal'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/574x498/?Zaire'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/594x635/?Ireland'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/448x759/?Nauru'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/540x619/?Mayotte'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/552x438/?Syria'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/563x759/?Ghana'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/569x1171/?Austria'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/581x657/?Macau'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/539x1013/?Mozambique'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/581x477/?Liechtenstein'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/495x589/?Saint Vincent and The Grenadines'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/579x680/?Brazil'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/467x642/?Turks and Caicos Islands'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/496x1186/?Italy'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/416x844/?Reunion'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/442x569/?Sierra Leone'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/517x1084/?Northern Mariana Islands'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/431x1164/?Belgium'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/541x649/?Netherlands'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/491x902/?Korea (South)'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/534x778/?Guinea'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/528x933/?Tunisia'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/441x609/?Tonga'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/469x1060/?Equatorial Guinea'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/588x794/?S. Georgia and S. Sandwich Isls.'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/536x1103/?Algeria'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/541x821/?Israel'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/414x541/?Bulgaria'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/477x879/?Turkmenistan'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/450x777/?Croatia (Hrvatska)'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/528x978/?Cook Islands'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/521x686/?Solomon Islands'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/550x432/?Bosnia and Herzegovina'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/540x631/?Tanzania'
		// },
		// {
		// 	picture: 'https://source.unsplash.com/594x443/?Chad'
		// }
	];

	constructor(private router: Router) {}

	ngOnInit() {
		console.log('in PetArticlesFeedComponent');
		this.masonryImages = this.dummyPictures.slice(0, this.limit);
	}

	showMoreImages() {
		this.limit += 15;
		this.masonryImages = this.dummyPictures.slice(0, this.limit);
	}

	goToDetails(id) {
		console.log('the id', id);
		//this.router.navigateByUrl('/pages/axa-vietii');
		this.router.navigate(["articol", id], {queryParams: id});
	}
}

