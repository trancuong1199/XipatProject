import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Card, DataTable, Pagination, Select } from '@shopify/polaris';
import React from 'react';
import Button from '~/components/Button';
import FormInfo from '~/components/FormInfo/formInfo';
import styles from '../Products/ListProducts/ListProducts.module.scss';
const cx = classNames.bind(styles);

function Setting() {
    const [currentPage, setCurrentPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [statusFilter, setStatusFilter] = useState('All');
    const [listTitle, setListTitle] = useState('');
    const [listContent, setListContent] = useState('');
    const [listId, setListId] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const rowsPerPage = 10;
    const changeToArrays = posts.map((item) => {
        const status = item.id % 3 === 0 ? 'Active' : 'No rule';
        return [
            item.id,
            item.body,
            item.title,
            status,
            <Button className={cx('btn')} onClick={() => handleButtonClick(item)} primary>
                Add Product
            </Button>,
        ];
    });

    const filteredRows =
        statusFilter === 'All' ? changeToArrays : changeToArrays.filter((row) => row[3] === statusFilter);
    const paginatedRows = filteredRows.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
    const totalOrders = filteredRows.length;
    const startPage = currentPage * rowsPerPage + 1;
    const endPage = Math.min(startPage + rowsPerPage - 1, totalOrders);

    const label = `${startPage}-${endPage} of ${totalOrders} orders`;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.log('error!!!');
            } finally {
                console.log('loading...');
            }
        };

        fetchPosts();
    }, []);

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if ((currentPage + 1) * rowsPerPage < filteredRows.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handleButtonClick = (item) => {
        if (selectedItem && selectedItem.id === item.id) {
            setSelectedItem(null);
        } else {
            setListTitle(item.title);
            setListContent(item.body);
            setListId(item.id);
            setSelectedItem(item);
        }
    };

    const handleStatusChange = (value) => {
        setStatusFilter(value);
        setCurrentPage(0);
    };

    const handleCloseForm = () => setSelectedItem(null);

    return (
        <Card>
            <Select
                label="Filter by Status"
                options={['All', 'Active', 'No rule']}
                value={statusFilter}
                onChange={handleStatusChange}
            />
            <DataTable
                columnContentTypes={['text', 'text', 'numeric', 'text', 'text']}
                headings={['Id', 'Content', 'Title', 'Status', 'Button']}
                rows={paginatedRows}
            />
            <Pagination
                hasPrevious={currentPage > 0}
                hasNext={(currentPage + 1) * rowsPerPage < filteredRows.length}
                onPrevious={handlePreviousPage}
                onNext={handleNextPage}
                label={label}
                type="table"
            />

            {selectedItem && (
                <FormInfo
                    listTitle={listTitle}
                    listId={listId}
                    listContent={listContent}
                    onClose={handleCloseForm}
                    checkForm={true}
                />
            )}
        </Card>
    );
}

export default Setting;
