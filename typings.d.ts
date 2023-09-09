declare module 'react-native-ico-material-design' {
    import { ReactNode } from 'react';

    type iconNames = 'add-alarm-button' |
      'add-button-inside-black-circle' |
      'add-comment-button' |
      'add-label-button' |
      'add-plus-button' |
      'add-to-queue-button' |
      'add-user-button' |
      'adjust-button-with-plus-and-minus' |
      'airplane-mode-on-symbol' |
      'android-logo-1' |
      'android-logo' |
      'apple-accessibility' |
      'attachment-clip' |
      'auto-white-balance' |
      'automatic-brightness' |
      'automatic-flash-symbol' |
      'back-arrow' |
      'backspace-arrow' |
      'bed-quilt' |
      'been-here-marker' |
      'birthday-cake' |
      'black-bubble-speech' |
      'black-check-box-with-white-check' |
      'black-check-box' |
      'black-envelope-email-symbol' |
      'black-keyboard-with-white-keys' |
      'black-plane' |
      'blank-check-box' |
      'blank-frame' |
      'blank-square' |
      'blogger-logo' |
      'blueetooth-logo' |
      'bluetooth-connected' |
      'bluetooth-disabled-button' |
      'bluetooth-searching-signal-indicator' |
      'bluetooth-settings' |
      'bluetooth-signal-indicator' |
      'bookmark-button-1' |
      'bookmark-button' |
      'bookmark-outline' |
      'bookmark-ribbon' |
      'briefcase-download-button-with-downwards-arrow' |
      'briefcase-with-tick-inside' |
      'brightness-control' |
      'brochure-with-three-sections' |
      'bubble-speech-with-three-lines' |
      'bug-report-button' |
      'burn-button' |
      'button-on' |
      'call-forwarding' |
      'call-made-right-arrow' |
      'call-received-arrow' |
      'camera-diaphragm' |
      'camera' |
      'cancel-button' |
      'caps-lock-button-1' |
      'caps-lock-button' |
      'car-changing-lanes' |
      'car-directions' |
      'car-front' |
      'cell-phone-high-signal-indicator' |
      'cell-phone-vibration' |
      'cell-phone-with-blank-screen' |
      'change-power-options' |
      'chat-bubble' |
      'chat-bubbles' |
      'check-box' |
      'check-symbol' |
      'chemistry-polymer' |
      'circle-outline' |
      'circle-with-check-symbol' |
      'circles-extend-button' |
      'circumference' |
      'city-buildings-silhouette' |
      'clapperboard-1' |
      'clapperboard' |
      'clear-button' |
      'clipboard-paste-button' |
      'clock-with-white-face' |
      'close-button' |
      'closed-caption-logo' |
      'cloud-backup-up-arrow' |
      'cloud-done-symbol' |
      'cloud-download' |
      'cloud-off' |
      'cloud-outline' |
      'cloud-symbol-inside-a-circle' |
      'compass-with-white-needles' |
      'connection-indicator' |
      'copy-content' |
      'create-group-button' |
      'create-new-pencil-button' |
      'credit-card' |
      'crop-button' |
      'crop-tool-button' |
      'cut-content-button' |
      'dark-cloud' |
      'developer-mode-for-smartphones-and-tablets' |
      'device-connected-1' |
      'device-connected' |
      'disc-is-full' |
      'do-not-disturb-rounded-sign' |
      'double-tick-indicator' |
      'download-button-1' |
      'download-button' |
      'download-to-smartphone' |
      'downwards-arrow-key' |
      'drafts-evelope-button' |
      'drop-down-arrow' |
      'drop-down-round-button' |
      'drop-up-arrow' |
      'earth-grid-select-language-button' |
      'ellipsis' |
      'email-inbox' |
      'emoticon-with-happy-face' |
      'end-call-button' |
      'enter-arrow' |
      'exit-to-app-button' |
      'expand-arrow' |
      'expand-button' |
      'facebook-logo' |
      'failed-sms' |
      'fast-forward-button' |
      'favorite-heart-button' |
      'favorite-heart-outline-button' |
      'filled-circle' |
      'filled-cloud' |
      'filled-speaker-with-white-details' |
      'film-roll' |
      'filter-results-button' |
      'flash-off' |
      'flash-on-indicator' |
      'folder-symbol' |
      'forward-arrow' |
      'forward-right-arrow-button' |
      'framed-portrait' |
      'front-bus' |
      'front-car' |
      'front-store' |
      'full-screen-exit' |
      'gamepad-1' |
      'gamepad' |
      'get-directions-button' |
      'gmail-logo' |
      'go-back-left-arrow' |
      'good-mood-emoticon' |
      'good-wifi-signal-with-three-bars' |
      'google-apps-script-logo' |
      'google-cast-logo' |
      'google-chrome-logo-filled-with-white-colour' |
      'google-drive-document' |
      'google-drive-file' |
      'google-drive-folder-symbol' |
      'google-drive-fusion-tables-logo' |
      'google-drive-image' |
      'google-drive-logo' |
      'google-drive-pdf-file' |
      'google-drive-presentation' |
      'google-drive-spreadsheet' |
      'google-glass-logo' |
      'google-hangouts-logo' |
      'google-hangouts-turn-video-off' |
      'google-plus-logo-on-black-background' |
      'google-plus-logo' |
      'google-plus-party-mode' |
      'google-symbol' |
      'gps-fixed-indicator' |
      'gps-location-disabled' |
      'gps-location-symbol' |
      'gps-off' |
      'graduate-cap' |
      'half-filled-rating-star' |
      'hangouts-videocall-button' |
      'headset-with-microphone' |
      'headset' |
      'help-button-speech-bubble-with-question-mark' |
      'help-round-button' |
      'hide-keyboard-button' |
      'high-quality-button' |
      'high-signal-indicator' |
      'high-wifi-signal-indicator' |
      'history-clock-button' |
      'home-button' |
      'horizontal-line-remove-button' |
      'hotel-with-three-floors' |
      'https-symbol' |
      'import-export-arrows' |
      'insert-picture-button' |
      'instagram-logo' |
      'invert-colors-button' |
      'keyboard-left-arrow-button' |
      'keyboard-right-arrow-button-1' |
      'keyboard-right-arrow-button' |
      'label-right-arrow-outline' |
      'landscape-with-mountains' |
      'laptop-outline' |
      'left-arrow-key-1' |
      'left-arrow-key' |
      'left-arrow-missed-call' |
      'light-bulb-on' |
      'link-button' |
      'linkedin-logo' |
      'list-button-with-3-elements' |
      'list-of-three-elements-on-black-background' |
      'location-arrow' |
      'locked-padlock-outline' |
      'locked-padlock' |
      'low-signal-indicator' |
      'magic-wand-auto-fix-button' |
      'man-cycling' |
      'man-walking-directions-button' |
      'map-placeholder' |
      'map-symbol' |
      'mark-as-favorite-star' |
      'mark-as-unread-envelope-button' |
      'medium-brightness-cogwheel' |
      'medium-signal' |
      'medium-wifi-signal-with-two-bars' |
      'memory-chip' |
      'menu-button' |
      'merge-calls-arrow' |
      'microphone-of-voice' |
      'microphone-voice-button' |
      'microsoft-excel-logo' |
      'microsoft-word-logo' |
      'missed-call-phone-receiver-with-left-arrow' |
      'mountain-range-on-black-background' |
      'mountain-range' |
      'mountains-inside-a-circle' |
      'mouse-filled-tool' |
      'move-window' |
      'new-tab-button' |
      'new-tab' |
      'nfc-near-field-communication' |
      'notifications-bell-button' |
      'notifications-button' |
      'notifications-silenced' |
      'pages-of-google-plus' |
      'painter-palette' |
      'panoramic-mountain-photography' |
      'parking-sign' |
      'pause-button' |
      'phone-call-button' |
      'phone-locked' |
      'phone-paused-indicator' |
      'phone-receiver-with-bluetooth-sign' |
      'phone-settings' |
      'phone-working-indicator' |
      'photo-album' |
      'photo-frame' |
      'photo-library' |
      'photographic-film-roll' |
      'pinterest-logo' |
      'planet-earth' |
      'play-arrow' |
      'play-button-inside-a-circle' |
      'play-next-button' |
      'play-rounded-button' |
      'play-slideshow-button' |
      'plus-one' |
      'poll-symbol-on-black-square-with-rounded-corners' |
      'power-connection-indicator' |
      'previous-track' |
      'printer-printing-document' |
      'problems-with-synchronization' |
      'progress-indicator' |
      'public-transport-subway' |
      'public-transport-train-directions' |
      'puzzle-piece-plugin' |
      'radio-on-button' |
      'random-line' |
      'rate-star-button' |
      'read-more-left-arrow-button' |
      'receipt' |
      'record-voice-microphone-button' |
      'refresh-button-1' |
      'refresh-button' |
      'reminder-bow' |
      'replay-arrow' |
      'reply-all-button' |
      'report-symbol' |
      'rewind-button' |
      'right-arrow-forward' |
      'ring-volume-control-button' |
      'rotate-to-left-button' |
      'rotate-to-right-button' |
      'round-account-button-with-user-inside' |
      'round-add-button' |
      'round-data-usage-symbol' |
      'round-delete-button' |
      'round-error-symbol' |
      'round-info-button' |
      'round-pause-button' |
      'round-remove-button' |
      'round-rgb-button' |
      'rounded-add-button-1' |
      'rounded-add-button' |
      'rounded-adjust-button-with-plus-and-minus' |
      'rounded-block-sign' |
      'rounded-info-button' |
      'rounded-pause-button' |
      'rounded-remove-button' |
      'rubbish-bin-delete-button' |
      'save-button' |
      'schedule-button' |
      'screen-locked-1' |
      'screen-locked' |
      'screen-rotation-button' |
      'screen-rotation-lock-button' |
      'screen-with-news-sections' |
      'screen-with-rounded-corners' |
      'sd-card-1' |
      'sd-card' |
      'searching-location-gps-indicator' |
      'searching-magnifying-glass' |
      'select-all' |
      'select-brightness-button' |
      'send-button' |
      'send-to-back-button' |
      'send-to-front-button' |
      'server-rack-with-three-levels' |
      'set-alarm' |
      'set-timer-button' |
      'settings-cogwheel-button' |
      'settings-cogwheel-inside-black-square' |
      'share-button' |
      'shared-folder' |
      'shining-rectangular-object' |
      'shining-sun' |
      'shopping-basket-button' |
      'shopping-cart' |
      'show-apps-button' |
      'show-less-fold-button' |
      'show-menu-button' |
      'show-more-button-with-three-dots' |
      'show-more-button' |
      'shuffle-mode-arrows' |
      'sim-card-problem' |
      'smartphone-dock' |
      'smartphone-with-three-buttons' |
      'sms-bubble-speech' |
      'sms-speech-bubble' |
      'snake-game' |
      'sort-button-with-three-lines' |
      'speech-bubble-with-mountains-inside' |
      'split-call-arrows' |
      'square-add-button' |
      'stop-button' |
      'swap-horizontal-orientation-arrows' |
      'swap-vertical-orientation-arrows' |
      'switch-camera-button' |
      'switch-to-full-screen-button' |
      'switch-vertical-orientation-arrows' |
      'switch-video-on' |
      'synchronization-arrows' |
      'synchronization-button-with-two-arrows' |
      'synchronization-problem' |
      'tab-symbol' |
      'tablet-with-blank-screen' |
      'tack-save-button' |
      'tag-button-with-happy-face' |
      'telephone-keypad-with-ten-keys' |
      'thermostat-temperature-wheel' |
      'three-columns-layout' |
      'three-dots-more-indicator' |
      'thumb-down-button' |
      'thumb-up-button' |
      'tick-inside-circle' |
      'time-lapse' |
      'traffic-light' |
      'train-public-transport' |
      'tumblr-logo' |
      'turn-airplane-mode-off' |
      'turn-microphone-off-button' |
      'turn-notifications-off-button' |
      'turn-notifications-on-button' |
      'turn-synchronization-off' |
      'turn-video-off-button' |
      'turn-visibility-off-button' |
      'twitter-logo-on-black-background' |
      'two-circles-one-inside-the-other' |
      'two-men' |
      'two-rows-and-three-columns-layout' |
      'underline-button' |
      'underline-text-button' |
      'undo-button' |
      'unlocked-padlock' |
      'up-arrow-key' |
      'upload-button' |
      'upload-to-cloud-button' |
      'usb-symbol' |
      'user-account-box-1' |
      'user-account-box' |
      'user-inside-bubble-speech' |
      'user-outline' |
      'user-shape' |
      'users-social-symbol' |
      'verification-mark' |
      'videocall-button' |
      'videocam-filled-tool' |
      'view-list-button' |
      'virtual-private-network-vpn-symbol' |
      'visibility-button' |
      'voice-message-microphone-button' |
      'voicemail' |
      'volume-down-indicator' |
      'volume-muted' |
      'volume-off-indicator' |
      'volume-up-indicator' |
      'warning-sign' |
      'watch-with-blank-face' |
      'waving-flag' |
      'web-server' |
      'website-with-different-sections' |
      'wifi-high-signal' |
      'wifi-low-signal-with-one-bar' |
      'wifi-signal-waves' |
      'window-with-different-sections' |
      'work-briefcase' |
      'workspace-with-two-horizontal-windows' |
      'world-shape-public-symbol' |
      'write-email-envelope-button' |
      'youtube-logo';

    type backgroundType = 'circle' | 'rect' | 'button';

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
