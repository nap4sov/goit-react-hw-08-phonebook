import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Grid } from '@mui/material';

const PhonebookView = () => {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={5} md={4}>
                <ContactForm />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
                <Filter />
            </Grid>
            <Grid item xs={12} sm={10} md={8}>
                <ContactList />
            </Grid>
        </Grid>
    );
};

export default PhonebookView;
