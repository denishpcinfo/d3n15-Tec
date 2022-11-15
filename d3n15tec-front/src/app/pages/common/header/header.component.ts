import { Component, OnInit } from '@angular/core';

declare var jQuery: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public images : any[] | undefined;

  constructor() { }

  ngOnInit(): void {

    jQuery('.mega-menu-primary-modal').hide();

    jQuery('#mega-menu-item-205').on('mouseover', function() {
      jQuery('.mega-menu-primary-modal').show();
      jQuery('.mega-sub-menuSessaoModal').hide();
    });

    jQuery('.mega-menu-primary-modal').on('mouseover', function() {
      jQuery('.mega-menu-primary-modal').show();
    });
    
    jQuery('.mega-menu-primary-modal').on('mouseout', function() {
      jQuery('.mega-menu-primary-modal').hide();
      jQuery('.mega-sub-menuSessaoModal').hide();
    });

    
    
    jQuery('.mega-sub-menuSessaoModal').hide();

    jQuery('#mega-menu-item-204').on('mouseover', function() {
      jQuery('.mega-sub-menuSessaoModal').show();
      jQuery('.mega-menu-primary-modal').hide();
    });

    jQuery('.mega-sub-menuSessaoModal').on('mouseover', function() {
      jQuery('.mega-sub-menuSessaoModal').show();
    });

    jQuery('.mega-sub-menuSessaoModal').on('mouseout', function() {
      jQuery('.mega-sub-menuSessaoModal').hide();
      jQuery('.mega-menu-primary-modal').hide();
    })


    jQuery('#mega-menu-item-187').on('mouseover', function() {
      jQuery('.mega-sub-menuSessaoModal').hide();
      jQuery('.mega-menu-primary-modal').hide();
    });

    jQuery('#mega-menu-item-187').on('mouseout', function() {
      jQuery('.mega-sub-menuSessaoModal').hide();
      jQuery('.mega-menu-primary-modal').hide();
    });
    

    jQuery('.sub-menu').hide();
    jQuery('.menu-item-48').on('mouseover', function() {
      jQuery("#leftMenuCer").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").addClass("fonteMenuLeft");
      jQuery('.SubMenu1').show();
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
    });

    jQuery('.SubMenu1').on('mouseout', function() {
      jQuery("#leftMenuCer").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").removeClass("fonteMenuLeft");
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
      jQuery('.SubMenu1').hide();
    })


    jQuery('.menu-item-49').on('mouseover', function() {
      jQuery("#leftMenuCer1").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").addClass("fonteMenuLeft");
      jQuery('.SubMenu2').show();
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu1').hide();
    });

    jQuery('.SubMenu2').on('mouseout', function() {
      jQuery("#leftMenuCer1").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").removeClass("fonteMenuLeft");
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
      jQuery('.SubMenu1').hide();
    })


    jQuery('.menu-item-50').on('mouseover', function() {
      jQuery("#leftMenuCer2").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").addClass("fonteMenuLeft");
      jQuery('.SubMenu3').show();
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu1').hide();
      jQuery('.SubMenu2').hide();
    });

    jQuery('.SubMenu3').on('mouseout', function() {
      jQuery("#leftMenuCer2").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").removeClass("fonteMenuLeft");
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
      jQuery('.SubMenu1').hide();
    })


    jQuery('.menu-item-53').on('mouseover', function() {
      jQuery("#leftMenuCer3").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").addClass("fonteMenuLeft");
      jQuery('.SubMenu4').show();
      jQuery('.SubMenu1').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
    });

    jQuery('.SubMenu4').on('mouseout', function() {
      jQuery("#leftMenuCer3").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").removeClass("fonteMenuLeft");
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
      jQuery('.SubMenu1').hide();
    })

    jQuery('.menu-item-414').on('mouseover', function() {
      jQuery("#leftMenuCerOfer").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").addClass("fonteMenuLeft");
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu1').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
    });

    jQuery('.menu-item-414').on('mouseout', function() {
      jQuery("#leftMenuCerOfer").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").removeClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").removeClass("fonteMenuLeft");
      jQuery('.SubMenu4').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu2').hide();
      jQuery('.SubMenu1').hide();
    })

    jQuery('.site-header').on('mouseout', function() {
      jQuery('.SubMenu1').hide();
      jQuery('.SubMenu2').hide();
      jQuery('.SubMenu3').hide();
      jQuery('.SubMenu4').hide();
      jQuery("#leftMenuCer").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer1").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer2").addClass("fonteMenuLeft");
      jQuery("#leftMenuCer3").addClass("fonteMenuLeft");
      jQuery("#leftMenuCerOfer").addClass("fonteMenuLeft");

    });

    jQuery('#site-branding').on('mouseover', function() {
      jQuery('.mega-sub-menuSessaoModal').hide();
      jQuery('.mega-menu-primary-modal').hide();
    });



    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }


}
