import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import izitoast from 'izitoast';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
    }

    onHandleClickInfo() {
        izitoast.info({
            title: 'Hello',
            position: 'bottomLeft',
            transitionIn: 'bounceInRight',
            onOpening: function(instance, toast){
                console.info('Opening');
            },
            onOpened: function(instance, toast){
                console.info('Opened');
            },
            onClosing: function(instance, toast, closedBy){
                console.info('Closing | closedBy: ' + closedBy);
            },
            onClosed: function(instance, toast, closedBy){
                console.info('Closed | closedBy: ' + closedBy);
            }
        });
    }

    onHandleClickSucess() {
        izitoast.success({
            title: 'OK',
            message: 'Successfully inserted record!',
            position: 'bottomRight',
            transitionIn: 'bounceInLeft',
            onOpen: function(instance, toast){

            },
            onClose: function(instance, toast, closedBy){
                console.info('closedBy: ' + closedBy);
            }
        });
    }

    onHandleClickWarning() {
        izitoast.warning({
            title: 'Caution',
            message: 'You forgot important data',
            position: 'topLeft',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    }

    onHandleClickError() {
        izitoast.error({
            title: 'Error',
            message: 'Illegal operation',
            position: 'topRight',
            transitionIn: 'fadeInDown'
        });
    }

    onHandleClickCustom1() {
        izitoast.show({
            title: 'Hey',
            icon: 'fa fa-envelope-open',
            class: 'custom1',
            message: 'What would you like to add?',
            position: 'bottomCenter',
            image: 'http://endlesstheme.com/Endless1.5.1/img/user2.jpg',
            balloon: true,
            buttons: [
                ['<button>Photo</button>', function (instance, toast) {

                    izitoast.show({
                        theme: 'dark',
                        icon: 'icon-photo',
                        title: 'OK',
                        message: 'Callback Photo!',
                        position: 'bottomCenter',
                    });

                }],
                ['<button>Video</button>', function (instance, toast) {

                    izitoast.show({
                        theme: 'dark',
                        icon: 'icon-ondemand_video',
                        title: 'OK',
                        message: 'Callback Vídeo!',
                        position: 'bottomCenter',
                    });

                }],
                ['<button>Text</button>', function (instance, toast) {

                    izitoast.show({
                        theme: 'dark',
                        icon: 'icon-event_note',
                        title: 'OK',
                        message: 'Callback Text!',
                        position: 'bottomCenter',
                    });

                }],
            ]
        });
    }

    onHandleClickCustom2() {
        izitoast.show({
            id: 'haduken',
            theme: 'dark',
            icon: 'fa fa-address-card',
            title: 'Hello!',
            message: 'Do you like it?',
            position: 'topCenter',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            progressBarColor: 'rgb(0, 255, 184)',
            image: 'http://endlesstheme.com/Endless1.5.1/img/user2.jpg',
            imageWidth: 70,
            layout:2,
            onClose: function(){
            },
            iconColor: 'rgb(0, 255, 184)'
        });
    }

}
