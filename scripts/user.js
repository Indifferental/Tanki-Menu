// ==UserScript==
// @name         Tanki Menu
// @namespace    http://tampermonkey.net/
// @version      none
// @description  none
// @author       Indifferental
// @match        https://*.tankionline.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOklEQVR4nO2ZS0hUYRTHBTNtTKikCAtDos9X6ngdR3uYEiVWWIkiCGbZQnyV+dy0bWWbCDRatSnEQBfaLoMeBi2quyqHZhYVlhAVGFT20BPfjMrMNHe81xnvN3Pv/w9nM9+d1/93znfO/W5MDARBEARBEARBEARBEAQpSHY4a2WHc0Z2uAjh8vLAOfNy6k3NmicOzHcFSTznRx0AIPPlIB4AgMNkAF5MOWlk4gkNDo/T4PAYjU5Mul9Tuy4bLHQHwA29dnvUJ/hratdlg4XuAHhm+xs8MDyuel02WAgAMPafwTfujqtelw0WugMItMWMPJhUvS4bLHQHwBsqN5lnulITDrYuGyx0B4BwAYAcQYmACnAAgPAslM1UAUwqNnXIAFAMAKKzkKECxBvBsAWJN4MJCPQACQCEZyFDBYg3gmELEm8GExDoARIACM9ChgoQbwTDFiTOhPzTVuqj2OVoe5eIHqAngGP9aT4AqodSAEBPAOeebvEBcLA9EwD0Mj9zn526fsYtm989F0dZ++0AoBeAkguZPtl/dnKLrtVn+vuAmqEUHwAV/WkAEEpG2etzqfHZZtXXt75P9AEgnbIGvI5/pq02DxWgZKRUZaX6+1upb8FjZLjHT77e+3cd1Y5sp5wjBdiClozJrZDcpnBzvM0M9/jpfV3nt3g6cX0XZRTbzdsDsstsVHVrp3tq8TZHCwAt42eg7+DbV1kfMxcAPiLy7OucjQ9oiloAWsfPYN91/vkmstflGhtAemERlV/ZTRc/bQhqRrMrkQ51ZIR9/DzQkkXNzo2K39s7H0t197ZRbnmBMQG0vvWdVvyj/YOFDl/eQ+m2tRs/0+1F7uuCVV/X9/VUOZBqPABKf7hz1tMQMzU2RLXjZ7D+0/Pbt/Fr7UFRD6D6zg7KLrVpMp4HN9u/mWr9DB4F1Xnurcu0ANqmLar2+7U6/eT3Hg2Pk80BoH3aoljuZx4lU35lvurP8s9a3pC1GM+3IN5Dev+YaAviY+PJm6nU8yvw3N89F+deX6kXhHL6uTSJdXxNUDSe301rqcqoAeB9fMDPZRQNmLZQ6aWMsJ9+8jG0xaU8hnb/8CSA1rvjqAOwFPwOtOOLciaG+/RTcQRe8Mz/OUdXdz4UtQCW9uJqvhfPqwew2vEzkPlNr5OouHFvSP8hqgEwryPopldJKwII5eG79/s6Pie4e4Hamz7DA2CLDbLiapr7TlQJQCjjJ7+eTz38PVklhWH73YYBwBbDejyfGh4mh3385O/lc3+4f6/hALAIffhuegAlgh++mx5AjeCH76YH0BrC6ScARIBRDBUg3iyGLUi8YQw9wFghm+U+gEVoAIAEAMKzkKECxBvBsAWJN4MJCPQACQCEZyFDBYg3gmELEm8GExDoAZLJASBcACBHUCKgAhwAIDwLZSNXAARBEARBEARBEARBEBQTrfoHWeO6V1/zs7UAAAAASUVORK5CYII=
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/Indifferental/Tanki-Menu/refs/heads/main/scripts/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
