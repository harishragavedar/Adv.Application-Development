
import { Typography, Card, CardContent } from '@mui/material';

const Testimonial = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="body1">
                        Testimonial text goes here. This could be a quote from a satisfied customer or a review.
                    </Typography>
                    <Typography variant="subtitle1">
                        - John Doe, CEO at Company XYZ
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Testimonial;
