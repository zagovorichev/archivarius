import { Controller } from 'stimulus';

import 'bootstrap';
import seeker from '../components/seeker';
import createBtn from "../components/create-button";
import editRecord from '../components/edit-record';
import settings from "../components/settings";
import searchChart from "../components/search-chart";
import tagSettings from "../components/settings-tag";

export default class extends Controller {
    connect() {
        tagSettings().init();
        settings().init();
        editRecord().init();
        seeker().init();
        createBtn().init();
        searchChart().init();
    }

    disconnect() {
        tagSettings().destroy();
        settings().destroy();
        editRecord().destroy();
        seeker().destroy();
        createBtn().destroy();
        searchChart().destroy();
    }
}
