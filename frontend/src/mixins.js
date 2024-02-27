// import Vue from 'vue';
// const eventHub = new Vue();
// import axios from 'axios';
// import moment from 'moment';

export default {
    created: function() {
        this.token = localStorage.getItem('token');
    },
    data: function() {
        return {
            token: '',
            apiUrl: 'http://localhost:3000',
            // eventHub: eventHub,
            formRules: {
                amountExceeded: function(amount, principal, num_of_months) {
                    if (parseFloat(amount) <= parseFloat(principal)) {
                        if(parseFloat(amount) < parseFloat(principal) && num_of_months > 1){
                            return 'Amount must be equal to the payment amount for multiple months';
                        }
                        else{
                            return true;
                        } 
                    }
                    else {
                        return 'Amount must be less than or equal to the payment amount';
                    }
                },
                numberRequired: function(value, customMessage) {
                    if (!(value <= 0)) {
                        return true;
                    } else {
                        return (customMessage) ? customMessage : 'Should be more than zero';
                    }
                },
                dateNotEqual: function(value1, value2) {
                    if (!value1 || !value2) {
                        return true;
                    } else {
                        return value1 !== value2 || 'Dates should not be equal.';
                    }
                },
                noNegativeNumberAllowed: function(value, customMessage) {
                    if (!(value < 0) || value == null || value == "") {
                        return true;
                    } else {
                        return (customMessage) ? customMessage : 'Negative value not allowed';
                    }
                },
                numberRequiredButEmptyAllowed: function(value, customMessage) {
                    if (!(value <= 0) || value == null || value == "") {
                        return true;
                    } else {
                        return (customMessage) ? customMessage : 'Should be more than zero';
                    }
                },
                noDecimal: value => {
                    if (value === null || value == '') {
                        return true;
                    }
                    const pattern = /^[1-9]\d{0,2}(\.\d{3})*(,\d+)?$/
                    return pattern.test(value) || 'Decimal is not allowed'
                },
                required: value => !!value || 'Required',
                email: value => {
                    if (value === null || value == '') {
                        return true;
                    }
                    const pattern1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/
                    const pattern = /^[a-z0-9](?!.*?[^\na-z0-9]{2}).*?[a-z0-9]$/gmi
                    return (pattern.test(value) && pattern1.test(value)) || 'Invalid e-mail.'
                },
                emaildnsc: value => {
                    if (value === null || value == '') {
                        return true;
                    }
                    let res = '';
                    if (value.includes('@')) {
                        res = value.substring(value.indexOf("@"), value.length)
                    }
                    return res === '@dnsc.edu.ph' || 'Invalid e-mail.'
                },
                requiredArray: (arr) => {
                    return (Array.isArray(arr)) ? (arr.length > 0) ? true : 'Required' : 'Required';
                },
                zipcode: value => {
                    if (value === null || value == '') {
                        return true;
                    }
                    const pattern = /^[0-9]{5}(?:-[0-9]{4})?$/
                    return pattern.test(value) || 'Invalid zipcode';
                },
                dashAndUnderscore: value => {
                    if (value === null || value == '') {
                        return true;
                    }
                    const pattern = /^[a-zA-Z0-9-_]+$/
                    return pattern.test(value) || 'Undercore and Dash are only allowed';
                },
                alphaNumbericunderscoreDash: value => {
                    if (value === null || value == '') {
                        return true;
                    }
                    const pattern = /^[a-zA-Z0-9-_]+$/
                    return pattern.test(value) || 'Alpha,Numberic,Undercore, & Dash are only allowed';
                },
                password: value => {
                    if (value === null || value == '') {
                        return true;
                    }
                    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
                    return pattern.test(value) || 'Password should be at least 8 characters, must have 1 special character, must have 1 small letter,1 capital letter, and 1 number';
                },

                confirmPassword: function(a, b) {
                    if (a === null || a == '' || b === null || b == '') {
                        return true;
                    }
                    return (a === b) || 'The passwords are not identical. Please try again'
                },

                isRequiredIfValueNotEmpty: function(value, thisValue) {
                    if (value === null || value == '') {
                        return true;
                    } else {
                        return !!thisValue || 'Required'
                    }
                },
            },
            userData: {},
        }
    },
    methods: {
        formatPrice: function(value) {
            const val = (value / 1).toFixed(2).replace(',', '.');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        deleteToken: function() {
            localStorage.removeItem('token');
        },
        logout: function() {
            this.deleteToken();
            location.reload();
            // this.$router.replace("/login");
        },
        closeDialog: function(){
            this.eventHub.$emit('closeDialog', false);
        },
        axiosCall: function(url, method, data, setToken) {
            let options = {
                method: method,
                url: this.apiUrl + url,
                data: data,
                headers: {
                }
            };

            if (method.toLowerCase() === 'get' && data) {
                if (Object.keys(data).length > 0) {
                    options.params = data;
                }
            }

            if (setToken == undefined || setToken) {
                if (this.token) {
                    options.headers = {
                        'Authorization': `Bearer ${this.token}`
                    };
                }
            }


            return axios(options)
                .catch((error) => {
                    console.log(error.response);
                    if (error.response.status == 401) {
                        this.deleteToken();
                        this.$router.push('/');
                    } 
                    else {
                        return error.response;
                    }
                });
        },
        toTitleCase: function(str) {
            return str.replace(
                /\w\S*/g,
                function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );
        },
        toLowerCaseAndDashSpace: function(str) {
            return str.replace(/\s+/g, '-').toLowerCase();
        },
        numberWithCommas: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        numberOnly: function(str) {
            return str;
        },
        truncateText: function(text, length, clamp) {
            clamp = clamp || '...';
            var node = document.createElement('div');
            node.innerHTML = text;
            var content = node.textContent;
            return content.length > length ? content.slice(0, length) + clamp : content;
        },
        splitFirstnameLastname: function(fullname) {
            let tempString = fullname.split(' '),
                firstName = tempString[0],
                lastName = tempString[tempString.length - 1];

            return {
                firstName: firstName,
                lastName: lastName
            }
        },
        formatDate(date, format = 'MMM. DD, YYYY') {
            if (date) {
                return moment(date).format(format);
            }
        },
        formatDate3(date, format = 'YYYY-MM-DD') {
            if (date) {
                return moment(date).format(format);
            }
        },
        formatDateTime(date, format = 'MMM. DD, YYYY HH:mm') {
            if (date) {
                return moment(date).format(format);
            }
        },
        formatDate2(date, format = 'D MMM YYYY') {
            if (date) {
                return moment(date).format(format);
            }
        },
        formatDateTime2(date, format = 'D MMM YYYY HH:mm') {
            if (date) {
                return moment(date).format(format);
            }
        },
        getImageFileForPreview: function(file, callback) {
            let reader = new FileReader();

            reader.onload = function(e) {
                callback(e.target.result);
            };

            reader.readAsDataURL(file);
        },
        createObjectReplicaNonReactive: function(data) {
            return JSON.parse(JSON.stringify(data));
        },

        decodeHtml: function(html) {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        },

        generateRandomCharacters: function(num = 20) {
            let text = "",
                chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 1; i <= num; i++) {
                text += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return text;
        }
    }

};