import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import { getFilterValue } from 'redux/selectors';
import styles from './styles.module.scss';

const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(getFilterValue);

    const handleInputChange = event => {
        const value = event.target.value;
        dispatch(filterContacts(value));
    };

    return (
        <div className={styles.wrapper}>
            <label>
                Find contacts by name
                <input
                    onChange={handleInputChange}
                    value={filterValue}
                    type="text"
                    className={styles.input}
                />
            </label>
        </div>
    );
};

export default Filter;
