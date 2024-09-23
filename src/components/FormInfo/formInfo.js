import { FormLayout, TextField, DropZone, Bleed, Thumbnail } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import { BsCalendar } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './FormInfo.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function FormInfo({ listId, listTitle, listContent, onClose, checkForm }) {
    const [campaignTitle, setCampaignTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [buyFrom, setBuyFrom] = useState('');
    const [buyTo, setBuyTo] = useState('');
    const [discountPerItem, setDiscountPerItem] = useState('');

    const [files, setFiles] = useState([]);
    const [dropZoneActive, setDropZoneActive] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [errors, setErrors] = useState({});

    const status = listId % 3 === 0 ? 'Active' : 'No rule';

    const validate = () => {
        const newErrors = {};

        if (!campaignTitle.trim()) newErrors.campaignTitle = 'Campaign title is required';
        if (!price || isNaN(price)) newErrors.price = 'Price must be a valid number';
        if (!description.trim()) newErrors.description = 'Description is required';
        if (!buyFrom.trim()) newErrors.buyFrom = 'Buy from date is required';
        if (!buyTo.trim()) newErrors.buyTo = 'Buy to date is required';
        if (!discountPerItem || isNaN(discountPerItem)) {
            newErrors.discountPerItem = 'Discount must be a valid percentage';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleDropZoneDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFiles(acceptedFiles);
        }
        setDropZoneActive(false);
    }, []);

    const handleDropZoneClick = useCallback(() => {
        setDropZoneActive(true);
    }, []);

    const uploadedFiles = files.map((file, index) => (
        <Bleed key={index} alignment="center">
            <Thumbnail size="small" alt={file.name} source={window.URL.createObjectURL(file)} />
            <div>{file.name}</div>
        </Bleed>
    ));

    const handleOverlayClick = (e) => {
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleButtonClick = () => {
        if (validate()) {
            console.log('campaignTitle ==> ', campaignTitle);
            console.log('price ==> ', price);
            console.log('description ==> ', description);
            console.log('buyFrom ==> ', buyFrom);
            console.log('buyTo ==> ', buyTo);
            console.log('discountPerItem ==> ', discountPerItem);
            console.log('files ==> ', files);
            toast.success('Add product successfully', {
                position: 'top-center',
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            setCampaignTitle('');
            setPrice('');
            setDescription('');
            setBuyFrom('');
            setBuyTo('');
            setDiscountPerItem('');
            setFiles([]);
        }
    };

    return (
        <div className={cx('overlay')} onClick={handleOverlayClick}>
            <div className={cx('modal')} onClick={handleModalClick}>
                <div className={cx('closeIcon')} onClick={onClose}>
                    <TfiClose />
                </div>
                <div className={cx('scrollableForm')}>
                    <FormLayout>
                        {!checkForm ? (
                            <>
                                <TextField label="Id" value={listId.toString()} autoComplete="off" readOnly multiline />
                                <div className={cx('inputHeight')}>
                                    <TextField label="Content" value={listContent} readOnly multiline />
                                </div>
                                <TextField label="Title" value={listTitle} autoComplete="off" readOnly multiline />
                                <TextField label="Status" value={status} autoComplete="off" readOnly multiline />
                            </>
                        ) : (
                            <>
                                <TextField
                                    label="Title campaign"
                                    value={campaignTitle}
                                    autoComplete="off"
                                    multiline
                                    error={errors.campaignTitle}
                                    onChange={(value) => setCampaignTitle(value)}
                                />
                                <TextField
                                    label="Price"
                                    value={price}
                                    autoComplete="off"
                                    multiline
                                    error={errors.price}
                                    onChange={(value) => setPrice(value)}
                                />
                                <DropZone
                                    onDrop={handleDropZoneDrop}
                                    onClick={handleDropZoneClick}
                                    active={dropZoneActive}
                                    accept="image/*"
                                >
                                    {files.length === 0 ? (
                                        <DropZone.FileUpload />
                                    ) : (
                                        <Bleed vertical>{uploadedFiles}</Bleed>
                                    )}
                                </DropZone>
                                <TextField
                                    label="Description"
                                    value={description}
                                    autoComplete="off"
                                    multiline
                                    error={errors.description}
                                    onChange={(value) => setDescription(value)}
                                />
                                <div className={cx('react-datepicker-wrapper')}>
                                    <div className={cx('calander')}>
                                        <h4>Start date</h4>
                                        <BsCalendar className={cx('icon-calander')} />
                                    </div>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>

                                <div className={cx('react-datepicker-wrapper')}>
                                    <div className={cx('calander')}>
                                        <h4>End date</h4>
                                        <BsCalendar className={cx('icon-calander')} />
                                    </div>
                                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                                </div>
                                <TextField
                                    label="Buy from"
                                    value={buyFrom}
                                    autoComplete="off"
                                    multiline
                                    error={errors.buyFrom}
                                    onChange={(value) => setBuyFrom(value)}
                                />
                                <TextField
                                    label="Buy to"
                                    value={buyTo}
                                    autoComplete="off"
                                    multiline
                                    error={errors.buyTo}
                                    onChange={(value) => setBuyTo(value)}
                                />
                                <TextField
                                    label="Discount per item (%)"
                                    value={discountPerItem}
                                    autoComplete="off"
                                    multiline
                                    error={errors.discountPerItem}
                                    onChange={(value) => setDiscountPerItem(value)}
                                />

                                <Button className={cx('btn')} onClick={handleButtonClick} primary>
                                    Add Product
                                </Button>
                                <ToastContainer />
                            </>
                        )}
                    </FormLayout>
                </div>
            </div>
        </div>
    );
}

export default FormInfo;
