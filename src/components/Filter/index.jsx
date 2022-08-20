import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import { getContactsIsEmpty } from 'redux/selectors';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filter = () => {
    const dispatch = useDispatch();
    const contactsIsEmpty = useSelector(getContactsIsEmpty);

    const handleInputChange = event => {
        const value = event.target.value;
        dispatch(filterContacts(value));
    };

    return (
        <Accordion elevation={0} disabled={contactsIsEmpty ? true : false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Find contacts by name</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <TextField
                    onChange={handleInputChange}
                    variant="standard"
                    label="Start entering name"
                    fullWidth
                />
            </AccordionDetails>
        </Accordion>
    );
};

export default Filter;
