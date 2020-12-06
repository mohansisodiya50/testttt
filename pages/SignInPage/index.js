import React from 'react';
import {
    Divider,
    Paper,
    Typography,
    Box,
    Container,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    SvgIcon,
    FormControl
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from 'assets/login_bg.jpg';
import cardTitleBg from 'assets/card_title_bg.png';
import abbottLogo from 'assets/abbott-logo.png';
import { Formik, Field, Form } from 'formik';
import clsx from 'clsx';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Mixpanel } from 'Mixpanel.js';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    logo: {
        width: "200px",
        marginLeft: "50px",
        marginTop: "25px",
        marginBottom: "25px"
    },
    card: {
        borderRadius: "0"
    },
    cardHeader: {
        backgroundImage: `url(${cardTitleBg})`,
        backgroundSize: "cover",
        height: "16px"
    },
    cardContent: {
        backgroundColor: "#184485",
        padding: "20px 80px"
    },
    paperContainer: {
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        width: "100%",
        background: "transparent",
        boxShadow: "none"
    },
    textField: {
        backgroundColor: "#ffffff",
        marginBottom: "12px"
    },
    input: {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#00438a',
            opacity: 1
        },
        color: '#00438a',
        marginLeft: '10px',
        fontWeight: "bold",

    },
    checkbox: {
        color: "white",
        checkedColor: 'white'

    },
    infoText: {
        margin: ".2rem 0 .4rem 0"
    },
    divider: {
        background: "#369dde"
    },
    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto #369dde',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
    button: {
        borderRadius: "25px 25px 25px 25px",
        padding: "5px 35px 5px 35px",
        backgroundColor: "white",
        border: "2px solid #449BD8",
        color: "#449BD8",
        fontWeight: "bold"
    }

});

const institutionTypes = [
    {
        id: 'institutionTypes',
        name: 'Institution Types'
    },
    {
        id: 'type1',
        name: 'type1'
    },
    {
        id: 'type2',
        name: 'type2'
    },

];

const countrys = [
    {
        id: 'country',
        name: 'Country'
    },
    {
        id: 'us',
        name: 'United State'
    },
    {
        id: 'outus',
        name: 'Outside US'
    }
];

const states = [
    {
        id: 'state',
        name: 'State'
    },
    {
        id: 'a',
        name: 'a'
    },
    {
        id: 'b',
        name: 'b'
    }
];

function DropdownIcon(props) {
    return (
        <PlayArrowIcon style={{ transform: "rotate(90deg)", color: "#369dde", marginRight: "4px" }} />
    );
}

function SignInPage() {
    const classes = useStyles();


    Mixpanel.track('Signin Page Viewed');

    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh";


    return (
        <Paper className={classes.paperContainer}>
            <Container maxWidth="lg" >
                <Box>
                    <img src={abbottLogo} alt="logo" className={classes.logo} />
                </Box>
            </Container>

            <Container maxWidth="md" >

                <Box>
                    <Card className={classes.card}>
                        <CardHeader className={classes.cardHeader} />
                        <CardContent className={classes.cardContent}>

                            <Formik
                                initialValues={{
                                    name: '',
                                    institutionName: '',
                                    institutionType: '',
                                    title: '',
                                    country: '',
                                    state: '',
                                    email: '',
                                    interests: [],
                                    receiveEmail: false
                                }}
                                onSubmit={(values, actions) => {
                                    Mixpanel.identify(values.email);
                                    Mixpanel.people.set({
                                        $name: values.name,
                                        $institutionName: values.institutionName,
                                        $institutionType: values.institutionType,
                                        $title: values.title,
                                        $country: values.country,
                                        $state: values.state,
                                        $email: values.email,
                                        $interests: values.interests,
                                    });
                                    Mixpanel.track('Signed in');
                                    localStorage.setItem('userEmail', values.email);
                                    localStorage.setItem('userLocation', values.country);
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        actions.setSubmitting(false);
                                        window.location.href = "/mainlobby";
                                    }, 1000);
                                }}
                            >
                                {props => (
                                    <form onSubmit={props.handleSubmit}>
                                        <Grid
                                            container
                                            spacing={0}
                                        >
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <TextField
                                                    required
                                                    className={classes.textField}
                                                    fullWidth
                                                    placeholder="Name"
                                                    type="text"
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    value={props.values.name}
                                                    name="name"
                                                    InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <TextField
                                                    className={classes.textField}
                                                    fullWidth
                                                    required
                                                    placeholder="Institution Name"
                                                    type="text"
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    value={props.values.institutionName}
                                                    name="institutionName"
                                                    InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    className={classes.textField}
                                                    name="institutionType"
                                                    onBlur={props.handleBlur}
                                                    onChange={props.handleChange}
                                                    select
                                                    SelectProps={{ native: true, IconComponent: DropdownIcon }}
                                                    value={props.values.institutionType}
                                                    InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
                                                // variant="outlined"
                                                >
                                                    {institutionTypes.map((institutionType) => (
                                                        <option
                                                            key={institutionType.id}
                                                            value={institutionType.id}
                                                        >
                                                            {institutionType.name}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <TextField
                                                    className={classes.textField}
                                                    fullWidth
                                                    placeholder="Title"
                                                    type="text"
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    value={props.values.title}
                                                    name="title"
                                                    InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    className={classes.textField}
                                                    name="country"
                                                    required
                                                    onBlur={props.handleBlur}
                                                    onChange={props.handleChange}
                                                    select
                                                    SelectProps={{ native: true, IconComponent: DropdownIcon }}
                                                    value={props.values.country}
                                                    InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
                                                // variant="outlined"
                                                >
                                                    <option value="">Country</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AX">Åland Islands</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia, Plurinational State of</option>
                                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BV">Bouvet Island</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="BN">Brunei Darussalam</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CG">Congo</option>
                                                    <option value="CD">Congo, the Democratic Republic of the</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="CI">Côte d'Ivoire</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CU">Cuba</option>
                                                    <option value="CW">Curaçao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czech Republic</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="FR">France</option>
                                                    <option value="GF">French Guiana</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="TF">French Southern Territories</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HM">Heard Island and McDonald Islands</option>
                                                    <option value="VA">Holy See (Vatican City State)</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran, Islamic Republic of</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IE">Ireland</option>
                                                    <option value="IM">Isle of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                                    <option value="KR">Korea, Republic of</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Lao People's Democratic Republic</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao</option>
                                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MH">Marshall Islands</option>
                                                    <option value="MQ">Martinique</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="FM">Micronesia, Federated States of</option>
                                                    <option value="MD">Moldova, Republic of</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="NF">Norfolk Island</option>
                                                    <option value="MP">Northern Mariana Islands</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PW">Palau</option>
                                                    <option value="PS">Palestinian Territory, Occupied</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="RE">Réunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RU">Russian Federation</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="BL">Saint Barthélemy</option>
                                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="MF">Saint Martin (French part)</option>
                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                                    <option value="WS">Samoa</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="ST">Sao Tome and Principe</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                    <option value="SS">South Sudan</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                    <option value="SZ">Swaziland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="SY">Syrian Arab Republic</option>
                                                    <option value="TW">Taiwan, Province of China</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania, United Republic of</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TL">Timor-Leste</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad and Tobago</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks and Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="GB">United Kingdom</option>
                                                    <option value="US">United States</option>
                                                    <option value="UM">United States Minor Outlying Islands</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                    <option value="VN">Viet Nam</option>
                                                    <option value="VG">Virgin Islands, British</option>
                                                    <option value="VI">Virgin Islands, U.S.</option>
                                                    <option value="WF">Wallis and Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </TextField>
                                            </Grid>
                                            {props.values.country === "US" && <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <TextField
                                                    fullWidth
                                                    className={classes.textField}
                                                    name="state"
                                                    onBlur={props.handleBlur}
                                                    onChange={props.handleChange}
                                                    select
                                                    SelectProps={{ native: true, IconComponent: DropdownIcon }}
                                                    value={props.values.state}
                                                    InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
                                                >
                                                    <option value="">State</option>
                                                    <option value="AL">Alabama</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="DC">District Of Columbia</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WY">Wyoming</option>

                                                </TextField>
                                            </Grid>}

                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <TextField
                                                    className={classes.textField}
                                                    fullWidth
                                                    required
                                                    placeholder="Email Address"
                                                    type="text"
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    value={props.values.email}
                                                    name="email"
                                                    InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
                                                />
                                            </Grid>
                                            <Grid
                                                container
                                                spacing={0}
                                                wrap="wrap"
                                            >
                                                <Grid
                                                    item
                                                    md={12}
                                                    xs={12}
                                                >
                                                    <Typography
                                                        gutterBotto
                                                        variant="h6"
                                                        color="primary"
                                                        className={classes.infoText}
                                                    >
                                                        Interests - Please check all that apply.
                                                </Typography>
                                                    <Divider className={classes.divider} />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={4}
                                                    xs={12}
                                                    className={classes.checkbox}
                                                >
                                                    <div>

                                                        <FormControlLabel
                                                            style={{ display: 'table' }}
                                                            className={classes.formControlLabel}
                                                            control={
                                                                <div style={{ display: 'table-cell' }}><Checkbox onChange={props.handleChange}
                                                                    name="interests" value="AlinlQ Informatics and Professional Service" icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} /></div>
                                                            }

                                                            label="AlinlQ Informatics and Professional Service"

                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Alinity Systems"
                                                            value="Alinity Systems"
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Automation"
                                                            value="Automation"
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Clinical Chemisty"
                                                            value="Clinical Chemisty"
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Connectivity Solutions"
                                                            value="Connectivity Solutions"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid
                                                    item
                                                    md={4}
                                                    xs={12}
                                                    className={classes.checkbox}
                                                >
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Diabetes Care"
                                                            value="Diabetes Care"
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Hematology"
                                                            value="Hematology"
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Immunoassays"
                                                            value="Immunoassays"
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Molecular"
                                                            value="Molecular"
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={(
                                                                <Checkbox icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />
                                                            )}
                                                            onChange={props.handleChange}
                                                            name="interests"
                                                            label="Point of Care Diagnostics"
                                                            value="Point of Care Diagnostics"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid
                                                    item
                                                    md={4}
                                                    xs={12}
                                                    className={classes.checkbox}
                                                    justify="center"
                                                >
                                                    <div>

                                                        <FormControlLabel
                                                            style={{ display: 'table' }}
                                                            control={(
                                                                <div style={{ display: 'table-cell' }}><Checkbox onChange={props.handleChange}
                                                                    name="receiveEmail" value="true" icon={<span className={classes.icon} />} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} /></div>
                                                            )}

                                                            label="“I would like to receive occasional email updates from Abbott on new products and educational content.” "

                                                        />


                                                    </div>
                                                    <Box m={2} sm={{flexDirection: "row"}} display="flex" flexDirection="row-reverse">
                                                    <button type="submit" className={classes.button}>ENTER</button>

                                                    </Box>



                                                </Grid>

                                            </Grid>

                                        </Grid>


                                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}

                                    </form>
                                )}
                            </Formik>
                        </CardContent>


                    </Card>
                </Box>
            </Container>
        </Paper>
    )
}

export default SignInPage;