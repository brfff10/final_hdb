from django.contrib.auth.models import User, Group
from webapp.models import Patient, Record, Country, City, Job, Data, Diagnosis, Treatment
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    #snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Patient.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'csrfmiddlewaretoken')

class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = ('city_id', 'city')


class JobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Job
        fields = ('job_id', 'job_title')


class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields = ('patient_id', 'first_name', 'last_name', 'gender', 'age', 'nationality', 'contact_info', 'phone_number', 'applicant_unit')


class RecordSerializer(serializers.HyperlinkedModelSerializer):
    
    patient = PatientSerializer(read_only=True)
    birth_place = CitySerializer(read_only=True)
    job = JobSerializer(read_only=True)
    class Meta:
        model = Record
        fields = ('record_id', 'patient', 'entry_date', 'update_date', 'birth_date', 'blood_type', 'diabetes', 'sample_type', 'deceased', 'subtype', 'resistance',
                   'children', 'english', 'sexual_preference', 'immigration_hist', 'insurance', 'drug_use', 'shared_needles', 'criminal_record', 'birth_place', 'job')

class DataSerializer(serializers.HyperlinkedModelSerializer):
    
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = Data
        fields = ('dataset_id', 'patient', 'cv_value', 'cd4_value', 'entry_date')

class DiagnosisSerializer(serializers.HyperlinkedModelSerializer):
    
    record = RecordSerializer(read_only=True)
    class Meta:
        model = Diagnosis
        fields = ('diagnosis_id', 'record', 'diagnosis_date', 'amplification', 'hiv', 'tuberculosis')


class TreatmentSerializer(serializers.HyperlinkedModelSerializer):
    
    diagnosis = DiagnosisSerializer(read_only=True)
    class Meta:
        model = Treatment
        fields = ('treatment_id', 'diagnosis', 'start_date', 'duration', 'dose', 'mediaction')