import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import { contactsIsEmpty } from 'redux/selectors';
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
    const contactListEmpty = useSelector(contactsIsEmpty);

    const handleInputChange = event => {
        const value = event.target.value;
        dispatch(filterContacts(value));
    };

    return (
        <Accordion
            sx={{ background: 'transparent' }}
            elevation={0}
            disabled={contactListEmpty ? true : false}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ color: 'black' }}>
                    Find contacts by name
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'center' }}>
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
