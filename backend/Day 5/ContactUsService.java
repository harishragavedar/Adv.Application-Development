package com.admission.demo.Service;

import com.admission.demo.Model.ContactUs;
import com.admission.demo.Dto.ContactUsDto;
import com.admission.demo.Repository.ContactUsRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ContactUsService {

    private final ContactUsRepository contactUsRepository;

    @Autowired
    public ContactUsService(ContactUsRepository contactUsRepository) {
        this.contactUsRepository = contactUsRepository;
    }

    public List<ContactUs> getAllContactUs() {
        return contactUsRepository.findAll();
    }

    public Optional<ContactUs> getContactUsById(Long cid) {
        return contactUsRepository.findById(cid);
    }

    public ContactUs saveContactUs(ContactUs course) {
        return contactUsRepository.save(course);
    }

    public ContactUs updateContactUs(Long cid, ContactUs updatedContactUs) {
        Optional<ContactUs> contactUsOptional = contactUsRepository.findById(cid);
        if (contactUsOptional.isPresent()) {
            updatedContactUs.setId(cid);
            return contactUsRepository.save(updatedContactUs);
        } else {
            throw new RuntimeException("Course not found with ID: " + cid);
        }
    }

    public void deleteCourse(Long cid) {
        contactUsRepository.deleteById(cid);
    }
}
