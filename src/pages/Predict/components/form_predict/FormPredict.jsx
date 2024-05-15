import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import styles from './FormPredict.module.scss';
const cx = classNames.bind(styles);

const FormPredict = () => {
    const [inputData, setInputData] = useState({
        age: '',
        category: '',
        itemPurchased: '',
        color: '',
        season: '',
        previousPurchases: '',
        preferredPaymentMethod: '',
        shippingType: '',
        reviewRating: '',
        paymentMethod: '',
        location: '',
        gender: '',
        size: '',
        subscriptionStatus: '',
    });
    const [predictionResult, setPredictionResult] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Convert age to the mapped value before sending the form
        const formData = new FormData(event.target);
        const ageValue = mapAgeToValue(parseInt(formData.get('age')));
        formData.set('age', ageValue);
        const previousPurchasesValue = mapPreviousPurchasesToValue(parseInt(formData.get('previousPurchases')));
        formData.set('previousPurchases', previousPurchasesValue);
        const reviewRatingValue = mapReviewRatingToValue(parseFloat(formData.get('reviewRating')));
        formData.set('reviewRating', reviewRatingValue);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        axios
            .post('http://localhost:5000/predict', formData)
            .then((response) => {
                console.log(response.data);
                setPredictionResult(response.data.prediction);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAgeChange = (event) => {
        const { value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            age: value,
        }));
    };

    const handlePreviousPurchasesChange = (event) => {
        const { value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            previousPurchases: value,
        }));
    };

    const handleReviewRatingChange = (event) => {
        const { value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            reviewRating: value,
        }));
    };

    const mapAgeToValue = (age) => {
        if (age >= 18 && age <= 30) {
            return '1';
        } else if (age >= 31 && age <= 45) {
            return '2';
        } else if (age >= 46 && age <= 60) {
            return '3';
        } else if (age >= 61 && age <= 70) {
            return '4';
        } else {
            return ''; // Return empty string for other cases
        }
    };

    const mapPreviousPurchasesToValue = (previousPurchases) => {
        if (previousPurchases >= 1 && previousPurchases <= 10) {
            return '1';
        } else if (previousPurchases >= 11 && previousPurchases <= 40) {
            return '2';
        } else if (previousPurchases > 40) {
            return '3';
        } else {
            return ''; // Return empty string for other cases
        }
    };

    const mapReviewRatingToValue = (rating) => {
        if (rating >= 0 && rating <= 1.9) {
            return '1';
        } else if (rating >= 2 && rating <= 2.9) {
            return '2';
        } else if (rating >= 3 && rating <= 3.9) {
            return '3';
        } else if (rating >= 4 && rating <= 4.9) {
            return '4';
        } else {
            return '5';
        }
    };

    const getItemPurchasedOptions = () => {
        const category = inputData.category;
        switch (category) {
            case '1': // Clothing
                return (
                    <>
                        <option value="">Select Item</option>
                        <option value="1">Blouse</option>
                        <option value="25">Jeans</option>
                        <option value="3">Pants</option>
                        <option value="4">Shirt</option>
                        <option value="5">Dress</option>
                        <option value="6">Sweater</option>
                        <option value="18">Hoodie</option>
                        <option value="20">T-shirt</option>
                        <option value="12">Socks</option>
                        <option value="13">Skirt</option>
                        <option value="14">Shorts</option>
                    </>
                );
            case '2': // Accessories
                return (
                    <>
                        <option value="">Select Item</option>
                        <option value="2">Jewelry</option>
                        <option value="8">Belt</option>
                        <option value="9">Sunglasses</option>
                        <option value="15">Scarf</option>
                        <option value="16">Hat</option>
                        <option value="17">Handbag</option>
                        <option value="23">Backpack</option>
                        <option value="24">Gloves</option>
                    </>
                );
            case '3': // Footwear
                return (
                    <>
                        <option value="">Select Item</option>
                        <option value="11">Sandals</option>
                        <option value="19">Shoes</option>
                        <option value="21">Sneakers</option>
                        <option value="22">Boots</option>
                    </>
                );
            case '4': // Outerwear
                return (
                    <>
                        <option value="">Select Item</option>
                        <option value="10">Coat</option>
                        <option value="7">Jacket</option>
                    </>
                );
            default:
                return <option value="">Select Item</option>;
        }
    };

    return (
        <div className={cx('wrapper', 'grid')}>
            <form onSubmit={handleSubmit} className={cx('row g-3')}>
                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Age</label>
                    <input
                        className={cx('form-control')}
                        type="text"
                        name="age"
                        placeholder="age: 18 -> 70"
                        value={inputData.age}
                        onChange={handleAgeChange}
                    />
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Category</label>
                    <select
                        className={cx('form-control')}
                        name="category"
                        value={inputData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        <option value="1">Clothing</option>
                        <option value="2">Accessories</option>
                        <option value="3">Footwear</option>
                        <option value="4">Outerwear</option>
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Item Purchased</label>
                    <select
                        className={cx('form-control')}
                        name="itemPurchased"
                        value={inputData.itemPurchased}
                        onChange={handleChange}
                    >
                        {getItemPurchasedOptions()}
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Color</label>
                    <select className={cx('form-control')} name="color" value={inputData.color} onChange={handleChange}>
                        <option value="">Select Color</option>
                        <option value="1">Olive</option>
                        <option value="2">Yellow</option>
                        <option value="3">Silver</option>
                        <option value="4">Teal</option>
                        <option value="5">Green</option>
                        <option value="6">Black</option>
                        <option value="7">Cyan</option>
                        <option value="8">Violet</option>
                        <option value="9">Gray</option>
                        <option value="10">Maroon</option>
                        <option value="11">Orange</option>
                        <option value="12">Charcoal</option>
                        <option value="13">Pink</option>
                        <option value="14">Magenta</option>
                        <option value="15">Blue</option>
                        <option value="16">Purple</option>
                        <option value="17">Peach</option>
                        <option value="18">Red</option>
                        <option value="19">Beige</option>
                        <option value="20">Indigo</option>
                        <option value="21">Lavender</option>
                        <option value="22">Turquoise</option>
                        <option value="23">White</option>
                        <option value="24">Brown</option>
                        <option value="25">Gold</option>
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Season</label>
                    <select
                        className={cx('form-control')}
                        name="season"
                        value={inputData.season}
                        onChange={handleChange}
                    >
                        <option value="">Select Season</option>
                        <option value="1">Spring</option>
                        <option value="2">Fall</option>
                        <option value="3">Winter</option>
                        <option value="4">Summer</option>
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Previous Purchases</label>
                    <input
                        className={cx('form-control')}
                        type="text"
                        name="previous_purchases"
                        placeholder="1 -> 100"
                        value={inputData.previousPurchases}
                        onChange={handlePreviousPurchasesChange}
                    />
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Preferred Payment Method</label>
                    <select
                        className={cx('form-control')}
                        name="preferredPaymentMethod"
                        value={inputData.preferredPaymentMethod}
                        onChange={handleChange}
                    >
                        <option value="">Select Preferred Payment Method</option>
                        <option value="1">PayPal</option>
                        <option value="2">Credit Card</option>
                        <option value="3">Cash</option>
                        <option value="4">Debit Card</option>
                        <option value="5">Venmo</option>
                        <option value="6">Bank Transfer</option>
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Shipping Type</label>
                    <select
                        className={cx('form-control')}
                        name="shippingType"
                        value={inputData.shippingType}
                        onChange={handleChange}
                    >
                        <option value="">Select Shipping Type</option>
                        <option value="1">Free Shipping</option>
                        <option value="2">Standard</option>
                        <option value="3">Store Pickup</option>
                        <option value="4">Next Day Air</option>
                        <option value="5">Express</option>
                        <option value="6">2-Day Shipping</option>
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <label className={cx('form-label')}>Review Rating</label>
                    <input
                        className={cx('form-control')}
                        type="text"
                        name="reviewRating"
                        placeholder="0 -> 5"
                        value={inputData.reviewRating}
                        onChange={handleReviewRatingChange}
                    />
                </div>

                <div className={cx('form-group', 'col-md-6')}>
                    <label className={cx('form-label')}>Payment Method</label>
                    <select
                        className={cx('form-control')}
                        name="paymentMethod"
                        value={inputData.preferredPaymentMethod}
                        onChange={handleChange}
                    >
                        <option value="">Select Payment Method</option>
                        <option value="1">PayPal</option>
                        <option value="2">Credit Card</option>
                        <option value="3">Cash</option>
                        <option value="4">Debit Card</option>
                        <option value="5">Venmo</option>
                        <option value="6">Bank Transfer</option>
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-6')}>
                    <label className={cx('form-label')}>Location</label>
                    <select
                        className={cx('form-control')}
                        name="location"
                        value={inputData.location}
                        onChange={handleChange}
                    >
                        <option value="">Select Location</option>
                        <option value="1">Montana</option>
                        <option value="2">California</option>
                        <option value="3">Idaho</option>
                        <option value="4">Illinois</option>
                        <option value="5">Alabama</option>
                        <option value="6">Minnesota</option>
                        <option value="7">Nebraska</option>
                        <option value="8">New York</option>
                        <option value="9">Nevada</option>
                        <option value="10">Maryland</option>
                        <option value="11">Delaware</option>
                        <option value="12">Vermont</option>
                        <option value="13">Louisiana</option>
                        <option value="14">North Dakota</option>
                        <option value="15">Missouri</option>
                        <option value="16">West Virginia</option>
                        <option value="17">New Mexico</option>
                        <option value="18">Mississippi</option>
                        <option value="19">Indiana</option>
                        <option value="20">Georgia</option>
                        <option value="21">Kentucky</option>
                        <option value="22">Arkansas</option>
                        <option value="23">North Carolina</option>
                        <option value="24">Connecticut</option>
                        <option value="25">Virginia</option>

                        <option value="26">Ohio</option>
                        <option value="27">Tennessee</option>
                        <option value="28">Texas</option>
                        <option value="29">Maine</option>
                        <option value="30">Colorado</option>
                        <option value="31">Minnesota</option>
                        <option value="32">Oklahoma</option>
                        <option value="33">Wisconsin</option>
                        <option value="34">Oregon</option>
                        <option value="35">Pennsylvania</option>
                        <option value="36">Washington</option>
                        <option value="37">Michigan</option>
                        <option value="38">Alaska</option>
                        <option value="39">Massachusetts</option>
                        <option value="40">Wyoming</option>
                        <option value="41">Utah</option>
                        <option value="42">New Hampshire</option>
                        <option value="43">South Dakota</option>
                        <option value="44">Iowa</option>
                        <option value="45">Florida</option>
                        <option value="46">New Jersey</option>
                        <option value="47">Hawaii</option>
                        <option value="48">Arizona</option>
                        <option value="49">Kansas</option>
                        <option value="50">Rhode Island</option>
                    </select>
                </div>

                <div className={cx('form-group', 'col-md-4')}>
                    <div className={cx('title-input')}>
                        <span className={cx('title-span')}>Gender:</span>
                        <div className={cx('wrapper-input-radio')}>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input type="radio" name="gender" value="1" onChange={handleChange} /> Male
                            </label>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input type="radio" name="gender" value="2" onChange={handleChange} /> Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className={cx('form-group', 'col-md-4')}>
                    <div className={cx('title-input')}>
                        <span className={cx('title-span')}>Size:</span>
                        <div className={cx('wrapper-input-radio')}>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input type="radio" name="size" value="1" onChange={handleChange} /> S
                            </label>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input type="radio" name="size" value="2" onChange={handleChange} /> M
                            </label>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input type="radio" name="size" value="3" onChange={handleChange} /> L
                            </label>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input type="radio" name="size" value="4" onChange={handleChange} /> XL
                            </label>
                        </div>
                    </div>
                </div>
                <div className={cx('form-group', 'col-md-4')}>
                    <div className={cx('title-input')}>
                        <span className={cx('title-span')}>Subscription Status:</span>
                        <div className={cx('wrapper-input-radio')}>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input
                                    className={cx('input-radio')}
                                    type="radio"
                                    name="subscriptionStatus"
                                    value="2"
                                    onChange={handleChange}
                                />
                                Yes
                            </label>
                            <label className={cx('form-label-radio', 'radio')}>
                                <input
                                    className={cx('input-radio')}
                                    type="radio"
                                    name="subscriptionStatus"
                                    value="1"
                                    onChange={handleChange}
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper-button')}>
                    <button className={cx('form-submit')} type="submit">
                        Dự đoán
                    </button>
                </div>
            </form>

            <div className={cx('result')}>Kết quả dự đoán: {predictionResult}</div>
        </div>
    );
};

export default FormPredict;
