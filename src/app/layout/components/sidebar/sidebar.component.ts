import { SubMenu } from '../../../models/submenu';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../shared/services/user.service';
import { ComponentList } from '../../../models/component-list';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { NavItem } from '../../../models/NavItem';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    menus: any;
    newMenu: any;
    submenus: any;

    navItems: NavItem[]


    constructor(private translate: TranslateService, public router: Router, private userService: UserService,
        private http: Http) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        this.userService.getMenu()
            .subscribe((data) => {
                this.navItems = data;
                //console.log(data);
            }, error => {
                //console.log("errorrr");
            });

        // this.submenus = this.userService.getSubMenus();
        // this.submenus.subscribe(b => b.forEach(c => {
        //     let component = new ComponentList;
        //     component.url = c.url;
        //     component.componentName = c.componentName;
        //     component.icon = c.icon;
        //     console.log('UserLevel 20: ' + c.icon);
        //     this.navGroupDetailList.push(component);
        // }));
}

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
        this.newMenu = element;
        console.log('element ' + this.showMenu);
        console.log('element ' + this.newMenu);
        //this.getNavDetails(element);
    }

    getNavDetails(element: any) {
        this.menus = this.userService.getMenu();
        this.menus.data.forEach(element => {
            let product = {
                name: element.name,
                sku: element.sku,
                description: element.description,
                price: element.price[0].amount
            }
            console.log(product);

        });

        // this.submenus = this.userService.getSubMenus();
        // this.submenus.subscribe(a => a.forEach((submenus) => {
        //     console.log(submenus.name);
        //     // submenus.subscribe(b => b.forEach((item: any) => { 
        //     //    console.log(item.name);
        //     // }));
        //  }));
    }



    // getNavDetails(element) {
    //     this.navGroupDetailList = [];
    //     this.navDetailList = this.userService.getSubMenus();

    //     this.navDetailList.subscribe(a => a.forEach(h => {
    //             this.componentGroup.subscribe(b => b.forEach(c => {
    //                 let component = new ComponentList;
    //                 component.pageURL = c.url;
    //                 component.componentName = c.componentName;
    //                 //component.icon = c.icon;
    //                 this.navGroupDetailList.push(component);
    //                 console.log(this.navDetailList)
    //                 console.log(this.componentGroup)
    //                 console.log(this.navGroupDetailList)
    //                 console.log(component)
    //             }));
    //     }));
    //     return this.navGroupDetailList;
    // }


    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
