/*
 *
 * see : http://lab.ejci.net/favico.js/
 */

var favicon;
var badge = 0;
var isWindowActive = true;

const notification = {
    init: function() {
        console.log(badge);
        favicon = new Favico({
            animation : 'popFade'
        });

        window.onfocus = function() {
            favicon.reset();
            //document.title = "Chat | juffalow.com";
            isWindowActive = true;
            badge = 0;
            console.log("Notification budge reset!");
        };

        window.onblur = function() {
            isWindowActive = false;
        };
        favicon.badge(badge);
    },

    newMessage: function() {
        console.log("notification.newMessage()");
        if( !isWindowActive ) {
            badge++;
            favicon.badge(badge);
            //document.title = "(" + badge + ") Chat | juffalow.com";
        }
    },

    clear: function() {
        favicon.reset();
        //document.title = "Chat | juffalow.com";
        badge = 0;
    }
};

export default notification;
